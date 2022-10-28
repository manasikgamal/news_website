import {
  GETARTICLE_SUCCESS,
  SEARCH_ARTICLE,
  ONE_ARTICLE,
} from "../actions/types";
const initialState = { key: null };
export default function articles(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GETARTICLE_SUCCESS:
      return {
        ...state,
        tops: payload.data,
        key: null,
      };
    case SEARCH_ARTICLE:
      return {
        ...state,
        tops: payload.data,
        key: payload.key,
      };
    case ONE_ARTICLE:
      return {
        ...state,
        onearticle: payload,
      };
    default:
      return state;
  }
}
