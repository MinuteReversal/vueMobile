//http://xscroll.github.io/
/**
 * 内容第一层不要设置margin
 */
var vueXscroll = {
    template: '<div>' +
    '<div class="xs-container">' +
    '<div class="xs-content">' +
    '<slot></slot>' +
    '</div >' +
    '</div>' +
    '</div>',
    props: {
        pulldown: {
            type: Boolean,
            default: false,
        },
        pullup: {
            type: Boolean,
            default: false,
        }
    },
    data: function () {
        return {
            _xscroll: null
        };
    },
    methods: {
        onScroll: function () {
        }
    },
    updated: function () {
        var me = this;
        me._xscroll.render();
    },
    mounted: function () {
        var me = this;

        me._xscroll = new XScroll({
            renderTo: me.$el,
            scrollbarX: false,
            lockX: true,
            lockY: false,
            stickyElements: ".sticky",
            fixedElements: ".fixed"
        });

        if (XScroll.Plugins.PullUp && me.pullup) {
            /**
             * 上拉加载插件
             */
            var pullup = new XScroll.Plugins.PullUp({
                upContent: "上拉加载更多",
                downContent: "释放加载",
                loadingContent: "加载中……",
                bufferHeight: 0
            });
            pullup.on("loading", function (e) {
                var fnComplete = function () {
                    pullup.complete();
                };
                me.$emit("pullup-loading", fnComplete);
            })
            me._xscroll.plug(pullup);
        }

        if (XScroll.Plugins.PullDown && me.pulldown) {
            /**
             * 下拉刷新插件
             */
            var pulldown = new XScroll.Plugins.PullDown({
                upContent: "释放刷新",
                downContent: "下拉刷新",
                loadingContent: "加载中……",
                autoRefresh: false
            });
            pulldown.on("loading", function (e) {
                var fnComplete = function () {
                    pulldown.reset(function () {
                        pulldown.render();
                    });
                };
                me.$emit("pulldown-loading", fnComplete);
            })
            me._xscroll.plug(pulldown);
        }

        me._xscroll.on("scroll", me.onScroll, me);

        me._xscroll.render();
    }
};