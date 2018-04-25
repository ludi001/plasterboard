import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import style from './manap.scss'
import Manachar from '../chart/manachar.js'
// import Manapge from './chart/manapge.jsx'
let Comp = React.createClass({
    componentDidMount(){
        this.props.init(this.props.lineData,this.props.columnData);
    },
    componentWillReceiveProps(){
        this.props.init(this.props.lineData,this.props.columnData);
    },
    render() {
        let {lineData,columnData}=this.props;
        return(
             <div className={style.pagebox}>
                
                <div className={style.xkuang}>
                    <div className={style.wenzi}>生产统计</div>
                    <div className={style.weixian}></div>
                    <div className={style.tubiao} id='mIQ'>
                        {/* <Manachar/> */}
                    </div>
                </div>
                <div className={style.xkuang2}>
                    <div className={style.wenzi}>月单耗</div>
                    <div className={style.weixian}></div>
                    <div className={style.tubiao} id='mLQ'>
                    </div>
                </div>
             </div>
            )
      
    }
})

const mapStateToProps = (state) => {
    return {
        columnData:state.vars.columnData,
        lineData:state.vars.lineData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:(lineData,columnData)=>{
            let myChart = echarts.init(document.getElementById('mIQ'));
            if(lineData){
                Manachar.pie.xAxis[0].data=lineData.day;
                Manachar.pie.series[0].data=lineData.left;
                Manachar.pie.series[1].data=lineData.right;
            };
            myChart.setOption(Manachar.pie);

            let myChart1 = echarts.init(document.getElementById('mLQ'));
            if(columnData){
                Manachar.pie2.xAxis[0].data=columnData.mon;
                Manachar.pie2.xAxis[1].data=columnData.mon;
                Manachar.pie2.series[0].data=columnData.left;
                Manachar.pie2.series[1].data=columnData.right;
            };
            myChart1.setOption(Manachar.pie2);
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
