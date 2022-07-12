var chartDom1 = document.getElementById('graph1');
var myChart1 = echarts.init(chartDom1);
var chartDom1_2 = document.getElementById('graph1-2');
var myChart1_2 = echarts.init(chartDom1_2);

$.getJSON("/queryMovieTypeNum",function(values){
    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['name'])
        yAxis.push(values.data[i]['num'])
    }
    var bufData = []
    for(var i=0;i<values.data.length;i++){
        var jsonData ={}
        jsonData.value = values.data[i]['num']
        jsonData.name = values.data[i]['name']
        bufData.push(jsonData)
    }
    let option1 = {
        title: {
            text: '不同电影类型的数量',
            x: 'center' ,
            y: 'bottom' ,
            backgroundColor: 'rgba(0,0,0,0)' ,
            padding: 20, // 标题内边距，单位px，默认各方向内边距为5，
            textStyle: {
                fontSize: 20,
                fontWeight: 'bolder' ,
                color: '#333' // 主标题文字颜色
            },
        },
        tooltip: {//提示框
            trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 100, // 隐藏延迟，单位ms
            transitionDuration: 0.4, // 动画变换时间，单位s
            backgroundColor: 'rgba(255,255,255,0.7)', // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: 'rgba(67,185,114,0.81)', // 提示边框颜色
            borderWidth: 2, // 提示边框线宽，单位px，默认为0（无边框）
        },
        grid:{
          bottom: 140,
        },
        xAxis: {
            type: 'category',
            data: xAxis,
            name: '类型',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily:'Microsoft YaHei'
            },
            nameGap: 20,					//---坐标轴名称与轴线之间的距离
            axisLabel: {
                show: true,
                rotate: 45,
            },
            axisTick: {					//---坐标轴 刻度
                show: true,					//---是否显示
                inside: true,				//---是否朝内
                length: 2,					//---长度
                lineStyle: {
                    //color:'red',			//---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
        },
        yAxis: {
            type: 'value',
            name: '数量/万部',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily:'Microsoft YaHei'
            },
            nameGap: 25,					//---坐标轴名称与轴线之间的距离
        },
        series: [
            {
                data: yAxis,
                type: 'bar',
                itemStyle: {
                    borderRadius: [3, 3, 0, 0], // 柱体宽度
                    color: 'rgba(67,185,114,0.81)', // 未选中柱颜色

                },
                emphasis: {
                    itemStyle: {
                        color: 'rgba(14,72,37,0.81)' // 选中柱颜色
                    }
                }
            }
        ]
    };

    let option1_2 = {
        title: {
            text: '不同电影类型占比',
            x: 'center' ,
            y: 'bottom' ,
            backgroundColor: 'rgba(0,0,0,0)' ,
            padding: 20, // 标题内边距，单位px，默认各方向内边距为5，
            textStyle: {
                fontSize: 20,
                fontWeight: 'bolder' ,
                color: '#333' // 主标题文字颜色
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {//图例
            top: 40,
            bottom: 20,
            left: 20,
            orient: 'vertical',
            itemGap: 24,
            itemHeight: 20,
            itemStyle: {
                shadowBlur: 3,
                shadowOffsetX: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            icon:'circle',
            textStyle:{
                color: '#525252',
                // fontStyle:'italic',
                // fontFamily:'Courier New',
            }
        },
        label: {
            alignTo: 'edge',
            edgeDistance: '10%',
            formatter: '{b}：{d}%',
            lineHeight: 25
        },
        labelLine: {
            length: 15,
            length2: 0
        },
        labelLayout: function (params) {
            // myChart是echart实例对象
            const isLeft = params.labelRect.x < myChart1_2.getWidth() / 2;
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
                name: '电影数量',
                type: 'pie',
                data: bufData,
                radius: '60%',
                center: ['50%', '50%'],
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
                                'rgba(12,37,3,0.8)',
                                'rgba(12,52,0,0.8)',
                                'rgba(15,73,0,0.8)',
                                'rgba(15,89,1,0.8)',
                                'rgba(22,108,5,0.8)',

                                '#228B22',
                                'rgba(33,152,9,0.8)',
                                'rgba(62,150,49,0.8)',
                                'rgba(95,178,83,0.8)',
                                '#00C78C',

                                'rgba(16,199,40,0.8)',
                                'rgba(95,222,45,0.8)',
                                'rgba(100,201,89,0.8)',
                                'rgba(136,192,130,0.8)',
                                'rgba(93,157,88,0.8)',

                                '#94C8A8',
                                'rgba(103,211,139,0.8)',
                                'rgba(121,199,106,0.8)',
                                'rgba(136,206,128,0.8)',
                                'rgba(188,239,175,0.8)',

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
            },

        ]
    };
    myChart1.setOption(option1);
    option1_2 && myChart1_2.setOption(option1_2);
})

let btn =document.getElementById("switch1")
btn.onclick=function (){
    if(document.getElementById("graph1").style.display=="block") {
        document.getElementById("graph1").style.display = "none"
        document.getElementById("graph1-2").style.display = "block"
    }else
    {
        document.getElementById("graph1").style.display = "block"
        document.getElementById("graph1-2").style.display = "none"
    }
}




