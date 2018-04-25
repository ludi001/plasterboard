import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './cl.scss';
import Motor2 from './comp/motor2.jsx';
import Run from './comp/run.jsx';
import webSocket from '../../../../config/socketClient.js';
import jiantou2 from '../../img/comp/jiantou.png';
let numw=Math.ceil(Math.random()*1000)+'oe';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
       componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw,function(){},false);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw+'t',function(){},false);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/AB_json',numw+'m',function(){},false);
  },
    render() {
        let {M44750ZSC,M44450ZSC,abjson,plc2json,gojhcj} = this.props;
        console.log(99999999999999,abjson);
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>
                            {M44750ZSC==0 && <div><Motor2 /></div>}
                            {M44750ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        
                    </div>
                    <div className={styles.ljll}>{/**累计料量:**/}<span>{abjson&&abjson['F8:1']} t</span> </div>
                    <div className={styles.pdcll}>{/**皮带秤流量:**/}<span>{abjson&&abjson['F11:13']} t/h</span> </div>
                    <div className={styles.pdczl}>{/**皮带秤重量:**/}<span>{abjson&&abjson['F11:14']} kg</span> </div>
                    <div className={styles.pdc}>{/**皮带秤11H02:**/}<span>{abjson&&abjson['F11:8']} Hz</span> </div>
                    <div className={styles.trqfmkd}>{/**天燃气阀门开度:**/}<span>{abjson&&abjson['F11:10']} %</span> </div>
                    <div className={styles.gffmkd}>{/**鼓风风门开度:**/}<span>{abjson&&abjson['F11:15']} %</span> </div>
                    <div className={styles.hffkd}>{/**回风阀开度:**/}<span>{abjson&&abjson['F11:16']} %</span> </div>
                    <div className={styles.hfwd}>{/**回风温度:**/}<span>{abjson&&abjson['F11:21']} ℃</span> </div>
                    <div className={styles.rsqckwd}>{/**燃烧器出口温度:**/}<span>{abjson&&abjson['F11:17']} ℃</span> </div>
                    <div className={styles.rsqwd}>{/**燃烧器温度:**/}<span>{abjson&&abjson['F11:20']} ℃</span> </div>
                    <div className={styles.dsc1qgd}>{/**电收尘1区给定:**/}<span>{abjson&&abjson['F11:45']} %</span> </div>
                    <div className={styles.dsc2qgd}>{/**电收尘2区给定:**/}<span>{abjson&&abjson['F11:46']} %</span> </div>
                    <div className={styles.dsc3qgd}>{/**电收尘3区给定:**/}<span>{abjson&&abjson['F11:47']} %</span> </div>
                    <div className={styles.dscckyl}>{/**电收尘出口压力:**/}<span>{abjson&&abjson['F11:56']} Pa</span> </div>
                    <div className={styles.csdsjdl}>{/**锤式打散机电流:**/}<span>{abjson&&abjson['F11:11']} A</span> </div>
                    <div className={styles.dsc1qecdy}>{/**电收尘1区二次电压:**/}<span>{abjson&&abjson['N9:43']} </span> </div>
                    <div className={styles.dsc2qecdy}>{/**电收尘2区二次电压:**/}<span>{abjson&&abjson['N9:44']} </span> </div>
                    <div className={styles.dsc3qecdy}>{/**电收尘3区二次电压:**/}<span>{abjson&&abjson['N9:45']} KV</span> </div>
                    <div className={styles.dsc1qecdl}>{/**电收尘1区二次电流:**/}<span>{abjson&&abjson['N9:40']} </span> </div>
                    <div className={styles.dsc2qecdl}>{/**电收尘2区二次电流:**/}<span>{abjson&&abjson['N9:41']} </span> </div>
                    <div className={styles.dsc3qecdl}>{/**电收尘3区二次电流:**/}<span>{abjson&&abjson['N9:42']} mA</span> </div>
                    <div className={styles.csdsjrkyw}>{/**锤式打散机入口烟温:**/}<span>{abjson&&abjson['F11:23']} ℃</span> </div>
                    <div className={styles.csdsjcklw}>{/**锤式打散机出口料温:**/}<span>{abjson&&abjson['F11:24']} ℃</span> </div>
                    <div className={styles.ryhhjckyl}>{/**热烟混合器出口压力:**/}<span>{abjson&&abjson['F11:26']} Pa</span> </div>
                    <div className={styles.csdsjckyl}>{/**锤式打散机出口压力:**/}<span>{abjson&&abjson['F11:27']} Pa</span> </div>
                    <div className={styles.qmjdl}>{/**球磨机电流:**/}<span>{abjson&&abjson['F11:12']} A</span> </div>
                    <div className={styles.qmjcklw}>{/**球磨机出口料温:**/}<span>{abjson&&abjson['F11:25']} ℃</span> </div>
                    <div className={styles.zyfjdl}>{/**主引风机电流:**/}<span>{plc2json&&plc2json['JT312_1']} A</span></div>
                    <div className={styles.zyfjkd}>{/**主引风机开度:**/}<span>{plc2json&&plc2json['ZT312']} %</span></div>
                    <div className={styles.fqfmkd}>{/**废气阀门开度:**/}<span>{plc2json&&plc2json['ZT054']} %</span></div>
                    <div>
                        {abjson&&abjson['B3:4/5']==1 && <div className={styles.csdsj}></div>}
                        {abjson&&abjson['B3:4/5']==0 && <div className={styles.csdsjyx}></div>}
                    </div>
                    <div>
                        {abjson&&abjson['N10:12/0']==1 && <div className={styles.rsqtz}></div>}
                        {abjson&&abjson['N10:12/0']==0 && <div className={styles.rsqyx}></div>}
                    </div>
                    <div>
                        {abjson&&abjson['B3:4/1']==1 && <div></div>}
                        {abjson&&abjson['B3:4/1']==0 && <div className={styles.pd}></div>}
                    </div>
                    <div>
                        {abjson&&abjson['B3:12/5']==1 && <div></div>}
                        {abjson&&abjson['B3:12/5']==0 && <div className={styles.jd}></div>}
                    </div>
                    <div onClick={()=>gojhcj()}><img src={jiantou2} /></div>
                </div>
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M44750ZSC: state.vars.M44750ZSC,
        M44450ZSC: state.vars.M44450ZSC,
        abjson:state.vars.abjson,
        plc2json:state.vars.plc2json,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gojhcj:()=>{//点击回到首页
        browserHistory.push('/home/page/jhcj');
        },
        init:()=>{

            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw,success,true);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw+'t',success1,true);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/AB_json',numw+'m',success2,true);

             function success1(index,res){
                let PLC2 = JSON.parse(res);
                 let M44450ZSC = PLC2['M44450ZSC'];
                console.log(22, M44450ZSC);
                dispatch(actions.setVars('M44450ZSC',M44450ZSC));

             }
            function success(index,res){
            let PLC2 = JSON.parse(res);
            console.log(1,PLC2);
            
            let M44750ZSC = PLC2['M44750ZSC'];
            console.log(22, M44750ZSC);
            dispatch(actions.setVars('M44750ZSC',M44750ZSC));
            dispatch(actions.setVars('plc2json',PLC2));
            console.log(123,PLC2)


        }
            function success2(index,res){
            var AB = JSON.parse(res);
            console.log(11111111,AB);
             dispatch(actions.setVars('abjson',AB));
            
        }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
