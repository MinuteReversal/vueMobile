﻿/**
 * author      : 反转的分针
 * date        : 20170709
 * mail        : 114233763@qq.com
 * description : 远程加载页面并转化为组件
 * depend on   : vueLoading
 * example     : <load-component url="/dishBall.html" :parameters="{id:'abc',name:scope.row.name}"></load-component>
 */
var vueLoadComponent = {
    components: {
        "loading": vuxLoading
    },
    template: '<div>' +
                '<div data-role="component"></div>' +
              '</div>',
    props: {
        "url": {
            "type": String,
            "default": ""
        },
        "parameters": {
            "type": Object,
            "default": null
        },
        "value": {}
    },
    data: function () {
        return {
            component: null,
            val: null,
            path: "",
            params: null
        }
    },
    methods: {
        getParameterUrl: function () {
            var me = this;
            var url = me.path;
            var queryString = $f.objectToQueryString(me.params);
            if (queryString !== "") {
                return url + ("?" + queryString);
            }
            return url;
        },
        /*
        * 将参数从url中分享
        * design:
        * in: {url="/home/index?id=1&name=hello",parameters:{id:2,age:32}}
        * out:{url:"/home/index", params:{id:2,name:"hello",age:32}}
        */
        splitParametersFromUrl: function () {
            var me = this;
            var url = me.url;              //传入的url
            var parameters = me.parameters;//传入的参数对象
            var urlParams = $f.getQueryStringParametersUrlFromText(url);

            if (typeof urlParams.url === "string" && urlParams.url !== "") {
                me.path = urlParams.url;
            }

            if (typeof urlParams.parameters === "string" && urlParams.parameters !== "") {
                me.params = Object.assign({}, $f.queryStringParamatersToObject(urlParams.parameters), me.parameters);
            }
            else {
                me.params = Object.assign({}, me.parameters);
            }
        },
        loadComponent: function () {
            var me = this;
            me.$loading.show();

            $f.getPageComponent({
                url: me.getParameterUrl(),
                isBack: true,
                isChangeUrl: false,
                success: function (c) {
                    me.$loading.hide();
                    me.component = new Vue(c);

                    if (me.params) $f.addParameters(me.component._uid, me.params);

                    me.component.$mount(me.$el.querySelector("[data-role=component]"));
                    me.val = me.component.$data;
                    me.$emit("load", me.component);
                },
                error: function (error) {
                    me.$loading.hide();
                    me.$alert.open(error.message);
                }
            });
        }
    },
    watch: {
        value: function (val, oldVal) {
            var me = this;
            Object.assign(me.component.$data, val);
        },
        val: function (val, oldVal) {
            var me = this;
            me.$emit("input", me.component.$data);
        }
    },
    mounted: function () {
        var me = this;
        me.splitParametersFromUrl();
        me.loadComponent();
    },
    destroyed: function () {
        var me = this;
        $f.removeParameters(me.component._uid);
    }
};