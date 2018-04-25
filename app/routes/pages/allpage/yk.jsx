import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './yk.scss';
import Motor from './comp/motor.jsx';
import Motor2 from './comp/motor2.jsx';
import Motor3 from './comp/motor3.jsx';
import Light2 from './comp/light2.jsx';
import Run from './comp/run.jsx';
import Num from './comp/num.jsx';
import Txt from './comp/txt.jsx';
import webSocket from '../../../../config/socketClient.js';
let numw=Math.ceil(Math.random()*1000)+'be';
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
      componentWillUnmount () {
        
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw,function(){},false);
  },
    render() {
        let {M55350ZSC,M55351ZSC,M55352ZSC,M53450ZSC,M53451ZSC,M53251ZSC,M53250ZSC,M44260ZSC,M53350ZSC,M53352ZSC,M52051ZSC,M52055ZSC,M51951ZSC,M51952ZSC,M52050ZSC,M52052ZSC,M44150ZSC,M52553ZSC,pl2json} =this.props;
            console.log('pl2json',pl2json)
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.motorbox}>
                        <div className={styles.motor01}>
                            {M52051ZSC==0 && <div><Motor2 /></div>}
                            {M52051ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02}>
                            {M52055ZSC==0 && <div><Motor2 /></div>}
                            {M52055ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor03}>
                            {M44150ZSC==0 && <div><Motor2 /></div>}
                            {M44150ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor04}>
                            {M52052ZSC==0 && <div><Motor2 /></div>}
                            {M52052ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor05}>
                            {M52553ZSC==0 && <div><Motor2 /></div>}
                            {M52553ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor06}>
                            {M51951ZSC==0 && <div><Motor2 /></div>}
                            {M51951ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor07}>
                            {M51952ZSC==0 && <div><Motor2 /></div>}
                            {M51952ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor08}>
                            {M52050ZSC==0 && <div><Motor2 /></div>}
                            {M52050ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor09}>
                            {M55350ZSC==0 && <div><Motor3 /></div>}
                            {M55350ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor10}>
                            {M55351ZSC==0 && <div><Motor3 /></div>}
                            {M55351ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor11}>
                            {M55352ZSC==0 && <div><Motor3 /></div>}
                            {M55352ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor12}>
                            {M53350ZSC==0 && <div><Motor3 /></div>}
                            {M53350ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor13}>
                            {M44260ZSC==0 && <div><Motor3 /></div>}
                            {M44260ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor14}>
                            {M53250ZSC==0 && <div><Motor3 /></div>}
                            {M53250ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor15}>
                            {M53352ZSC==0 && <div><Motor3 /></div>}
                            {M53352ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor16}>
                            {M53251ZSC==0 && <div><Motor2 /></div>}
                            {M53251ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor17}>
                            {M53451ZSC==0 && <div><Motor2 /></div>}
                            {M53451ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor18}>
                            {M53450ZSC==0 && <div><Motor /></div>}
                            {M53450ZSC==1 && <div><Run type={1} /></div>}
                        </div>

                         <div className={styles.motor22}>
                            {pl2json&&pl2json.M55151ZSC==0 && <div><Motor /></div>}
                            {pl2json&&pl2json.M55151ZSC==1 && <div><Run type={1} /></div>}
                        </div>
                         <div className={styles.motor18} style={{marginTop:'4.5rem',marginLeft:'-5rem'}}>
                            {pl2json&&pl2json.M55150ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M55150ZSC==1 && <div><Run type={2} /></div>}
                        </div>

                         <div className={styles.motor02} style={{marginTop:'0.4rem',marginLeft:'-4.4rem'}}>
                            {pl2json&&pl2json.M52451ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M52451ZSC==1 && <div><Run type={2} /></div>}
                        </div>

                         <div className={styles.motor02} style={{marginTop:'0.4rem',marginLeft:'-2.3rem'}}>
                            {pl2json&&pl2json.M52550ZSC==0 && <div><Light2 type={2} /></div>}
                            {pl2json&&pl2json.M52550ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor02} style={{marginTop:'0.4rem',marginLeft:'-3.6rem'}}>
                            {pl2json&&pl2json.M52452ZSC==0 && <div><Light2 type={2} /></div>}
                            {pl2json&&pl2json.M52452ZSC==1 && <div><Run type={2} /></div>}
                        </div>

                         <div className={styles.motor17} style={{marginTop:'3.3rem',marginLeft:'-7.3rem'}}>
                            {pl2json&&pl2json.M54650ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M54650ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor17} style={{marginTop:'4.95rem',marginLeft:'-7.3rem'}}>
                            {pl2json&&pl2json.M54651ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M54651ZSC==1 && <div><Run type={2} /></div>}
                        </div>

                         <div className={styles.motor04} style={{marginTop:'-1rem',marginLeft:'-4.06rem'}}>
                            {pl2json&&pl2json.M44350ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M44350ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.famen1}>
                            {pl2json&&pl2json.UY966==1 && <div>
                                <div className={styles.back}></div>
                                <div className={styles.huiliu}></div>
                                </div>}
                            {pl2json&&pl2json.UY966==0 && <div>
                                <div className={styles.out}></div>
                                <div className={styles.chuqu}></div>
                                <div className={styles.chuqu2}></div>
                            </div>}
                        </div>
                        <div className={styles.famen2}>
                            {pl2json&&pl2json.UY876==1 && <div>
                                <div className={styles.back}></div>
                                <div className={styles.huiliu}></div>
                                </div>}
                            {pl2json&&pl2json.UY876==0 && <div>
                                <div className={styles.out}></div>
                                <div className={styles.chuqu}></div>
                                </div>}
                        </div>
                        <div className={styles.famen3}>
                            {pl2json&&pl2json.UY869==1 && <div>
                                <div className={styles.back}></div>
                                <div className={styles.huiliu}></div>
                                </div>}
                            {pl2json&&pl2json.UY869==0 && <div>
                                <div className={styles.out}></div>
                                <div className={styles.chuqu}></div>
                                </div>}
                        </div>
                        <div className={styles.famen4}>
                            {pl2json&&pl2json.UY879==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY879==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen5}>
                            {pl2json&&pl2json.UY875==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY875==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen6}>
                            {pl2json&&pl2json.UY880==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY880==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen7}>
                            {pl2json&&pl2json.UY878==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY878==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen8}>
                            {pl2json&&pl2json.UY882==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY882==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen9}>
                            {pl2json&&pl2json.UY881==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY881==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.famen10}>
                            {pl2json&&pl2json.UY868==1 && <div className={styles.close}></div>}
                            {pl2json&&pl2json.UY868==0 && <div className={styles.open}></div>}
                        </div>
                        <div className={styles.motor19}>
                            {pl2json&&pl2json.M52053ZSC==0 && <div><Motor3 /></div>}
                            {pl2json&&pl2json.M52053ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                        <div className={styles.motor20}>
                            {pl2json&&pl2json.M52054ZSC==0 && <div><Motor2 /></div>}
                            {pl2json&&pl2json.M52054ZSC==1 && <div><Run type={2} /></div>}
                        </div>
                        <div className={styles.motor21}>
                            {pl2json&&pl2json.M52352ZSC==0 && <div><Motor3 /></div>}
                            {pl2json&&pl2json.M52352ZSC==1 && <div><Run type={3} /></div>}
                        </div>
                    </div>
                    <div className={styles.tablebox}>
                        <table>
                            <thead>
                                <tr>
                                    <th>纸浆水</th>
                                    <th>搅拌水</th>
                                    <th>发泡水</th>
                                    <th>发泡剂</th>
                                    <th>淀粉溶液</th>
                                    <th>保凝剂</th>
                                    <th>PORMING</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PV:<span>{pl2json&&pl2json.FIC030PV.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.FIC031PV.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.FIC032PV.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.ZT234.toFixed(0)} %</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.FIC036PV.toFixed(2)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.SIC211SP.toFixed(2)} KG/CSM</span></td>
                                    <td>PV:<span>--</span></td>
                                </tr>
                                <tr>
                                    <td>SP:{pl2json&&pl2json.FIC030SP.toFixed(0)} KG/CSM</td>
                                    <td>SP:{pl2json&&pl2json.FIC031SP.toFixed(0)} KG/CSM</td>
                                    <td>SP:{pl2json&&pl2json.FIC032SP.toFixed(0)} KG/CSM</td>
                                    <td>SP:{pl2json&&pl2json.ZIC234SP.toFixed(0)} %</td>
                                    <td>SP:{pl2json&&pl2json.FIC036SP.toFixed(2)} KG/CSM</td>
                                    <td>SP:--</td>
                                    <td>SP:--</td>
                                </tr>
                                <tr>
                                    <td>CO:{pl2json&&pl2json.SIC030.toFixed(1)+'%'}</td>
                                    <td>CO:{pl2json&&pl2json.SIC031.toFixed(1)+'%'}</td>
                                    <td>CO:{pl2json&&pl2json.SIC032.toFixed(1)+'%'}</td>
                                    <td>CO:{pl2json&&pl2json.SIC234.toFixed(1)+'%'}</td>
                                    <td>CO:{pl2json&&pl2json.SIC036.toFixed(0)+'%'}</td>
                                    <td>CO:--</td>
                                    <td>CO:--</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>熟石膏粉</th>
                                    <th>淀粉</th>
                                    <th>缓凝剂</th>
                                    <th>成型速度</th>
                                    <th>减水剂</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>PV:<span>{pl2json&&pl2json.FIC029PV.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.ZIC087SP.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.SIC210SP.toFixed(0)} KG/CSM</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.SIC215SP.toFixed(0)} M/MIN</span></td>
                                    <td>PV:<span>{pl2json&&pl2json.TIC088SP.toFixed(0)} KG/CSM</span></td>
                                    <td rowSpan='3'></td>
                                    <td rowSpan='3'></td>
                                </tr>
                                <tr>
                                    <td>SP:{pl2json&&pl2json.FIC029SP} KG/CSM</td>
                                    <td>SP:{pl2json&&pl2json.SIC028SP} KG/CSM</td>
                                    <td></td>
                                    <td></td>
                                    <td>SP:{pl2json&&pl2json.FIC035SP} KG/CSM</td>
                                </tr>
                                <tr>
                                    <td>CO:{pl2json&&pl2json.SIC0292+'%'}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>CO:{pl2json&&pl2json.SIC035+'%'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Txt  txt={'FIC029'}  top={'3.94rem'} left={'13.6rem'} />
                <Num type={1} tit={'PV'} num={pl2json!=undefined?pl2json.FIC029PV:'--'} unit={'KG/CSM'} top={'4.2rem'} left={'12.3rem'} />
                 <Num type={1} tit={'SP'} num={pl2json!=undefined?pl2json.FIC029SP:'--'} unit={'KG/CSM'} top={'4.46rem'} left={'12.3rem'} />
                 <Num type={1} tit={'CO'} num={pl2json!=undefined?pl2json.SIC0292:'--'} unit={'%'} top={'4.72rem'} left={'12.3rem'} />

                 <Txt  txt={'STARCH'}  top={'3.94rem'} left={'15.2rem'} />
                  <Num type={1} tit={'PV'} num={pl2json!=undefined?pl2json.FIC036SP:'--'} unit={'KG/CSM'} top={'4.2rem'} left={'14rem'} />
                   <Num type={1} tit={'SP'} num={pl2json!=undefined?pl2json.SIC211SP:'--'} unit={'KG/CSM'} top={'4.46rem'} left={'14rem'} />
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        M55350ZSC: state.vars.M55350ZSC,
        M55351ZSC: state.vars.M55351ZSC,
        M55352ZSC: state.vars.M55352ZSC,
        M53450ZSC: state.vars.M53450ZSC,
        M53451ZSC: state.vars.M53451ZSC,
        M53251ZSC: state.vars.M53251ZSC,
        M53250ZSC: state.vars.M53250ZSC,
        M44260ZSC: state.vars.M44260ZSC,
        M53350ZSC: state.vars.M53350ZSC,
        M53352ZSC: state.vars.M53352ZSC,
        M52051ZSC: state.vars.M52051ZSC,
        M52055ZSC: state.vars.M52055ZSC,
        M51951ZSC: state.vars.M51951ZSC,
        M51952ZSC: state.vars.M51952ZSC,
        M52050ZSC: state.vars.M52050ZSC,
        M52052ZSC: state.vars.M52052ZSC,
        M44150ZSC: state.vars.M44150ZSC,
        M52553ZSC: state.vars.M52553ZSC,
        pl2json:state.vars.pl2json,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{

            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw,success,true);
            function success(index,res){
            var PLC2 = JSON.parse(res);
             dispatch(actions.setVars('pl2json',PLC2));
            console.log(1,PLC2);
            
            var M55350ZSC = PLC2['M55350ZSC'];

            dispatch(actions.setVars('M55350ZSC',M55350ZSC));

            var M55351ZSC = PLC2['M55351ZSC'];
     
            dispatch(actions.setVars('M55351ZSC',M55351ZSC));

            var M55352ZSC = PLC2['M55352ZSC'];
         
            dispatch(actions.setVars('M55352ZSC',M55352ZSC));

            var M53450ZSC = PLC2['M53450ZSC'];
          
            dispatch(actions.setVars('M53450ZSC',M53450ZSC));

            var M53451ZSC = PLC2['M53451ZSC'];
     
            dispatch(actions.setVars('M53451ZSC',M53451ZSC));

            var M53251ZSC = PLC2['M53251ZSC'];
        
            dispatch(actions.setVars('M53251ZSC',M53251ZSC));

            var M53250ZSC = PLC2['M53250ZSC'];
          
            dispatch(actions.setVars('M53250ZSC',M53250ZSC));

            var M44260ZSC = PLC2['M44260ZSC'];
       
            dispatch(actions.setVars('M44260ZSC',M44260ZSC));

            var M53350ZSC = PLC2['M53350ZSC'];
         
            dispatch(actions.setVars('M53350ZSC',M53350ZSC));

            var M53352ZSC = PLC2['M53352ZSC'];
         
            dispatch(actions.setVars('M53352ZSC',M53352ZSC));

            var M52051ZSC = PLC2['M52051ZSC'];
       
            dispatch(actions.setVars('M52051ZSC',M52051ZSC));

            var M52055ZSC = PLC2['M52055ZSC'];
        
            dispatch(actions.setVars('M52055ZSC',M52055ZSC));

            var M51951ZSC = PLC2['M51951ZSC'];
          
            dispatch(actions.setVars('M51951ZSC',M51951ZSC));

            var M51952ZSC = PLC2['M51952ZSC'];
    
            dispatch(actions.setVars('M51952ZSC',M51952ZSC));

            var M52050ZSC = PLC2['M52050ZSC'];
     
            dispatch(actions.setVars('M52050ZSC',M52050ZSC));

            var M52052ZSC = PLC2['M52052ZSC'];
      
            dispatch(actions.setVars('M52052ZSC',M52052ZSC));

            var M44150ZSC = PLC2['M44150ZSC'];
   
            dispatch(actions.setVars('M44150ZSC',M44150ZSC));

            var M52553ZSC = PLC2['M52553ZSC'];
        
            dispatch(actions.setVars('M52553ZSC',M52553ZSC));
        }

        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
