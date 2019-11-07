const types = require('../../utils/error.code');
const petModel = require('../../models/background/pet')
const showErrorModal = require('../../utils').showErrorModal
const showErrorBaken = require('../../utils').showErrorBaken

async function adoptSearch(payload) {
  try {
    const result = await petModel.adoptSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getAdoptById(payload) {
  try {
    const result = await petModel.getAdoptById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function adoptUpdate(payload) {
  try {
    const result = await petModel.adoptUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function adoptDelete(payload) {
  try {
    const result = await petModel.adoptDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

async function breedSearch(payload) {
  try {
    const result = await petModel.breedSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getBreedById(payload) {
  try {
    const result = await petModel.getBreedById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function breedIsExist(payload) {
  try {
    const result = await petModel.breedIsExist(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null)
  }
}

async function breedUpdate(payload) {
  try {
    const result = await petModel.breedUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function breedDelete(payload) {
  try {
    const result = await petModel.breedDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

async function commentSearch(payload) {
  try {
    const result = await petModel.commentSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function getCommentById(payload) {
  try {
    const result = await petModel.getCommentById(payload)
    return showErrorBaken(types.global.RETRIEVE_LIST_SUCCESS, "获取成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.RETRIEVE_LIST_FAIL, "获取失败" , null, false)
  }
}

async function commentUpdate(payload) {
  try {
    const result = await petModel.commentUpdate(payload)
    return showErrorBaken(types.global.UPDATE_SUCCESS, "更新成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.UPLOAD_FAIL, "更新失败" , null, false)
  }
}

async function commentDelete(payload) {
  try {
    const result = await petModel.commentDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}

async function likeSearch(payload) {
  try {
    const result = await petModel.likeSearch(payload)
    return showErrorModal(types.global.RETRIEVE_LIST_SUCCESS, "搜索成功" , result)
  } catch(e) {
    return showErrorModal(types.global.RETRIEVE_LIST_FAIL, "搜索失败" , null)
  }
}

async function likeDelete(payload) {
  try {
    const result = await petModel.likeDelete(payload)
    return showErrorBaken(types.global.DELETE_SUCCESS, "删除成功" , result, true)
  } catch(e) {
    return showErrorBaken(types.global.DELETE_FAIL, "删除失败" , null, false)
  }
}
module.exports = {
  adoptSearch,
  getAdoptById,
  adoptUpdate,
  adoptDelete,
  breedSearch,
  getBreedById,
  breedIsExist,
  breedUpdate,
  breedDelete,
  commentSearch,
  getCommentById,
  commentUpdate,
  commentDelete,
  likeSearch,
  likeDelete
}

