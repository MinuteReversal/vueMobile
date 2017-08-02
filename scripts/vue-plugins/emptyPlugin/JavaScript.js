(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
        (global.VueResource = factory());
}(this, (function () {
    'use strict';

    var myPlugin = {
        install: function (Vue) {
            if (this.installed) return;
            this.installed = true;

            // 1. 添加全局方法或属性
            Vue.myGlobalMethod = function () { console.log("myGlobalMethod"); };
            // 2. 添加全局资源
            Vue.directive('my-directive', {});
            // 3. 添加实例方法
            Vue.prototype.$myMethod = function () { console.log("$myMethod"); };
        }
    };

    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(myPlugin);
    }

    return myPlugin;
})));