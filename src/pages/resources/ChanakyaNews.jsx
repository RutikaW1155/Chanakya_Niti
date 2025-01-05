import React from "react";

const ChanakyaNews = () => {
  const news = [
    {
      title: "Timeless Teachings of Chanakya in Modern Context",
      description: "Explore how Chanakya's principles are still relevant in today's world.",
      link: "https://pwonlyias.com/chanakya-niti/",
      date: "January 5, 2025",
    },
    {
      title: "Chanakya's Arthashastra and Its Global Influence",
      description: "Learn about the influence of Arthashastra on modern economics and governance.",
      link: "https://republicpolicy.com/the-lessons-of-chanakyas-arthashastra-indian-foreign-policy-and-the-fruitless-u-s-pivot-to-asia/",
      date: "December 25, 2024",
    },
    {
      title: "Chanakya Niti: Lessons for Personal Development",
      description: "Discover how Chanakya Niti can help improve personal and professional life.",
      link: "https://bhawaybhalla.in/unveiling-the-secrets-chanakya-niti-personal-growth/",
      date: "November 10, 2024",
    },
  ];

  return (
    <div className="news-section">
      <h2>Chanakya Niti News</h2>
      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <small>{article.date}</small>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChanakyaNews;
