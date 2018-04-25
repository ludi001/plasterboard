import BaseApplication  from "./base/BaseApplication";

module.exports = {
  name: 'app',
  path: '/',
  component: BaseApplication,
  childRoutes: [
    require('./pages'),
    require('./404')
  ]
};
