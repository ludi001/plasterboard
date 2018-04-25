import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './yj.scss';
import webSocket from '../../../../config/socketClient.js';
import data from './initdata/echart.js';
import FixedContent from 'fengui/component/page/FixedContent.jsx';
let numw=Math.ceil(Math.random()*1000)+'ce';
let arr=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
     componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_alarm',numw,function(){},false);
   
  },
    render() {
        let {alarmlist} = this.props;
        return(
            <FixedContent>
             <div className={styles.pagebox}>
             <div className={styles.pagebox1}>
               <div className={styles.titlename}>预警</div>
                <table className={styles.tabbox} cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th style={{width:'10%'}}>机器编号</th>
                            <th style={{width:'50%'}}>报警描述</th>
                            <th style={{width:'20%'}}>报警点名</th>
                            <th style={{width:'20%'}}>开始时间</th>
                          
                            
                        </tr>
                    </thead>
                   
                </table>
                <div style={{width:'98%',height:'560px',overflow:'auto',margin:'auto'}}>
                <table className={styles.tabbox} cellSpacing="0" cellPadding="0" style={{width:'100%'}}>
                     <tbody>
                     {
                        alarmlist&&alarmlist.map((value,key)=>{
                            if(value.isAlarm==0){
                            return(
                                <tr key={key}>
                                    <td style={{width:'10%'}}>{value.plc}</td>
                                    <td style={{width:'50%'}}>{value.content}</td>
                                    <td style={{width:'20%'}}>{value.pointName}</td>
                                    <td style={{width:'20%'}}>{value.date}</td>
                               
                                </tr>
                                )
                            }
                        })
                     }
                        
                    </tbody>
                </table>
                </div>
                <div className={styles.piebox}>
                    <div className={styles.pie}>
                        <div className={styles.smtit}>
                        <a>1-5点报警</a>
                        </div>
                        <div className={styles.cloumn} id='yjpie'></div>
                    </div>
                    <div className={styles.pie} style={{float:'right'}}>
                     <div className={styles.smtit}><a>指标统计</a></div>
                      <div className={styles.cloumn} id='zbpie'></div>
                    </div>
                </div>
                <div className={styles.piebox}>
                    <div className={styles.pie} style={{width:'100%'}}>
                        <div className={styles.smtit}>
                        <a>报警占比</a>
                        </div>
                        <div className={styles.cloumn1} id='pie1'></div>
                        <div className={styles.cloumn1} id='pie2'></div>
                        <div className={styles.cloumn1} id='pie3'></div>
                        <div className={styles.cloumn1} id='pie4'></div>
                    </div>
                    {/*<div className={styles.pie} style={{float:'right',width:'29%'}}>
                     <div className={styles.smtit}><a>指标统计</a></div>
                     <div className={styles.cloumn} id='zbpie1'></div>
                    </div>*/}
                </div>
             </div>
             </div>
            </FixedContent>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
    alarmlist:state.vars.alarmlist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{
                webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_alarm',numw,success,true);
                 function success(index,res){

                    console.log(4444,JSON.parse(res))
                    let arr=JSON.parse(res);
                    dispatch(actions.setVars('alarmlist',arr.table))



                    let myChart = echarts.init(document.getElementById('yjpie'));
                    data.pie.series[0].data[0].value=arr.alarmType['1'];
                    data.pie.series[0].data[1].value=arr.alarmType['2'];
                    data.pie.series[0].data[2].value=arr.alarmType['3'];
                    data.pie.series[0].data[3].value=arr.alarmType['4'];
                    data.pie.series[0].data[4].value=arr.alarmType['5'];
                    myChart.setOption(data.pie);

                      let myChart1 = echarts.init(document.getElementById('zbpie'));
                      data.pie.series[0].data[0].value=arr.plcAlarmCount.plc1;
                      data.pie.series[0].data[1].value=arr.plcAlarmCount.plc2;
                      data.pie.series[0].data[2].value=arr.plcAlarmCount.plc3;
                      data.pie.series[0].data[3].value=arr.plcAlarmCount.plc4;

                    myChart1.setOption(data.pie1);



                 }


           
             let myChart2 = echarts.init(document.getElementById('pie1'));
              data.pie2.title.text='一控';
            myChart2.setOption(data.pie2);

            let myChart3 = echarts.init(document.getElementById('pie2'));
            data.pie2.series[0].itemStyle.normal.color='#5fb2c4';
            data.pie2.title.text='二控';
            myChart3.setOption(data.pie2);

            let myChart4 = echarts.init(document.getElementById('pie3'));
            data.pie2.series[0].itemStyle.normal.color='#808e9b';
            data.pie2.title.text='三控';
            myChart4.setOption(data.pie2);

            let myChart5 = echarts.init(document.getElementById('pie4'));
            data.pie2.series[0].itemStyle.normal.color='#ca9b87';
            data.pie2.title.text='炒料';
            myChart5.setOption(data.pie2);

            //  let myChart6 = echarts.init(document.getElementById('zbpie1'));
            // myChart6.setOption(data.pie1);

            
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
