import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './ek.scss';
import Motor2 from './comp/motor2.jsx';
import Run from './comp/run.jsx';
import webSocket from '../../../../config/socketClient.js';
let numw=Math.ceil(Math.random()*1000)+'ce';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
     componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw,function(){},false);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw+'q',function(){},false);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC3_json',numw+'h',function(){},false);
  },
    render() {
        let {M56450ZSC,M56550ZSC,M56650ZSC1,M56750ZSC1,M57250ZSC1,M57251ZSC1,M57252ZSC1,M57253ZSC1,M57254ZSC1,M57450ZSC1,M57351ZSC1,M57353ZSC1,pl3json,SIC215SP_NEW,M56751ZSC1,boardGo,boardOut,M57350ZSC1,M57352ZSC1,M57354ZSC1} = this.props;
        console.log(11, pl3json);
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>

                            {M56450ZSC==0 && <div><Motor2 /></div>}
                            {M56450ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {M56550ZSC==0 && <div><Motor2 /></div>}
                            {M56550ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor03}>
                            {M56650ZSC1==0 && <div><Motor2 /></div>}
                            {M56650ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M56750ZSC1==0 && <div><Motor2 /></div>}
                            {M56750ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M57250ZSC1==0 && <div><Motor2 /></div>}
                            {M57250ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M57251ZSC1==0 && <div><Motor2 /></div>}
                            {M57251ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M57252ZSC1==0 && <div><Motor2 /></div>}
                            {M57252ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor08}>
                            {M57253ZSC1==0 && <div><Motor2 /></div>}
                            {M57253ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor09}>
                            {M57254ZSC1==0 && <div><Motor2 /></div>}
                            {M57254ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor10}>
                            {M57450ZSC1==0 && <div><Motor2 /></div>}
                            {M57450ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor11}>
                            {M57351ZSC1==0 && <div><Motor2 /></div>}
                            {M57351ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor12}>
                            {M57353ZSC1==0 && <div><Motor2 /></div>}
                            {M57353ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor13}>
                            {M56751ZSC1==0 && <div><Motor2 /></div>}
                            {M56751ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor14}>
                            {M57350ZSC1==0 && <div><Motor2 /></div>}
                            {M57350ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor15}>
                            {M57352ZSC1==0 && <div><Motor2 /></div>}
                            {M57352ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor16}>
                            {M57354ZSC1==0 && <div><Motor2 /></div>}
                            {M57354ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                    </div>
                
                
                    <div>
                        {pl3json&&pl3json.Z1_HEATER_OFF==0 && <div className={styles.firebox01}></div>}
                        {pl3json&&pl3json.Z1_HEATER_OFF==1 && <div className={styles.firebox}></div>}
                    </div>
                    <div>
                        {pl3json&&pl3json.Z2_HEATER_OFF==0 && <div className={styles.firebox02}></div>}
                        {pl3json&&pl3json.Z2_HEATER_OFF==1 && <div className={styles.firebox2}></div>}
                    </div>
                    <div>
                        {pl3json&&pl3json.Z3_HEATER_OFF==0 && <div className={styles.firebox03}></div>}
                        {pl3json&&pl3json.Z3_HEATER_OFF==1 && <div className={styles.firebox3}></div>}
                    </div>
                    <div className={styles.ban}>
                    
                        <div>
                            {pl3json&&pl3json.at_dk11new==0 && <div className={styles.jinban1}></div>}
                            {pl3json&&pl3json.at_dk11new==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK12NEW==0 && <div className={styles.jinban2}></div>}
                            {pl3json&&pl3json.AT_DK12NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK13NEW==0 && <div className={styles.jinban3}></div>}
                            {pl3json&&pl3json.AT_DK13NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK14NEW==0 && <div className={styles.jinban4}></div>}
                            {pl3json&&pl3json.AT_DK14NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK15NEW==0 && <div className={styles.jinban5}></div>}
                            {pl3json&&pl3json.AT_DK15NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK16NEW==0 && <div className={styles.jinban6}></div>}
                            {pl3json&&pl3json.AT_DK16NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK17NEW==0 && <div className={styles.jinban7}></div>}
                            {pl3json&&pl3json.AT_DK17NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK18NEW==0 && <div className={styles.jinban8}></div>}
                            {pl3json&&pl3json.AT_DK18NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK19NEW==0 && <div className={styles.jinban9}></div>}
                            {pl3json&&pl3json.AT_DK19NEW==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.AT_DK110NEW==0 && <div className={styles.jinban10}></div>}
                            {pl3json&&pl3json.AT_DK110NEW==1 && <div></div>}
                        </div>

                    
                        <div>
                            {pl3json&&pl3json.DK1_PROX==0 && <div className={styles.tingban1}></div>}
                            {pl3json&&pl3json.DK1_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK2_PROX==0 && <div className={styles.tingban2}></div>}
                            {pl3json&&pl3json.DK2_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK3_PROX==0 && <div className={styles.tingban3}></div>}
                            {pl3json&&pl3json.DK3_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK4_PROX==0 && <div className={styles.tingban4}></div>}
                            {pl3json&&pl3json.DK4_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK5_PROX==0 && <div className={styles.tingban5}></div>}
                            {pl3json&&pl3json.DK5_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK6_PROX==0 && <div className={styles.tingban6}></div>}
                            {pl3json&&pl3json.DK6_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK7_PROX==0 && <div className={styles.tingban7}></div>}
                            {pl3json&&pl3json.DK7_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK8_PROX==0 && <div className={styles.tingban8}></div>}
                            {pl3json&&pl3json.DK8_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK9_PROX==0 && <div className={styles.tingban9}></div>}
                            {pl3json&&pl3json.DK9_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK10_PROX==0 && <div className={styles.tingban10}></div>}
                            {pl3json&&pl3json.DK10_PROX==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK1_RUN==0 && <div className={styles.chuban1}></div>}
                            {pl3json&&pl3json.DK1_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK2_RUN==0 && <div className={styles.chuban2}></div>}
                            {pl3json&&pl3json.DK2_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK3_RUN==0 && <div className={styles.chuban3}></div>}
                            {pl3json&&pl3json.DK3_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK4_RUN==0 && <div className={styles.chuban4}></div>}
                            {pl3json&&pl3json.DK4_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK5_RUN==0 && <div className={styles.chuban5}></div>}
                            {pl3json&&pl3json.DK5_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK6_RUN==0 && <div className={styles.chuban6}></div>}
                            {pl3json&&pl3json.DK6_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK7_RUN==0 && <div className={styles.chuban7}></div>}
                            {pl3json&&pl3json.DK7_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK8_RUN==0 && <div className={styles.chuban8}></div>}
                            {pl3json&&pl3json.DK8_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK9_RUN==0 && <div className={styles.chuban9}></div>}
                            {pl3json&&pl3json.DK9_RUN==1 && <div></div>}
                        </div>
                        <div>
                            {pl3json&&pl3json.DK10_RUN==0 && <div className={styles.chuban10}></div>}
                            {pl3json&&pl3json.DK10_RUN==1 && <div></div>}
                        </div>
                    </div>
                    <div className={styles.contro1}><span>1区控制温度 :{pl3json&&pl3json.Z1_CONTROL_TEMP} ℃</span></div>
                    <div className={styles.contro2}><span>2区控制温度 :{pl3json&&pl3json.Z2_CONTROL_TEMP} ℃</span></div>
                    <div className={styles.contro3}><span>3区控制温度 :{pl3json&&pl3json.Z3_CONTROL_TEMP} ℃</span></div>
                    <div className={styles.return1}><span>1区回风温度 :{pl3json&&pl3json.Z1_RETURN_TEMP} ℃</span></div>
                    <div className={styles.return2}><span>2区回风温度 :{pl3json&&pl3json.Z2_RETURN_TEMP} ℃</span></div>
                    <div className={styles.return3}><span>3区回风温度 :{pl3json&&pl3json.Z3_RETURN_TEMP} ℃</span></div>
                    <div className={styles.gzjspeed}><span>干燥机速度 :{pl3json&&pl3json.DD_SPD_FIX} M/MIN</span></div>
                    <div className={styles.pdspeed}><span>皮带速度:{SIC215SP_NEW} M/MIN</span></div>
                    <div className={styles.boardNum}><span>切板数量：{boardOut} 张 进板数量：{boardGo} 张</span></div>
                    <div className={styles.bridge}>
                        {<div>
                            <div>
                                {pl3json&&pl3json.at_dk11new==0 && <div className={styles.bridge1}></div>}
                                {pl3json&&pl3json.at_dk11new==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK12NEW==0 && <div className={styles.bridge2}></div>}
                                {pl3json&&pl3json.AT_DK12NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK13NEW==0 && <div className={styles.bridge3}></div>}
                                {pl3json&&pl3json.AT_DK13NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK14NEW==0 && <div className={styles.bridge4}></div>}
                                {pl3json&&pl3json.AT_DK14NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK15NEW==0 && <div className={styles.bridge5}></div>}
                                {pl3json&&pl3json.AT_DK15NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK16NEW==0 && <div className={styles.bridge6}></div>}
                                {pl3json&&pl3json.AT_DK16NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK17NEW==0 && <div className={styles.bridge7}></div>}
                                {pl3json&&pl3json.AT_DK17NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK18NEW==0 && <div className={styles.bridge8}></div>}
                                {pl3json&&pl3json.AT_DK18NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK19NEW==0 && <div className={styles.bridge9}></div>}
                                {pl3json&&pl3json.AT_DK19NEW==1 && <div></div>}
                            </div>
                            <div>
                                {pl3json&&pl3json.AT_DK110NEW==0 && <div className={styles.bridge10}></div>}
                                {pl3json&&pl3json.AT_DK110NEW==1 && <div></div>}
                            </div>
                        </div>}
                        {pl3json && pl3json.at_dk11new==1 && pl3json.AT_DK12NEW==1 && pl3json.AT_DK13NEW==1 && pl3json.AT_DK14NEW==1 && pl3json.AT_DK15NEW==1 && pl3json.AT_DK16NEW==1 && pl3json.AT_DK17NEW==1 && pl3json.AT_DK18NEW==1 && pl3json.AT_DK19NEW==1 && pl3json.AT_DK110NEW==1 && <div className={styles.nosign}></div>}
                    </div>
                </div>        
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M56450ZSC: state.vars.M56450ZSC,
        M56550ZSC: state.vars.M56550ZSC,
        M56650ZSC1: state.vars.M56650ZSC1,
        M56750ZSC1: state.vars.M56750ZSC1,
        M57250ZSC1: state.vars.M57250ZSC1,
        M57251ZSC1: state.vars.M57251ZSC1,
        M57252ZSC1: state.vars.M57252ZSC1,
        M57253ZSC1: state.vars.M57253ZSC1,
        M57254ZSC1: state.vars.M57254ZSC1,
        M57450ZSC1: state.vars.M57450ZSC1,
        M57351ZSC1: state.vars.M57351ZSC1,
        M57353ZSC1: state.vars.M57353ZSC1,
        pl3json:state.vars.pl3json,
        SIC215SP_NEW: state.vars.SIC215SP_NEW,
        M56751ZSC1: state.vars.M56751ZSC1,
        boardGo: state.vars.boardGo,
        boardOut: state.vars.boardOut,
        M57350ZSC1: state.vars.M57350ZSC1,
        M57352ZSC1: state.vars.M57352ZSC1,
        M57354ZSC1: state.vars.M57354ZSC1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{

            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw,success,true);
             webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw+'q',success1,true);
             webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC3_json',numw+'h',success2,true);
             console.log('1')
              function success1(index,res){
                var PLC2 = JSON.parse(res);
                console.log(2,PLC2);
                
                var M56450ZSC = PLC2['M56450ZSC'];
             
                dispatch(actions.setVars('M56450ZSC',M56450ZSC));

                var SIC215SP_NEW = PLC2['SIC215SP_NEW'];
             
                dispatch(actions.setVars('SIC215SP_NEW',SIC215SP_NEW))

              }
            function success(index,res){
            var PLC4 = JSON.parse(res);
            console.log(4,PLC4);
            

            var M56550ZSC = PLC4['M56550ZSC'];
       
            dispatch(actions.setVars('M56550ZSC',M56550ZSC));

            var M56650ZSC1 = PLC4['M56650ZSC1'];
          
            dispatch(actions.setVars('M56650ZSC1',M56650ZSC1));

            var M56750ZSC1 = PLC4['M56750ZSC1'];
          
            dispatch(actions.setVars('M56750ZSC1',M56750ZSC1));

            var M57250ZSC1 = PLC4['M57250ZSC1'];
       
            dispatch(actions.setVars('M57250ZSC1',M57250ZSC1));

            var M57251ZSC1 = PLC4['M57251ZSC1'];
         
            dispatch(actions.setVars('M57251ZSC1',M57251ZSC1));

            var M57252ZSC1 = PLC4['M57252ZSC1'];
        
            dispatch(actions.setVars('M57252ZSC1',M57252ZSC1));

            var M57253ZSC1 = PLC4['M57253ZSC1'];
        
            dispatch(actions.setVars('M57253ZSC1',M57253ZSC1));

            var M57254ZSC1 = PLC4['M57254ZSC1'];
         
            dispatch(actions.setVars('M57254ZSC1',M57254ZSC1));

            var M57450ZSC1 = PLC4['M57450ZSC1'];
         
            dispatch(actions.setVars('M57450ZSC1',M57450ZSC1));

            var M57351ZSC1 = PLC4['M57351ZSC1'];
          
            dispatch(actions.setVars('M57351ZSC1',M57351ZSC1));

            var M57353ZSC1 = PLC4['M57353ZSC1'];
    
            dispatch(actions.setVars('M57353ZSC1',M57353ZSC1));

            var M56751ZSC1 = PLC4['M56751ZSC1'];
          
            dispatch(actions.setVars('M56751ZSC1',M56751ZSC1));

            let boardGo=PLC4['NO_BOARD_C1'];
            let boardOut=PLC4['NO_BOARD_C'];
            //var boardGo = PLC4['boardGo'];
          
            dispatch(actions.setVars('boardGo',boardGo));

            //var boardOut = PLC4['boardOut'];
          
            dispatch(actions.setVars('boardOut',boardOut));

            var M57350ZSC1 = PLC4['M57350ZSC1'];
          
            dispatch(actions.setVars('M57350ZSC1',M57350ZSC1));

            var M57352ZSC1 = PLC4['M57352ZSC1'];
          
            dispatch(actions.setVars('M57352ZSC1',M57352ZSC1));

            var M57354ZSC1 = PLC4['M57354ZSC1'];
          
            dispatch(actions.setVars('M57354ZSC1',M57354ZSC1));
            }
            function success2(index,res){
                var PLC3 = JSON.parse(res);

                dispatch(actions.setVars('pl3json',PLC3));
                console.log(3,PLC3);
                
            }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
