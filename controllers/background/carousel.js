const types = require('../../utils/error.code');
const carouselModel = require('../../models/background/carousel')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken


async function carouselSearch(payload) {
  try {
    const result = await carouselModel.carouselSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getCarouselById(payload) {
  try {
    const result = await carouselModel.getCarouselById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function carouselIsExist(payload) {
  try {
    const result = await carouselModel.carouselIsExist(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null)
  }
}

async function carouselUpdate(payload) {
  try {
    const result = await carouselModel.carouselUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function carouselDelete(payload) {
  try {
    const result = await carouselModel.carouselDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

module.exports = {
  carouselSearch,
  getCarouselById,
  carouselIsExist,
  carouselUpdate,
  carouselDelete,
}

