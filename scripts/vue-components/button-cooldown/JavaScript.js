/**
 * author:zhy
 * date  :20170919
 * @class buttonCoolDown
 */
var vueButtonCooldown = {
    template: '<button class="weui_btn weui_btn_primary" :class="{\'weui_btn_disabled\':disabled}" :disabled="disabled" @click="onClick">' +
    '<slot></slot>' +
    '<template v-if="currentSecond">({{currentSecond}}{{unit}})</template>' +
    '</button>',
    data: function () {
        return {
            currentSecond: 0,
            intervalID: 0
        };
    },
    props: {
        "second": {
            type: Number,
            default: 60
        },
        "unit": {
            type: String,
            default: "s"
        },
        "disabled": {
            type: Boolean,
            default: false
        }
    },
    methods: {
        startCount: function () {
            var me = this;
            me.disabled = true;
            me.currentSecond = me.second;
            me.intervalID = setInterval(function () {
                me.currentSecond--;
                if (me.currentSecond === 0) {
                    clearInterval(me.intervalID);
                    me.disabled = false;
                }
            }, 1000);
        },
        onClick: function () {
            var me = this;
            if (!me.disabled) {
                me.startCount();
                me.$emit("click");
            }
        }
    }
};
