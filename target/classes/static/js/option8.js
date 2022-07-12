var chartDom8 = document.getElementById('graph8');
var myChart8 = echarts.init(chartDom8);

$.getJSON("./queryMovieTimeVote",function(values){

    var bufData = []
    for(var i=0;i<values.data.length;i++){
        var jsonData = []
        jsonData[0] = values.data[i]['time']
        jsonData[1] = values.data[i]['vote']
        bufData.push(jsonData)
    }

    let option8 = {
        tooltip: {
            trigger: 'item', // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
            showDelay: 20, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            hideDelay: 100, // 隐藏延迟，单位ms
            transitionDuration: 0.4, // 动画变换时间，单位s
            backgroundColor: 'rgba(255,255,255,0.8)', // 提示背景颜色，默认为透明度为0.7的黑色
            borderColor: 'rgba(41,174,175,0.8)', // 提示边框颜色
            borderWidth: 2, // 提示边框线宽，单位px，默认为0（无边框）
        },
        visualMap: {
            min: 0,
            max: 10,
            dimension: 1,
            orient: 'vertical',
            right: 10,
            top: 'center',
            text: ['HIGH', 'LOW'],
            calculable: true,
            inRange: {
                color: ['#e73232', '#1381ff']
            }
        },
        dataZoom: [
            {
                startValue: '0'
            },
            {
                type: 'inside'
            }
        ],
        xAxis: {
            name: '时长/分钟',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily:'Microsoft YaHei'
            },
            nameGap: 20,					//---坐标轴名称与轴线之间的距离
        },
        yAxis: {
            // scale: true,
            name: '评分',
            nameTextStyle: {				//---坐标轴名称样式
                color: "#000000",
                fontSize: 13,
                fontWeight: 600,
                fontFamily:'Microsoft YaHei'
            },
            nameGap: 25,					//---坐标轴名称与轴线之间的距离
        },
        series: [{
            name: "评分",
            type: "scatter",
            data: bufData,
            symbolSize:5,
        }]
    };
    myChart8.setOption(option8);
})
