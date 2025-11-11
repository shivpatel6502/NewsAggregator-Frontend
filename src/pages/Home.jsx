import React, { useState, useEffect } from "react";
import NewsGrid from "../Components/NewsGrid";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");

  const categories = [
    "general", "business", "entertainment", "health",
    "science", "sports", "technology"
  ];

  // Demo articles using local images
  const demoArticles = [
  {
    title: "Breaking: Major Update in Global Events",
    description: "Something important happened in the world today...",
    image: "/images/image.png", // <- relative URL from public folder
    published: "2h ago",
    source: "BBC",
  },
  {
    title: "Tech Giants Release New Innovation",
    description: "Tech world is shocked after a new product launch...",
    image: "/images/tech.jpg", // <- relative URL from public folder
    published: "1h ago",
    source: "CNN",
  },
  {
    title: "Sports Highlights: Local Team Wins",
    description: "An incredible match ended with a surprising result...",
    image: "/images/sports.png",
    published: "30m ago",
    source: "ESPN",
  },
  {
    title: "Health Tips for a Better Lifestyle",
    description: "Simple changes can improve your well-being...",
    image: "/images/healthline.png",
    published: "3h ago",
    source: "Healthline",
  },
  {
    title: "Entertainment: Upcoming Movie Releases",
    description: "Check out the movies hitting theaters this week...",
    image: "/images/entertainment.png",
    published: "4h ago",
    source: "Variety",
  },
];


  useEffect(() => {
    setArticles(demoArticles);
    setFilteredArticles(demoArticles);
  }, []);

  // Search filter
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = articles.filter(
      a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  // Category click
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    // Optional: filter by category if demoArticles have categories
  };

  return (
    <div className="p-6 flex flex-col gap-2 text-black dark:text-white">
      {/* Latest News Header */}
      <h2 className="text-2xl font-bold mb-1">Latest News</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-2">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="flex-1 p-3 pr-20 rounded-xl bg-gray-200 dark:bg-gray-800 text-black dark:text-white outline-none"
        />
        <span className="ml-2 text-sm">{searchQuery.length} chars</span>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-3 py-1 rounded-full font-medium text-sm shadow-sm transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <NewsGrid articles={filteredArticles} />
    </div>
  );
}
