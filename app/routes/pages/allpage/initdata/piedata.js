module.exports = {
  piebox: {
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
      left: 'left',
      // data: ['最佳状态', '平均风险', '风险程度']
    },
    series: [{
      name: '最佳状态',
      type: 'pie',
      radius: '45%',
      center: ['50%', '60%'],
      data: [{
        value: 560,
        name: '最佳状态'
      }, {
        value: 1543,
        name: '平均风险'
      }, {
        value: 5473,
        name: '风险程度'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: '#353630'
        }
      }
    }]
  },
  //
  lineOption: {
    title: {
      text: '',
      subtext: ''
    },
    tooltip: {
      // trigger: 'axis'
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
        formatter: '{value} kPa',
        fontSize: 10,
      }
    },
    grid: [{
      width: '80%'
    }, {

    }],
    series: [{
      name: '',
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
    }]
  },
  lineOption1: {
    title: {
      text: '',
      subtext: ''
    },
    tooltip: {
      // trigger: 'axis'
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
        formatter: '{value} KW'
      }
    },
    grid: [{
      width: '80%'
    }, {

    }],
    series: [{
      name: '',
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
    }]
  }


}