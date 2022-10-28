import { SEARCH_ARTICLE, SET_MESSAGE, CLEAR_MESSAGE } from "./types";
import articleservice from "../services/article.service";
export const getSearchAction = (value, key) => async (dispatch) => {
  return await articleservice.searcharticle(value, key).then(
    (data) => {
      dispatch({
        type: SEARCH_ARTICLE,
        payload: { data, key: value },
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
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
