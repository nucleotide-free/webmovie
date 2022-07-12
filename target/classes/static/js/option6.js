var chartDom6 = document.getElementById('graph6');
var myChart6 = echarts.init(chartDom6);

$.getJSON("./queryMovieTypeVote",function(values){

    var xAxis = []
    var yAxis = []
    for(var i=0;i<values.data.length;i++){
        xAxis.push(values.data[i]['type'])
        yAxis.push(values.data[i]['vote'])
    }
    let option6 = {
        tooltip: {//提示框
            trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 100, // 隐藏延迟，单位ms
            transitionDuration: 0.4, // 动画变换时间，单位s
            backgroundColor: 'rgba(255,255,255,0.8)', // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: 'rgba(229,206,12,0.8)', // 提示边框颜色
            borderWidth: 2, // 提示边框线宽，单位px，默认为0（无边框）
        },
        grid:{
            bottom: 100,
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
            name: '电影评分',
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
                    color: 'rgba(229,206,12,0.8)', // 未选中柱颜色

                },
                emphasis: {
                    itemStyle: {
                        color: 'rgba(185,158,32,0.8)' // 选中柱颜色
                    }
                }
            }
        ]
    };
    myChart6.setOption(option6);
})