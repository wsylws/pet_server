/*
 * @Descripttion: 
 * @Author: WSY
 * @Date: 2019-09-14 15:12:51
 * @LastEditTime: 2019-10-09 21:01:24
 */
/**
 *
 * @desc types code
 * @author PDK
 *
 * Created at     : 2019-03-21
 * Last modified  : 2019-03-27
 */
module.exports = {
  global: {
    INVALID_REQUEST: -1,
    UPLOAD_SUCCESS: 1,
    UPLOAD_FAIL: -1,
    CREATE_SUCCESS: 1,
    CREATE_FAIL: -1,
    UPDATE_SUCCESS: 1,
    UPDATE_FAIL: -1,
    RETRIEVE_LIST_SUCCESS: 1,
    RETRIEVE_LIST_FAIL: -1,
    DELETE_SUCCESS: 1,
    DELETE_FAIL: -1,
  },
  user: {
    REGISTER_SUCCESS: 1,
    REGISTER_FAIL: -1,
    LOGIN_SUCCESS: 1,
    LOGIN_FAIL: -1,
    GET_USERINFO_SUCCESS: 1,
    GET_USERINFO_FAIL: -1,
    CHECK_SUCCESS: 1,
    CHECK_FAIL: -1,
    RESET_SUCCESS: 1,
    RESET_FAIL: -1
  },
  pet: {
    COMMENT_SUCCESS: 1,
    COMMENT_FAIL: -1,
    ADDREADNUM_SUCCESS: 1,
    ADDREADNUM_FAIL: -1,
    LIKE_SUCCESS: 1,
    LIKE_FAIL: -1,
    UNLIKE_SUCCESS: 1,
    UNLIKE_FAIL: -1
  },
  show: {
    COMMENT_SUCCESS: 1,
    COMMENT_FAIL: -1,
    ADDREADNUM_SUCCESS: 1,
    ADDREADNUM_FAIL: -1
  },
  bbs: {
    COMMENT_SUCCESS: 1,
    COMMENT_FAIL: -1,
    ADDREADNUM_SUCCESS: 1,
    ADDREADNUM_FAIL: -1
  }
}
