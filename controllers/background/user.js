
const types = require('../../utils/error.code');
const userModel = require('../../models/background/user')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken

async function userLogin(payload) {
  const { username, password } = payload
  try {
    const result = await userModel.loginUser(username)
    if (result.length > 0) {
      if (password != result[0].password ) {
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

async function checkPwd(payload) {
  const { username, password } = payload
  try {
    const result = await userModel.checkPwd(username)
    console.log(result[0].password, '----------', password);
    if (result[0].password === password) {
      return showErrorBaken(types.user.CHECK_SUCCESSS, "原密码正确" , result, true)
    } else {
      return showErrorBaken(types.user.CHECK_SUCCESSS, "原密码错误" , result, false)
    }
  } catch(e) {
    console.log(e)
    return showErrorModal(types.user.CHECK_FAIL, "服务器错误" , null, false)
  }
}

async function updatePwd(payload) {
  try {
    const result = await userModel.updatePwd(payload)
      return showErrorBaken(types.user.UPDATE_SUCCESS, "修改密码成功" , result, true)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.user.UPDATE_FAIL, "修改密码失败" , null, false)
  }
}

module.exports = {
  userLogin,
  checkPwd,
  updatePwd
}
