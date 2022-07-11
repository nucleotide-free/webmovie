var chartDom5 = document.getElementById('graph5');
var myChart5 = echarts.init(chartDom5);

$.getJSON("./queryMovieTypeRevenue",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['type'])
        yAxis.push(values.data[i]['revenue']/10000000)
    }
    var option5;

    option5 = {
        xAxis: {
            type: 'category',
            name: "电影类型",
            axisLabel: {
                interval:0,
                rotate:40 },
            data: xAxis
        },
        yAxis: {
            type: 'value',
            name: "单位（千万美元）",
        },

        series: [
            {
                data: yAxis,
                type: 'bar'
            }
        ]
    };
    myChart5.setOption(option5);
})
