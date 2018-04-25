import React from 'react';
import {connect} from 'react-redux';
import actions from 'fengui/redux/actions';
import {browserHistory} from 'react-router';
import NotFoundPage from '../../comps/NotFoundPage.jsx';
//页面组件
import Sjfx from '../allPage/sjfx.jsx';//数据分析
import Jhcj from '../allPage/jhcj';//均化车间
import Yk from '../allPage/yk';//一控
import Ek from '../allPage/ek';//二控
import Sk from '../allPage/sk';//三控
import Cl from '../allPage/cl';//炒料
import Lqq from '../allPage/lqq.jsx';//冷却器
import Qmj from '../allPage/qmj.jsx';//球磨机
import YJ from '../allPage/yj.jsx';//球磨机
import Home from '../allPage/homei.jsx';//主界面
import Scsj from '../allPage/scsj.jsx';//涿州工厂生产数据
import Sjtb from '../allPage/sjtb.jsx';//数据填报
let Page = React.createClass({
    componentDidMount(){
        this.props.init();
    },
    render() {
        let {params} = this.props;
        switch (params.page) {

        case 'scsj':
            return <Scsj />

        case 'tjfx':
            return <Sjfx />

        case 'index':
            return <Home />


        case 'jhcj':
            return <Jhcj />

        case 'yk':
            return <Yk />

        case 'ek':
            return <Ek />

        case 'sk':
            return <Sk />

        case 'qmj':
            return <Qmj />

        case 'cl':
            return <Cl />

        case 'lqq':
            return <Lqq />

         case 'yj':
            return <YJ />

        case 'sjtb':
            return <Sjtb />
            
        default:
            return <NotFoundPage />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Page)
