import React from 'react';
import styles from './head.scss';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import back from '../../img/icon/exit.png';
import select from '../../img/icon/select.png';
import Timedate from '../allpage/comp/timedate.jsx';
let navitem=[
    {
      name:'主界面',
      icon:require('../../img/icon/homepage.png'),
      page:'index',
    },
    {
      name:'均化车间',
      icon:require('../../img/icon/jhcj.png'),
      page:'jhcj',
    },
    {
      name:'一控',
      icon:require('../../img/icon/yk.png'),
      page:'yk',
    },
    {
      name:'二控',
      icon:require('../../img/icon/ek.png'),
      page:'ek',
    },
    {
      name:'三控',
      icon:require('../../img/icon/sk.png'),
      page:'sk',
    },
    {
      name:'炒料',
      icon:require('../../img/icon/cl.png'),
      page:'cl',
    },
    {
      name:'冷却器',
      icon:require('../../img/icon/lqq.png'),
      page:'lqq',
    },
    {
      name:'球磨机',
      icon:require('../../img/icon/qmj.png'),
      page:'qmj',
    },
    {
      name:'数据填报',
      icon:require('../../img/icon/qmj.png'),
      page:'sjtb',
    },
    // {
    //   name:'报警',
    //   icon:require('../../img/icon/yj.png'),
    //   page:'yj',
    // },
    //  {
    //   name:'统计分析',
    //   icon:require('../../img/icon/yj.png'),
    //   page:'tjfx',
    // },
  ];
let Header = React.createClass({
  componentDidMount(){
    let{params}=this.props;
    this.props.init(params);
  },
 
  render () {
    let {params,changepage,showpage,gohomepage,selectpage} = this.props;
      return (
      	<div className={styles.headBox}>
          <div className={styles.logoBox}>
            
            <div className={styles.back} ><a onClick={()=>gohomepage()}><img src={back} /></a></div>
            
            <div className={styles.timedate}><Timedate /></div>
            
            <div className={styles.selectbox} >
              <div className={styles.titbox}>
                管理员
                <a  onClick={()=>selectpage()}> 
                
                  <img src={select} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.navBox}>
            {
              navitem.map((value,key)=>{
                return(
                  <span onClick={()=>changepage(value)} className={showpage==value.page?styles.actitem:styles.item} key={key}>
                  <img src={value.icon} /><span>{value.name}</span>
                  </span>
                )
              })
            }
            
           </div>
        </div>
      )
  }
})
const mapStateToProps = (state) => {
  return {
    showpage:state.vars.showpage,
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
    init:(params)=>{
      dispatch(actions.setVars('showpage',params.page))

    },
    changepage:(value)=>{//点击切换导航
      browserHistory.push('/home/page/'+value.page);
      dispatch(actions.setVars('showpage',value.page)); 
      dispatch(actions.setVars('ifload',true));//缓冲加载
      setTimeout(function(){
        dispatch(actions.setVars('ifload',false));//缓冲加载
        // dispatch(actions.setVars('showpage',value.page))        
      },500)
      
    },
    gohomepage:()=>{//点击回到首页
      //browserHistory.push('/home/index')
    },
    selectpage:()=>{//点击打开下拉列表
      
    }

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
