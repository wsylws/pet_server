/*
 * @Descripttion: 七牛云配置
 * @Author: WSY
 * @Date: 2019-09-17 15:12:03
 * @LastEditTime: 2019-10-08 14:55:28
 */
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'l14f__sckQjZmMKgj0sOuCp0bq17mCiyt4DxmW6U'
const secretKey = '4O8kp8f8rFYw66bGHgDIx2T23V9hg4Lm6_B9met4'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'petadopt-wsy',
  expires: 10800
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}
