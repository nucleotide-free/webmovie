var chartDom3 = document.getElementById('graph3');
var myChart3 = echarts.init(chartDom3);

$.getJSON("/queryMovieTypeTimeNum", function (values) {
    console.log(values)

    //横坐标 所有year
    let yearSet = new Set(values.data.map(i => i.year));
    let yearList = Array.from(yearSet)

    //折线图条数确定
    let TypeSet = new Set(values.data.map(i => i.type));

    let series = [];
    for (let u of TypeSet) {
        // 筛选出该条折线图（该），对应的所有原始数据
        let list = values.data.filter(d => d.type === u);
        // 匹配得到该条折线，对应的所有横轴的值组成的数组
        let _data = yearList.map(d => {
            let num = list.find(item => item.year === d);
            return num ? num.num:0;
        })

        // 将数据组装到series数组，供option配置使用
        series.push({   // 每个快递品牌，对应一条折线图
            name: u,
            type: 'line',
            symbol: 'none',
            data: _data,   // 每个快递品牌，对应的横坐标的值组成的数组

        })
    }


    let option3 = {
        tooltip: {
            trigger: 'axis',
            textStyle:{
                align:'left'
            }
        },
        legend: {//图例
            top: 20,
            bottom: 20,
            left: 40,
            right:40,
            itemHeight:14,
            itemGap: 20,
        },
        grid:{
            top:140,
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: yearList,
            name:'年份/年',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: 'Microsoft YaHei'
            },
            nameGap: 25,					//---坐标轴名称与轴线之间的距离
        },
        yAxis: {
            type: 'value',
            name:'数量/万部',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: 'Microsoft YaHei'
            },
            nameGap: 25,					//---坐标轴名称与轴线之间的距离
        },
        series: series
    }

    myChart3.setOption(option3);
    //this.option.series = series;   // 数据设置

});