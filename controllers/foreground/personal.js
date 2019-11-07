/*
 * @Descripttion: 个人中心
 * @Author: WSY
 * @Date: 2019-10-12 09:39:25
 * @LastEditTime: 2019-10-12 22:06:50
 */
const types = require('../../utils/error.code')
const personalModel = require('../../models/foreground/personal')
const showErrorModal = require('../../utils').showErrorModal

async function updateInfo(payload) {
  try {
    const result = await personalModel.updateInfo(payload)
    return showErrorModal(types.global.UPDATE_SUCCESS, "修改成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPDATE_FAIL, "修改失败" , null)
  }
}

// 获取自己发表的领养信息
async function getMyPets(payload) {
  try {
    const result = await personalModel.getMyPets(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取领养信息成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取领养信息成功", null)
  }
}

async function updateStatus(payload) {
  try {
    const result = await personalModel.updateStatus(payload)
    return showErrorModal(types.global.UPDATE_SUCCESS, "更改状态成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPDATE_FAIL, "更改状态失败" , null)
  }
}

async function deletePet(payload) {
  try {
    const result = await personalModel.deletePet(payload)
    return showErrorModal(types.global.DELETE_SUCCESS, "删除成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.DELETE_FAIL, "删除失败" , null)
  }
}

// 获取自己喜欢的领养信息
async function getMyLikePets(payload) {
  try {
    const result = await personalModel.getMyLikePets(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取喜欢的领养信息成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取喜欢的领养信息成功", null)
  }
}

// 获取自己喜欢的论坛文章
async function getMyArticle(payload) {
  try {
    const result = await personalModel.getMyArticle(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取我的文章成功", result)
  } catch {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取我的文章成功", null)
  }
}


async function deleteArticle(payload) {
  try {
    const result = await personalModel.deleteArticle(payload)
    return showErrorModal(types.global.DELETE_SUCCESS, "删除成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.DELETE_FAIL, "删除失败" , null)
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