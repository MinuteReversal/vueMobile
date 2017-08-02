(function () {
    var jsList = [
        "/scripts/polyfill/Array.prototype.forEach.js",
        "/scripts/polyfill/Array.prototype.indexOf.js",
        "/scripts/polyfill/Array.prototype.filter.js",
        "/scripts/polyfill/DOMParser.js",
        "/scripts/polyfill/HTMLCanvasElement.toBlob.js",
        "/scripts/polyfill/Object.assign.js",
        "/scripts/cookies.js",
        "/scripts/guid.js",
        "/scripts/dateformat.js",
        "/scripts/jszip.js",
        "/scripts/linq.js",
        "/scripts/md5.js",
        "/scripts/stringFormat.js",
        "/scripts/parabola/index.js",
        "/scripts/xscroll/build/standalone/xscroll.js",
        "/scripts/xscroll/build/standalone/plugins/pullup.min.js",
        "/scripts/xscroll/build/standalone/plugins/pulldown.min.js",
        "/scripts/vue.js",
        "/scripts/vue-plugins/vue-resource-master/dist/vue-resource.js",
        "/scripts/vue-components/vux-2/vux.min.js",
        "/scripts/framework.js",
        "/scripts/vue-components/xscroll/index.js",
        "/scripts/vue-components/vueLoadComponent/JavaScript.js",
        "/scripts/vue-plugins/alert/JavaScript.js",
        "/scripts/vue-plugins/confirm/JavaScript.js",
        "/scripts/vue-plugins/prompt/JavaScript.js",
        "/scripts/vue-plugins/actionsheet/JavaScript.js",
        "/scripts/vue-plugins/loading/JavaScript.js",
        "/scripts/vue-plugins/loaderwindow/JavaScript.js",
        "/scripts/vue-plugins/loaderpage/JavaScript.js",
        "/scripts/vue-plugins/loaderside/JavaScript.js"
    ];

    for (var i = 0, item; item = jsList[i++];) {
        document.writeln('<script src="' + item + '"></script>');
    }
})();

