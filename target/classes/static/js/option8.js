var chartDom8 = document.getElementById('graph8');
var myChart8 = echarts.init(chartDom8);

$.getJSON("./queryMovieTimeVote",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['time'])
        yAxis.push(values.data[i]['vote'])
    }
    var option8;

    option8 = {
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
    myChart8.setOption(option8);
})
