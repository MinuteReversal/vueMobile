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
            'div',   // tag name 标签名称
            [
                createElement('div', {'class': { 'xs-container': true }},
                [
                    createElement('div', {'class': { 'xs-content': true }},
                        this.$slots.default
                    )
                ])
            ]
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