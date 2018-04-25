import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './qmj.scss';
import Motor2 from './comp/motor2.jsx';
import webSocket from '../../../../config/socketClient.js';
import Run from './comp/run.jsx';
let numw=Math.ceil(Math.random()*1000)+'ne';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2',numw,function(){},false);
  },
    render() {
        let {M52350ZSC,M52352ZSC,M52251ZSC,M52250ZSC,M43350ZSC,M43450ZSC,M43351ZSC,M43352ZSC,M52152ZSC,M52150ZSC,M52151ZSC,M52153ZSC,M52154ZSC,M52155ZSC} = this.props;
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>
                            {M52350ZSC==0 && <div><Motor2 /></div>}
                            {M52350ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {M52352ZSC==0 && <div><Motor2 /></div>}
                            {M52352ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M43350ZSC==0 && <div><Motor2 /></div>}
                            {M43350ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M43450ZSC==0 && <div><Motor2 /></div>}
                            {M43450ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M43351ZSC==0 && <div><Motor2 /></div>}
                            {M43351ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M43352ZSC==0 && <div><Motor2 /></div>}
                            {M43352ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor08}>
                            {M52152ZSC==0 && <div><Motor2 /></div>}
                            {M52152ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor09}>
                            {M52150ZSC==0 && <div><Motor2 /></div>}
                            {M52150ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor10}>
                            {M52151ZSC==0 && <div><Motor2 /></div>}
                            {M52151ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor11}>
                            {M52153ZSC==0 && <div><Motor2 /></div>}
                            {M52153ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor12}>
                            {M52250ZSC==0 && <div><Motor2 /></div>}
                            {M52250ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor13}>
                            {M52251ZSC==0 && <div><Motor2 /></div>}
                            {M52251ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor14}>
                            {M52154ZSC==0 && <div><Motor2 /></div>}
                            {M52154ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor15}>
                            {M52155ZSC==0 && <div><Motor2 /></div>}
                            {M52155ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                    </div>
                </div>
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M43350ZSC: state.vars.M43350ZSC,
        M43450ZSC: state.vars.M43450ZSC,
        M43351ZSC: state.vars.M43351ZSC,
        M43352ZSC: state.vars.M43352ZSC,
        M52152ZSC: state.vars.M52152ZSC,
        M52150ZSC: state.vars.M52150ZSC,
        M52151ZSC: state.vars.M52151ZSC,
        M52153ZSC: state.vars.M52153ZSC,
        M52154ZSC: state.vars.M52154ZSC,
        M52155ZSC: state.vars.M52155ZSC,
        M52250ZSC: state.vars.M52250ZSC,
        M52251ZSC: state.vars.M52251ZSC,
        M52352ZSC: state.vars.M52352ZSC,
        M52350ZSC: state.vars.M52350ZSC,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{

            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2',numw,success,true);
            function success(index,res){
                var PLC2 = JSON.parse(res);
                console.log(1,PLC2);

                var M52352ZSC = PLC2['M52352ZSC'];
                console.log(22, M52352ZSC);
                dispatch(actions.setVars('M52352ZSC',M52352ZSC));

                var M52350ZSC = PLC2['M52350ZSC'];
                console.log(22, M52350ZSC);
                dispatch(actions.setVars('M52350ZSC',M52350ZSC));

                var M43350ZSC = PLC2['M43350ZSC'];
                console.log(22, M43350ZSC);
                dispatch(actions.setVars('M43350ZSC',M43350ZSC));

                var M43450ZSC = PLC2['M43450ZSC'];
                console.log(22, M43450ZSC);
                dispatch(actions.setVars('M43450ZSC',M43450ZSC));

                var M43351ZSC = PLC2['M43351ZSC'];
                console.log(22, M43351ZSC);
                dispatch(actions.setVars('M43351ZSC',M43351ZSC));

                var M43352ZSC = PLC2['M43352ZSC'];
                console.log(22, M43352ZSC);
                dispatch(actions.setVars('M43352ZSC',M43352ZSC));

                var M52152ZSC = PLC2['M52152ZSC'];
                console.log(22, M52152ZSC);
                dispatch(actions.setVars('M52152ZSC',M52152ZSC));

                var M52150ZSC = PLC2['M52150ZSC'];
                console.log(22, M52150ZSC);
                dispatch(actions.setVars('M52150ZSC',M52150ZSC));

                var M52151ZSC = PLC2['M52151ZSC'];
                console.log(22, M52151ZSC);
                dispatch(actions.setVars('M52151ZSC',M52151ZSC));

                var M52153ZSC = PLC2['M52153ZSC'];
                console.log(22, M52153ZSC);
                dispatch(actions.setVars('M52153ZSC',M52153ZSC));

                var M52154ZSC = PLC2['M52154ZSC'];
                console.log(22, M52154ZSC);
                dispatch(actions.setVars('M52154ZSC',M52154ZSC));

                var M52155ZSC = PLC2['M52155ZSC'];
                console.log(22, M52155ZSC);
                dispatch(actions.setVars('M52155ZSC',M52155ZSC));

                var M52250ZSC = PLC2['M52250ZSC'];
                console.log(22, M52250ZSC);
                dispatch(actions.setVars('M52250ZSC',M52250ZSC));

                var M52251ZSC = PLC2['M52251ZSC'];
                console.log(22, M52251ZSC);
                dispatch(actions.setVars('M52251ZSC',M52251ZSC));
            }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
