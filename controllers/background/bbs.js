const types = require('../../utils/error.code');
const bbsModel = require('../../models/background/bbs')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken

async function bbsSearch(payload) {
  try {
    const result = await bbsModel.bbsSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getbbsById(payload) {
  try {
    const result = await bbsModel.getbbsById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function bbsUpdate(payload) {
  try {
    const result = await bbsModel.bbsUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function bbsDelete(payload) {
  try {
    const result = await bbsModel.bbsDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

async function commentSearch(payload) {
  try {
    const result = await bbsModel.commentSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getCommentById(payload) {
  try {
    const result = await bbsModel.getCommentById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function commentUpdate(payload) {
  try {
    const result = await bbsModel.commentUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function commentDelete(payload) {
  try {
    const result = await bbsModel.commentDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

module.exports = {
  bbsSearch,
  getbbsById,
  bbsUpdate,
  bbsDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete
}
