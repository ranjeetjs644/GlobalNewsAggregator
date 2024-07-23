import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  articles: [],
  news: [],
  articleStatus: STATUSES.IDLE,
  setNewsStatus: STATUSES.IDLE,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setArticleStatus(state, action) {
      state.status = action.payload;
    },
    setNew(state, action) {
      state.news = action.payload;
    },
    setNewsStatus(state, action) {
      state.setNewsStatus = action.payload;
    },
  },
});

export const { setArticles, setNew, setArticleStatus, setNewsStatus } =
  newsSlice.actions;

export default newsSlice.reducer;

// Thunk for fetching articles
export function fetchArticles() {
  return async function fetchArticlesThunk(dispatch) {
    dispatch(setArticleStatus(STATUSES.LOADING));
    try {
      const API_KEY = "29da467cdd6840b1b0359a991c789931";
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&language=en&pageSize=20`
      );
      const data = await response.json();
      dispatch(setArticles(data.articles));
      dispatch(setArticleStatus(STATUSES.IDLE));
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      dispatch(setArticleStatus(STATUSES.ERROR));
    }
  };
}

// Thunk for fetching news
export function fetchNews() {
  return async function fetchNewsThunk(dispatch) {
    dispatch(setNewsStatus(STATUSES.LOADING));
    try {
      const API_KEY = "29da467cdd6840b1b0359a991c789931";
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("newsData", data);
      dispatch(setNew(data.news)); // Update with data.news
      dispatch(setNewsStatus(STATUSES.IDLE)); // Set status to IDLE after success
    } catch (error) {
      dispatch(setNewsStatus(STATUSES.ERROR));
      console.error("Fetch News Error:", error); // Log error for debugging
    }
  };
}
