$(function () {
    chart_type_count.get_data();
    chart_rank.get_data();
    chart_reader_count.get_data();
    chart_fav_author.get_data();
    chart_press.get_data();
    chart_num_by_rank.get_data();
});

var chart_type_count = {
    get_data: function () {
        $.ajax({
            url: "/data/get_type_count",
            type: "GET",
            dataType: "json",
            success: function (data) {
                chart_type_count.render(data);
                // console.log("%s", JSON.stringify(data));
            }
        });
    },
    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_type_count'));

        // var option = {
        //     xAxis: {
        //         type: 'category',
        //         data: data.type,
        //         //data: [260,210,190,170,170]
        //         axisLabel:{interval:0}
        //     },
        //     yAxis: {
        //         type: 'value'
        //     },
        //     series: [{
        //         data: data.percentage,
        //         //data: [260,210,190,170,170],
        //         type: 'bar',
        //         showBackground: true,
        //         backgroundStyle: {
        //             color: 'rgba(220, 220, 220, 0.8)'
        //         }
        //     }]
        // };


        var emphasisStyle = {
            itemStyle: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        };

        var option = {
            backgroundColor: '#ffffff',
            tooltip: {},
            xAxis: {
                data: data.type,
                name: '小说类别',
                axisLine: {onZero: true},
                splitLine: {show: false},
                splitArea: {show: false},
                axisLabel: {
                    interval: 0,
                    rotate: -20
                }
            },
            yAxis: {
                splitArea: {show: false}
            },
            grid: {
                left: 100
            },
            series: [
                {
                    name: '类别',
                    type: 'bar',
                    stack: 'one',
                    emphasis: emphasisStyle,
                    data: data.percentage,
                    itemStyle: {
                        normal: {
                            color: function(params){
                                var colorList=[
                                    '#e6a0c4',
                                    '#c6cdf7',
                                    '#d8a499',
                                    '#7294d4',
                                    '#FFE7BA'
                                ];
                                var index=params.dataIndex%5;
                                return colorList[index];
                            }
                        }
                    }


                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
};
var chart_rank = {
    get_data: function () {
        $.ajax({
            url: "/data/get_rank",
            type: "GET",
            dataType: "json",
            success: function (data) {
                chart_rank.render(data);
                // console.log("%s", JSON.stringify(data));
            }
        });
    },
    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_rank'));

        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    data: data.type,
                    barWidth: 8,
                }
            ],
            series: [
                {
                    name: '评分',
                    type: 'bar',
                    label: {
                        show: false
                    },
                    data: data.rank,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = [
                                    ['#b8b7b6', '#898788'],
                                    // ['#E8E4D8', '#E8E4D8'],
                                    ['#D0CABE', '#B3ABA8'],
                                    // ['#B3ABA8', '#B3ABA8'],
                                    ['#E8E4D8', '#2E3022'],
                                    //   ['#2E3022', '#2e3022'],


                                ];
                                var index = params.dataIndex % 3;

                                return new echarts.graphic.LinearGradient(0, 0, 1, 0,
                                    [{
                                        offset: 0,
                                        color: colorList[index][1]
                                    },
                                        {
                                            offset: 1,
                                            color: colorList[index][0]
                                        }
                                    ]);
                                // barBorderRadius: 5

                            }
                        }
                    }
                }
            ]
        }

        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    },


};
var chart_reader_count = {
    get_data: function () {
        $.ajax({
            url: "/data/get_reader_count",
            type: "GET",
            dataType: "json",
            success: function (data) {
                chart_reader_count.render(data);
                // console.log("%s", JSON.stringify(data));
            }
        });
    },

    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_reader_count'));

        var option = {
            angleAxis: {
                type: 'category',
                data: data.type
            },
            radiusAxis: {},
            polar: {},
            tooltip: {
                show: true,
            },
            dataZoom: {
                type: "inside",
            },
            series: [{
                type: 'bar',
                data: data.reader,
                coordinateSystem: 'polar',
                name: '平均阅读人数',
                stack: 'a',
                itemStyle: {
                    normal: {
                        color: function(params){
                            var colorList=[
                                '#10CF9B',
                                '#7CCA62',
                                '#F49100',
                                '#0F6FC6',
                                '#009DD9',
                                '#0BD0D9'
                            ];
                            var index=params.dataIndex%6;
                            return colorList[index];
                        }
                    }
                }
            }],
        }

        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    },
};
var chart_fav_author = {
    get_data: function () {
        $.ajax({
            url: "/data/get_fav_author",
            type: "GET",
            dataType: "json",
            success: function (data) {
                chart_fav_author.render(data);
                // console.log("%s", JSON.stringify(data));
            }
        });
    },

    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_fav_author'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {c}'
            },
            series: [
                {
                    name: '作家',
                    type: 'pie',
                    radius: [20, 110],
                    roseType: 'radius',
                    label: {
                        show: true
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: data
                },
            ]
        };
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    },
};
var chart_press = {
    get_data: function () {
        $.ajax({
            url: "/data/get_num_by_press",
            type: "GET",
            dataType: "json",
            success: function (data) {
                // console.log("%s", JSON.stringify(data));
                chart_press.render(data)
            }
        });
    },
    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_press'));
        var option = {
            // title: {
            //     text: '按出版社进行数据分析'
            // },
            tooltip: {},
            xAxis: {
                type: 'category',
                data: data.press,
                axisLabel: {
                    interval: 0,//横轴信息全部显示
                    rotate: -20,//-30度角倾斜显示
                }

            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: data.count,
                barWidth: 20,
                label:{
                        show:true
                    },
                itemStyle:{
                    color: function(params){
                        var colorList = [
                            '#c6c6bc',
                            '#e3ddbd',
                            '#d3c2ba',
                            '#869f82',
                        ];
                        var index=params.dataIndex%4;
                        return colorList[index];
                    },

                }
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
};
var chart_num_by_rank = {
    get_data: function () {
        $.ajax({
            url: "/data/get_num_by_rank",
            type: "GET",
            dataType: "json",
            success: function (data) {
                // console.log("%s", JSON.stringify(data));
                chart_num_by_rank.render(data)
            }
        });
    },
    render: function (data) {
        var myChart = echarts.init(document.getElementById('echart_get_num_by_rank'));
        var option = {
            tooltip: {},
            legend: {
                data: ['数量']
            },
            xAxis: {
                type: 'category',
                data: data.rank,
                // axisLine: {
                //            lineStyle: {
                //                color: '#ffffff'
                //            }
                //        }
            },

            yAxis: {
                // type: 'value',
                // axisLine: {
                //            lineStyle: {
                //                color: '#ffffff'
                //            }
                //        }
            },
            toolbox: {
                left: 'right',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '5.7'
            }, {
                type: 'inside'
            }],
            series: [{
                data: data.count,
                type: 'line',
                name: '数量',

            }]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
};
