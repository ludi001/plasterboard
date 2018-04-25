import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import styles from './motor2.scss'
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        return(
             <div className={styles.pagebox}>
                <div className={styles.picbox}>
                    
                </div>
                
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
