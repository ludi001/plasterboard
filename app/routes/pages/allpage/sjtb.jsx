import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';

let Comp = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        let{}=this.props;
        return(
            <div></div>
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
            let params='userid=zzuser&password=zzuser&pwdencode=false';
            window.open('http://192.168.200.114:18080/web/webui/login.xul?'+params)
        },
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp)
