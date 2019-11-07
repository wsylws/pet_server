/*
 * @Descripttion: 个人中心
 * @Author: WSY
 * @Date: 2019-10-12 09:41:26
 * @LastEditTime: 2019-10-12 22:06:24
 */
const mysql = require('../../config/connect')
var moment = require('moment');

const updateInfo = async payload => {
  const { avatar, username, email, phone } = payload
  const sql =  `update user set avatar='${avatar}', email='${email}', phone='${phone}' where username='${username}'`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

// 获取自己发表领养文章
const getMyPets = async payload => {
  const { username } = payload
  const sql=  `select id, title, create_time, read_num, pet_desc, imgurl, status from pet where username='${username}' order by create_time desc`
  const result = await mysql.query(sql)
  return result
}

const updateStatus = async payload => {
  const { id, status } = payload
  const sql =  `update pet set status='${status}' where id=${id}`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

const deletePet = async payload => {
  const { id} = payload
  const sql =  `delete from pet where id='${id}'`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

// 获取喜欢的领养信息
const getMyLikePets = async payload => {
  const { username } = payload
  const sql=  `select pet.id, pet.username, avatar, title, pet.create_time, read_num, pet_desc, imgurl, status from pet, pet_like,user where pet.id = pet_like.pet_id and pet.username = user.username and pet_like.username='${username}' order by create_time desc`
  const result = await mysql.query(sql)
  return result
}

// 获取自己文章
const getMyArticle = async payload => {
  const { username } = payload
  const sql=  `select id, avatar, bbs.username, title, bbs.create_time, read_num, content from bbs, user where bbs.username = user.username and bbs.username='${username}' order by create_time desc`
  const result = await mysql.query(sql)
  return result
}

const deleteArticle = async payload => {
  const { id} = payload
  const sql =  `delete from bbs where id='${id}'`
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

module.exports = {
  updateInfo,
  getMyPets,
  updateStatus,
  deletePet,
  getMyLikePets,
  getMyArticle,
  deleteArticle
}