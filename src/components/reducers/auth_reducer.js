import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";
const user = JSON.parse(localStorage.getItem("user"))
const initialState = user
  ? { isLoggedIn: true, user: { key: user.key, email: user.email } }
  : { isLoggedIn: false,user: { key:null, email:null } };
export default function auth(state = initialState, action) {
  const { type,payload} = action;
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user:payload.user
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
