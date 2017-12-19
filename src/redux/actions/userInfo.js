export const GET_USER_INFO_REQUEST = "userinfo/GET_USER_INFO_REQUEST"
export const GET_USER_INFO_SUCCESS = "userinfo/GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAILE = "userinfo/GET_USER_INFO_FAILE"

function getUserInfoRequest() {
  return { type: GET_USER_INFO_REQUEST }
}
function getUserInfoSuccess(userinfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userinfo
  }
}

function getUserInfoFaile() {
  return {
    type: GET_USER_INFO_FAILE
  }
}

export function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest())
    return fetch('http://localhost:8080/api/user.json')
      .then(response => { return response.json() })
      .then(json => dispatch(getUserInfoSuccess(json)))
      .catch(() => dispatch(getUserInfoFaile()))
  }
}