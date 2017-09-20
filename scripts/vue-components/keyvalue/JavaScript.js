/**
 * author:zhy
 * date  :20170919
 * 示例图如下
 * [ + 键 > | 值]
 * @class vuekeyvalue
 */
var vueKeyvalue = {
    template: '<div class="weui_cells weui_cells_checkbox">'+
    '<div class="weui_cell weui_cell weui_check_label weui_select_before" v-for="(m,i) in val" style="padding-top:0;padding-bottom:0;">'+
        '<div class="weui_cell_hd weui_cell_select" style="display:flex;">'+
            '<i class="fa fa-minus-circle" style="color:#f43530;font-size:23px;vertical-align:middle;margin-top:10px;padding-right:0.35em;" @click="onDelete(m,i)"></i>'+
            '<select v-if="keyType===\'dropdown\'" class="weui_select" style="padding-left:0;" @change="updateValue" v-model="m[modelKeyField]">'+
                    '<option value="" disabled>{{keyPlaceholder}}</option>'+
                    '<option v-for="o in keyOptions" :value="o[keyValueField]">{{o[keyDisplayField]}}</option>'+
            '</select>'+
            '<input v-else-if="keyType===\'text\'" class="weui_input weui_select" :type="keyValueType|type" style="padding:0 30px 0 0;width:102px;" :placeholder="keyPlaceholder" :pattern="keyValueType|pattern" v-model="m[modelKeyField]">'+
        '</div>'+
        '<div class="weui_cell_bd weui_cell_primary">'+
            '<input class="weui_input" :style="{textAlign:valueTextAlign}" :type="valueType|type" :placeholder="valuePlaceholder" :pattern="valueType|pattern" @input="updateValue" :dir="dir()" v-model="m[modelValueField]">'+
        '</div>'+
    '</div>'+
    '<div v-if="val.length < max" class="weui_cell weui_check_label" @click="onAdd">'+
        '<div class="weui_cell_hd">'+
            '<i class="fa fa-plus-circle" style="color:#09bb07;font-size:23px;vertical-align:middle;"></i>'+
        '</div>'+
        '<div class="weui_cell_bd weui_cell_primary">'+
            '<span>{{addText}}</span>'+
        '</div>'+
    '</div>'+
    '</div>',
    data: function () {
        return {
            val: []
        };
    },
    props: {
        "value": {
            type: Array,
            default:function(){return [];}
        },
        /*键的类型：下拉，文本*/
        "keyType": {
            type: String,
            default: "dropdown"  //dropdown|text
        },
        /*控件替换文字*/
        "keyPlaceholder": {
            type: String,
            default: "请输入键"
        },
        /*下拉类型键绑定的显示字段*/
        "keyDisplayField": {
            type: String,
            default: "name"     //dropdown options display text field
        },
        /*下拉类型键绑定的值字段*/
        "keyValueField": {
            type: String,
            default: "value"    //dropdown options selected value field
        },
        /*输入型键的数据类型*/
        "keyValueType": {
            type: String,
            default: "text"     //text|number|integer|date|tel|mail
        },
        /*下拉键的可选项*/
        "keyOptions": {
            type: Array,
            default:function(){return  [{ name: "示例选项", value: "test" }];} 
        },
        /*空值替换文字*/
        "valuePlaceholder": {
            type: String,
            default: "请输入值"
        },
        /*值的数据类型*/
        "valueType": {
            type: String,
            default: ""        //text|number|integer|date|tel|mail
        },
        /*值对齐方式*/
        "valueTextAlign": {
            type: String,
            default: "left"        //left|right
        },
        "model": {
            type: Object,
            default: function(){return  { key: "", value: "" };}
        },
        "modelKeyField": {
            type: String,
            default: "key"
        },
        "modelValueField": {
            type: String,
            default: "value"
        },
        "max": {
            type: Number,
            default: Infinity
        },
        "addText": {
            type: String,
            default: "添加项"
        },
        "handleDeleteItem": {
            type: Function,
            default: function (model, index, fnDelete) {
                if (confirm("确定删除？")) {
                    fnDelete();
                }
            }
        }
    },
    filters: {
        "type": function (val) {
            if (val === "integer")
                return "number"
            return val;
        },
        "pattern": function (val) {
            if (val === "integer")
                return "[0-9]*"
            return "*";
        }
    },
    methods: {
        dir:function(){
            var me=this;
            if(me.valueTextAlign==="right"&& me.valueType==="date"){
                return"rtl";
            }
            return "ltr";
        },
        onDelete: function (m, i) {
            var me = this;
            var fn = function () {
                me.val.splice(i, 1);
                me.updateValue();
            };
            me.handleDeleteItem(m,i,fn);
        },
        onAdd: function (file) {
            var me = this;
            me.val.push(Object.assign({},me.model));
            me.updateValue();
        },
        updateValue: function () {
            var me = this;
            me.$emit("input", me.val);
        },
        setValue:function(val){
            this.val = val;
        }
    },
    watch: {
        "value": function (val, oldVal) {
          this.setValue(val);
        }
    },
    mounted: function () {
        this.setValue(this.value);
    }
};
