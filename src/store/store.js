import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/newsSlice";

const store = configureStore({
  reducer: {
    homeArticle: newsReducer,
  },
});

export default store;
