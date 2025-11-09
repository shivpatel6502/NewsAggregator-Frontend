import { useState, useEffect } from "react";
import NewsGrid from "../Components/NewsGrid";
import SearchBar from "../Components/SearchBar";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

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

    setTimeout(() => {
      setArticles(demoArticles);
      setFilteredArticles(demoArticles);
    }, 500);
  }, []);

  const handleSearch = (query) => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={handleSearch} />
      <NewsGrid articles={filteredArticles} />
    </div>
  );
}
