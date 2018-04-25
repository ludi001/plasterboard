import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './jhcj.scss';
import yellowmotor from '../../img/comp/yellow.png';
import greenmotor from '../../img/comp/green.png';
import alarm from '../../img/comp/lighted.png';
import Motor from './comp/motor.jsx';
import Run from './comp/run.jsx';
import webSocket from '../../../../config/socketClient.js';
import jiantou from '../../img/comp/jiantou3.png';
let numw=Math.ceil(Math.random()*1000)+'ae';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();

    },
     componentWillUnmount () {
         webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw,function(){},false);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw+'2',function(){},false);
  },
    render() {
        let {M31250_BELT11,BELT10,BELT12,M31150_BELT13,M31050_BELT14,M41650ZSC,M41950ZSC,M41550ZSC,M41450ZSC,AREA31_USE_NORTH_1,AREA31_USE_1,gocl} = this.props;
        //console.log(11, BELT10);
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.greenbox}>
                            <span>APPLY FOR START</span>
                            <img src={greenmotor} />
                        </div>
                        <div className={styles.yellowbox}>
                            <span><p>SOUTH#DRAW</p><p>MATERIAIS</p></span>
                            <img src={yellowmotor} />
                        </div>
                         <div className={styles.greenbox} style={{marginTop:'1.7rem',textAlign:'center'}}>
                            <span>ALARM</span>
                            <img src={alarm} />
                        </div>
                        
                        <div className={styles.motor01}>
                            {M31250_BELT11==0 && <div><Motor /></div>}
                            {M31250_BELT11==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {BELT10==0 && <div><Motor  /></div>}
                            {BELT10==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor03}>
                            {BELT12==0 && <div><Motor /></div>}
                            {BELT12==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M31150_BELT13==0 && <div><Motor /></div>}
                            {M31150_BELT13==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M31050_BELT14==0 && <div><Motor /></div>}
                            {M31050_BELT14==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M41650ZSC==0 && <div><Motor /></div>}
                            {M41650ZSC==1 && <div><Run type={1} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M41950ZSC==0 && <div><Motor /></div>}
                            {M41950ZSC==1 && <div><Run type={1} /></div>}
                        </div>
                        <div>
                            {M41550ZSC==1 && <div className={styles.qlj1}></div>}
                            {M41550ZSC==0 && <div className={styles.qlj2}></div>}
                        </div>
                        <div>
                            {M41450ZSC==1 && <div className={styles.qlj3}></div>}
                            {M41450ZSC==0 && <div className={styles.qlj4}></div>}
                        </div>
                        <div>
                            {AREA31_USE_NORTH_1==0 && <div className={styles.sign1}>
                                <div className={styles.circle1}></div>
                                <div className={styles.circle2}></div>
                            </div>}
                            {AREA31_USE_NORTH_1==1 && <div className={styles.sign2}>
                                <div className={styles.circle1}></div>
                                <div className={styles.circle2}></div>
                            </div>}
                        </div>
                        <div>
                            {AREA31_USE_1==0 && <div className={styles.sign3}>
                                <div className={styles.circle1}></div>
                                <div className={styles.circle2}></div>
                            </div>}
                            {AREA31_USE_1==1 && <div className={styles.sign4}>
                                <div className={styles.circle1}></div>
                                <div className={styles.circle2}></div>
                            </div>}
                        </div>
                        <div onClick={()=>gocl()}><img src={jiantou} /></div>

                    </div>
                </div>
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M31250_BELT11: state.vars.M31250_BELT11,
        BELT10: state.vars.BELT10,
        BELT12: state.vars.BELT12,
        M31150_BELT13: state.vars.M31150_BELT13,
        M31050_BELT14: state.vars.M31050_BELT14,
        M41650ZSC: state.vars.M41650ZSC,
        M41950ZSC: state.vars.M41950ZSC,
        M41550ZSC: state.vars.M41550ZSC,
        M41450ZSC: state.vars.M41450ZSC,
        AREA31_USE_NORTH_1: state.vars.AREA31_USE_NORTH_1,
        AREA31_USE_1: state.vars.AREA31_USE_1,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gocl:()=>{//点击回到首页
        browserHistory.push('/home/page/cl');
        },
        init:()=>{
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw,success,true);
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw+'2',success1,true);
            function success(index,res){
               // console.log(1333,res);
            var PLC1 = JSON.parse(res);
            console.log(1,PLC1);
            
            var M31250_BELT11 = PLC1['M31250_BELT11']
            console.log(22, M31250_BELT11);
            dispatch(actions.setVars('M31250_BELT11',M31250_BELT11));

            var BELT10 = PLC1['BELT10'];
            console.log(33, BELT10);
            dispatch(actions.setVars('BELT10',BELT10));

            var BELT12 = PLC1['BELT12'];
            console.log(44, BELT12);
            dispatch(actions.setVars('BELT12',BELT12));

            var M31150_BELT13 = PLC1['M31150_BELT13'];
            console.log(55, M31150_BELT13);
            dispatch(actions.setVars('M31150_BELT13',M31150_BELT13));

            var M31050_BELT14 = PLC1['M31050_BELT14'];
            console.log(66, M31050_BELT14);
            dispatch(actions.setVars('M31050_BELT14',M31050_BELT14));

            var AREA31_USE_NORTH_1 = PLC1['AREA31_USE_NORTH_1'];
            dispatch(actions.setVars('AREA31_USE_NORTH_1',AREA31_USE_NORTH_1));

            var AREA31_USE_1 = PLC1['AREA31_USE_1'];
            dispatch(actions.setVars('AREA31_USE_1',AREA31_USE_1));

            }


            function success1(index,res){
                //console.log(77, res);
                   var PLC2 = JSON.parse(res);
                    var M41650ZSC = PLC2['M41650ZSC'];
                    console.log(77, M41650ZSC);
                    dispatch(actions.setVars('M41650ZSC',M41650ZSC));

                    var M41950ZSC = PLC2['M41950ZSC'];
                    console.log(88, M41950ZSC);
                    dispatch(actions.setVars('M41950ZSC',M41950ZSC));

                    var M41550ZSC = PLC2['M41550ZSC'];
                    
                    dispatch(actions.setVars('M41550ZSC',M41550ZSC));

                    var M41450ZSC = PLC2['M41450ZSC'];
                    
                    dispatch(actions.setVars('M41450ZSC',M41450ZSC));
            }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
