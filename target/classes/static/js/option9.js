
var chart = echarts.init(document.getElementById('graph9'));
$.getJSON("/queryKeywords",function(values) {
    var bufData = []
    for (var i = 0; i < values.data.length; i++) {
        var jsonData = {}
        jsonData.name = values.data[i]['name']
        jsonData.value = values.data[i]['value']
        bufData.push(jsonData)
    }
    var maskImage = new Image();

    var option9 = {
        series: [ {
            type: 'wordCloud',
            sizeRange: [4, 150],
            rotationRange: [0, 0],
            gridSize: 0,
            shape: 'pentagon',
            maskImage: maskImage,
            drawOutOfBound: false,
            keepAspect: true,
            textStyle: {
                fontWeight: 'bold',
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 200) + 50,
                        Math.round(Math.random() * 50),
                        Math.round(Math.random() * 50) + 50
                    ].join(',') + ')';
                }
            },
            emphasis: {
                textStyle: {
                    color: '#528'
                }
            },
            data: bufData.sort(function (a, b) {
                return b.value  - a.value;
            })
        } ]
    };
    maskImage.onload = function () {
        option9.series[0].maskImage
        chart.setOption(option9);
    }
    maskImage.src = '../pages/logo.png';
    window.onresize = function () {
        chart.resize();
    }
})