const mysql = require('../../config/connect')
var moment = require('moment');

const addNotice = async payload => {
  const { content, comment_id, category, username,author } = payload
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const read = 0
  const sql =  `insert into notice(content, comment_id, category, username, create_time, is_read, author) values ('${content}', '${comment_id}','${category}', '${username}', '${createTime}', ${read},'${author}' )`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}
const getUnreadNum = async (username) => {
  const petsql = `select count(*) as petcount from notice where author='${username}' and category = 'pet' and is_read=0`
  const bbssql = `select count(*) as bbscount from notice where author='${username}' and category = 'bbs' and is_read=0`
  const showsql = `select count(*) as showcount from notice where author='${username}' and category = 'show' and is_read=0`
  const result4 = await mysql.query(petsql)
  const result5 = await mysql.query(bbssql)
  const result6 = await mysql.query(showsql)
  return {result4,result5,result6}
} 
const getNotice = async payload => {
  const { username } = payload
  const petsql = `select notice.id,notice.username, notice.content, notice.create_time, notice.is_read,pet.title, pet.id as article_id from notice,pet 
         where notice.comment_id = pet.id and pet.username='${username}' and category = 'pet' order by create_time desc`

  const bbssql = `select notice.id,notice.username, notice.content, notice.create_time, notice.is_read,bbs.title, bbs.id as article_id from notice,bbs 
         where notice.comment_id = bbs.id and bbs.username='${username}' and notice.category = 'bbs' order by create_time desc`

  const showsql= `select notice.id,notice.username, notice.content, notice.create_time, notice.is_read,petshow.content as title, petshow.id as article_id from notice,petshow 
         where notice.comment_id = petshow.id and petshow.username='${username}' and category = 'show' order by create_time desc`

  const result1 = await mysql.query(petsql)
  const result2 = await mysql.query(bbssql)
  const result3 = await mysql.query(showsql)
  const result4 = await getUnreadNum(username)
  return {result1, result2, result3, ...result4}
}

const getAllNotice = async payload => {
  const { username } = payload
  const sql =  `select count(*) as count from notice where author = '${username}' and is_read=0`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

const updateNotice = async payload => {
  const { username } = payload
  const sql =  `update notice set is_read=1 where author='${username}'`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}
module.exports = {
  addNotice,
  getNotice,
  getAllNotice,
  updateNotice
}