const types = require('../../utils/error.code')
const noticeModel = require('../../models/foreground/notice')
const showErrorModal = require('../../utils').showErrorModal

async function addNotice(payload) {
  try {
    const result = await noticeModel.addNotice(payload)
    return showErrorModal(types.global.UPLOAD_SUCCESS, "添加成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPLOAD_FAIL, "添加失败" , null)
  }
}

async function getNotice(payload) {
  try {
    const result = await noticeModel.getNotice(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取提醒成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取提醒失败" , null)
  }
}

async function getAllNotice(payload) {
  try {
    const result = await noticeModel.getAllNotice(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取提醒总数成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取提醒总数失败" , null)
  }
}

async function updateNotice(payload) {
  try {
    const result = await noticeModel.updateNotice(payload)
    return showErrorModal(types.global.UPDATE_SUCCESS, "更新成功" , result)
  } catch(e) {
    console.log(e)
    return showErrorModal(types.global.UPDATE_FAIL, "更新失败" , null)
  }
}
module.exports =  {
  addNotice,
  getNotice,
  getAllNotice,
  updateNotice
}