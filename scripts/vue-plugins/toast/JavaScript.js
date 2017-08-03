/*
* author : zhy
*   mail : mailzy@vip.qq.com
*   date : 20161116
* plugin : toast
* example: this.$toast.open("hello",function(){});
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.VueResource = factory());
}(this, (function () {
    'use strict';

    function toElement(html) {
        var tempContainer = document.createElement("div");
        tempContainer.innerHTML = html;
        return tempContainer.firstElementChild;
    }

    var toastPlugin = {
        install: function (vue) {
            if (this.installed) return;
            this.installed = true;

            vue.prototype.$toast = new Vue({
                created: function () {
                    var me = this;
                    window.addEventListener("load", function () {
                        document.body.appendChild(me.$mount().$el);
                    });
                },
                data: function () {
                    return {
                        isShow: false,
                        type: "text",//text|cancel|warn
                        time: 3000,
                        message: "信息",
                        timer: null
                    };
                },
                template: '<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">' +
                '<div v-if="isShow" class="toast" @click="close">{{message}}</div>' +
                '</transition>',
                methods: {
                    open: function (options) {
                        var me = this;

                        var settings = {
                            isShow: false,
                            type: "text",//text|cancel|warn
                            time: 3000,
                            message: "信息",
                            timer: null
                        };

                        if (typeof options === "string") {
                            settings.message = options;

                            if (typeof arguments[1] === "string") {
                                settings.type = arguments[1];
                            }

                            if (typeof arguments[2] === "number") {
                                settings.time = arguments[2];
                            }

                        } else if (typeof options === "object" && options !== null) {
                            for (var propertyName in options) {
                                if (options.hasOwnProperty(propertyName) && typeof options[propertyName] !== "undefined") {
                                    settings[propertyName] = options[propertyName];
                                }
                            }
                        }

                        Object.assign(me.$data, settings);

                        me.isShow = true;
                        me.autoClose();
                    },
                    autoClose: function () {
                        var me = this;
                        if (me.time) {
                            if (me.timer) clearTimeout(me.timer);
                            me.timer = setTimeout(function () {
                                me.close();
                            }, me.time);
                        }
                    },
                    close: function () {
                        this.isShow = false;
                    }
                }
            });
        }
    };

    if (typeof window !== "undefined" && window.Vue) {
        window.Vue.use(toastPlugin);
    }

    return toastPlugin;
})));