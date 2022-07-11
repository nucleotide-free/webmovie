var chartDom = document.getElementById('graph4');
var myChart = echarts.init(chartDom);

$.getJSON("./queryMovieAreaNum",function(values){

    var bufData = []
    var othersData = {}
    othersData.name = "others"
    othersData.value = 0;
    for(var i=0;i<values.data.length;i++){
        var num = values.data[i]['num']
        if(num < 600)
            othersData.value += num;
        else {
            var jsonData ={}
            jsonData.value = values.data[i]['num']
            jsonData.name = values.data[i]['name']
            bufData.push(jsonData)
        }
    }
    bufData.push(othersData)
    option = {
        title: {
            text: '各地区电影数量比例',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '此地区电影占比',
                type: 'pie',
                radius: '40%',
                data: bufData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);

})