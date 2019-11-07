/*
 * @Descripttion: 
 * @Author: WSY
 * @Date: 2019-09-14 15:07:58
 * @LastEditTime: 2019-09-14 17:09:16
 */
const backendURL = '/pet-backend/api'
const foregroundURL = '/pet/api'
const types = require('./utils/error.code')

/**
 * 显示提示错误函数
 * @param {Error} error
 * @param {Function} callback
 */
const showErrorModal = (code, msg, data) => {
  return {
    code: code,
    msg: msg || 'sorry, server error',
    data: data || msg
  }
}

const showErrorBaken = (code, msg, data, flag) => {
  return {
    code: code,
    msg: msg || 'sorry, server error',
    data: data || msg,
    flag: flag
  }
}
/**
 * 判断是否携带token
 * @param {String} token
 * @param {Function} callback
 */
const checkAuthToken = token => {
    if (!token) {
      return showErrorModal(
        types.global.INVALID_REQUEST,
        '请求无效，未带有token',
        '请求无效，未带有token'
      )
    }
}

/**
 * 随机生成一串length长度字符
 * @return {String} token
 */
const createTokenString = length => {
  var seed = new Array(
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'm',
    'n',
    'p',
    'Q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  )
  seedlength = seed.length //数组长度
  var _token = ''
  for (let i = 0; i < length; i++) {
    let j = Math.floor(Math.random() * seedlength)
    _token += seed[j]
  }
  return _token
}

module.exports = {
  backendURL,
  foregroundURL,
  showErrorModal,
  createTokenString,
  checkAuthToken,
  showErrorBaken
}
