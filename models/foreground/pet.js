/*
 * @Descripttion: 送养 领养模块部分
 * @Author: WSY
 * @Date: 2019-09-16 19:42:07
 * @LastEditTime: 2019-10-10 17:52:46
 */
const mysql = require('../../config/connect')
var moment = require('moment');
var now = moment();

/**
 * @desc: 送养宠物
 * @param payload 
 */

const sendPets = async payload => {
  const { title, petdesc, breed, breed_name, sex, age, quchong, mianyi, jueyu, contactname, telephone, wechat, qqnumber, imageUrl, province, city, county, username, avatar} = payload
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const readNum = 0
  const status = 0
  const send_check = 0
  console.log(createTime)
  let sql
  console.log(1111111111, breed_name);
  if(breed_name) {
    sql =  `insert into pet(title, pet_desc, status, breed, breed_name, sex, age, quchong, mianyi, jueyu, contactname, telephone, wechat, qqnumber, imgurl, username, read_num, create_time, province, city, county, send_check ) 
                values ('${title}', '${petdesc}', '${status}', '${breed}', '${breed_name}', ${sex}, '${age}', '${quchong}', '${mianyi}', '${jueyu}', '${contactname}', '${telephone}', '${wechat}', '${qqnumber}', '${imageUrl}', '${username}', ${readNum}, '${createTime}', '${province}', '${city}', '${county}', '${send_check}' )`
  } else {
    sql =  `insert into pet(title, pet_desc, status, breed, sex, age, quchong, mianyi, jueyu, contactname, telephone, wechat, qqnumber, imgurl, username, read_num, create_time, province, city, county, send_check ) 
                values ('${title}', '${petdesc}', '${status}', '${breed}', ${sex}, '${age}', '${quchong}', '${mianyi}', '${jueyu}', '${contactname}', '${telephone}', '${wechat}', '${qqnumber}', '${imageUrl}', '${username}', ${readNum}, '${createTime}', '${province}', '${city}', '${county}', '${send_check}' )`
  }
  
  try {
    const result = await mysql.query(sql)
    return result
  } catch (err) {
      return null
  }
}

const petCount = async(province, city, county, breed) => {
  let sql
  sql = `select count(*) as count from pet,user 
         where pet.username=user.username 
         and send_check = 1
         and status = '0'
         and (breed = '${breed}' or '${breed}' = '' or '${breed}' = '全部') 
         and (province = '${province}' or '${province}' = '' or '${province}' = '全部') 
         and (city = '${city}' or '${city}' = '' or '${city}' = '全部') 
         and (county = '${county}' or '${county}' = '' or '${county}' = '全部') 
         `
  const result = await mysql.query(sql)
  return result
}

/**
 * @desc: 获取宠物品种
 */
const petBreed = async () => {
  const sql = `select breed_name from pet_breed where category is Null`
  const result = await mysql.query(sql)
  return result
}

const findBreed = async (payload) => {
  const { category } = payload
  console.log('-----------', category)
  const sql = `select breed_name from pet_breed where category = '${category}'`
  const result = await mysql.query(sql)
  return result
}


/**
 * @desc: 获取宠物文章信息，分页，搜索
 */
const petArticle = async payload => {
  const { pageNum, pageSize, province, city, county, breed, breedName } = payload
  const start = (pageNum-1) * pageSize
  let sql
  if ( breedName !== '' ) {
    sql = `select id, title, pet_desc, create_time, read_num, pet.username, avatar, imgurl from pet,user 
         where pet.username=user.username 
         and send_check = 1
         and status = '0'
         and (breed = '${breed}') 
         and (breed_name = '${breedName}' or '${breedName}' = '') 
         and (province = '${province}' or '${province}' = '' or '${province}' = '全部') 
         and (city = '${city}' or '${city}' = '' or '${city}' = '全部') 
         and (county = '${county}' or '${county}' = '' or '${county}' = '全部') 
         order by create_time desc limit ${start}, ${pageSize}`
  } else {
    sql = `select id, title, pet_desc, create_time, read_num, pet.username, avatar, imgurl from pet,user 
         where pet.username=user.username 
         and send_check = 1
         and status = '0'
         and (breed = '${breed}' or '${breed}' = '' or '${breed}' = '全部') 
         and (province = '${province}' or '${province}' = '' or '${province}' = '全部') 
         and (city = '${city}' or '${city}' = '' or '${city}' = '全部') 
         and (county = '${county}' or '${county}' = '' or '${county}' = '全部') 
         order by create_time desc limit ${start}, ${pageSize}`
  }
  
  const pageTotal = await petCount(province, city, county, breed)
  const result = await mysql.query(sql)
  return {result, pageTotal}
}

/**
 * @desc: 获取宠物领养详情文章信息
 */

const petDetail = async id => {
  const sql = `select * from pet where id=${id}`
  const result = await mysql.query(sql)
  return result
}

// 发送评论
const sendpetComment = async payload => {
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const { textarea, username, petid } = payload 
  const sql = `insert into pet_comment(content, username, create_time, pet_id ) values ('${textarea}', '${username}', '${createTime}', '${petid}')`
  const result = await mysql.query(sql)
  return result
} 

// 获取评论信息
const getpetComment = async id => {
  const sql = `select id, pet_comment.username, avatar, content, create_time from pet_comment, user where pet_comment.username=user.username and pet_id=${id} order by create_time desc`
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
  const sql = `update pet set read_num=read_num+1 where id=${id}`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 点击喜欢
const addPetLikeNum = async payload => {
  const createTime = moment().format("YYYY-MM-DD HH:mm:ss")
  const { petid, username } = payload
  const sql = `insert into pet_like(username, create_time, pet_id ) values ('${username}', '${createTime}', '${petid}')`
  try {
    const result = await mysql.query(sql)
    return result
  } catch {
    return null
  }
}

// 取消喜欢
const addPetUnLikeNum = async payload => {
  const { petid, username } = payload
  const sql = `delete from pet_like where pet_id=${petid} and username='${username}'`
  try {
    const result = await mysql.query(sql)
    return result
  } catch(e) {
    return e
  }
}

// 获取喜欢数
const getPetLike = async id => {
  const sql = `select count(*) as count, username from pet_like where pet_id=${id}`
  const result = await mysql.query(sql)
  return result
}

const getPetSwiper = async () => {
  const sql = `select imgUrl from carousel limit 0, 4`
  const result = await mysql.query(sql)
  return result
}
module.exports = {
  sendPets,
  petBreed,
  findBreed,
  petArticle,
  petDetail,
  sendpetComment,
  getpetComment,
  addReadNum,
  addPetLikeNum,
  getPetLike,
  addPetUnLikeNum,
  getPetSwiper,
  
}