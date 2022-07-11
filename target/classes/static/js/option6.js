var chartDom6 = document.getElementById('graph6');
var myChart6 = echarts.init(chartDom6);

$.getJSON("./queryMovieTypeVote",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['type'])
        yAxis.push(values.data[i]['vote'])
    }
    var option6;

    option6 = {
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
    myChart6.setOption(option6);
})