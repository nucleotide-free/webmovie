var chartDom = document.getElementById('graph7');
var myChart = echarts.init(chartDom);

$.getJSON("./queryMovieTimeRevenue", function (values) {

    var xAxis = []
    var yAxis = []
    for (var i = 0; i < values.data.length; i++) {
        xAxis.push(values.data[i]['runtime'])
        yAxis.push(values.data[i]['revenue'])
    }
    var option;

    option = {
        tooltip: {},
        legend: {
            data: ["票房"]
        },
        xAxis: {
            data: xAxis
        },
        yAxis: {},
        series: [{
            name: "票房",
            type: "scatter",
            data: yAxis
        }]
    };
    myChart.setOption(option);
})
