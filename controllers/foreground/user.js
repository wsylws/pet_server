/*
 * @Descripttion: 登陆 注册模块
 * @Author: WSY
 * @Date: 2019-09-14 15:34:16
 * @LastEditTime: 2019-09-17 22:40:20
 */
const crypto = require('crypto');
const types = require('../../utils/error.code');
const userModel = require('../../models/foreground/user')
const showErrorModal = require('../../utils').showErrorModal
var count = "" //新建一个空字符存放验证码，可供全局调用

async function creactRegister(payload) {
  const { emailCode } = payload
  if ( emailCode === count) {
    try {
      const result = await userModel.registerUser(payload)
      return showErrorModal(types.user.REGISTER_SUCCESS, '注册成功', result)
    } catch (err) {
      showErrorModal(types.user.REGISTER_FAIL, '注册失败', null)
    } 
  }  else {
    return showErrorModal(types.user.REGISTER_FAIL, '验证码错误', null)
  }
}

async function userIsExist(payload) {
  try {
    const result = await userModel.userIsExist(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null)
  }
}

async function emailIExist(payload) {
  try {
    const result = await userModel.emailIExist(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null)
  }
}

async function sendCode(payload) {
  try {
    const { email } = payload
    const result = await userModel.sendCode(email, count)
    count = result
    return showErrorModal(types.user.SEND_SUCCESS, "发送成功" , null)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.user.SEND_FAIL, "发送失败" , null)
  }
}

async function checkCode(payload) {
  const { emailcode } = payload
  console.log(emailcode,'------------',count)
  if ( emailcode === count) {
      return showErrorModal(types.user.SEND_SUCCESS, '成功', null)
  }  else{
    return showErrorModal(types.user.SEND_FAIL, '验证码错误', null)
  } 
}

async function updatePassword(payload) {
  try {
    const result = await userModel.updatePassword(payload)
    return showErrorModal(types.global. UPDATE_SUCCESS, "更改成功" , result)
  } catch(e) {
    return showErrorModal(types.global. UPDATE_FAIL, "更改失败" , null)
  }
}

async function userLogin(payload) {
  const { username, pwd } = payload
  //制定密钥
  const secret = 'hello world'
  //用Hmac算法加密密码
  const hmacPass = crypto.createHmac('sha256', secret)
      .update(pwd)
      .digest('hex')
  try {
    const result = await userModel.loginUser(username)
    if (result.length > 0) {
      if (hmacPass != result[0].pwd ) {
        return showErrorModal(types.user.LOGIN_FAIL, '用户名或密码不正确', null)
      } else {
        return showErrorModal(types.user.LOGIN_SUCCESS, '登陆成功', ...result)
      }
    } else {
      return showErrorModal(types.user.LOGIN_FAIL, '该用户不存在', null)
    }
  } catch(err) {
    showErrorModal(types.user.LOGIN_FAIL, '登陆失败', null)
  }
}

module.exports = {
  creactRegister,
  userLogin,
  sendCode,
  userIsExist,
  emailIExist,
  checkCode,
  updatePassword
}
