/*
 * @Descripttion: 送养领养模块
 * @Author: WSY
 * @Date: 2019-09-17 19:15:32
 * @LastEditTime: 2019-09-23 16:59:41
 */
const types = require('../../utils/error.code')
const petModel = require('../../models/foreground/pet')
const showErrorModal = require('../../utils').showErrorModal

async function petSend(payload) {
  try {
    const result = await petModel.sendPets(payload)
    console.log("aaaaaaaaaaaaaaaaaaa----------", result)
    return showErrorModal(types.global.UPLOAD_SUCCESS, "上传成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPLOAD_FAIL, "上传失败" , null)
  }
}

async function petBreed() {
  try {
    const result = await petModel.petBreed()
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取宠物品种成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取宠物品种失败", null)
  }
}

//获取宠物领养文章数据
async function petAdoptArticle(payload) {
  try {
    const result = await petModel.petArticle(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取文章成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取文章失败", null)
  }
}

//获取宠物领养文章详情
async function petDetailArticle(id) {
  try {
    const result = await petModel.petDetail(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取文章详情成功", result) 
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取文章详情失败", null)
  }
}

// 发表评论
async function petSendComment(payload) {
  try {
    const result = await petModel.sendpetComment(payload)
    return showErrorModal(types.pet.COMMENT_SUCCESS, "评论成功", result) 
  } catch {
    return showErrorModal(types.pet.COMMENT_FAIL, "评论失败", null)
  }
}

// 获取评论内容
async function petGetComment(id) {
  try {
    const result = await petModel.getpetComment(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取评论成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取评论失败", null)
  }
}

// 阅读数加一
async function petAddReadNum(payload) {
  try {
    const result = await petModel.addReadNum(payload)
    return showErrorModal(types.global.ADDREADNUM_SUCCESS, "阅读数加1", result)
  } catch {
    return showErrorModal(types.global.ADDREADNUM_FAIL, "", null)
  }
}

// 点击喜欢
async function petLikeNum(payload) {
  try {
    const result = await petModel.addPetLikeNum(payload)
    return showErrorModal(types.pet.LIKE_SUCCESS, "点赞成功", result)
  } catch {
    return showErrorModal(types.pet.LIKE_FAIL, "点赞失败", null)
  }
}

// 取消喜欢
async function petUnLikeNum(payload) {
  try {
    const result = await petModel.addPetUnLikeNum(payload)
    return showErrorModal(types.pet.UNLIKE_SUCCESS, "取消点赞成功", result)
  } catch {
    return showErrorModal(types.pet.UNLIKE_FAIL, "取消点赞失败", null)
  }
}

//喜欢数
async function petGetLike(id) {
  try {
    const result = await petModel.getPetLike(id)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取喜欢成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取喜欢失败", null)
  }
}
module.exports = {
  petSend,
  petBreed,
  petAdoptArticle,
  petDetailArticle,
  petSendComment,
  petGetComment,
  petAddReadNum,
  petLikeNum,
  petGetLike,
  petUnLikeNum
}