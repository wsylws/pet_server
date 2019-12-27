/*
 * @Descripttion: 注册 登陆模块
 * @Author: WSY
 * @Date: 2019-09-14 11:04:40
 * @LastEditTime: 2019-10-09 17:20:13
 */
const crypto = require('crypto');
const mysql = require('../../config/connect')
const sendMail = require('../../utils/nodemailer'); //传入邮件发送的模块对象

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

const userIsExist = async (payload) => {
    const {username} =  payload
    sql = `select count(*) as count from user where username='${username}'`
    try {
        const data = await mysql.query(sql)
        if(data[0].count !== 0 ) {
          return true
        } else {
          return false
        }
    } catch (err) {
        return null
    }
  }

  const emailIExist = async (payload) => {
    const {email} =  payload
    sql = `select count(*) as count from user where email='${email}'`
    try {
        const data = await mysql.query(sql)
        if(data[0].count !== 0 ) {
          return true
        } else {
          return false
        }
    } catch (err) {
        return null
    }
  }

// 发送验证码
const sendCode = async (email, count) => {
    count = ""; //初始化验证码容器
    for (let i = 0; i < 4; i++) {
        count += Math.floor(Math.random() * 10); //生成4个随机数
    }
    var callback = () => {
        console.log("发送成功");
    };
    sendMail.send(email, count, callback); //调用邮件发送模块
    return count
}

const updatePassword = async payload => {
    const { pwd, email} = payload
    //制定密钥
    const secret = 'hello world'
    //用Hmac算法加密密码
    const hmacPass = crypto.createHmac('sha256', secret)
      .update(pwd)
      .digest('hex')
    // 修改密码
    const sql =  `update user set pwd = '${hmacPass}' where email = '${email}' `
    try {
        const result = await mysql.query(sql)
        return result
    } catch (err) {
        return null
    }
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
    loginUser,
    sendCode,
    userIsExist,
    emailIExist,
    updatePassword
}
