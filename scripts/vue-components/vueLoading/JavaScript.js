/*
* author : zhy
*   mail : mailzy@vip.qq.com
*   date : 20170929
* plugin : loading
* example: <div v-loading="true"></div>
*/
var vueLoading = {
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            message: "正在加载中"
        };
    },
    template: '<div v-show="isShow" class="weui_loading_toast">' +
    '<div style="position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;"></div>' +
    '<div class="weui_toast" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;">' +
    '<div class="weui_loading">' +
    '<div class="weui_loading_leaf weui_loading_leaf_0"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_1"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_2"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_3"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_4"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_5"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_6"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_7"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_8"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_9"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_10"></div>' +
    '<div class="weui_loading_leaf weui_loading_leaf_11"></div>' +
    '</div>' +
    '<p class="weui_toast_content">{{message}}</p>' +
    '</div>' +
    '</div>',
    methods: {
        show: function (options) {
            var me = this;

            if (typeof options === "string") {
                me.message = options;
            } else if (typeof options === "object" && options !== null) {
                for (var propertyName in options) {
                    if (options.hasOwnProperty(propertyName)) {
                        me[propertyName] = options[propertyName];
                    }
                }
            }

            me.isShow = true;
        },
        hide: function () {
            this.isShow = false;
        }
    }
};

Vue.directive('loading', function (el, binding, vnode, oldVnode) {
    var loading = null;
    if (typeof el.loading === "undefined") {
        loading= el.loading = new Vue(vueLoading);
        loading.$mount(el);
        el.appendChild(loading.$el);
    }
    else {
        loading = el.loading;
    }
    loading.isShow = binding.value;
});