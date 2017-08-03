(function () {
    var cssList = [
        "/css/animate.css",
        "/scripts/weui/dist/style/weui.min.css",
        "/scripts/vue-components/vux-2/vux.min.css",
        "/css/schema.default.css",
        "/css/theme/default.css",
        "/css/app.css",
        "/css/dish.css",
        "/scripts/vue-plugins/loaderwindow/StyleSheet.css",
        "/scripts/vue-plugins/loaderpage/StyleSheet.css",
        "/scripts/vue-plugins/loaderside/StyleSheet.css",
        "/scripts/vue-plugins/toast/StyleSheet.css"
    ];

    for (var i = 0, item; item = cssList[i++];) {
        document.writeln('<link href="' + item + '" rel="stylesheet"/>');
    }
})();

