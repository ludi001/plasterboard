module.exports = {
    lineobj: {
        title: {
            text: '年度健康指数变化趋势',
            x: 'center',
            top: 35,
            textStyle: {
                fontSize: 15,
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2013年', '2014年', '2015年', '2016年', '2017年']
        },
        yAxis: {
            type: 'value',
            min: 700,
            max: 950,
            axisLabel: {
                formatter: '{value} kPa'
            }
        },
        series: [{
                name: '健康指数',
                type: 'line',
                data: [750, 740, 830, 900, 930],
                markPoint: {
                    data: [{
                        type: 'max',
                        name: '最大值'
                    }, {
                        type: 'min',
                        name: '最小值'
                    }]
                },
                markLine: {
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                }
            }

        ]
    },
    pie: {
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['未上电', '无控制电源', '非自动运行', '启动未回馈', '无响应'],
            textStyle: {
                color: '#fff',
                fontSize: 23,
            }
        },
        series: [{
            name: '状态占比',
            type: 'pie',
            radius: '55%',
            center: ['50%', '58%'],
            data: [{
                value: 335,
                name: '未上电'
            }, {
                value: 310,
                name: '无控制电源'
            }, {
                value: 234,
                name: '非自动运行'
            }, {
                value: 135,
                name: '启动未回馈'
            }, {
                value: 1548,
                name: '无响应'
            }],
            label: {
                normal: {
                    fontSize: 20,
                }

            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

        }],
        color: ['#79d7c9', '#8cc24a', '#f1c558', '#927ac8', '#e36964', '#e36964', '#ad82a9'],
    },
    pie1: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            textStyle: {
                color: '#fff',
                fontSize: 23,
            },
            data: ['PLC1', 'PLC2', 'PLC3', 'PLC4']
        },
        series: [{
            name: '占比',
            type: 'pie',
            radius: ['35%', '65%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    fontSize: 20,
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [

                {
                    value: 234,
                    name: 'PLC1'
                }, {
                    value: 135,
                    name: 'PLC2'
                }, {
                    value: 1548,
                    name: 'PLC3'
                }, {
                    value: 1548,
                    name: 'PLC4'
                }
            ]
        }],
        color: ['#ba2f58', '#c79d3b', '#b5e3f0', '#e36964', '#e36964', '#e36964', '#ad82a9'],
    },

    pie2: {
        title: {
            text: 'xxx',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc',
                fontWeight: 'normal',
                fontSize: 23,
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [{
            name: '报警占比',
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            data: [{
                value: 335,
                name: ''
            }, {
                value: 310,
                name: ''
            }, {
                value: 274,
                name: ''
            }, {
                value: 235,
                name: ''
            }, {
                value: 400,
                name: ''
            }].sort(function(a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
                show: false,
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 0,
                    length2: 0
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }],

    }
}