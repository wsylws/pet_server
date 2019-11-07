/*
 * @Descripttion: 路由整合分发
 * @Author: WSY
 * @Date: 2019-09-11 16:40:40
 * @LastEditTime: 2019-10-12 09:38:03
 */

const backendURL = require('../utils').backendURL
const foregroundURL = require('../utils').foregroundURL

module.exports = function(app) {
  // 分发user模块，比如用户的注册和登录请求业务逻辑将会在/api/user.js中实现
  var user = require('./foreground/user')
  app.use(`${foregroundURL}/user`,user);
  var upload = require('./foreground/upload')
  app.use('/',upload);
  var pet = require('./foreground/pet')
  app.use(`${foregroundURL}/pet`,pet);
  var show = require('./foreground/show')
  app.use(`${foregroundURL}/show`,show);
  var bbs = require('./foreground/bbs')
  app.use(`${foregroundURL}/bbs`,bbs);
  var personal = require('./foreground/personal')
  app.use(`${foregroundURL}/my`,personal);
  var notice = require('./foreground/notice')
  app.use(`${foregroundURL}/notice`,notice);

  // -----------------后台-------------------
  var user = require('./background/user')
  app.use(`${backendURL}/user`,user);
  var role = require('./background/role')
  app.use(`${backendURL}/role`,role);
  var pet = require('./background/pet')
  app.use(`${backendURL}/pet`,pet);
  var bbs = require('./background/bbs')
  app.use(`${backendURL}/bbs`,bbs);
  var show = require('./background/show')
  app.use(`${backendURL}/show`,show);
}
