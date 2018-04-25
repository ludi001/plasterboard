import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './sk.scss';
import Motor2 from './comp/motor2.jsx';
import Motor3 from './comp/motor3.jsx';
import Motor4 from './comp/motor4.jsx';
import Run from './comp/run.jsx';
import webSocket from '../../../../config/socketClient.js';
let numw=Math.ceil(Math.random()*1000)+'bge';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
      componentWillUnmount () {
         webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw,function(){},false);
           
  },
    render() {
        let {M59665ZSC1,M59667ZSC1,M59755ZSC1,M59754ZSC1,M59854ZSC1,M59855ZSC1,M59752ZSC1,M59753ZSR,M59750ZSC1,M59751ZSC1,M59850ZSC1,M59851ZSC1,M59852ZSC1,M59853ZSR,M59658ZSC1,M59662ZSC1,M59558ZSC1,M59560ZSC,M59554ZSR,M59555ZSC1,M59556ZSR,M59557ZSC1,M59559ZSC1,M59551ZSC1,M59550ZSC1,M59553ZSC1,M59552ZSC1,M59450ZSC1,M59451ZSC1,M59251ZSC1,M59452ZSC1,M59453ZSC1,M59253ZSC1,M59152ZSC1,M59250ZSC1,M59252ZSC1,M59149ZSC,M59150ZSC1,M59151ZSC1,M59350ZSC1} = this.props;
        let {M59664ZSC1,M59666ZSC1,M59756ZSC1,M59650ZSC1,M59659ZSC1,M59652ZSC1,M59657ZSC1,M59856ZSC1,M59661ZSC1,M59655ZSC1,M59663ZSC1,M59653ZSC1}=this.props;
        
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>
                            {M59149ZSC==0 && <div><Motor2 /></div>}
                            {M59149ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {M59150ZSC1==0 && <div><Motor2 /></div>}
                            {M59150ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor03}>
                            {M59152ZSC1==0 && <div><Motor2 /></div>}
                            {M59152ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M59250ZSC1==0 && <div><Motor2 /></div>}
                            {M59250ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M59450ZSC1==0 && <div><Motor2 /></div>}
                            {M59450ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M59251ZSC1==0 && <div><Motor2 /></div>}
                            {M59251ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M59451ZSC1==0 && <div><Motor2 /></div>}
                            {M59451ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor08}>
                            {M59550ZSC1==0 && <div><Motor2 /></div>}
                            {M59550ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor09}>
                            {M59551ZSC1==0 && <div><Motor2 /></div>}
                            {M59551ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor10}>
                            {M59558ZSC1==0 && <div><Motor3 /></div>}
                            {M59558ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor11}>
                            {M59560ZSC==0 && <div><Motor3 /></div>}
                            {M59560ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor12}>
                            {M59554ZSR==0 && <div><Motor3 /></div>}
                            {M59554ZSR==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor13}>
                            {M59555ZSC1==0 && <div><Motor2 /></div>}
                            {M59555ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor14}>
                            {M59658ZSC1==0 && <div><Motor4 /></div>}
                            {M59658ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor15}>
                            {M59752ZSC1==0 && <div><Motor3 /></div>}
                            {M59752ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor16}>
                            {M59755ZSC1==0 && <div><Motor2 /></div>}
                            {M59755ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor17}>
                            {M59753ZSR==0 && <div><Motor4 /></div>}
                            {M59753ZSR==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor18}>
                            {M59750ZSC1==0 && <div><Motor3 /></div>}
                            {M59750ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor19}>
                            {M59754ZSC1==0 && <div><Motor2 /></div>}
                            {M59754ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor20}>
                            {M59751ZSC1==0 && <div><Motor4 /></div>}
                            {M59751ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor21}>
                            {M59665ZSC1==0 && <div><Motor2 /></div>}
                            {M59665ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor001}>
                            <Motor2 />
                        </div>
                        <div className={styles.motor002}>
                            {M59151ZSC1==0 && <div><Motor2 /></div>}
                            {M59151ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor003}><Motor2 /></div>
                        <div className={styles.motor004}>
                            {M59252ZSC1==0 && <div><Motor2 /></div>}
                            {M59252ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor005}>
                            {M59452ZSC1==0 && <div><Motor2 /></div>}
                            {M59452ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor006}>
                            {M59253ZSC1==0 && <div><Motor2 /></div>}
                            {M59253ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor007}>
                            {M59453ZSC1==0 && <div><Motor2 /></div>}
                            {M59453ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor008}>
                            {M59552ZSC1==0 && <div><Motor2 /></div>}
                            {M59552ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor009}>
                            {M59553ZSC1==0 && <div><Motor2 /></div>}
                            {M59553ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor010}>
                            {M59559ZSC1==0 && <div><Motor3 /></div>}
                            {M59559ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor011}>
                            {M59556ZSR==0 && <div><Motor3 /></div>}
                            {M59556ZSR==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor012}><Motor3 /></div>
                        <div className={styles.motor013}>
                            {M59557ZSC1==0 && <div><Motor2 /></div>}
                            {M59557ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor014}>
                            {M59662ZSC1==0 && <div><Motor4 /></div>}
                            {M59662ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor015}>
                            {M59850ZSC1==0 && <div><Motor3 /></div>}
                            {M59850ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor016}>
                            {M59854ZSC1==0 && <div><Motor2 /></div>}
                            {M59854ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor017}>
                            {M59851ZSC1==0 && <div><Motor4 /></div>}
                            {M59851ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor018}>
                            {M59852ZSC1==0 && <div><Motor3 /></div>}
                            {M59852ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor019}>
                            {M59855ZSC1==0 && <div><Motor2 /></div>}
                            {M59855ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor020}>
                            {M59853ZSR==0 && <div><Motor4 /></div>}
                            {M59853ZSR==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motor021}>
                            {M59667ZSC1==0 && <div><Motor2 /></div>}
                            {M59667ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor22}>
                            {M59350ZSC1==0 && <div><Motor2 /></div>}
                            {M59350ZSC1==1 && <div><Run type={2} /></div>}
                        </div>

                        <div className={styles.motorAdd01}>
                            {M59664ZSC1==0 && <div><Motor2 /></div>}
                            {M59664ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motorAdd02}>
                            {M59666ZSC1==0 && <div><Motor2 /></div>}
                            {M59666ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motorAdd03}>
                            {M59756ZSC1==0 && <div><Motor2 /></div>}
                            {M59756ZSC1==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motorAdd04}>
                            {M59650ZSC1==0 && <div><Motor3 /></div>}
                            {M59650ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motorAdd05}>
                            {M59657ZSC1==0 && <div><Motor4 /></div>}
                            {M59657ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motorAdd06}>
                            {M59652ZSC1==0 && <div><Motor4 /></div>}
                            {M59652ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motorAdd07}>
                            {M59659ZSC1==0 && <div><Motor4 /></div>}
                            {M59659ZSC1==1 && <div><Run type={4} /></div>}
                        </div>
                        <div className={styles.motorAdd08}>
                            {M59856ZSC1==0 && <div><Motor3 /></div>}
                            {M59856ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motorAdd09}>
                            {M59663ZSC1==0 && <div><Motor3 /></div>}
                            {M59663ZSC1==1 && <div><Run type={3} /></div>}                            
                        </div>
                        <div className={styles.motorAdd10}>
                            {M59655ZSC1==0 && <div><Motor3 /></div>}
                            {M59655ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motorAdd11}>
                            {M59653ZSC1==0 && <div><Motor3 /></div>}
                            {M59653ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motorAdd12}>                            
                            {M59661ZSC1==0 && <div><Motor3 /></div>}
                            {M59661ZSC1==1 && <div><Run type={3} /></div>}
                        </div>
                    </div>
                </div>
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M59665ZSC1: state.vars.M59665ZSC1,
        M59667ZSC1: state.vars.M59667ZSC1,
        M59755ZSC1: state.vars.M59755ZSC1,
        M59754ZSC1: state.vars.M59754ZSC1,
        M59854ZSC1: state.vars.M59854ZSC1,
        M59855ZSC1: state.vars.M59855ZSC1,
        M59752ZSC1: state.vars.M59752ZSC1,
        M59753ZSR: state.vars.M59753ZSR,
        M59750ZSC1: state.vars.M59750ZSC1,
        M59751ZSC1: state.vars.M59751ZSC1,
        M59850ZSC1: state.vars.M59850ZSC1,
        M59851ZSC1: state.vars.M59851ZSC1,
        M59852ZSC1: state.vars.M59852ZSC1,
        M59853ZSR: state.vars.M59853ZSR,
        M59658ZSC1: state.vars.M59658ZSC1,
        M59662ZSC1: state.vars.M59662ZSC1,
        M59558ZSC1: state.vars.M59558ZSC1,
        M59560ZSC: state.vars.M59560ZSC,
        M59554ZSR: state.vars.M59554ZSR,
        M59555ZSC1: state.vars.M59555ZSC1,
        M59556ZSR: state.vars.M59556ZSR,
        M59557ZSC1: state.vars.M59557ZSC1,
        M59559ZSC1: state.vars.M59559ZSC1,
        M59551ZSC1: state.vars.M59551ZSC1,
        M59550ZSC1: state.vars.M59550ZSC1,
        M59553ZSC1: state.vars.M59553ZSC1,
        M59552ZSC1: state.vars.M59552ZSC1,
        M59450ZSC1: state.vars.M59450ZSC1,
        M59451ZSC1: state.vars.M59451ZSC1,
        M59251ZSC1: state.vars.M59251ZSC1,
        M59452ZSC1: state.vars.M59452ZSC1,
        M59453ZSC1: state.vars.M59453ZSC1,
        M59253ZSC1: state.vars.M59253ZSC1,
        M59152ZSC1: state.vars.M59152ZSC1,
        M59250ZSC1: state.vars.M59250ZSC1,
        M59252ZSC1: state.vars.M59252ZSC1,
        M59149ZSC: state.vars.M59149ZSC,
        M59150ZSC1: state.vars.M59150ZSC1,
        M59151ZSC1: state.vars.M59151ZSC1,
        M59350ZSC1: state.vars.M59350ZSC1,

        M59666ZSC1: state.vars.M59666ZSC1,
        M59664ZSC1: state.vars.M59664ZSC1,
        M59756ZSC1: state.vars.M59756ZSC1,
        M59650ZSC1: state.vars.M59650ZSC1,
        M59659ZSC1: state.vars.M59659ZSC1,

        M59652ZSC1: state.vars.M59652ZSC1,
        M59657ZSC1: state.vars.M59657ZSC1,
        M59856ZSC1: state.vars.M59856ZSC1,
        M59661ZSC1: state.vars.M59661ZSC1,
        M59655ZSC1: state.vars.M59655ZSC1,

        M59663ZSC1: state.vars.M59663ZSC1,
        M59653ZSC1: state.vars.M59653ZSC1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw,success,true);
            function success(index,res){
            var PLC4 = JSON.parse(res);
            console.log(1,PLC4);

            var M59666ZSC1 = PLC4['M59666ZSC1'];
            console.log('d2', M59666ZSC1);
            dispatch(actions.setVars('M59666ZSC1',M59666ZSC1));

            var M59664ZSC1 = PLC4['M59664ZSC1'];
            console.log('d1', M59664ZSC1);
            dispatch(actions.setVars('M59664ZSC1',M59664ZSC1));

            var M59756ZSC1 = PLC4['M59756ZSC1'];
            console.log('d3', M59756ZSC1);
            dispatch(actions.setVars('M59756ZSC1',M59756ZSC1));

            var M59650ZSC1 = PLC4['M59650ZSC1'];
            console.log('d4', M59650ZSC1);
            dispatch(actions.setVars('M59650ZSC1',M59650ZSC1));

            var M59659ZSC1 = PLC4['M59659ZSC1'];
            console.log('d5', M59659ZSC1);
            dispatch(actions.setVars('M59659ZSC1',M59659ZSC1));

            var M59652ZSC1 = PLC4['M59652ZSC1'];
            console.log('d6', M59652ZSC1);
            dispatch(actions.setVars('M59652ZSC1',M59652ZSC1));

            var M59657ZSC1 = PLC4['M59657ZSC1'];
            console.log('d7', M59657ZSC1);
            dispatch(actions.setVars('M59657ZSC1',M59657ZSC1));

            var M59856ZSC1 = PLC4['M59856ZSC1'];
            console.log('d8', M59856ZSC1);
            dispatch(actions.setVars('M59856ZSC1',M59856ZSC1));

            var M59661ZSC1 = PLC4['M59661ZSC1'];
            console.log('d9', M59661ZSC1);
            dispatch(actions.setVars('M59661ZSC1',M59661ZSC1));

            var M59655ZSC1 = PLC4['M59655ZSC1'];
            console.log('d10', M59655ZSC1);
            dispatch(actions.setVars('M59655ZSC1',M59655ZSC1));

            var M59663ZSC1 = PLC4['M59663ZSC1'];
            console.log('d11', M59663ZSC1);
            dispatch(actions.setVars('M59663ZSC1',M59663ZSC1));

            var M59653ZSC1 = PLC4['M59653ZSC1'];
            console.log('d12', M59653ZSC1);
            dispatch(actions.setVars('M59653ZSC1',M59653ZSC1));

            var M59665ZSC1 = PLC4['M59665ZSC1'];
            console.log(22, M59665ZSC1);
            dispatch(actions.setVars('M59665ZSC1',M59665ZSC1));

            var M59667ZSC1 = PLC4['M59667ZSC1'];
            console.log(22, M59667ZSC1);
            dispatch(actions.setVars('M59667ZSC1',M59667ZSC1));

            var M59755ZSC1 = PLC4['M59755ZSC1'];
            console.log(22, M59755ZSC1);
            dispatch(actions.setVars('M59755ZSC1',M59755ZSC1));

            var M59754ZSC1 = PLC4['M59754ZSC1'];
            console.log(22, M59754ZSC1);
            dispatch(actions.setVars('M59754ZSC1',M59754ZSC1));

            var M59854ZSC1 = PLC4['M59854ZSC1'];
            console.log(22, M59854ZSC1);
            dispatch(actions.setVars('M59854ZSC1',M59854ZSC1));

            var M59855ZSC1 = PLC4['M59855ZSC1'];
            console.log(22, M59855ZSC1);
            dispatch(actions.setVars('M59855ZSC1',M59855ZSC1));

            var M59752ZSC1 = PLC4['M59752ZSC1'];
            console.log(22, M59752ZSC1);
            dispatch(actions.setVars('M59752ZSC1',M59752ZSC1));

            var M59753ZSR = PLC4['M59753ZSR'];
            console.log(22, M59753ZSR);
            dispatch(actions.setVars('M59753ZSR',M59753ZSR));

            var M59750ZSC1 = PLC4['M59750ZSC1'];
            console.log(22, M59750ZSC1);
            dispatch(actions.setVars('M59750ZSC1',M59750ZSC1));

            var M59751ZSC1 = PLC4['M59751ZSC1'];
            console.log(22, M59751ZSC1);
            dispatch(actions.setVars('M59751ZSC1',M59751ZSC1));

            var M59850ZSC1 = PLC4['M59850ZSC1'];
            console.log(22, M59850ZSC1);
            dispatch(actions.setVars('M59850ZSC1',M59850ZSC1));

            var M59851ZSC1 = PLC4['M59851ZSC1'];
            console.log(22, M59851ZSC1);
            dispatch(actions.setVars('M59851ZSC1',M59851ZSC1));

            var M59852ZSC1 = PLC4['M59852ZSC1'];
            console.log(22, M59852ZSC1);
            dispatch(actions.setVars('M59852ZSC1',M59852ZSC1));

            var M59853ZSR = PLC4['M59853ZSR'];
            console.log(22, M59853ZSR);
            dispatch(actions.setVars('M59853ZSR',M59853ZSR));

            var M59658ZSC1 = PLC4['M59658ZSC1'];
            console.log(22, M59658ZSC1);
            dispatch(actions.setVars('M59658ZSC1',M59658ZSC1));

            var M59662ZSC1 = PLC4['M59662ZSC1'];
            console.log(22, M59662ZSC1);
            dispatch(actions.setVars('M59662ZSC1',M59662ZSC1));

            var M59558ZSC1 = PLC4['M59558ZSC1'];
            console.log(22, M59558ZSC1);
            dispatch(actions.setVars('M59558ZSC1',M59558ZSC1));

            var M59560ZSC = PLC4['1'];
            console.log(22, M59560ZSC);
            dispatch(actions.setVars('M59560ZSC',M59560ZSC));

            var M59554ZSR = PLC4['M59554ZSR'];
            console.log(22, M59554ZSR);
            dispatch(actions.setVars('M59554ZSR',M59554ZSR));

            var M59555ZSC1 = PLC4['M59555ZSC1'];
            console.log(22, M59555ZSC1);
            dispatch(actions.setVars('M59555ZSC1',M59555ZSC1));

            var M59556ZSR = PLC4['M59556ZSR'];
            console.log(22, M59556ZSR);
            dispatch(actions.setVars('M59556ZSR',M59556ZSR));

            var M59557ZSC1 = PLC4['M59557ZSC1'];
            console.log(22, M59557ZSC1);
            dispatch(actions.setVars('M59557ZSC1',M59557ZSC1));

            var M59559ZSC1 = PLC4['M59559ZSC1'];
            console.log(22, M59559ZSC1);
            dispatch(actions.setVars('M59559ZSC1',M59559ZSC1));

            var M59551ZSC1 = PLC4['M59551ZSC1'];
            console.log(22, M59551ZSC1);
            dispatch(actions.setVars('M59551ZSC1',M59551ZSC1));

            var M59550ZSC1 = PLC4['M59550ZSC1'];
            console.log(22, M59550ZSC1);
            dispatch(actions.setVars('M59550ZSC1',M59550ZSC1));

            var M59553ZSC1 = PLC4['M59553ZSC1'];
            console.log(22, M59553ZSC1);
            dispatch(actions.setVars('M59553ZSC1',M59553ZSC1));

            var M59552ZSC1 = PLC4['M59552ZSC1'];
            console.log(22, M59552ZSC1);
            dispatch(actions.setVars('M59552ZSC1',M59552ZSC1));

            var M59450ZSC1 = PLC4['M59450ZSC1'];
            console.log(22, M59450ZSC1);
            dispatch(actions.setVars('M59450ZSC1',M59450ZSC1));

            var M59451ZSC1 = PLC4['M59451ZSC1'];
            console.log(22, M59451ZSC1);
            dispatch(actions.setVars('M59451ZSC1',M59451ZSC1));

            var M59251ZSC1 = PLC4['M59251ZSC1'];
            console.log(22, M59251ZSC1);
            dispatch(actions.setVars('M59251ZSC1',M59251ZSC1));

            var M59452ZSC1 = PLC4['M59452ZSC1'];
            console.log(22, M59452ZSC1);
            dispatch(actions.setVars('M59452ZSC1',M59452ZSC1));

            var M59453ZSC1 = PLC4['M59453ZSC1'];
            console.log(22, M59453ZSC1);
            dispatch(actions.setVars('M59453ZSC1',M59453ZSC1));

            var M59253ZSC1 = PLC4['M59253ZSC1'];
            console.log(22, M59253ZSC1);
            dispatch(actions.setVars('M59253ZSC1',M59253ZSC1));

            var M59152ZSC1 = PLC4['M59152ZSC1'];
            console.log(22, M59152ZSC1);
            dispatch(actions.setVars('M59152ZSC1',M59152ZSC1));

            var M59250ZSC1 = PLC4['M59250ZSC1'];
            console.log(22, M59250ZSC1);
            dispatch(actions.setVars('M59250ZSC1',M59250ZSC1));

            var M59252ZSC1 = PLC4['M59252ZSC1'];
            console.log(22, M59252ZSC1);
            dispatch(actions.setVars('M59252ZSC1',M59252ZSC1));

            var M59149ZSC = PLC4['M59149ZSC'];
            console.log(22, M59149ZSC);
            dispatch(actions.setVars('M59149ZSC',M59149ZSC));

            var M59150ZSC1 = PLC4['M59150ZSC1'];
            console.log(22, M59150ZSC1);
            dispatch(actions.setVars('M59150ZSC1',M59150ZSC1));

            var M59151ZSC1 = PLC4['M59151ZSC1'];
            console.log(22, M59151ZSC1);
            dispatch(actions.setVars('M59151ZSC1',M59151ZSC1));

            var M59350ZSC1 = PLC4['M59350ZSC1'];
            console.log(22, M59350ZSC1);
            dispatch(actions.setVars('M59350ZSC1',M59350ZSC1));
        }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
