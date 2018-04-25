import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {}=this.props;
         let actualWidth = Math.min(1920, $(window).width())*100/1920;
        let configPie = {
            chart: {
                type: 'area',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:4.6*actualWidth,
                plotShadow: false,
                reflow:true,
                marginTop: 10,
                // marginRight: 100
            },
            title:{
                text: ''
            },
            tooltip:{

            },
            xAxis:{
                crosshair: true,
            },
            yAxis:[{
                title:{
                    enabled:false
                },
                lineWidth: 1,
                 title: {
                    text: '开机率',
                    align: 'high',
                    style:{
                        color:'#fff'
                    }
                }
            },{
                title:{
                    enabled:false
                },
                lineWidth: 1,
                opposite: true,
                 title: {
                    text: '产量',
                    align: 'high',
                     style:{
                        color:'#fff'
                     }
                }
            },],
            legend:{
                 layout: 'vertical',
                floating: true,
               align: 'right',
               verticalAlign: 'top',
               x: 0,
               y: -10,
               itemStyle:{
                color:'#fff'
               }
            //    marginTop: 10,
        //    itemMarginTop: 5,  //上下间距
        //    itemMarginBottom: 5,  //上下间距
        //    symbolPadding: 15,  //标志间距
        //    // symbolWidth:10,//标志间距
            },
            plotOptions:{
                area:{
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                },
               
            },
            series: [{
                name: '开机率',
                data: [20,40,90,140,200,240,340],
                color:'#564886',
            },{
                name: '产量',
                data: [20,40,90,140,200,240,340],
                color:'#4443ba',
                yAxis: 1,
            }
        ],
            credits: {
                enabled: false //不显示highCharts版权信息
            },
            
        };
        return (
            <ReactHighcharts config={configPie}/>
        );
    }
});


const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
