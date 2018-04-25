import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import styles from './Home.scss';
import FixedContent from 'fengui/component/page/FixedContent.jsx';
import Body from './module/body.jsx';
import Header from './module/head.jsx';
let Home = React.createClass({
  componentDidMount(){
    this.props.init()
  },
 
  render () {
    let {params} = this.props;
      return (
        <FixedContent>
        	<div className={styles.homebox} >
            <Header params={params} />
            <Body params={params} />
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
	return{
    init:()=>{


    }

	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
