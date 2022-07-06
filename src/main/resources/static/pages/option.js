let demo1 = echarts.init(document.getElementById("demo1"));
let demo2 = echarts.init(document.getElementById("demo2"));
let demo3 = echarts.init(document.getElementById("demo3"));
let demo4 = echarts.init(document.getElementById("demo4"));
let demo6 = echarts.init(document.getElementById("demo6"));

$.getJSON("./queryProductResultList",function(values) {

    var x = []
    var y = []
    var bufData=[]
    for(var i=0;i<values.data.length;i++){
        var jsonData={}
        x.push(values.data[i]['commenthour'])
        y.push(values.data[i]['commenttotal'])

        jsonData.value=values.data[i]['commenttotal']
        jsonData.name= values.data[i]['commenthour']
        bufData.push(jsonData)
    }
    console.log(bufData)
    let option1 = {
        title: {
            text: "柱状图"
        },
        xAxis: {
            type: 'category',
            data:x
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: y,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };

    let option2 = {
        title: {
            text: "饼状图"
        },
        tooltip: {},
        legend: {
            data: ["销量"]
        },
        series: [{
            type: "pie",
            data: bufData,
        }]
    };

    let option3 = {
        title: {
            text: "折线图"
        },
        tooltip: {},
        legend: {
            data: ["评论分析"]
        },
        xAxis: {
            data: x
        },
        yAxis: {},
        series: [{
            name: "评论分析",
            type: "line",
            data: y
        }]
    };

    let option4 = {
        title: {
            text: "散点图"
        },
        tooltip: {},
        legend: {
            data: ["评论分析"]
        },
        xAxis: {
            data: x
        },
        yAxis: {},
        series: [{
            name: "评论分析",
            type: "scatter",
            data: y
        }]
    };

    var num1=0//0-8点总数
    var json1=[]//0-8点json
    var num2=0
    var json2=[]
    var num3=0
    var json3=[]

    for(var i=0;i<bufData.length;i++){
        var jsonData={}
        if(i<8){
            num1+=bufData[i].value
            jsonData=bufData[i]
            json1.push(jsonData)
        }else if(i<16){
            num2+=bufData[i].value
            jsonData=bufData[i]
            json2.push(jsonData)
        }else{
            num3+=bufData[i].value
            jsonData=bufData[i]
            json3.push(jsonData)
        }

    }
    console.log("num1"+num1)
    console.log("num2"+num2)
    console.log("num3"+num3)
    console.log("json1"+json1)
    console.log("json2"+json2)
    console.log("json3"+json3)
    let option6 = {
        title: {
            text: "旭日图"
        },
        tooltip: {},
        legend: {
            data: ["评论分析"]
        },
        series: [{
            type: "sunburst",
            data: [{
                value: num1,
                name: "16-23点",
                //该类下的子类型
                children: json1
            }, {
                value: num2,
                name: "08-15点",
                children: json2
            }, {
                value: num3,
                name: "00-07点",
                children: json3
            }]
        }]
    };

    option1 && demo1.setOption(option1);
    // demo1.setOption(option1);
    demo2.setOption(option2);
    demo3.setOption(option3);
    demo4.setOption(option4);
    demo6.setOption(option6);
})

