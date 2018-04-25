import React from 'react'

export default class NotFoundPage extends React.Component {
  static getProps () {
    return {}
  }

  render () {
    return <div style={{textAlign:'center',marginTop:'1rem',color:'red'}}>
      <h3 style={{fontWeight:'normal'}}>页面开发中...</h3>
      <p>The page  in development</p>
    </div>
  }
}
