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

async function creactRegister(payload) {
  const { username } = payload
  const isHasThisUsername = await userModel.hasUsername(username)
  console.log(isHasThisUsername)
  if (isHasThisUsername.length === 0) {
    try {
      const result = await userModel.registerUser(payload)
      
      return showErrorModal(types.user.REGISTER_SUCCESS, '注册成功', result)
    } catch (err) {
      showErrorModal(types.user.REGISTER_FAIL, '注册失败', null)
    } 
  } else {
    return showErrorModal(types.user.REGISTER_FAIL, '该用户已存在', null)
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
  userLogin
}
