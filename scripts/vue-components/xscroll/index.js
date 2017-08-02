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
            _xscroll: null,
            currentSticky: null
        };
    },
    methods: {
        /*
        *@param {number} scrollTop
        *@param {number} duration
        *@param {string} easing : ease-in | ease-in-out | ease | bezier(n,n,n,n)
        *@return void
        */
        scrollTop: function (scrollTop, duration, easing) {
            this._xscroll.scrollTop(scrollTop, duration, easing);
        },
        /*
        *@param {object} eventsObj {stickyElement:object,curStickyIndex:1,prevStickyIndex: 0,curStickyPos: 2, isRender: true}
        */
        onStickychange: function (evt) {
            var me = this;
            if (me.currentSticky === null || me.currentSticky.curStickyIndex !== evt.curStickyIndex) {
                me.currentSticky = evt;
                me.$emit("sticky-change", evt);
            }
        },
        onScroll: function (evt) {
            this.$emit("scroll", evt);
        },
        fixStickyTopAlgorithm: function () {
            var me = this;
            me._xscroll.sticky.getStickiesPos = function () {
                var self = this;
                var xscroll = self.xscroll;
                var isInfinite = self.isInfinite;
                var isY = self.isY;
                var _ = self._;
                var stickiesPos = [];
                var getPos = function (sticky) {
                    var pos = {};
                    if (isInfinite) {
                        pos[_.top] = isY ? sticky._top : sticky._left;
                        pos[_.height] = isY ? sticky._height : sticky._width;
                    } else {
                        pos[_.top] = self.isY ? sticky.offsetTop : sticky.offsetLeft;
                        pos[_.height] = self.isY ? sticky.offsetHeight : sticky.offsetWidth;
                    }
                    return pos;
                };
                for (var i = 0; i < self.stickiesNum; i++) {
                    var pos = getPos(self.stickyElements[i]);
                    self._handlers[i] = self._handlers[i] || self.createStickyEl();
                    pos.el = self._handlers[i];
                    pos.isRender = false;
                    stickiesPos.push(pos);
                }
                return stickiesPos;
            };
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

        me._xscroll.on("stickychange", me.onStickychange, me);
        me._xscroll.on("scroll", me.onScroll, me);

        me._xscroll.render();
        me.fixStickyTopAlgorithm();
        me._xscroll.render();
    }
};