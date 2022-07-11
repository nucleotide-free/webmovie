var chartDom = document.getElementById('graph3');
var myChart = echarts.init(chartDom);

$.getJSON("./queryMovieTypeTimeNum", function (values) {
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
            data: _data,   // 每个快递品牌，对应的横坐标的值组成的数组
        })
    }


    let option3 = {
        tooltip: {},
        legend: {
        },
        xAxis: {
            type: 'category',
            data: yearList
        },
        yAxis: {
            type: 'value'
        },
        series: series
    }

    myChart.setOption(option3);
    //this.option.series = series;   // 数据设置

});