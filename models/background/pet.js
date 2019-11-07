const mysql = require('../../config/connect')

// 统计宠物送养总数
const petCount = async(username, title, status) => {
  const sql =  `select count(*) as count from pet where (username = '${username}' or '${username}' = '') and (title = '${title}' or '${title}' = '') and (status = '${status}' or '${status}' = '')`
  const result = await mysql.query(sql)
  return result
}

const adoptSearch = async (payload) => {
  const {page, size, username, title, status } = payload
  const start = page * size
  const sql = `select * from pet where (username = '${username}' or '${username}' = '') and (title = '${title}' or '${title}' = '') and (status = '${status}' or '${status}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await petCount(username, title, status)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getAdoptById = async (payload) => {
  const { id } = payload
  sql = `select id, title, status from pet where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const adoptUpdate = async (payload) => {
  const {id, title, status} =  payload
  const sql = `update pet set title='${title}',status='${status}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}


const adoptDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from pet where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const breedCount = async(breed) => {
  const sql =  `select count(*) as count from pet_breed where (breed_name = '${breed}' or '${breed}' = '')`
  const result = await mysql.query(sql)
  return result
}

const breedSearch = async (payload) => {
  const {page, size, breed } = payload
  const start = page * size
  const sql = `select * from pet_breed where (breed_name = '${breed}' or '${breed}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await breedCount(breed)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getBreedById = async (payload) => {
  const { id } = payload
  sql = `select id, breed_name from pet_breed where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const breedIsExist = async (payload) => {
  const {breed_name} =  payload
  sql = `select count(*) as count from pet_breed where breed_name='${breed_name}'`
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

const breedUpdate = async (payload) => {
  const {id,breed_name} =  payload
  let sql;
  if (id === '' ) {
    sql = `insert into pet_breed(breed_name) values ('${breed_name}')`
  } else {
    sql = `update pet_breed set breed_name='${breed_name}' where id='${id}'`
  }
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const breedDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from pet_breed where id='${id}'`
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
  const sql = `select * from pet_comment where pet_id=${id} and (username = '${username}' or '${username}' = '') limit ${start}, ${size}`
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
  sql = `select id, content from pet_comment where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentUpdate = async (payload) => {
  const {id, content} =  payload
  const sql = `update pet_comment set content='${content}' where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const commentDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from pet_comment where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const likeCount = async(username, id) => {
  const sql =  `select count(*) as count from pet_like where pet_id=${id} and (username = '${username}' or '${username}' = '')`
  const result = await mysql.query(sql)
  return result
}

const likeSearch = async (payload) => {
  const {page, size, username, id } = payload
  const start = page * size
  const sql = `select * from pet_like where pet_id=${id} and (username = '${username}' or '${username}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await likeCount(username, id)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const likeDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from pet_like where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}
module.exports = {
  adoptSearch,
  getAdoptById,
  adoptUpdate,
  adoptDelete,
  breedSearch,
  getBreedById,
  breedIsExist,
  breedUpdate,
  breedDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete,
  likeSearch,
  likeDelete
}
