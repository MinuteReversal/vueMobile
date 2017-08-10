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
            me.$emit("input", value[value.length - 1]);//返回选中列表中最后一个项(县)
        },
        setAreas: function () {
            var me = this;
            setTimeout(function () {

                me.list = [
                    { "parent": "0", "value": "530100", "name": "昆明市" },
                    { "parent": "0", "value": "530300", "name": "曲靖市" },
                    { "parent": "0", "value": "530400", "name": "玉溪市" },
                    { "parent": "0", "value": "530600", "name": "昭通市" },
                    { "parent": "0", "value": "530500", "name": "保山市" },
                    { "parent": "0", "value": "530700", "name": "丽江市" },
                    { "parent": "0", "value": "530800", "name": "普洱市" },
                    { "parent": "0", "value": "530900", "name": "临沧市" },
                    { "parent": "0", "value": "532300", "name": "楚雄彝族自治州" },
                    { "parent": "0", "value": "532500", "name": "红河哈尼族彝族自治州" },
                    { "parent": "0", "value": "532600", "name": "文山壮族苗族自治州" },
                    { "parent": "0", "value": "532900", "name": "大理白族自治州" },
                    { "parent": "0", "value": "532800", "name": "西双版纳傣族自治州" },
                    { "parent": "0", "value": "533100", "name": "德宏傣族景颇族自治州" },
                    { "parent": "0", "value": "533300", "name": "怒江傈僳族自治州" },
                    { "parent": "0", "value": "533400", "name": "迪庆藏族自治州" },
                    { "parent": "530100", "value": "530102", "name": "五华区" },
                    { "parent": "530100", "value": "530103", "name": "盘龙区" },
                    { "parent": "530100", "value": "530111", "name": "官渡区" },
                    { "parent": "530100", "value": "530112", "name": "西山区" },
                    { "parent": "530100", "value": "530113", "name": "东川区" },
                    { "parent": "530100", "value": "530114", "name": "呈贡区" },
                    { "parent": "530100", "value": "530122", "name": "晋宁区" },
                    { "parent": "530100", "value": "530124", "name": "富民县" },
                    { "parent": "530100", "value": "530125", "name": "宜良县" },
                    { "parent": "530100", "value": "530126", "name": "石林彝族自治县" },
                    { "parent": "530100", "value": "530127", "name": "嵩明县" },
                    { "parent": "530100", "value": "530128", "name": "禄劝彝族苗族自治县" },
                    { "parent": "530100", "value": "530129", "name": "寻甸回族彝族自治县" },
                    { "parent": "530100", "value": "530181", "name": "安宁市" },
                    { "parent": "530300", "value": "530302", "name": "麒麟区" },
                    { "parent": "530300", "value": "530303", "name": "沾益区" },
                    { "parent": "530300", "value": "530321", "name": "马龙县" },
                    { "parent": "530300", "value": "530322", "name": "陆良县" },
                    { "parent": "530300", "value": "530323", "name": "师宗县" },
                    { "parent": "530300", "value": "530324", "name": "罗平县" },
                    { "parent": "530300", "value": "530325", "name": "富源县" },
                    { "parent": "530300", "value": "530326", "name": "会泽县" },
                    { "parent": "530300", "value": "530381", "name": "宣威市" },
                    { "parent": "530400", "value": "530402", "name": "红塔区" },
                    { "parent": "530400", "value": "530403", "name": "江川区" },
                    { "parent": "530400", "value": "530422", "name": "澄江县" },
                    { "parent": "530400", "value": "530423", "name": "通海县" },
                    { "parent": "530400", "value": "530424", "name": "华宁县" },
                    { "parent": "530400", "value": "530425", "name": "易门县" },
                    { "parent": "530400", "value": "530426", "name": "峨山彝族自治县" },
                    { "parent": "530400", "value": "530427", "name": "新平彝族傣族自治县" },
                    { "parent": "530400", "value": "530428", "name": "元江哈尼族彝族傣族自治县" },
                    { "parent": "530500", "value": "530502", "name": "隆阳区" },
                    { "parent": "530500", "value": "530521", "name": "施甸县" },
                    { "parent": "530500", "value": "530523", "name": "龙陵县" },
                    { "parent": "530500", "value": "530524", "name": "昌宁县" },
                    { "parent": "530500", "value": "530581", "name": "腾冲市" },
                    { "parent": "530600", "value": "530602", "name": "昭阳区" },
                    { "parent": "530600", "value": "530621", "name": "鲁甸县" },
                    { "parent": "530600", "value": "530622", "name": "巧家县" },
                    { "parent": "530600", "value": "530623", "name": "盐津县" },
                    { "parent": "530600", "value": "530624", "name": "大关县" },
                    { "parent": "530600", "value": "530625", "name": "永善县" },
                    { "parent": "530600", "value": "530626", "name": "绥江县" },
                    { "parent": "530600", "value": "530627", "name": "镇雄县" },
                    { "parent": "530600", "value": "530628", "name": "彝良县" },
                    { "parent": "530600", "value": "530629", "name": "威信县" },
                    { "parent": "530600", "value": "530630", "name": "水富县" },
                    { "parent": "530700", "value": "530702", "name": "古城区" },
                    { "parent": "530700", "value": "530721", "name": "玉龙纳西族自治县" },
                    { "parent": "530700", "value": "530722", "name": "永胜县" },
                    { "parent": "530700", "value": "530723", "name": "华坪县" },
                    { "parent": "530700", "value": "530724", "name": "宁蒗彝族自治县" },
                    { "parent": "530800", "value": "530802", "name": "思茅区" },
                    { "parent": "530800", "value": "530821", "name": "宁洱哈尼族彝族自治县" },
                    { "parent": "530800", "value": "530822", "name": "墨江哈尼族自治县" },
                    { "parent": "530800", "value": "530823", "name": "景东彝族自治县" },
                    { "parent": "530800", "value": "530824", "name": "景谷傣族彝族自治县" },
                    { "parent": "530800", "value": "530825", "name": "镇沅彝族哈尼族拉祜族自治县" },
                    { "parent": "530800", "value": "530826", "name": "江城哈尼族彝族自治县" },
                    { "parent": "530800", "value": "530827", "name": "孟连傣族拉祜族佤族自治县" },
                    { "parent": "530800", "value": "530828", "name": "澜沧拉祜族自治县" },
                    { "parent": "530800", "value": "530829", "name": "西盟佤族自治县" },
                    { "parent": "530900", "value": "530902", "name": "临翔区" },
                    { "parent": "530900", "value": "530921", "name": "凤庆县" },
                    { "parent": "530900", "value": "530922", "name": "云县" },
                    { "parent": "530900", "value": "530923", "name": "永德县" },
                    { "parent": "530900", "value": "530924", "name": "镇康县" },
                    { "parent": "530900", "value": "530925", "name": "双江拉祜族佤族布朗族傣族自治县" },
                    { "parent": "530900", "value": "530926", "name": "耿马傣族佤族自治县" },
                    { "parent": "530900", "value": "530927", "name": "沧源佤族自治县" },
                    { "parent": "532300", "value": "532301", "name": "楚雄市" },
                    { "parent": "532300", "value": "532322", "name": "双柏县" },
                    { "parent": "532300", "value": "532323", "name": "牟定县" },
                    { "parent": "532300", "value": "532324", "name": "南华县" },
                    { "parent": "532300", "value": "532325", "name": "姚安县" },
                    { "parent": "532300", "value": "532326", "name": "大姚县" },
                    { "parent": "532300", "value": "532327", "name": "永仁县" },
                    { "parent": "532300", "value": "532328", "name": "元谋县" },
                    { "parent": "532300", "value": "532329", "name": "武定县" },
                    { "parent": "532300", "value": "532331", "name": "禄丰县" },
                    { "parent": "532500", "value": "532501", "name": "个旧市" },
                    { "parent": "532500", "value": "532502", "name": "开远市" },
                    { "parent": "532500", "value": "532503", "name": "蒙自市" },
                    { "parent": "532500", "value": "532504", "name": "弥勒市" },
                    { "parent": "532500", "value": "532523", "name": "屏边苗族自治县" },
                    { "parent": "532500", "value": "532524", "name": "建水县" },
                    { "parent": "532500", "value": "532525", "name": "石屏县" },
                    { "parent": "532500", "value": "532527", "name": "泸西县" },
                    { "parent": "532500", "value": "532528", "name": "元阳县" },
                    { "parent": "532500", "value": "532529", "name": "红河县" },
                    { "parent": "532500", "value": "532530", "name": "金平苗族瑶族傣族自治县" },
                    { "parent": "532500", "value": "532531", "name": "绿春县" },
                    { "parent": "532500", "value": "532532", "name": "河口瑶族自治县" },
                    { "parent": "532600", "value": "532601", "name": "文山市" },
                    { "parent": "532600", "value": "532622", "name": "砚山县" },
                    { "parent": "532600", "value": "532623", "name": "西畴县" },
                    { "parent": "532600", "value": "532624", "name": "麻栗坡县" },
                    { "parent": "532600", "value": "532625", "name": "马关县" },
                    { "parent": "532600", "value": "532626", "name": "丘北县" },
                    { "parent": "532600", "value": "532627", "name": "广南县" },
                    { "parent": "532600", "value": "532628", "name": "富宁县" },
                    { "parent": "532800", "value": "532801", "name": "景洪市" },
                    { "parent": "532800", "value": "532822", "name": "勐海县" },
                    { "parent": "532800", "value": "532823", "name": "勐腊县" },
                    { "parent": "532900", "value": "532901", "name": "大理市" },
                    { "parent": "532900", "value": "532922", "name": "漾濞彝族自治县" },
                    { "parent": "532900", "value": "532923", "name": "祥云县" },
                    { "parent": "532900", "value": "532924", "name": "宾川县" },
                    { "parent": "532900", "value": "532925", "name": "弥渡县" },
                    { "parent": "532900", "value": "532926", "name": "南涧彝族自治县" },
                    { "parent": "532900", "value": "532927", "name": "巍山彝族回族自治县" },
                    { "parent": "532900", "value": "532928", "name": "永平县" },
                    { "parent": "532900", "value": "532929", "name": "云龙县" },
                    { "parent": "532900", "value": "532930", "name": "洱源县" },
                    { "parent": "532900", "value": "532931", "name": "剑川县" },
                    { "parent": "532900", "value": "532932", "name": "鹤庆县" },
                    { "parent": "533100", "value": "533102", "name": "瑞丽市" },
                    { "parent": "533100", "value": "533103", "name": "芒市" },
                    { "parent": "533100", "value": "533122", "name": "梁河县" },
                    { "parent": "533100", "value": "533123", "name": "盈江县" },
                    { "parent": "533100", "value": "533124", "name": "陇川县" },
                    { "parent": "533300", "value": "533301", "name": "泸水市" },
                    { "parent": "533300", "value": "533323", "name": "福贡县" },
                    { "parent": "533300", "value": "533324", "name": "贡山独龙族怒族自治县" },
                    { "parent": "533300", "value": "533325", "name": "兰坪白族普米族自治县" },
                    { "parent": "533400", "value": "533401", "name": "香格里拉市" },
                    { "parent": "533400", "value": "533422", "name": "德钦县" },
                    { "parent": "533400", "value": "533423", "name": "维西傈僳族自治县" }
                ];
                me.setValue(me.value);
            }, 2000);
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

            if (val === "") return;

            var codes = me.areaCodeSplit(val);
            //丢弃省代号
            codes.shift();
            var select = [];
            //有市号
            if (codes[0] && codes[0] !== "00") {
                select.push(me.provinceCode + codes[0] + "00");
            }
            //有区号
            if (codes[1] && codes[1] !== "00") {
                select.push(me.provinceCode + codes[0] + codes[1]);
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
    },
    destroyed: function () {
        var me = this;
    }
};