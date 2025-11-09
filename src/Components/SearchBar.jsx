import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search news..."
        className={`flex-1 px-4 py-2 rounded-lg shadow-md focus:outline-none transition-colors
          ${theme === "dark" ? "bg-gray-300 text-gray-900 placeholder-gray-600" : "bg-gray-200 text-gray-900 placeholder-gray-600"}`
        }
      />
      <div className="text-sm text-gray-500 dark:text-gray-600">
        Words: {query.trim().split(/\s+/).filter(Boolean).length}
      </div>
    </div>
  );
}
