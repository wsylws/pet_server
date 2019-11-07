/*
 * @Descripttion: 论坛
 * @Author: WSY
 * @Date: 2019-10-08 16:42:09
 * @LastEditTime: 2019-10-14 09:44:26
 */
const mysql = require('../../config/connect')
var moment = require('moment');
var now = moment();

// 统计论坛总数
const bbsCount = async(category) => {
  let sql
  if (category === '') {
    sql =  `select count(*) as count from bbs`
  } else {
    sql =  `select count(*) as count from bbs where category = '${category}'`
  }
  const result = await mysql.query(sql)
  return result
}

// 统计论坛评论总数
const bbsCommentCount = async(id) => {
  const sql =  `select count(*) as count from bbs_comment where article_id = ${id}`
  const result = await mysql.query(sql)
  return result
}

const sendArticle = async payload => {
  const { content, title, category, username } = payload
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const read_num = 0
  const top = 0
  const sql =  `insert into bbs(content, title, category, username, create_time, read_num, top) values ('${content}', '${title}','${category}', '${username}', '${createTime}', ${read_num}, ${top} )`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

// 获取论坛文章
const getArticle = async payload => {
  const { category, topic, pageNum, pageSize } = payload
  const start = (pageNum-1) * pageSize
  let sql
  if (topic === "lastest") {
    if (category === '') {
      sql=  `select * from bbs order by top desc, create_time desc limit ${start}, ${pageSize}`
    } else {
      sql = `select * from bbs where category='${category}' order by top desc, create_time desc limit ${start}, ${pageSize}`
    }
  } else {
    if (category === '') {
      sql=  `select * from bbs order by top desc, read_num desc, create_time desc limit ${start}, ${pageSize}`
    } else {
      sql = `select * from bbs where category='${category}' order by top desc, read_num desc, create_time desc limit ${start}, ${pageSize}`
    }
  }
  
  const pageTotal = await bbsCount(category)
  const result = await mysql.query(sql)
  return {result, pageTotal}
}

//获取论坛文章详情
const getbbsDetail = async id => {
  const sql = `select id, content, bbs.username, title, avatar, category, create_time, read_num from bbs,user where bbs.username = user.username and id = ${id}`
  const result = await mysql.query(sql)
  return result
}

// 发表回复
const sendReply = async payload => {
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const { content, username, articleId } = payload 
  const sql = `insert into bbs_comment(content, username, create_time, article_id ) values ('${content}', '${username}', '${createTime}', '${articleId}')`
  const result = await mysql.query(sql)
  return result
} 

// 获取回复信息
const getReply = async (id, result) => {
  const { pageNum, pageSize } = result
  const start = (pageNum-1) * pageSize
  const sql = `select id, bbs_comment.username, avatar, content, create_time from bbs_comment, user where bbs_comment.username=user.username and article_id=${id} limit ${start}, ${pageSize}`
  try {
    const result = await mysql.query(sql)
    const pageTotal = await bbsCommentCount(id)
    return {result, pageTotal}
  } catch {
    return null
  }
}

// 获取首页评论数
const getindexComment = async () => {
  const sql = `select count(*) as count, bbs.id from bbs, bbs_comment where bbs.id = bbs_comment.article_id group by bbs.id order by bbs.create_time desc`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 获取网站首页最近文章
const getLatestArticle = async () => {
  const sql = `select id, avatar, bbs.username, content, title from bbs, user where bbs.username=user.username order by create_time desc limit 0, 5`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 获取网站首页热门文章
const getHotArticle = async () => {
  const sql = `select id, avatar, bbs.username, content, title from bbs, user where bbs.username=user.username order by read_num desc, create_time desc limit 0, 5`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 阅读数加一
const addReadNum = async payload => {
  const { id } = payload
  const sql = `update bbs set read_num=read_num+1 where id=${id}`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

module.exports = {
  sendArticle,
  getArticle,
  getbbsDetail,
  sendReply,
  getReply,
  getindexComment,
  getLatestArticle,
  addReadNum,
  getHotArticle
}