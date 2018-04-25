module.exports = {
    pie: {
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal', //标题颜色
                color: '#fff',
            },
            x: 'left',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: ['开机率', '产量'],
            itemWidth: 20, // 图例图形宽度
            itemHeight: 14, // 图例图形高度
            textStyle: {
                color: '#FFF' // 图例文字颜色
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: [],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            name: '开机率(%)',
            yAxisIndex: 1,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            nameTextStyle: {
                color: '#fff'
            }
        }, {
            type: 'value',
            name: '产量(万/㎡)',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            nameTextStyle: {
                color: '#fff'
            }
        }],
        series: [{
            name: '开机率',
            type: 'line',

            // smooth:true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: []
        }, {
            name: '产量',
            type: 'line',
            // smooth:true,,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: []
        }],
        color: ['#79d7c9', '#8cc24a', '#f1c558', '#927ac8', '#e36964', '#e36964', '#ad82a9'],
    },
    pie2: {
        title: {
            text: '',
            subtext: '',
            x: 'left',
            textStyle: {
                fontWeight: 'normal', //标题颜色
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {

        },

        // grid: {y: 70, y2:30, x2:20},
        xAxis: [{
            type: 'category',
            data: [],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false,
            },
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: [],
        }, ],
        yAxis: [{
                type: 'value',
                name: '气(kg/㎡)',
                nameTextStyle: {
                    color: '#fff'
                },
                // axisLabel: {
                //     formatter: '{value} ms'
                // },
                axisLabel: {

                    show: true,
                    textStyle: {
                        color: '#fff'
                    }

                },
                splitLine: {
                    show: false,

                },
            }, {
                type: 'value',
                name: '电(kw·h/㎡)',
                // axisLabel: {
                //     formatter: '{value} ms'
                // },
                axisLabel: {

                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false,

                },
                nameTextStyle: {
                    color: '#fff'
                },
            }

        ],
        splitLine: {
            show: false,

        },
        series: [{
            name: '气',
            type: 'bar',
            // itemStyle: {
            //     normal: {
            //         color: 'rgba(217,20,228,1)',
            //         label: {
            //             show: true
            //         }
            //     }
            // },
            data: [],
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [10, 10, 10, 10]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [10, 10, 10, 10],

                }
            }
        }, {
            name: '电',
            type: 'bar',
            yAxisIndex: 1,
            // itemStyle: {
            //     normal: {
            //         color: 'blue',
            //         label: {
            //             show: true
            //         }
            //     }
            // },
            data: [],
            itemStyle: {
                //柱形图圆角，鼠标移上去效果
                emphasis: {
                    barBorderRadius: [10, 10, 10, 10]
                },
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius: [10, 10, 10, 10],

                }
            }
        }],
        color: ['#cd34d6', '#682fec']
    },
}