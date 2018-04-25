import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import actions from 'fengui/redux/actions';
import FixedContent from 'fengui/component/page/FixedContent';
import styles from './Login.scss';
let Comps = React.createClass({
  componentDidMount () {
    this.props.init()
  },

  componentWillUnmount () {
    
  },

  render () {
    let{}=this.props;
  
    return (
      <FixedContent>
        <div className={styles.loginbox}>
              kjsdjkasfdjk
         </div>
      </FixedContent>
      
    )
  }
})


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    init:()=>{
    
      }
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comps)
