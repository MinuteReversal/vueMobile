!function (window) {
    var docuemnt = window.document;
    var documentElement = docuemnt.documentElement;
    var viewport = docuemnt.querySelector('meta[name="viewport"]');
    var flexible = docuemnt.querySelector('meta[name="flexible"]');
    var defaultSize = 12;//mobile
    var deaultWidth = 320//iPhone4
    var timer = null;


    function setFontSize() {
        var i = 0;
        var width = documentElement.getBoundingClientRect().width;
        if (width <= 540) {
            i = width / (320 / 12) //一行放26.66个字
        }
        else {
            i = 320 / 12; //一行放26.66个字
        }

        documentElement.style.fontSize = i + "px";
    }

    window.addEventListener("resize", function () {
        setFontSize();
    });

    window.addEventListener("pageshow", function (e) {
        setFontSize();
    });

    if ("complete" === docuemnt.readyState) {
        setFontSize();
    }
    docuemnt.addEventListener("DOMContentLoaded", function () {
        setFontSize();
    });
}(window);