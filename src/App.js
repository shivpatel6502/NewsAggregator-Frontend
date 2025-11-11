import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import SearchBar from "./Components/SearchBar";
import NewsGrid from "./Components/NewsGrid";

// Pages
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Bookmarks from "./pages/Bookmarks";
import Favorites from "./pages/Favorites";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Dummy news articles
  useEffect(() => {
    const demoArticles = [
      {
        title: "Breaking: Major Update in Global Events",
        description: "Something important happened in the world today...",
        image: "https://source.unsplash.com/random/800x600/?news,world",
        published: "2h ago",
        source: "BBC",
      },
      {
        title: "Tech Giants Release New Innovation",
        description: "Tech world is shocked after a new product launch...",
        image: "https://source.unsplash.com/random/800x600/?technology",
        published: "1h ago",
        source: "CNN",
      },
      {
        title: "Sports Highlights: Local Team Wins",
        description: "An incredible match ended with a surprising result...",
        image: "https://source.unsplash.com/random/800x600/?sports",
        published: "30m ago",
        source: "ESPN",
      },
      {
        title: "Health Tips for a Better Lifestyle",
        description: "Simple changes can improve your well-being...",
        image: "https://source.unsplash.com/random/800x600/?health",
        published: "3h ago",
        source: "Healthline",
      },
      {
        title: "Entertainment: Upcoming Movie Releases",
        description: "Check out the movies hitting theaters this week...",
        image: "https://source.unsplash.com/random/800x600/?movies",
        published: "4h ago",
        source: "Variety",
      },
    ];

    setArticles(demoArticles);
    setFilteredArticles(demoArticles);
  }, []);

  const handleSearch = (query) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Separator */}
          <div className="w-px bg-white dark:bg-gray-500" />

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 bg-white dark:bg-black">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    handleSearch={handleSearch}
                    filteredArticles={filteredArticles}
                  />
                }
              />

              <Route path="/trending" element={<Trending />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
