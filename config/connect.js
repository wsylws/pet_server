/*
 * @Descripttion: 数据库连接
 * @Author: WSY
 * @Date: 2019-09-11 17:26:07
 * @LastEditTime: 2019-09-17 15:12:34
 */

const mysql = require('mysql')
const config = require('./default')

// 链接池：创建多个链接、复用与分发链接
let pool = mysql.createPool({
   host: config.database.HOST, //主机
   user: config.database.USER, //用户
   password: config.database.PASSWORD, //密码,
   database: config.database.DATABASE, //数据库
   port: config.port, //端口
   debug: true // 是否开启debug
})

var query = (sql, value) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, value, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }

module.exports = { pool, query }