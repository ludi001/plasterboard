import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import styles from './light2.scss'
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        let {type}=this.props;
        return(
             <div className={styles.pagebox}>
                {type==1&&<div className={styles.picbox}></div>}
                {type==2&&<div className={styles.picbox1}></div>}
                {type==3&&<div className={styles.picbox2}></div>}
                {type==4&&<div className={styles.picbox3}></div>}
                
             </div>
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
            
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
