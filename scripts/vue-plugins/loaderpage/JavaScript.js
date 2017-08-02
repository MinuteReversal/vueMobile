/*
* author     : zhy
*   mail     : mailzy@vip.qq.com
*   date     : 20170709
* plugin     : loaderPagePlugin
* example    : this.$loaderpage("/form.html").then().catch();
* dependence : animate.css
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global.VueResource = factory());
}(this, (function () {
    'use strict';

    var loaderPagePlugin = {
        install: function (vue) {
            if (this.installed) return;
            this.installed = true;

            vue.prototype.$loaderpage = function (options) {

                var div = document.createElement("div");
                document.body.appendChild(div);

                var settings = {
                    url: "",
                    parameters: null,
                    direction: "right",//top rihgt bottom left
                    fnThen: function () { },
                    fnCatch: function () { }
                };

                if (typeof arguments[0] === "string") {
                    settings.url = arguments[0];
                }
                else if (typeof arguments[0] === "object") {
                    Object.assign(settings, options);
                }

                if (typeof arguments[1] === "object") {
                    settings.parameters = arguments[1];
                }
                else if (typeof arguments[1] === "string") {
                    settings.direction = arguments[1];
                }

                if (typeof arguments[2] === "string") {
                    settings.direction = arguments[2];
                }

                return new Vue({
                    el: div,
                    components: {
                        "load-component": vueLoadComponent
                    },
                    filters: $f.filters,
                    data: function () {
                        return {
                            isVisible: false,
                            url: settings.url,
                            parameters: settings.parameters,
                            direction: settings.direction,
                            animation: {
                                enter: "",
                                leave: ""
                            },
                            fnThen: settings.fnThen,
                            fnCatch: settings.fnCatch
                        };
                    },
                    template:
                    '<transition :enter-active-class="animation.enter" :leave-active-class="animation.leave" @after-leave="destroy">' +
                    '<load-component v-if="isVisible" class="loaderPage" :url="url" :parameters="parameters" @load="onComponentloader" ref="lc"></load-component>' +
                    '</transition>',
                    methods: {
                        open: function (parameters, fnThen, fnCatch) {
                            var me = this;
                            if (parameters) me.parameters = parameters;
                            if (fnThen) me.fnThen = fnThen;
                            if (fnCatch) me.fnCatch = fnCatch;

                            me.isVisible = true;
                            return me;
                        },
                        close: function () {
                            var me = this;
                            me.isVisible = false;
                            return me;
                        },
                        destroy: function () {
                            var me = this;
                            if (me.$refs.lc) {
                                me.$refs.lc.$destroy();
                            }
                            document.body.removeChild(me.$el);
                        },
                        onComponentloader: function (c) {
                            var me = this;

                            c.$on("confirm", function (evt) {
                                me.fnThen(evt);
                                me.close();
                            });
                            c.$on("cancel", function (evt) {
                                me.fnCatch(evt);
                                me.close();
                            });
                        },
                        then: function (fn) {
                            var me = this;
                            me.fnThen = fn;
                            return me;
                        },
                        catch: function (fn) {
                            var me = this;
                            me.fnCatch = fn;
                            return me;
                        },
                        setAnimation: function (direction) {
                            var me = this;
                            switch (direction) {
                                case "up":
                                case "top": {
                                    me.animation.enter = "animated slideInDown";
                                    me.animation.leave = "animated slideOutUp";
                                }
                                    break;
                                case "right": {
                                    me.animation.enter = "animated slideInRight";
                                    me.animation.leave = "animated slideOutRight";
                                }
                                    break;
                                case "down":
                                case "bottom": {
                                    me.animation.enter = "animated slideInUp";
                                    me.animation.leave = "animated slideOutDown";
                                }
                                    break;
                                case "left": {
                                    me.animation.enter = "animated slideInLeft";
                                    me.animation.leave = "animated slideOutLeft";
                                }
                                    break;
                                case "none": {
                                    me.animation.enter = "";
                                    me.animation.leave = "";
                                }
                                    break;
                                default:
                                    break;
                            }
                        }
                    },
                    mounted: function () {
                        var me = this;
                        me.setAnimation(me.direction);
                        me.open();
                    }
                });
            };
        }
    };

    if (typeof window !== "undefined" && window.Vue) {
        window.Vue.use(loaderPagePlugin);
    }

    return loaderPagePlugin;
})));