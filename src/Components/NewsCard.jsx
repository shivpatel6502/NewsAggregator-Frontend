import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function NewsCard({ article }) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`rounded-xl shadow-lg p-4 cursor-pointer border transition-all
          ${theme === "dark"
            ? "bg-cream border-gray-300"
            : "bg-white border-gray-200"
          } hover:shadow-xl`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
          onClick={() => setIsOpen(true)}
        />
        <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
        <p className="text-gray-700 text-sm mt-2">{article.description?.slice(0, 90)}...</p>
        <div className="text-xs text-gray-500 mt-4">
          {article.source} • {article.published}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={article.image}
            alt={article.title}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </>
  );
}
