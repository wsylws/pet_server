const mysql = require('../../config/connect')


const carouselCount = async(id) => {
  const sql =  `select count(*) as count from carousel where (id = '${id}' or '${id}' = '')`
  const result = await mysql.query(sql)
  return result
}

const carouselSearch = async (payload) => {
  const {page, size, id } = payload
  const start = page * size
  const sql = `select * from carousel where (id = '${id}' or '${id}' = '') limit ${start}, ${size}`
  try {
      const data = await mysql.query(sql)
      const total = await carouselCount(id)
      return { data,total }
  } catch (err) {
      console.log(err)
      return null
  }
}

const getCarouselById = async (payload) => {
  const { id } = payload
  sql = `select id, imgUrl from carousel where id=${id}`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const carouselIsExist = async (payload) => {
  const {imgUrl} =  payload
  sql = `select count(*) as count from carousel where imgUrl='${imgUrl}'`
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

const carouselUpdate = async (payload) => {
  const {id,imgUrl} =  payload
  let sql;
  if (id === '' ) {
    sql = `insert into carousel(imgUrl) values ('${imgUrl}')`
  } else {
    sql = `update carousel set imgUrl='${imgUrl}' where id='${id}'`
  }
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

const carouselDelete = async (payload) => {
  const { id } = payload
  const sql = `delete from carousel where id='${id}'`
  try {
      const data = await mysql.query(sql)
      return data
  } catch (err) {
      return null
  }
}

module.exports = {
  carouselSearch,
  getCarouselById,
  carouselIsExist,
  carouselUpdate,
  carouselDelete
}
