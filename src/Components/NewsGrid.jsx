import React from "react";
import NewsCard from "./NewsCard";

export default function NewsGrid({ articles }) {
  if (!articles.length) {
    return <p className="text-gray-500 dark:text-gray-400">No articles found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}
