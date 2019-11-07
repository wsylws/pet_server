const mysql = require('../../config/connect')
const crypto = require('crypto')

// 统计用户总数
const userCount = async(username) => {
  const sql =  `select count(*) as count from user where (username = '${username}' or '${username}' = '')`
  const result = await mysql.query(sql)
  return result
}


const userSearch = async (payload) => {
  const {page, size, username } = payload
  const start = page * size
  const sql = `select username, email, phone from user where (username = '${username}' or '${username}' = '') limit ${start}, ${size}`
  // if (username !== '' ) {
  //   sql = `select username, email, phone from user where username = '${username}' limit ${start}, ${size}`
  // } else {
  //   sql = `select username, email, phone from user limit ${start}, ${size}`
  // }
  try {
      const data = await mysql.query(sql)
      const total = await userCount(username)
      return {data,total}
  } catch (err) {
      return null
  }
}

const resetPassword = async (payload) => {
  const { username } = payload
  //制定密钥
  const secret = 'hello world'
  //用Hmac算法加密密码
  const hmacPass = crypto.createHmac('sha256', secret)
    .update('123456')
    .digest('hex')
  const sql = `update user set pwd = '${hmacPass}' where username='${username}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const deleteUser = async (payload) => {
  const { username } = payload
  const sql = `delete from user where username='${username}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

// 统计管理员总数
const adminCount = async(username) => {
  let sql
  if (username === '') {
    sql =  `select count(*) as count from admin`
  } else {
    sql =  `select count(*) as count from admin where username = '${username}'`
  }
  const result = await mysql.query(sql)
  return result
}

const adminSearch = async (payload) => {
  const {page, size, username } = payload
  const start = page * size
  let sql
  if (username !== '' ) {
    sql = `select id, username, email, phone from admin where username = '${username}' limit ${start}, ${size}`
  } else {
    sql = `select id, username, email, phone from admin limit ${start}, ${size}`
  }
  try {
      const data = await mysql.query(sql)
      const total = await adminCount(username)
      return {data,total}
  } catch (err) {
      return null
  }
}

const getAdminById = async (payload) => {
  const { id } = payload
  sql = `select id, username, email, phone from admin where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const adminIsExist = async (payload) => {
  const {username} =  payload
  sql = `select count(*) as count from admin where username='${username}'`
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

const adminUpdate = async (payload) => {
  const {id,username,email,phone} =  payload
  let sql;
  //制定密钥
  const secret = 'hello world'
  //用Hmac算法加密密码
  const hmacPass = crypto.createHmac('sha256', secret)
    .update('123456')
    .digest('hex')
  const avatar = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
  if (id === '' ) {
    sql = `insert into admin(username, email ,phone, password, avatar) values ('${username}', '${email}', '${phone}', '${hmacPass}', '${avatar}')`
  } else {
    sql = `update admin set email='${email}',phone='${phone}' where username='${username}'`
  }
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const adminDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from admin where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}
module.exports = {
  userSearch,
  resetPassword,
  deleteUser,
  adminSearch,
  getAdminById,
  adminIsExist,
  adminUpdate,
  adminDelete
}
