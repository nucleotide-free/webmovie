var chartDom = document.getElementById('graph6');
var myChart = echarts.init(chartDom);

$.getJSON("./queryMovieTypeVote",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['type'])
        yAxis.push(values.data[i]['vote'])
    }
    var option;

    option = {
        xAxis: {
            type: 'category',
            axisLabel: {
                interval:0,
                rotate:40 },
            data: xAxis
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                data: yAxis,
                type: 'bar'
            }
        ]
    };
    myChart.setOption(option);
})