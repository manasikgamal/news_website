import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_MESSAGE,
  LOGOUT,
  CLEAR_MESSAGE,
} from "./types";
import authservice from "../services/auth.service";
export const login = (email, key) => async (dispatch) => {
  return await authservice.login(email, key).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload:{user:data}
      });
      dispatch({ type: CLEAR_MESSAGE });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  authservice.logout();
  dispatch({
    type: LOGOUT,
  });
  dispatch({ type: CLEAR_MESSAGE });
};
