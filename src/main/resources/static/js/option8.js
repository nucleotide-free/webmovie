var chartDom = document.getElementById('graph8');
var myChart = echarts.init(chartDom);

$.getJSON("./queryMovieTimeVote",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['runtime'])
        yAxis.push(values.data[i]['vote_average'])
    }
    var option;

    option = {
        tooltip: {},
        legend: {
            data: ["评分"]
        },
        xAxis: {
            data: xAxis
        },
        yAxis: {},
        series: [{
            name: "评分",
            type: "scatter",
            data: yAxis
        }]
    };
    myChart.setOption(option);
})
