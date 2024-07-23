import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, fetchNews } from "../features/newsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { articles, articleStatus } = useSelector((state) => state.homeArticle);

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchNews());
  }, [dispatch]);

  // Create a sorted copy of the articles array
  const sortedArticles = [...articles].sort((a) => (a.urlToImage ? -1 : 1));

  return (
    <section className="w-screen h-screen relative top-40 z-40 flex items-center">
      <div className="w-[50%] h-screen pl-6 border-b">
        <section className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6 pl-2">
            Top Headlines Across the World
          </h1>
          {articleStatus === "loading" && <div>Loading Articles...</div>}
          {articleStatus === "error" && <div>Failed to load articles.</div>}
          {articleStatus === "idle" && (
            <div className="space-y-6">
              {sortedArticles.length === 0 && <div>No articles available</div>}
              {sortedArticles.map((article) => (
                <div
                  key={article.url}
                  className="w-[60%] flex flex-col  items-start gap-4 px-2 py-4 bg-white border-b rounded-lg"
                >
                  {article.urlToImage && (
                    <div className="w-full sm:w-full h-64 sm:h-auto overflow-hidden rounded-sm mb-4 sm:mb-0">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {article.description || "No description available"}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Home;
