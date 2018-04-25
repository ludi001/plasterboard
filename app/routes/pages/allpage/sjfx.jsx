import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './sjfx.scss';
import Chart from './comp/manap.jsx';
import webSocket from '../../../../config/socketClient.js';
let numw=Math.ceil(Math.random()*1000)+'ce';
import FixedContent from 'fengui/component/page/FixedContent.jsx';
let arr=['开机率','合格率','投入产出率','产量'];
let arr1=['护面纸','淀粉','脱硫石膏','熟石膏粉','天然气','电'];
let xharr=[
            {
                zr:'{zzlist.data.yes[0].PROTECTIVEPAPER}g/㎡',
                dy:'356.76g/㎡',
                dn:'356.76g/㎡',
            },
             {
                zr:'22.54g/㎡',
                dy:'21.66g/㎡',
                dn:'21.66g/㎡',
            },
            {
                zr:'7.67kg/㎡',
                dy:'6.76kg/㎡',
                dn:'6.76kg/㎡',
            },
            {
                zr:'5.62kg/㎡',
                dy:'6.46kg/㎡',
                dn:'6.46kg/㎡',
            },
            {
                zr:'0.45立方米',
                dy:'0.7645立方米',
                dn:'0.7645立方米',
            },
            {
                zr:'0.43kw·h/㎡',
                dy:'0.76kw·h/㎡',
                dn:'0.76kw·h/㎡',
            },
        ]
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
     componentWillUnmount () {
         
       
   
  },
    render() {
        let{newobjdata,zzlist,lineData,columnData}=this.props;
        //console.log(11111111)
        //console.log(zzlist,'1');
            let flag=zzlist ? zzlist.data.yes[0] ? true:false :false;
            let flag1=zzlist ? zzlist.data.mon[0] ? true:false :false;
            let flag2=zzlist ? zzlist.data.year[0] ? true:false :false;
               
        return(
            <FixedContent>
             <div className={styles.pagebox}>
                <div className={styles.tablebox}>
                    <div className={styles.table1}>
                        <div className={styles.title1}>
                            <div className={styles.titbox}>生产指标</div>
                        </div>
                        <div className={styles.a}>
                            <table>
                                <thead>
                                     <tr>
                                        <th>名称</th>
                                        <th>昨日</th>
                                        <th>当日</th>
                                        <th>当月</th>
                                        <th>当年</th>
                                    </tr>
                                </thead>
                                
                                {

                                    zzlist&&
                                <tbody>
                                 
                                    <tr>
                                        <td>开机率</td>
                                        <td>{flag&&zzlist.data.yes[0].MACHINE}%</td>
                                        <td></td>
                                        <td>{flag1&&zzlist.data.mon[0].MONMACHINE}%</td>
                                        <td>{flag2&&zzlist.data.year[0].YEARMACHINE}%</td>
                                    </tr>
                                
                                     <tr>
                                        <td>合格率</td>
                                        <td>{flag&&zzlist.data.yes[0].PASSRATE}%</td>
                                        <td></td>
                                        <td>{flag1&&zzlist.data.mon[0].MONPASSRATE}%</td>
                                        <td>{flag2&&zzlist.data.year[0].YEARPASSRATE}%</td>
                                    </tr>
                                     <tr>
                                        <td>投入产出率</td>
                                        <td>{flag&&zzlist.data.yes[0].INOUTRATE}%</td>
                                        <td></td>
                                        <td>{flag1&&zzlist.data.mon[0].MONINOUTRATE}%</td>
                                        <td>{flag2&&zzlist.data.year[0].YEARINOUTRATE}%</td>
                                    </tr>
                                     <tr>
                                        <td>产量</td>
                                        <td>{flag&&zzlist.data.yes[0].PRODUCTION}万㎡</td>
                                        <td></td>
                                        <td>{flag1&&zzlist.data.mon[0].MONPRODUCTION}万㎡</td>
                                        <td>{flag2&&zzlist.data.year[0].YEARPRODUCTION}万㎡</td>
                                    </tr>
                                       
                                </tbody>
                                }
                            </table>
                        </div>
                       
                    </div>
                    <div className={styles.table2}>
                        <div className={styles.title2}>
                            <div className={styles.titbox}>消耗指标</div>
                        </div>
                        <div className={styles.a}>
                            <table>
                                <thead>
                                     <tr>
                                        <th>名称</th>
                                        <th>昨日</th>
                                        <th>当月</th>
                                        <th>当年</th>
                                    </tr>
                                </thead>
                                {
                                    zzlist&&
                                <tbody>
                                   
                                   
                                    
                                        
                                             <tr>
                                                <td>护面纸</td>
                                                <td>{flag&&zzlist.data.yes[0].PROTECTIVEPAPER}g/㎡</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONPROTECTIVEPAPER}g/㎡</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARPROTECTIVEPAPER}g/㎡</td>
                                            </tr>
                                            <tr>
                                                <td>淀粉</td>
                                                <td>{flag&&zzlist.data.yes[0].STARCH}g/㎡</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONSTARCH}g/㎡</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARSTARCH}g/㎡</td>
                                            </tr>
                                            <tr>
                                                <td>脱硫石膏</td>
                                                <td>{flag&&zzlist.data.yes[0].DESGYPSUM}kg/㎡</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONDESGYPSUM}kg/㎡</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARDESGYPSUM}kg/㎡</td>
                                            </tr>
                                            <tr>
                                                <td>熟石膏粉</td>
                                                <td>{flag&&zzlist.data.yes[0].GYPSUMPOWDER}kg/㎡</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONGYPSUMPOWDER}kg/㎡</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARGYPSUMPOWDER}kg/㎡</td>
                                            </tr>
                                            <tr>
                                                <td>天然气</td>
                                                <td>{flag&&zzlist.data.yes[0].GAS}立方米</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONGAS}立方米</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARGAS}立方米</td>
                                            </tr>
                                            <tr>
                                                <td>电</td>
                                                <td>{flag&&zzlist.data.yes[0].ELECTRICITY}kw·h/㎡</td>
                                                <td>{flag1&&zzlist.data.mon[0].MONELECTRICITY}kw·h/㎡</td>
                                                <td>{flag2&&zzlist.data.year[0].YEARELECTRICITY}kw·h/㎡</td>
                                            </tr>
                                          
                                   
                                </tbody>
                                }
                            </table>
                          
                        </div>
                      
                     
                      
                    </div>
                    
                </div>
                <Chart lineData={lineData} columnData={columnData} />
             </div>
             </FixedContent>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        newobjdata:state.vars.newobjdata,
        zzlist:state.vars.zzlist,
        columnData:state.vars.columnData,
        lineData:state.vars.lineData,
    }
}

const mapDispatchToProps = (dispatch) => {
    const getlist=function(page,boll){        
        let obj={
            
        }
        Clajax('/web/formInfoService','post',obj,function(data,bol){
            if(bol){
                let D=JSON.parse(data);
                console.log(3,D);
                let lineData={
                    day:[],
                    left:[],
                    right:[]
                };
                let column={
                    mon:[],
                    left:[],
                    right:[]
                };
                for(let i=0;i<D.data.single1.length;i++){
                    lineData.day.push(D.data.single1[i].DATE);
                    lineData.left.push(D.data.single1[i].MACHINE);
                    lineData.right.push(D.data.single1[i].PRODUCTION);
                };
                for(let i=0;i<D.data.single2.length;i++){
                    column.mon.push(D.data.single2[i].DATE);
                    column.left.push(D.data.single2[i].GAS);
                    column.right.push(D.data.single2[i].ELECTRICITY);
                };
                // console.log(columnData,'7878')
                dispatch(actions.setVars('zzlist',D));
                dispatch(actions.setVars('lineData',lineData));
                dispatch(actions.setVars('columnData',column));
            }
        })
    }
    return {
        init:()=>{
            getlist(1,true)
          },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
