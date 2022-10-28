import {
  GETARTICLE_SUCCESS,
  SET_MESSAGE,
  ONE_ARTICLE,
  CLEAR_MESSAGE,
} from "./types";
import articleservice from "../services/article.service";
export const getArticleAction = (key) => async (dispatch) => {
  return await articleservice.getArticle(key).then(
    (data) => {
      dispatch({
        type: GETARTICLE_SUCCESS,
        payload: { data },
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
export const getdescription = (title, state) => (dispatch) => {
  const onearticle = state.articles.find((x) => x.title === title);
  dispatch({
    type: ONE_ARTICLE,
    payload: onearticle,
  });
};
