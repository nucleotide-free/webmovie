var chartDom4 = document.getElementById('graph4');
var myChart4 = echarts.init(chartDom4);

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
    let option4 = {
        tooltip: {
            trigger: 'item'
        },
        legend: {//图例
            top: 20,
            bottom: 10,
            left: 20,
            orient: 'vertical',
            itemGap: 16,
            itemHeight: 20,
            itemStyle: {
                shadowBlur: 3,
                shadowOffsetX: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            icon:'circle',
            textStyle:{
                color: '#525252',
            }
        },
        label: {
            alignTo: 'edge',
            edgeDistance: '10%',
            formatter: '{b}：{d}%',
            lineHeight: 25
        },
        labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart4.getWidth() / 2;
            const points = params.labelLinePoints;
            points[2][0] = isLeft
                ? params.labelRect.x
                : params.labelRect.x + params.labelRect.width;
            return {
                labelLinePoints: points
            };
        },
        labelLine: {// 图形外文字线
            normal: {
                length: 5,
                length2: 80,
                lineStyle: {
                    color: '#28B1C7'
                }
            }
        },
        series: [
            {
                name: '该国家电影数量',
                type: 'pie',
                radius: '60%',
                data: bufData,
                labelLine: {
                    smooth: 0.2,
                    length: 10,
                    length2: 80
                },
                itemStyle: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    normal: {
                        color: function (colors) {// '#91cd77', '#ef6567', '#f9c956', '#75bedc
                            const colorList = [
                                '#66A4A1',
                                '#9F90C8',
                                '#94C8A8',
                                '#EE6666',
                                '#73C0DE',
                                '#3BA272',
                                '#FC8452',
                                '#9A60B4',
                                '#EA7CCC',
                                '#5470C6',
                                '#91CC75',
                                '#FAC858',
                            ];
                            return colorList[colors.dataIndex];
                        }
                    },
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                },
            }
        ]
    };

    option4 && myChart4.setOption(option4);

})