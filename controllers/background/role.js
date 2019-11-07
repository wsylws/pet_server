const types = require('../../utils/error.code');
const roleModel = require('../../models/background/role')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken

async function userSearch(payload) {
  try {
    const result = await roleModel.userSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function resetPassword(payload) {
  try {
    const result = await roleModel.resetPassword(payload)
    return showErrorBaken(types.user.RESET_SUCCESS, "重置密码成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.user.RESET_FAIL, "重置密码失败" , null, false)
  }
}

async function deleteUser(payload) {
  try {
    const result = await roleModel.deleteUser(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除用户成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除用户失败" , null, false)
  }
}

async function adminSearch(payload) {
  try {
    const result = await roleModel.adminSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getAdminById(payload) {
  try {
    const result = await roleModel.getAdminById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function adminIsExist(payload) {
  try {
    const result = await roleModel.adminIsExist(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null)
  }
}

async function adminUpdate(payload) {
  try {
    const result = await roleModel.adminUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function adminDelete(payload) {
  try {
    const result = await roleModel.adminDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除用户成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除用户失败" , null, false)
  }
}


module.exports = {
  userSearch,
  resetPassword,
  deleteUser,
  adminSearch,
  getAdminById,
  adminIsExist,
  adminUpdate,
  adminDelete
}

