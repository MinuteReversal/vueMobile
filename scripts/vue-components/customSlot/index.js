var customSlot = {
    template: '<div>' +
    '<div class="xs-container">' +
    '<div class="xs-content">' +
    '<slot></slot>' +
    '</div >' +
    '</div>' +
    '</div>',
    render: function (createElement) {
        console.log("render");
        var e = createElement(
            'h' + this.level,   // tag name 标签名称
            this.$slots.default // 子组件中的阵列
        );
        return e;
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
}