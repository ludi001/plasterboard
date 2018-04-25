import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import styles from './homei.scss';
import webSocket from '../../../../config/socketClient.js';
import jrb from '../../img/comp/jrb.png'
import jrb1 from '../../img/comp/jrb1.png'
import jrb2 from '../../img/comp/jrb2.png'
import jrb3 from '../../img/comp/jrb3.png'
let numw=Math.ceil(Math.random()*1000)+'be';

let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    componentWillUnmount () {
        webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw,function(){},false);
        webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw,function(){},false);
        webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC3_json',numw+'q',function(){},false);//2控
    },
    render() {
        let {productSpeed,num1,num2,num3,num4,boardGo,boardOut,speedDryer}=this.props;
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    <div className={styles.speedDryer}>干燥机速度：{speedDryer} M/MIN</div>
                    <div className={styles.boardNum}>
                        <div>切板数量：{boardOut} 张</div><div className={styles.board}>进板数量：{boardGo} 张</div>
                    </div>
                    <div className={styles.productSpeed}>生产线速度：{productSpeed} M/MIN</div>
                 
                    <div className={styles.num1}>数量:{num1} 张</div>
                    <div className={styles.num2}>数量:{num2} 张</div>
                    <div className={styles.num3}>数量:{num3} 张</div>
                    <div className={styles.num4}>数量:{num4} 张</div>
                </div> 

                
                <img src={jrb} id='imm' />            
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        productSpeed: state.vars.productSpeed,
        num1: state.vars.num1,
        num2: state.vars.num2,
        num3: state.vars.num3,
        num4: state.vars.num4,
        boardOut: state.vars.boardOut,
        boardGo: state.vars.boardGo,
        speedDryer: state.vars.speedDryer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC2_json',numw+'1',success,true);//一控
            function success(index,res){
                var PLC2 = JSON.parse(res);
                console.log('PLC2',PLC2);
                let productSpeed=PLC2['SIC215SP'];
                dispatch(actions.setVars('productSpeed',productSpeed));
                console.log(111111111111,productSpeed)
            };
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC4_json',numw+'2',success3,true);//三控
            function success3(index,res){

                var PLC4 = JSON.parse(res);
                let num1=PLC4['total1a'];
                let num2=PLC4['total1b'];
                let num3=PLC4['total2a'];
                let num4=PLC4['total2b'];
                let boardGo=PLC4['NO_BOARD_C1'];
                let boardOut=PLC4['NO_BOARD_C'];
                dispatch(actions.setVars('num1',num1));
                dispatch(actions.setVars('num2',num2));
                dispatch(actions.setVars('num3',num3));
                dispatch(actions.setVars('num4',num4));
                dispatch(actions.setVars('boardGo',boardGo));
                dispatch(actions.setVars('boardOut',boardOut));
            };
            webSocket.getConnect('ZZ/BXJCSGC/XM/CL/PLC3_json',numw+'q',success2,true);//2控
            function success2(index,res){

                var PLC3 = JSON.parse(res);
                let speed=PLC3['DD_SPD_FIX'];
                dispatch(actions.setVars('speedDryer',speed));
            };


            setInterval(function(){
                let src=$('#imm').attr('src');
                if(src==jrb){
                    $('#imm').attr('src',jrb1)
                }else if(src==jrb1){
                     $('#imm').attr('src',jrb2)
                }else if(src==jrb2){
                     $('#imm').attr('src',jrb3)
                }else if(src==jrb3){
                     $('#imm').attr('src',jrb)
                }
            },1000)


        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
