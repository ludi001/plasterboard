import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './scsj.scss';
import webSocket from '../../../../config/socketClient.js';
import header from '../../img/comp/headbg.png';
let numw=Math.ceil(Math.random()*1000)+'ce';
import FixedContent from 'fengui/component/page/FixedContent.jsx';
let arr=['1k-配料','1k-配料','2k-切断干燥','2k-切断干燥','2k-切断干燥','2k-切断干燥','3k-干板输送','4k-原料','4k-原料','4k-原料','4k-原料','4k-原料','4k-原料','5k-热力','5k-热力','6k-配电室','1k-配料','1k-配料'];
let arr1=['护面纸','淀粉','脱硫石膏','熟石膏粉','天然气','电'];
let xharr=[
            {
                zr:'主线速度表',
                dy:'65.2',
                dn:'m/min',
            },
             {
                zr:'累计纸单耗',
                dy:'2.11',
                dn:'m/m³',
            },
            {
                zr:'干燥机速度',
                dy:'66.5',
                dn:'m/min',
            },
            {
                zr:'当班开机率',
                dy:'95.7',
                dn:'%',
            },
            {
                zr:'累计可开机率',
                dy:'92.7',
                dn:'%',
            },
            {
                zr:'干燥机蒸发量',
                dy:'13221',
                dn:'kg/h',
            },
            {
                zr:'板材单重',
                dy:'6.3',
                dn:'kg',
            },
            {
                zr:'石膏皮带秤流量',
                dy:'33.58',
                dn:'T/h',
            },
            {
                zr:'锤式打散机出口料温2',
                dy:'155.1',
                dn:'℃',
            },
            {
                zr:'连续炒锅出口温度',
                dy:'154.1',
                dn:'℃',
            },
            {
                zr:'排烟SO₂浓度',
                dy:'32.1',
                dn:'mg',
            },
            {
                zr:'排烟氮氧化物浓度',
                dy:'40.2',
                dn:'mg',
            },
            {
                zr:'排烟固体颗粒物浓度',
                dy:'4',
                dn:'mg',
            },
            {
                zr:'瞬时用煤量',
                dy:'3.2',
                dn:'T/h',
            },
            {
                zr:'沸腾炉上温度',
                dy:'920',
                dn:'℃',
            },
            {
                zr:'电单耗',
                dy:'0.45',
                dn:'kwh/m³',
            },
            {
                zr:'配料水流量',
                dy:'15.45',
                dn:'T/H',
            },
            {
                zr:'搅拌水流量',
                dy:'3.03',
                dn:'T/H',
            },
        ]
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
     componentWillUnmount () {
         
       
   
  },
    render() {
        let{newobjdata}=this.props;
        return(
            <FixedContent>
             <div className={styles.pagebox}>
                {/**<div className={styles.header}><img src={header} /></div>**/}
                <div className={styles.tablebox}>
                    <div className={styles.table1}>
                        {/**<div className={styles.title1}><div className={styles.titbox}>生产指标</div></div>**/}
                        <div className={styles.a}>
                            <table>
                                
                                <tbody>
                                   
                                   {
                                    arr.map((value,key)=>{
                                        return(
                                             <tr key={key}>
                                                <td>{value}</td>
                                                <td>{xharr[key].zr}</td>
                                                <td>{xharr[key].dy}</td>
                                                <td>{xharr[key].dn}</td>
                                            </tr>
                                            )
                                    })
                                   }
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                    <div className={styles.table2}>
                        {/**<div className={styles.title2}><div className={styles.titbox}>消耗指标</div></div>**/}
                        <div className={styles.a}>
                            <table>
                                
                                <tbody>
                                   
                                   {
                                    arr.map((value,key)=>{
                                        return(
                                             <tr key={key}>
                                                <td>{value}</td>
                                                <td>{xharr[key].zr}</td>
                                                <td>{xharr[key].dy}</td>
                                                <td>{xharr[key].dn}</td>
                                            </tr>
                                            )
                                    })
                                   }
                                </tbody>
                            </table>
                          
                        </div>
                      
                     
                      
                    </div>
                    
                </div>
                
             </div>
             </FixedContent>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        newobjdata:state.vars.newobjdata,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{
          },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
