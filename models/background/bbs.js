const mysql = require('../../config/connect')

// 统计论坛总数
const bbsCount = async(username, title, top, category) => {
  const sql =  `select count(*) as count from bbs where (username = '${username}' or '${username}' = '') and (title = '${title}' or '${title}' = '') and (top = '${top}' or '${top}' = '') and (category = '${category}' or '${category}' = '')`
  const result = await mysql.query(sql)
  return result
}

const bbsSearch = async (payload) => {
  const {page, size, username, title, top, category } = payload
  const start = page * size
  const sql = `select * from bbs where (username = '${username}' or '${username}' = '') and (title = '${title}' or '${title}' = '') and (top = '${top}' or '${top}' = '') and (category = '${category}' or '${category}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await bbsCount(username, title, top, category)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getbbsById = async (payload) => {
  const { id } = payload
  sql = `select id, title, category, top from bbs where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const bbsUpdate = async (payload) => {
  const {id, title, category, top} =  payload
  const sql = `update bbs set title='${title}',category='${category}',top='${top}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const bbsDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from bbs where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentCount = async(username, id) => {
  const sql =  `select count(*) as count from bbs_comment where article_id=${id} and (username = '${username}' or '${username}' = '')`
  const result = await mysql.query(sql)
  return result
}

const commentSearch = async (payload) => {
  const {page, size, username, id } = payload
  const start = page * size
  const sql = `select * from bbs_comment where article_id=${id} and (username = '${username}' or '${username}' = '') limit ${start}, ${size}`
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
  sql = `select id, content from bbs_comment where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentUpdate = async (payload) => {
  const {id, content} =  payload
  const sql = `update bbs_comment set content='${content}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from bbs_comment where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}
module.exports = {
  bbsSearch,
  getbbsById,
  bbsUpdate,
  bbsDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete
}
