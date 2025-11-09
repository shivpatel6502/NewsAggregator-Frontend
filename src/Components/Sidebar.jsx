import React, { useContext } from "react";
import { Home, TrendingUp, Book, Star } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useContext(ThemeContext);

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Trending", icon: <TrendingUp size={20} /> },
    { name: "Bookmarks", icon: <Book size={20} /> },
    { name: "Favorites", icon: <Star size={20} /> },
  ];

  return (
    <aside
      className={`w-64 h-screen p-6 flex flex-col gap-4 sticky top-0
        ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-900"}`}
    >
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`flex items-center gap-3 p-3 rounded-lg
            ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-300"} transition-colors text-left`}
        >
          {item.icon}
          <span className="font-medium">{item.name}</span>
        </button>
      ))}
    </aside>
  );
}
