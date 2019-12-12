const mysql = require('../../config/connect')

// 统计论坛总数
const showCount = async(username, content) => {
  const sql =  `select count(*) as count from petshow where username like '%${username}%' and content like '%${content}%'`
  const result = await mysql.query(sql)
  return result
}

const showSearch = async (payload) => {
  const {page, size, username, content } = payload
  const start = page * size
  const sql = `select * from petshow where username like '%${username}%' and content like '%${content}%' limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await showCount(username, content)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getshowById = async (payload) => {
  const { id } = payload
  sql = `select id, content from petshow where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const showUpdate = async (payload) => {
  const {id, content} =  payload
  const sql = `update petshow set content='${content}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const showDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from petshow where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentCount = async(username, id) => {
  const sql =  `select count(*) as count from pet_comment where pet_id=${id} and (username = '${username}' or '${username}' = '')`
  const result = await mysql.query(sql)
  return result
}

const commentSearch = async (payload) => {
  const {page, size, username, id } = payload
  const start = page * size
  const sql = `select * from petshow_comment where show_id=${id} and (username = '${username}' or '${username}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await commentCount(username, id)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getCommentById = async (payload) => {
  const { id } = payload
  sql = `select id, content from petshow_comment where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentUpdate = async (payload) => {
  const {id, content} =  payload
  const sql = `update petshow_comment set content='${content}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from petshow_comment where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}
module.exports = {
  showSearch,
  getshowById,
  showUpdate,
  showDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete
}
