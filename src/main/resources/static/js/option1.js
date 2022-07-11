var chartDom1 = document.getElementById('graph1');
var myChart1 = echarts.init(chartDom1);

$.getJSON("./queryMovieTypeNum",function(values){
    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['name'])
        yAxis.push(values.data[i]['num'])
    }
    var option1;

    option1 = {
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
    myChart1.setOption(option1);
})


