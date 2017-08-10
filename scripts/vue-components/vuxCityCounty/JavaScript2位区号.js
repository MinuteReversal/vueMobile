/**
 * author      : 反转的分针
 * date        : 20170809
 * mail        : 114233763@qq.com
 * description : 选择市县
 * dependences : vuxPopupPicker
 * example     : <load-component url="/dishBall.html" :parameters="{id:'abc',name:scope.row.name}"></load-component>
 */
var vuxCityCountyComponent = {
    components: {
        "popup-picker": vuxPopupPicker
    },
    template: '<popup-picker :title="title" :data="list" :columns="2" v-model="val" @on-change="onChange" show-name ref="picker"></popup-picker>',
    props: {
        //默认省
        "provinceCode": {
            "type": String,
            "default": "53"
        },
        "title": {
            "type": String,
            "default": "选择市县"
        },
        "src": {
            "type": String,
            "default": ""
        },
        "value": {
            "type": String,
            "default": ""
        }
    },
    data: function () {
        return {
            val: [],
            list: []
        }
    },
    methods: {
        onChange: function (value) {
            var me = this;
            me.areaCodePadRight(value.unshift(me.provinceCode));//添加省代号
            me.$emit("input", value.join(""));
        },
        setAreas: function () {
            this.list = [
                { "parent": "0", "value": "01", "name": "昆明市" },
                { "parent": "0", "value": "03", "name": "曲靖市" },
                { "parent": "0", "value": "04", "name": "玉溪市" },
                { "parent": "0", "value": "06", "name": "昭通市" },
                { "parent": "0", "value": "05", "name": "保山市" },
                { "parent": "0", "value": "07", "name": "丽江市" },
                { "parent": "0", "value": "08", "name": "普洱市" },
                { "parent": "0", "value": "09", "name": "临沧市" },
                { "parent": "0", "value": "23", "name": "楚雄彝族自治州" },
                { "parent": "0", "value": "25", "name": "红河哈尼族彝族自治州" },
                { "parent": "0", "value": "26", "name": "文山壮族苗族自治州" },
                { "parent": "0", "value": "29", "name": "大理白族自治州" },
                { "parent": "0", "value": "28", "name": "西双版纳傣族自治州" },
                { "parent": "0", "value": "31", "name": "德宏傣族景颇族自治州" },
                { "parent": "0", "value": "33", "name": "怒江傈僳族自治州" },
                { "parent": "0", "value": "34", "name": "迪庆藏族自治州" },
                { "parent": "01", "value": "02", "name": "五华区" },
                { "parent": "01", "value": "03", "name": "盘龙区" },
                { "parent": "01", "value": "11", "name": "官渡区" },
                { "parent": "01", "value": "12", "name": "西山区" },
                { "parent": "01", "value": "13", "name": "东川区" },
                { "parent": "01", "value": "14", "name": "呈贡区" },
                { "parent": "01", "value": "22", "name": "晋宁区" },
                { "parent": "01", "value": "24", "name": "富民县" },
                { "parent": "01", "value": "25", "name": "宜良县" },
                { "parent": "01", "value": "26", "name": "石林彝族自治县" },
                { "parent": "01", "value": "27", "name": "嵩明县" },
                { "parent": "01", "value": "28", "name": "禄劝彝族苗族自治县" },
                { "parent": "01", "value": "29", "name": "寻甸回族彝族自治县" },
                { "parent": "01", "value": "81", "name": "安宁市" },
                { "parent": "03", "value": "02", "name": "麒麟区" },
                { "parent": "03", "value": "03", "name": "沾益区" },
                { "parent": "03", "value": "21", "name": "马龙县" },
                { "parent": "03", "value": "22", "name": "陆良县" },
                { "parent": "03", "value": "23", "name": "师宗县" },
                { "parent": "03", "value": "24", "name": "罗平县" },
                { "parent": "03", "value": "25", "name": "富源县" },
                { "parent": "03", "value": "26", "name": "会泽县" },
                { "parent": "03", "value": "81", "name": "宣威市" },
                { "parent": "04", "value": "02", "name": "红塔区" },
                { "parent": "04", "value": "03", "name": "江川区" },
                { "parent": "04", "value": "22", "name": "澄江县" },
                { "parent": "04", "value": "23", "name": "通海县" },
                { "parent": "04", "value": "24", "name": "华宁县" },
                { "parent": "04", "value": "25", "name": "易门县" },
                { "parent": "04", "value": "26", "name": "峨山彝族自治县" },
                { "parent": "04", "value": "27", "name": "新平彝族傣族自治县" },
                { "parent": "04", "value": "28", "name": "元江哈尼族彝族傣族自治县" },
                { "parent": "05", "value": "02", "name": "隆阳区" },
                { "parent": "05", "value": "21", "name": "施甸县" },
                { "parent": "05", "value": "23", "name": "龙陵县" },
                { "parent": "05", "value": "24", "name": "昌宁县" },
                { "parent": "05", "value": "81", "name": "腾冲市" },
                { "parent": "06", "value": "02", "name": "昭阳区" },
                { "parent": "06", "value": "21", "name": "鲁甸县" },
                { "parent": "06", "value": "22", "name": "巧家县" },
                { "parent": "06", "value": "23", "name": "盐津县" },
                { "parent": "06", "value": "24", "name": "大关县" },
                { "parent": "06", "value": "25", "name": "永善县" },
                { "parent": "06", "value": "26", "name": "绥江县" },
                { "parent": "06", "value": "27", "name": "镇雄县" },
                { "parent": "06", "value": "28", "name": "彝良县" },
                { "parent": "06", "value": "29", "name": "威信县" },
                { "parent": "06", "value": "30", "name": "水富县" },
                { "parent": "07", "value": "02", "name": "古城区" },
                { "parent": "07", "value": "21", "name": "玉龙纳西族自治县" },
                { "parent": "07", "value": "22", "name": "永胜县" },
                { "parent": "07", "value": "23", "name": "华坪县" },
                { "parent": "07", "value": "24", "name": "宁蒗彝族自治县" },
                { "parent": "08", "value": "02", "name": "思茅区" },
                { "parent": "08", "value": "21", "name": "宁洱哈尼族彝族自治县" },
                { "parent": "08", "value": "22", "name": "墨江哈尼族自治县" },
                { "parent": "08", "value": "23", "name": "景东彝族自治县" },
                { "parent": "08", "value": "24", "name": "景谷傣族彝族自治县" },
                { "parent": "08", "value": "25", "name": "镇沅彝族哈尼族拉祜族自治县" },
                { "parent": "08", "value": "26", "name": "江城哈尼族彝族自治县" },
                { "parent": "08", "value": "27", "name": "孟连傣族拉祜族佤族自治县" },
                { "parent": "08", "value": "28", "name": "澜沧拉祜族自治县" },
                { "parent": "08", "value": "29", "name": "西盟佤族自治县" },
                { "parent": "09", "value": "02", "name": "临翔区" },
                { "parent": "09", "value": "21", "name": "凤庆县" },
                { "parent": "09", "value": "22", "name": "云县" },
                { "parent": "09", "value": "23", "name": "永德县" },
                { "parent": "09", "value": "24", "name": "镇康县" },
                { "parent": "09", "value": "25", "name": "双江拉祜族佤族布朗族傣族自治县" },
                { "parent": "09", "value": "26", "name": "耿马傣族佤族自治县" },
                { "parent": "09", "value": "27", "name": "沧源佤族自治县" },
                { "parent": "23", "value": "01", "name": "楚雄市" },
                { "parent": "23", "value": "22", "name": "双柏县" },
                { "parent": "23", "value": "23", "name": "牟定县" },
                { "parent": "23", "value": "24", "name": "南华县" },
                { "parent": "23", "value": "25", "name": "姚安县" },
                { "parent": "23", "value": "26", "name": "大姚县" },
                { "parent": "23", "value": "27", "name": "永仁县" },
                { "parent": "23", "value": "28", "name": "元谋县" },
                { "parent": "23", "value": "29", "name": "武定县" },
                { "parent": "23", "value": "31", "name": "禄丰县" },
                { "parent": "25", "value": "01", "name": "个旧市" },
                { "parent": "25", "value": "02", "name": "开远市" },
                { "parent": "25", "value": "03", "name": "蒙自市" },
                { "parent": "25", "value": "04", "name": "弥勒市" },
                { "parent": "25", "value": "23", "name": "屏边苗族自治县" },
                { "parent": "25", "value": "24", "name": "建水县" },
                { "parent": "25", "value": "25", "name": "石屏县" },
                { "parent": "25", "value": "27", "name": "泸西县" },
                { "parent": "25", "value": "28", "name": "元阳县" },
                { "parent": "25", "value": "29", "name": "红河县" },
                { "parent": "25", "value": "30", "name": "金平苗族瑶族傣族自治县" },
                { "parent": "25", "value": "31", "name": "绿春县" },
                { "parent": "25", "value": "32", "name": "河口瑶族自治县" },
                { "parent": "26", "value": "01", "name": "文山市" },
                { "parent": "26", "value": "22", "name": "砚山县" },
                { "parent": "26", "value": "23", "name": "西畴县" },
                { "parent": "26", "value": "24", "name": "麻栗坡县" },
                { "parent": "26", "value": "25", "name": "马关县" },
                { "parent": "26", "value": "26", "name": "丘北县" },
                { "parent": "26", "value": "27", "name": "广南县" },
                { "parent": "26", "value": "28", "name": "富宁县" },
                { "parent": "28", "value": "01", "name": "景洪市" },
                { "parent": "28", "value": "22", "name": "勐海县" },
                { "parent": "28", "value": "23", "name": "勐腊县" },
                { "parent": "29", "value": "01", "name": "大理市" },
                { "parent": "29", "value": "22", "name": "漾濞彝族自治县" },
                { "parent": "29", "value": "23", "name": "祥云县" },
                { "parent": "29", "value": "24", "name": "宾川县" },
                { "parent": "29", "value": "25", "name": "弥渡县" },
                { "parent": "29", "value": "26", "name": "南涧彝族自治县" },
                { "parent": "29", "value": "27", "name": "巍山彝族回族自治县" },
                { "parent": "29", "value": "28", "name": "永平县" },
                { "parent": "29", "value": "29", "name": "云龙县" },
                { "parent": "29", "value": "30", "name": "洱源县" },
                { "parent": "29", "value": "31", "name": "剑川县" },
                { "parent": "29", "value": "32", "name": "鹤庆县" },
                { "parent": "31", "value": "02", "name": "瑞丽市" },
                { "parent": "31", "value": "03", "name": "芒市" },
                { "parent": "31", "value": "22", "name": "梁河县" },
                { "parent": "31", "value": "23", "name": "盈江县" },
                { "parent": "31", "value": "24", "name": "陇川县" },
                { "parent": "33", "value": "01", "name": "泸水市" },
                { "parent": "33", "value": "23", "name": "福贡县" },
                { "parent": "33", "value": "24", "name": "贡山独龙族怒族自治县" },
                { "parent": "33", "value": "25", "name": "兰坪白族普米族自治县" },
                { "parent": "34", "value": "01", "name": "香格里拉市" },
                { "parent": "34", "value": "22", "name": "德钦县" },
                { "parent": "34", "value": "23", "name": "维西傈僳族自治县" }
            ];
        },
        //拆分六位字串
        areaCodeSplit: function (areaCode) {
            var me = this;
            if (typeof areaCode !== "string")
                areaCode = areaCode.toString();
            return areaCode.match(/\d{2}/g);
        },
        //字串右边补零
        areaCodePadRight: function (code, totalNumber) {
            if (!totalNumber) totalNumber = 6;
            if (code.length < totalNumber) {
                for (var i = code.length; i < totalNumber; i++) {
                    code += "0";
                }
            }
            return code;
        },
        //对控件设置选中值
        setValue: function (val) {
            var me = this;
            if (typeof val !== "string") val = val.toString();

            var codes = me.areaCodeSplit(val);
            //丢弃省代号
            codes.shift();
            var select = [];
            for (var i = 0, code; code = codes[i]; i++) {
                if (code !== "00") {
                    select.push(code);
                }
            }
            me.val = select;
        }
    },
    watch: {
        value: function (val, oldVal) {
            this.setValue(val);
        }
    },
    mounted: function () {
        var me = this;
        me.setAreas();
        me.setValue(me.value);
    },
    destroyed: function () {
        var me = this;
    }
};