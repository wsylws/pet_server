
const mysql = require('../../config/connect')


/**
 * @desc: 判断是否存在该用户名
 * @param {String} username
 */
const hasUsername = async (username) => {
  const sql = `select * from user where username = '${username}'`
  const isHasThisUsername = await mysql.query(sql)
  return isHasThisUsername
}

/**
 * @desc: 登陆
 * @param {String} username
 */
const loginUser = async (username) => {
  const sql = `select * from admin where username = '${username}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const checkPwd = async (username) => {
  const sql = `select password from admin where username = '${username}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const updatePwd = async (payload) => {
  const {password, username} = payload
  const sql = `update admin set password='${password}' where username = '${username}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}
module.exports = {
  hasUsername,
  loginUser,
  checkPwd,
  updatePwd
}
