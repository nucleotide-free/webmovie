var chartDom7 = document.getElementById('graph7');
var myChart7 = echarts.init(chartDom7);

$.getJSON("./queryMovieTimeRevenue", function (values) {

    var xAxis = []
    var yAxis = []
    for (var i = 0; i < values.data.length; i++) {
        xAxis.push(values.data[i]['time'])
        yAxis.push(values.data[i]['revenue'])
    }
    let option7 = {
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
    myChart7.setOption(option7);
})
