import React, { useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, fetchNews, fetchHeadings } from "../features/newsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    articles = [],
    articleStatus,
    news = [],
    newsStatus,
    headings = [],
    headingStatus,
  } = useSelector((state) => state.homeArticle || {});

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchNews());
    dispatch(fetchHeadings());
  }, [dispatch]);

  console.log("articles", articles);
  console.log("news", news);
  console.log("headings", headings);

  return (
    <section className="w-full h-[75vh] relative top-40 z-40 flex justify-between">
      {/* Article */}
      <div className="w-[40%] flex flex-col h-full pl-6 pt-3 border-b overflow-y-scroll no-scrollbar">
        {articleStatus === "loading" && <div>Loading Articles...</div>}
        {articleStatus === "error" && <div>Failed to load articles.</div>}
        {articleStatus === "idle" && (
          <div className="space-y-6">
            {articles.length === 0 && <div>No articles available</div>}
            {articles.map((article) => (
              <div
                key={article.url}
                className="w-[100%] flex flex-col items-start gap-4 px-2 py-4 bg-white border-b"
              >
                {article.image && (
                  <div className="w-full sm:w-full h-64 sm:h-auto overflow-hidden rounded-sm mb-4 sm:mb-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 w-full">
                  <Link to={article.url} className="hover:underline">
                    <h2 className="w-full text-left text-[1.1rem] font-semibold mb-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="w-full text-justify text-gray-600 mb-4">
                    {article.description || "No description available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* News */}
      <div id="news" className="w-[60%]  flex flex-col  px-1 py-0 no-scrollbar">
        {newsStatus === "loading" && <div>Loading News...</div>}
        {newsStatus === "error" && <div>Failed to load news.</div>}
        {newsStatus === "idle" && (
          <div className="space-y-6">
            {news.length === 0 && <div>No news available</div>}
            {news.slice(0, 1).map((item) => (
              <div
                key={item.url}
                className="w-[90%] flex flex-col items-start gap-4 px-2 py-6 border-b mx-auto"
              >
                {item.image && (
                  <div className="w-[100%] overflow-hidden rounded-sm mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 ">
                  <h2 className="w-full text-left text-2xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h2>
                  <p className="w-full text-justify text-gray-600 mb-4 font-semibold text-base">
                    {item.description || "No description available"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Heading */}
      <div
        id="headings"
        className="w-[40%] flex flex-col p-6 py-0 px-2 overflow-y-scroll no-scrollbar"
      >
        {headingStatus === "loading" && <div>Loading Headings...</div>}
        {headingStatus === "error" && <div>Failed to load headings.</div>}
        {headingStatus === "idle" && (
          <div className="">
            {headings.length === 0 && <div>No headings available</div>}
            {headings.map((heading) => (
              <div
                key={heading.title}
                className="w-full flex flex-col items-start gap-4 px-2 py-4 bg-white border-b text-gray-800 
               "
              >
                <Link
                  to={heading.url}
                  target="_blank"
                  className="hover:underline"
                >
                  <h2 className="w-full text-left text-xl font-semibold   font-Robot">
                    {heading.title}
                  </h2>
                </Link>
                <p className="w-full text-justify text-gray-600  font-Inter font-semibold">
                  {heading.description || "No description available"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
