/*
* author : zhy
*   mail : mailzy@vip.qq.com
*   date : 20161117
* plugin : cropper
* github : https://github.com/fengyuanchen/cropperjs
* example: this.$cropper.open({ src: evt.target.files[0], onYes: function (blob) { alert("点击了确定"); } });
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.VueResource = factory());
}(this, (function () {
    'use strict';

    var cropperPlugin = {
        install: function (vue) {
            if (this.installed) return;
            this.installed = true;

            vue.prototype.$cropper = new Vue({
                created: function () {
                    var me = this;
                    window.addEventListener("load", function () {
                        document.body.appendChild(me.$mount().$el);
                    });
                },
                data: function () {
                    return {
                        title: "裁剪图片",
                        src: "",
                        aspectRatio: 4 / 3,
                        autoCropArea: 0.8,
                        viewMode: 1,        //0,1,2,3
                        cropper: null,
                        isShow: false,
                        onYes: function () { },
                        onNo: function () { }
                    };
                },
                template: '<div class="cropper_wrap" :class="{show:isShow}">' +
                '<div class="head">' +
                '<span class="title">{{title}}</span>' +
                '<a @click="rotateLeft"><i class="fa fa-rotate-left"></i>-90&deg;</a>' +
                '<a @click="rotateRight"><i class="fa fa-rotate-right"></i>+90&deg;</a>' +
                '<a @click="onNoClick"><i class="fa fa-remove"></i>取消</a>' +
                '<a @click="onYesClick"><i class="fa fa-check"></i>完成</a>' +
                '</div>' +
                '<div class="image"><img class="cropperImage"/></div>' +
                '</div>',
                watch: {
                    "src": function (val, oldVal) {
                        var me = this;
                        var cropper = me.cropper;
                        if (typeof val === "string") {
                            cropper.replace(val);
                        }
                        else if (val instanceof File) {
                            me.readFile(val, function (base64) {
                                cropper.replace(base64);
                            });
                        }
                    }
                },
                methods: {
                    open: function () {
                        var me = this;

                        if (typeof arguments[0] === "object" && arguments[0] !== null) {
                            for (var propertyName in arguments[0]) {
                                if (arguments[0].hasOwnProperty(propertyName)) {
                                    me[propertyName] = arguments[0][propertyName];
                                }
                            }
                        }
                        me.isDispaly = true;
                        me.$nextTick(function () {
                            me.isShow = true;
                        });
                    },
                    close: function () {
                        this.isShow = false;
                    },
                    blobToFile: function (blob, name, type) {
                        return new File([blob], name, {
                            type: type,
                        });
                    },
                    onYesClick: function () {
                        var me = this;
                        var cropper = me.cropper;
                        cropper.getCroppedCanvas().toBlob(function (blob) {
                            me.close();
                            me.onYes({ "blob": blob, "name": me.src.name, "type": me.src.type });
                        }, me.src.type, 1);
                    },
                    onNoClick: function () {
                        this.close();
                        this.onNo();
                    },
                    readFile: function (file, fnCallBack) {
                        var fr = new FileReader();
                        fr.addEventListener("load", function (evt) {
                            fnCallBack(evt.target.result);
                        });
                        fr.readAsDataURL(file);
                    },
                    rotateLeft: function () {
                        this.cropper.rotate(-90);
                    },
                    rotateRight: function () {
                        this.cropper.rotate(90);
                    },
                    wrap: function () {
                        var me = this;
                        me.cropper = new Cropper(me.$el.querySelector("img"), {
                            dragMode: 'move',
                            viewMode: me.viewMode,
                            aspectRatio: me.aspectRatio,
                            autoCropArea: me.autoCropArea,
                            minContainerWidth: window.innerWidth,
                            minContainerHeight: window.innerHeight - 45,
                            restore: false,
                            guides: false,
                            center: false,
                            highlight: false,
                            cropBoxMovable: false,
                            cropBoxResizable: false,
                            toggleDragModeOnDblclick: false,
                        });
                    }
                },
                mounted: function () {
                    var me = this;
                    me.wrap();
                }
            });
        }
    };

    if (typeof window !== "undefined" && window.Vue) {
        window.Vue.use(cropperPlugin);
    }

    return cropperPlugin;
})));