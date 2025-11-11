import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Book, Star } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useContext(ThemeContext);

  const menuItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Trending", icon: <TrendingUp size={20} />, path: "/trending" },
    { name: "Bookmarks", icon: <Book size={20} />, path: "/bookmarks" },
    { name: "Favorites", icon: <Star size={20} />, path: "/favorites" },
  ];

  return (
    <aside
      className={`w-64 h-screen p-6 flex flex-col gap-4 sticky top-0
       ${theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-900"}`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors
           ${theme === "dark" ? "hover:bg-gray-600" : "hover:bg-gray-300"}`}
        >
          {item.icon}
          <span className="font-medium">{item.name}</span>
        </Link>
      ))}
    </aside>
  );
}
