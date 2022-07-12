var chartDom2_1 = document.getElementById('graph2');
var Chart2_1 = echarts.init(chartDom2_1);

var chartDom2_2 = document.getElementById('graph2-2');
var Chart2_2 = echarts.init(chartDom2_2);

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
        }
    }

    let option2_1 = {
        title: {
            text: '电影数量与年份的关系',
            x: 'center' ,
            y: 'bottom' ,
            backgroundColor: 'rgba(0,0,0,0)' ,
            padding: 30, // 标题内边距，单位px，默认各方向内边距为5，
            textStyle: {
                fontSize: 20,
                fontWeight: 'bolder' ,
                color: '#333' // 主标题文字颜色
            },
        },
        tooltip: {//提示框
            trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 80, // 隐藏延迟，单位ms
            transitionDuration: 0.4, // 动画变换时间，单位s
            backgroundColor: 'rgba(255,255,255,0.8)', // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: 'rgba(29,76,105,0.81)', // 提示边框颜色
            borderWidth: 2, // 提示边框线宽，单位px，默认为0（无边框）
        },
        xAxis: {
            type: 'category',
            data: xAxis,
            name: '年份/年',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily:'Microsoft YaHei'
            },
            nameGap: 20,					//---坐标轴名称与轴线之间的距离
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
        grid:{
            bottom:100,
        },
        series: [
            {
                data: yAxis,
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    color: 'rgba(46,107,143,0.81)', // 未选中柱颜色

                },
            },
            {
                data: yAxis,
                type: 'bar',
                itemStyle: {
                    borderRadius: [3, 3, 0, 0], // 柱体宽度
                    color: 'rgba(35,150,206,0.8)', // 未选中柱颜色

                },// '#91cd77', '#ef6567', '#f9c956', '#75bedc
                emphasis: {
                    itemStyle: {
                        color: 'rgba(31,150,53,0.8)' // 选中柱颜色
                    }
                }
            },
        ]
    };
    Chart2_1.setOption(option2_1);

    var xAxis2 = ['1950年前']
    var yAxis2 = [0]
    for(var i =1951 ;i<2021;i += 5){
        var str = i.toString() + "-" + (i+4).toString()
        xAxis.push(str)
        yAxis.push(0)
    }
    for(var i=0;i<values.data.length;i++){
        var year = parseInt(values.data[i]['year'])
        var revenue = values.data[i]['revenue']
        if(year < 1950){
            yAxis[0] += revenue
        }else{
            yAxis[(year-1951)/5+1] += revenue
        }
    }

    let option2_2 = {
        xAxis: {
            type: 'category',
            axisLabel: {
                interval:0,
            },
            data: xAxis2
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                data: yAxis2,
                type: 'bar'
            }
        ]
    };
    Chart2_2.setOption(option2_2);
})