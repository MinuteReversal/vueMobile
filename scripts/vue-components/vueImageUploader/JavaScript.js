/**
 * author : zhy
 *   date : 20170615
 */

/**
*  @class vueImageUploaderItem
*/
var vueImageUploaderItem = {
    template: '<li class="weui_uploader_file" :class="{weui_uploader_status:status === enumStatus.process ||  status === enumStatus.error}" :style="{backgroundImage:\'url(\'+ url +\')\'}" @click="onClick">' +
    '<div v-if="status === enumStatus.process ||  status === enumStatus.error" class="weui_uploader_status_content">' +
    '<i v-if="status === enumStatus.error" class="weui_icon_warn"></i>' +
    '<template if="status === enumStatus.process">{{process}}%</template>' +
    '</div>' +
    '</li>',
    data: function () {
        var enumStatus = { "default": "default", "preview": "preview", "process": "process", "error": "error", "complete": "complete" };
        return {
            process: 0,
            enumStatus: enumStatus,
            status: enumStatus.default,
            file: null,        //File https://developer.mozilla.org/en-US/docs/Web/API/File
            fileWrapper: null,//{ "blob": blob, "name": "hello world", "type": "image/png" }
            uploadUrl: "",
            prefixUrl: "",
            url: "",
            uid: "",
            xhr: new XMLHttpRequest(),
            fr: new FileReader()
        };
    },
    props: {
        "model": {
            type: Object,
            default: null
        }
    },
    methods: {
        upload: function () {
            var me = this;
            var xhr = me.xhr;

            xhr.addEventListener("load", function (loadEvent) {
                me.status = me.enumStatus.complete;
                me.$parent.$emit("upload", JSON.parse(loadEvent.target.responseText));
            });

            xhr.addEventListener("progress", function (progressEvent) {
                me.status = me.enumStatus.process;
                me.process = parseFloat(progressEvent.loaded / progressEvent.total).toFixed(2)
            });

            xhr.addEventListener("error", function (errorEvent) {
                me.status = enumStatus.error;
            });

            var fd = new FormData();

            if (me.file) fd.append("xFile", me.file, me.file.name);
            if (me.fileWrapper) fd.append("xFile", me.fileWrapper.blob, me.fileWrapper.name);

            xhr.open("POST", me.uploadUrl);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send(fd);
        },
        retry: function () {
            this.upload();
        },
        preview: function () {
            var me = this;
            if (me.file) {
                me.fr.addEventListener("load", function (loadEvent) {
                    me.url = loadEvent.target.result;
                    me.upload();
                });
                me.fr.readAsDataURL(me.file);
            }
            else if (me.fileWrapper) {
                me.fr.addEventListener("load", function (loadEvent) {
                    me.url = loadEvent.target.result;
                    me.upload();
                });
                me.fr.readAsDataURL(me.fileWrapper.blob);
            }
            else if (me.uid !== "") {
                me.url = me.prefixUrl + me.uid;
            }
        },
        assign: function () {
            var me = this;
            var model = me.model;
            if (typeof model === "object" && model !== null) {
                for (var propertyName in model) {
                    if (model.hasOwnProperty(propertyName)) {
                        me[propertyName] = model[propertyName];
                    }
                }
            }
        },
        onClick: function () {
            this.$emit("click", this);
        }
    },
    mounted: function () {
        var me = this;
        this.assign();
        this.preview();
    },
    watch: {
        model: function (val, oldVal) {
            this.assign();
        }
    }
};

/**
 * @class vueImageUploader
 */
var vueImageUploader = {
    components: {
        "image-item": vueImageUploaderItem
    },
    template: '<div class="weui_cell">' +
    '<div class="weui_cell_bd weui_cell_primary">' +
    '<div class="weui_uploader">' +
    '<div class="weui_uploader_hd weui_cell">' +
    '<div class="weui_cell_bd weui_cell_primary">{{title}}</div>' +
    '<div class="weui_cell_ft">{{images.length}}/{{max}}</div>' +
    '</div>' +
    '<div class="weui_uploader_bd">' +
    '<ul class="weui_uploader_files">' +
    '<image-item v-for="(item,index) in images" :key="item" :model="item" :handle-upload="handleUpload" @click="onClickItem(item,index)"></image-item>' +
    '</ul>' +
    '<div v-show="images.length<max" class="weui_uploader_input_wrp">' +
    '<input class="weui_uploader_input" type="file" accept="image/jpg,image/jpeg,image/png,image/gif" @change="onAdd"/>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
    data: function () {
        return {
            images: []
        };
    },
    props: {
        "value": {
            type: Array,
            default: []
        },
        "max": {
            type: Number,
            default: 5
        },
        "downloadUrl": {
            type: String,
            default: "http://pub.yibalian.cn/Image/"
        },
        "uploadUrl": {
            type: String,
            default: "http://pub.yibalian.cn/21D64038F994400F9248AAA2B39EFDB7/image/upload"
        },
        "title": {
            type: String,
            default: "图片上传"
        },
        "handleFile": {
            type: Function,
            default: function (file, fnCallBack) {
                fnCallBack(file);
            }
        },
        "handleUpload": {
            type: Function,
            default: function (responseData, fnCallBack) {
                fnCallBack(responseData.Data.ImageUid);
            }
        },
        "handleClickItem": {
            type: Function,
            default: function (imageUploader, imageModel, index) {
                if (confirm("确定删除？")) {
                    imageUploader.delete(index);
                }
            }
        }
    },
    methods: {
        onAdd: function (e) {
            var fb = e.target;
            var me = this;
            var file = fb.files[0];
            me.handleFile(file, me.add);
            //fb.value = "";
        },
        onComplete: function (responseData) {
            var me = this;
            me.handleUpload(responseData, me.addValue)
        },
        delete: function (index) {
            this.value.splice(index, 1);
            this.images.splice(index, 1);
        },
        onClickItem: function (imageModel, index) {
            this.handleClickItem(this, imageModel, index);
        },
        add: function (file) {
            var me = this;
            if (file instanceof File) {
                me.images.push({
                    file: file,
                    uploadUrl: me.uploadUrl,
                });
            } else {
                me.images.push({
                    fileWrapper: file,
                    uploadUrl: me.uploadUrl,
                });
            }
        },
        addValue: function (model) {
            this.value.push(model);
        },
        bindEvent: function () {
            var me = this;
            me.$on("upload", me.onComplete);
            me.$on("delete", me.onDelete);
        },
        loadImage: function () {
            var me = this;
            this.images = [];
            for (var i = 0, uid; uid = me.value[i]; i++) {
                this.images.push({
                    uid: uid,
                    prefixUrl: me.downloadUrl,
                });
            }
        }
    },
    watch: {
        value: {
            handler: function (val, oldVal) {
                if(this.value.length!==this.images.length)this.loadImage();
            }
        }
    },
    mounted: function () {
        this.loadImage();
        this.bindEvent();
    }
};
