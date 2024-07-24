import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const initialState = {
  articles: [],
  news: [],
  headings: [],
  articleStatus: STATUSES.IDLE,
  newsStatus: STATUSES.IDLE,
  headingStatus: STATUSES.IDLE,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
    setArticleStatus(state, action) {
      state.articleStatus = action.payload;
    },
    setNews(state, action) {
      state.news = action.payload;
    },
    setNewsStatus(state, action) {
      state.newsStatus = action.payload;
    },
    setHeading(state, action) {
      state.headings = action.payload;
    },
    setHeadingStatus(state, action) {
      state.headingStatus = action.payload;
    },
  },
});

export const {
  setArticles,
  setNews,
  setArticleStatus,
  setNewsStatus,
  setHeading,
  setHeadingStatus,
} = newsSlice.actions;

export default newsSlice.reducer;

// Thunk for fetching articles
export function fetchArticles() {
  return async function fetchArticlesThunk(dispatch) {
    dispatch(setArticleStatus(STATUSES.LOADING));
    try {
      const API_KEY = "29da467cdd6840b1b0359a991c789931";
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&language=en&pageSize=10`
      );
      const data = await response.json();
      dispatch(setArticles(data.articles || []));
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
        `https://newsapi.org/v2/everything?q=world&apiKey=${API_KEY}&pageSize=5 `
      );
      const data = await response.json();
      dispatch(setNews(data.articles || [])); // Use data.articles instead of data.news
      dispatch(setNewsStatus(STATUSES.IDLE));
    } catch (error) {
      console.error("Fetch News Error:", error);
      dispatch(setNewsStatus(STATUSES.ERROR));
    }
  };
}

// Thunk for fetching trending headlines using Currents API
// Thunk for fetching trending headlines using Currents API
export function fetchHeadings() {
  return async function fetchHeadingsThunk(dispatch) {
    dispatch(setHeadingStatus(STATUSES.LOADING));
    const API_KEY = "s2DfAeoBoAimkq6wHf43tEHbgZR5BQAjCZIRdQP8F_PaDAtW";
    const BASE_URL = "https://api.currentsapi.services/v1/latest-news";

    try {
      const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&language=en`);
      const data = await response.json();

      console.log("Fetched Data for Headings:", data); // Log the response to see the structure

      // Access 'news' key for headlines
      dispatch(setHeading(data.news || []));
      dispatch(setHeadingStatus(STATUSES.IDLE));
    } catch (error) {
      console.error("Fetch Headings Error:", error);
      dispatch(setHeadingStatus(STATUSES.ERROR));
    }
  };
}
