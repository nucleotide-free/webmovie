var chartDom1 = document.getElementById('graph1');
var myChart1 = echarts.init(chartDom1);
var chartDom1_2 = document.getElementById('graph1-2');
var myChart1_2 = echarts.init(chartDom1_2);

$.getJSON("./queryMovieTypeNum",function(values){
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
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line', // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: { // 直线指示器样式设置
                    color: '#48b',
                    width: 2,
                    type: 'solid'
                },
                shadowStyle : { // 阴影指示器样式设置
                    width: 'auto' , // 阴影大小
                    color: 'rgba(150,150,150,0.3)' // 阴影颜色
                }
            }
        },
        grid:{
            show:false,					//---是否显示直角坐标系网格
            bottom:120,						//---相对位置，top\bottom\left\right
            containLabel:false,			//---grid 区域是否包含坐标轴的刻度标签
            tooltip:{					//---鼠标焦点放在图形上，产生的提示框
                show:true,
                trigger:'item',			//---触发类型
                textStyle:{
                    color:'#666',
                },
            }
        },
        xAxis: {
            type: 'category',
            name: '类型',
            data: xAxis,
            axisLabel: {
                show: true,
                rotate:45,
            },
            splitLine: { // 分隔线
                show: false
            },

        },
        yAxis: {
            type: 'value',
            name: '数量',
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
                        color: 'rgba(243,131,73,0.87)' // 选中柱颜色
                    }
                }
            }
        ]
    };
    let option1_2 = {
        title: {
            text: '不同电影类型占比',
            // subtext: 'Fake Data',
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
                name: 'Access From',
                type: 'pie',
                radius: '50%',
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




