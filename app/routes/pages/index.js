module.exports = {
  path: 'home/',
  childRoutes: [{
    path: 'page/:page',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./Home.jsx'))
      })
    }
  }, {
    path: 'baojing',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./allpage/yj.jsx'))
      })
    }
  }, {
    path: 'shuju',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./allpage/sjfx.jsx'))
      })
    }
  }]
}