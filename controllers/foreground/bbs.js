/*
 * @Descripttion: 论坛模块
 * @Author: WSY
 * @Date: 2019-10-08 16:41:59
 * @LastEditTime: 2019-10-14 08:36:30
 */
const types = require('../../utils/error.code')
const bbsModel = require('../../models/foreground/bbs')
const showErrorModal = require('../../utils').showErrorModal

async function articleSend(payload) {
  try {
    const result = await bbsModel.sendArticle(payload)
    return showErrorModal(types.global.UPLOAD_SUCCESS, "发布成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPLOAD_FAIL, "发布失败" , null)
  }
}

// 获取文章
async function getArticle(payload) {
  try {
    const result = await bbsModel.getArticle(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取文章成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取文章失败" , null)
  }
}

//获取文章详情
async function bbsDetail(id) {
  try {
    const result = await bbsModel.getbbsDetail(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取论坛文章详情成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取论坛文章详情失败" , null)
  }
}

// 发表回复
async function sendReply(payload) {
  try {
    const result = await bbsModel.sendReply(payload)
    return showErrorModal(types.bbs.COMMENT_SUCCESS, "回复成功", result) 
  } catch(e) {
    console.log(e)
    return showErrorModal(types.bbs.COMMENT_FAIL, "回复失败", null)
  }
}

// 获取回复内容
async function getReply(id, payload) {
  try {
    const result = await bbsModel.getReply(id, payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取回复成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取回复失败", null)
  }
}

// 获取首页评论数
async function bbsIndexComment() {
  try {
    const result = await bbsModel.getindexComment()
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取评论数成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取评论数失败", null)
  }
}

// 获取网站首页最新文章
async function getLatestArticle() {
  try {
    const result = await bbsModel.getLatestArticle()
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取最新文章成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取最新文章失败", null)
  }
}

// 获取网站首页热门文章
async function getHotArticle() {
  try {
    const result = await bbsModel.getHotArticle()
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取最新文章成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取最新文章失败", null)
  }
}


// 阅读数加一
async function articleAddReadNum(payload) {
  try {
    const result = await bbsModel.addReadNum(payload)
    return showErrorModal(types.global.ADDREADNUM_SUCCESS, "阅读数加1", result)
  } catch {
    return showErrorModal(types.global.ADDREADNUM_FAIL, "", null)
  }
}
module.exports = {
  articleSend,
  getArticle,
  bbsDetail,
  sendReply,
  getReply,
  bbsIndexComment,
  getLatestArticle,
  articleAddReadNum,
  getHotArticle
}