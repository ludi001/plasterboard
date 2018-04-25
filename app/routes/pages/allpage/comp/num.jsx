import React from 'react'
import {connect} from 'react-redux'
import actions from 'fengui/redux/actions'
import {browserHistory} from 'react-router'
import styles from './num.scss'
let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        let{type,tit,num,unit,top,left}=this.props;
        return(
             <div className={styles.pagebox} style={{top:top,left:left}}>
              {type==1&&<div className={styles.tit}>
                <span>{tit}</span><a>{num+unit}</a>
              </div>}
               {type==2&&<div className={styles.tit1} style={{top:top,left:left}}>
                <span>{tit}</span><a>{num+unit}</a>
              </div>}
                
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
