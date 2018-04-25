import React from 'react';
import styles from './body.scss';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import Page from './page.jsx';
import Loading from '../../../components/common/Loading.jsx';
let Body = React.createClass({
  componentDidMount(){
    this.props.init()
  },
 
  render () {
    let {params,ifload} = this.props;
      return (
      	<div className={styles.bodyBox}>
           {ifload!=true&&<Page  params={params} /> } 
           {ifload==true&&<Loading />}
        </div>
      )
  }
})
const mapStateToProps = (state) => {
  return {
    ifload:state.vars.ifload,
  }
}

const mapDispatchToProps = (dispatch) => {
	return{
    init:()=>{
     

    }

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Body)
