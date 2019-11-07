const types = require('../../utils/error.code');
const showModel = require('../../models/background/show')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken

async function showSearch(payload) {
  try {
    const result = await showModel.showSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getshowById(payload) {
  try {
    const result = await showModel.getshowById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function showUpdate(payload) {
  try {
    const result = await showModel.showUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function showDelete(payload) {
  try {
    const result = await showModel.showDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

async function commentSearch(payload) {
  try {
    const result = await showModel.commentSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getCommentById(payload) {
  try {
    const result = await showModel.getCommentById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function commentUpdate(payload) {
  try {
    const result = await showModel.commentUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function commentDelete(payload) {
  try {
    const result = await showModel.commentDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}
module.exports = {
  showSearch,
  getshowById,
  showUpdate,
  showDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete
}
