import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth_reducer";
import message from "./reducers/message_reducer";
import articles from "./reducers/article_reducer";

const store = configureStore({
  reducer: { auth, message, articles },
});
export default store;
