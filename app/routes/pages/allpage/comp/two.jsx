import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
var ReactHighcharts = require('react-highcharts');

let Component = React.createClass({
    componentWillMount() {
    },

    render() {
        let {}=this.props;
        let configPie = {
            chart: {
                type: 'column',
                backgroundColor: "rgba(46, 46, 65, 0)",
                plotBackgroundColor: "rgba(46, 46, 65, 0)",
                plotBorderWidth: 0,
                borderWidth: 0,
                height:300,
                plotShadow: false,
                reflow:true,
                marginTop: 20,
            },
            title:{
                text: ''
            },
            tooltip:{

            },
            xAxis:{
                categories: ['累计', '累计', '累计', '累计', '累计']
            },
            yAxis:{
                title:{
                    enabled:false
                },
            },
            legend: {
                enabled:false
            },
            plotOptions:{
                column: {
                    stacking: 'normal',
                    borderRadius:3,
                    borderColor:'',
                    pointWidth:30,
                },
              
            },
            series: [{
                name: '小张',
                data: [5, 3, 4, 7, 2],
                color:'#621bd1',
                stack: 'male'
            }, {
                name: '小潘',
                data: [3, 4, 4, 2, 5],
                color:'#9d60e9',
                stack: 'male'
            }, {
                name: '小彭',
                data: [2, 5, 6, 2, 1],
                stack: 'female',
                color:'#c6281c',
            }, {
                name: '小王',
                data: [3, 0, 4, 4, 3],
                stack: 'female',
                color:'#dc6b63'
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
