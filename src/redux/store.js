import { configureStore } from "@reduxjs/toolkit";
import viewModeReducer from "./viewModeSlice";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    viewMode: viewModeReducer,
    posts: postsReducer,
  },
});

export default store;