import { GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILE, GET_USER_INFO_REQUEST } from "actions/userInfo"

const initState = {
  isLoading: false,
  userInfo: {},
  errorMsg: ""
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading:true,
        userInfo:{},
        errorMsg:""
      }
      break;
      case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading:false,
        userInfo:action.userInfo,
        errorMsg:""
      }
      break;
      case GET_USER_INFO_FAILE:
      return {
        ...state,
        isLoading:false,
        userInfo:"",
        errorMsg:"请求错误"
      }
      break;
    default:
      break;
  }

}