var chartDom2 = document.getElementById('graph2');
var Chart2_1 = echarts.init(chartDom2);

$.getJSON("./queryMovieYearNum",function(values){

    var xAxis = ['1900年前']
    var yAxis = [0]
    for(var i =1901 ;i<2021;i += 10){
        var str = i.toString() + "-" + (i+9).toString()
        xAxis.push(str)
        yAxis.push(0)
    }
    for(var i=0;i<values.data.length;i++){
        var year = parseInt(values.data[i]['year'])
        var num = values.data[i]['num']
        if(year < 1900){
            yAxis[0] += num
        }else{
            yAxis[(year-1901)/10+1] += num
            // xAxis.push(year.toString())
            // yAxis.push(num)
        }
    }

    let option2_1;
    option2_1 = {
        xAxis: {
            type: 'category',
            axisLabel: {
                interval:0,
                // rotate:40
            },
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
    Chart2_1.setOption(option2_1);
})