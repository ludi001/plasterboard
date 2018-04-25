import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import styles from './txt.scss'
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        let{top,left,txt}=this.props;
        return(
             <div className={styles.pagebox} style={{top:top,left:left}}>
               {txt}
                
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
