import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import styles from './timedate.scss'

let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    
    render() {
        let {timeNow,dateNow,weekday} = this.props;
        return(
        	<div className={styles.pagebox}>
        		<div className={styles.timebox}>{timeNow}</div>
        		<div className={styles.datebox}>{dateNow}</div>
        		<div className={styles.weekbox}>{weekday}</div>
        	</div>

        )
      
    }
})

const mapStateToProps = (state) => {
    return {
        timeNow: state.vars.timeNow,
        dateNow: state.vars.dateNow,
        weekday: state.vars.weekday,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{

             function pdrq(data){
          data=Number(data)
          if(data<10){
            return '0'+data;
          }else{
            return data;
          }
        }
            function setTime(){
        let myDate = new Date();
        let timeNow=pdrq(myDate.getHours())+':'+pdrq(myDate.getMinutes())+":"+pdrq(myDate.getSeconds());
        let dateNow=myDate.toLocaleDateString();//获取当前日期
        let day=myDate.getDay();//星期
        let weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        dispatch(actions.setVars('timeNow',timeNow));
        dispatch(actions.setVars('dateNow',dateNow));
        dispatch(actions.setVars('weekday',weekday[day]));
      }      
      setInterval(setTime, 1000);

        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)