import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './lqq.scss';
import Motor2 from './comp/motor2.jsx';
import Run from './comp/run.jsx';
import webSocket from '../../../../config/socketClient.js';
let numw=Math.ceil(Math.random()*1000)+'ue';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
     componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw,function(){},false);
  },
    render() {
        let {M51050ZSC,M51150ZSC,M51250ZSC,M51350ZSC,M51450ZSC,M51751ZSC,M51850ZSC,M51851ZSC,M51650ZSC,M51651ZSC,M51550ZSC,M51051ZSC,M51752ZSC,M51750ZSC,ZSC805,ZSO805} = this.props;
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>
                            {M51050ZSC==0 && <div><Motor2 /></div>}
                            {M51050ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {M51150ZSC==0 && <div><Motor2 /></div>}
                            {M51150ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor03}>
                            {M51250ZSC==0 && <div><Motor2 /></div>}
                            {M51250ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M51350ZSC==0 && <div><Motor2 /></div>}
                            {M51350ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M51450ZSC==0 && <div><Motor2 /></div>}
                            {M51450ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M51751ZSC==0 && <div><Motor2 /></div>}
                            {M51751ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M51850ZSC==0 && <div><Motor2 /></div>}
                            {M51850ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor08}>
                            {M51851ZSC==0 && <div><Motor2 /></div>}
                            {M51851ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor09}>
                            {M51650ZSC==0 && <div><Motor2 /></div>}
                            {M51650ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor10}>
                            {M51651ZSC==0 && <div><Motor2 /></div>}
                            {M51651ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor11}>
                            {M51550ZSC==0 && <div><Motor2 /></div>}
                            {M51550ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor12}>
                            {M51051ZSC==0 && <div><Motor2 /></div>}
                            {M51051ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        {/* <div className={styles.motor13}>
                            {M51851ZSC==1 && <div><Motor2 /></div>}
                            {M51851ZSC==0 && <div><Run type={2} /></div>}
                        </div> */}
                        <div className={styles.motor14}>
                            {M51752ZSC==0 && <div><Motor2 /></div>}
                            {M51752ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor15}>
                            {M51750ZSC==0 && <div><Motor2 /></div>}
                            {M51750ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div>
                            {ZSC805==1 && <div className={styles.jiantou1}></div>}
                            {ZSC805!=0 && <div></div>}
                        </div>
                        <div>
                            {ZSO805==1 && <div className={styles.jiantou2}></div>}
                            {ZSO805!=0 && <div></div>}
                        </div>
                        <div className={styles.wenzi}>罗茨风机</div>
                    </div>
                    
                    
                </div>
                
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M51050ZSC: state.vars.M51050ZSC,
        M51150ZSC: state.vars.M51150ZSC,
        M51250ZSC: state.vars.M51250ZSC,
        M51350ZSC: state.vars.M51350ZSC,
        M51450ZSC: state.vars.M51450ZSC,
        M51751ZSC: state.vars.M51751ZSC,
        M51850ZSC: state.vars.M51850ZSC,
        M51851ZSC: state.vars.M51851ZSC,
        M51650ZSC: state.vars.M51650ZSC,
        M51651ZSC: state.vars.M51651ZSC,
        M51550ZSC:state.vars.M51550ZSC,
        M51051ZSC:state.vars.M51051ZSC,
        // M51851ZSC:state.vars.M51851ZSC,
        M51752ZSC:state.vars.M51752ZSC,
        M51750ZSC:state.vars.M51750ZSC,
        ZSC805:state.vars.ZSC805,
        ZSO805:state.vars.ZSO805,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{

            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC1_json',numw,success,true);
            function success(index,res){
            var PLC1 = JSON.parse(res);
            console.log(1,PLC1);

            var M51050ZSC = PLC1['M51050ZSC'];
            console.log(22, M51050ZSC);
            dispatch(actions.setVars('M51050ZSC',M51050ZSC));

            var M51150ZSC = PLC1['M51150ZSC'];
            console.log(22, M51150ZSC);
            dispatch(actions.setVars('M51150ZSC',M51150ZSC));

            var M51250ZSC = PLC1['M51250ZSC'];
            console.log(22, M51250ZSC);
            dispatch(actions.setVars('M51250ZSC',M51250ZSC));

            var M51350ZSC = PLC1['M51350ZSC'];
            console.log(22, M51350ZSC);
            dispatch(actions.setVars('M51350ZSC',M51350ZSC));

            var M51450ZSC = PLC1['M51450ZSC'];
            console.log(22, M51450ZSC);
            dispatch(actions.setVars('M51450ZSC',M51450ZSC));

            var M51751ZSC = PLC1['M51751ZSC'];
            console.log(22, M51751ZSC);
            dispatch(actions.setVars('M51751ZSC',M51751ZSC));

            var M51850ZSC = PLC1['M51850ZSC'];
            console.log(22, M51850ZSC);
            dispatch(actions.setVars('M51850ZSC',M51850ZSC));

            var M51851ZSC = PLC1['M51851ZSC'];
            console.log(22, M51851ZSC);
            dispatch(actions.setVars('M51851ZSC',M51851ZSC));

            var M51650ZSC=PLC1['M51650ZSC'];
            console.log(9, M51650ZSC);
            dispatch(actions.setVars('M51650ZSC',M51650ZSC));

            var M51651ZSC=PLC1['M51651ZSC'];
            console.log(10, M51650ZSC);
            dispatch(actions.setVars('M51651ZSC',M51651ZSC));
            
            var M51550ZSC=PLC1['M51550ZSC'];
            console.log(11, M51550ZSC);
            dispatch(actions.setVars('M51550ZSC',M51550ZSC));

            var M51051ZSC=PLC1['M51051ZSC'];
            console.log(12, M51051ZSC);
            dispatch(actions.setVars('M51051ZSC',M51051ZSC));

            // var M51851ZSC=PLC1['M51851ZSC'];
            // console.log(13, M51851ZSC);
            // dispatch(actions.setVars('M51851ZSC',M51851ZSC));

            var M51752ZSC=PLC1['M51752ZSC'];
            console.log(14, M51752ZSC);
            dispatch(actions.setVars('M51752ZSC',M51752ZSC));

            var M51750ZSC=PLC1['M51750ZSC'];
            console.log(15, M51750ZSC);
            dispatch(actions.setVars('M51750ZSC',M51750ZSC));

            var ZSC805=PLC1['ZSC805'];
    
            dispatch(actions.setVars('ZSC805',ZSC805));

            var ZSO805=PLC1['ZSO805'];
            
            dispatch(actions.setVars('ZSO805',ZSO805));
        }
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
