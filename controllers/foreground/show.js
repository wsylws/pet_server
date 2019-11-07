/*
 * @Descripttion: 宠物秀模块
 * @Author: WSY
 * @Date: 2019-09-24 17:38:50
 * @LastEditTime: 2019-09-25 19:41:14
 */
const types = require('../../utils/error.code')
const showModel = require('../../models/foreground/show')
const showErrorModal = require('../../utils').showErrorModal

async function sendShow(payload) {
  try {
    const result = await showModel.sendPetShow(payload)
    return showErrorModal(types.global.UPLOAD_SUCCESS, "发布成功" , result)
  } catch(e) {
    return showErrorModal(types.global.UPLOAD_FAIL, "发布失败" , null)
  }
}

async function getShow(payload) {
  try {
    const result = await showModel.getPetShow(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取宠物秀成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取宠物秀失败" , null)
  }
}

async function showDetail(id) {
  try {
    const result = await showModel.getShowDetail(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取宠物秀详情成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取宠物秀详情失败" , null)
  }
}

// 发表评论
async function showSendComment(payload) {
  try {
    const result = await showModel.sendpetComment(payload)
    return showErrorModal(types.show.COMMENT_SUCCESS, "评论成功", result) 
  } catch(e) {
    console.log(e)
    return showErrorModal(types.show.COMMENT_FAIL, "评论失败", null)
  }
}

// 获取评论内容
async function showGetComment(id) {
  try {
    const result = await showModel.getshowComment(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取评论成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取评论失败", null)
  }
}

// 获取首页评论数
async function showIndexComment() {
  try {
    const result = await showModel.getindexComment()
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取评论数成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取评论数失败", null)
  }
}
module.exports = {
  sendShow,
  getShow,
  showDetail,
  showSendComment,
  showGetComment,
  showIndexComment
}
