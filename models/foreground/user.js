/*
 * @Descripttion: 注册 登陆模块
 * @Author: WSY
 * @Date: 2019-09-14 11:04:40
 * @LastEditTime: 2019-10-09 17:20:13
 */
const crypto = require('crypto');
const mysql = require('../../config/connect')

/**
 * @desc 注册
 * @param {String} username
 * @param {String} email
 * @param {String} phone
 * @param {String} pwd
 */
const registerUser = async payload => {
    const { username, email, phone, pwd} = payload
    const avatar = "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    //制定密钥
    const secret = 'hello world'
    //用Hmac算法加密密码
    const hmacPass = crypto.createHmac('sha256', secret)
      .update(pwd)
      .digest('hex')
    //数据插入到数据库
    const sql =  `insert into user(username, email, phone, pwd, avatar) values ('${username}', '${email}', '${phone}', '${hmacPass}', '${avatar}')`
    try {
        await mysql.query(sql)
        const result = {
            username,
            avatar,
            email,
            phone
        }
        return result
    } catch (err) {
        return null
    }
}

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
    const sql = `select * from user where username = '${username}'`
    try {
        const data = await mysql.query(sql)
        return data
    } catch (err) {
        return null
    }
}

module.exports = {
    registerUser,
    hasUsername,
    loginUser
}
