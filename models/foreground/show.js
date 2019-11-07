/*
 * @Descripttion: 宠物秀
 * @Author: WSY
 * @Date: 2019-09-24 17:38:57
 * @LastEditTime: 2019-09-25 19:42:03
 */
const mysql = require('../../config/connect')
var moment = require('moment');

const showCount = async() => {
  const sql =  `select count(*) as count from petshow`
  const result = await mysql.query(sql)
  return result
}

const sendPetShow = async payload => {
  const { textarea, imgUrl, username } = payload
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const read_num = 0
  const sql =  `insert into petshow(content, imgurl, username, create_time, read_num) values ('${textarea}', '${imgUrl}', '${username}', '${createTime}', ${read_num} )`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

const getPetShow = async payload => {
  const { pageNum, pageSize } = payload
  const start = (pageNum-1) * pageSize
  const sql =  `select * from petshow order by create_time desc limit ${start}, ${pageSize}`
  const pageTotal = await showCount()
  const result = await mysql.query(sql)
  return {result, pageTotal}
}

const getShowDetail = async id => {
  const sql = `select id, content, imgurl, petshow.username, avatar, create_time, read_num from petshow,user where petshow.username = user.username and id = ${id}`
  const result = await mysql.query(sql)
  return result
}

// 发表评论
const sendpetComment = async payload => {
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const { textarea, username, showid } = payload 
  const sql = `insert into petshow_comment(content, username, create_time, show_id ) values ('${textarea}', '${username}', '${createTime}', '${showid}')`
  const result = await mysql.query(sql)
  return result
} 

// 获取评论信息
const getshowComment = async id => {
  const sql = `select id, petshow_comment.username, avatar, content, create_time from petshow_comment, user where petshow_comment.username=user.username and show_id=${id} order by create_time desc`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 获取首页评论数
const getindexComment = async () => {
  const sql = `select count(*) as count, petshow.id from petshow, petshow_comment where petshow.id = petshow_comment.show_id group by petshow.id order by petshow.create_time desc`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

module.exports = {
  sendPetShow,
  getPetShow,
  getShowDetail,
  sendpetComment,
  getshowComment,
  getindexComment
}