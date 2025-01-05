import React from "react";

const ChanakyaBook = () => {
  const books = [
    {
      title: "Chanakya Niti - Original Sanskrit Text",
      description: "This book provides the original Sanskrit verses of Chanakya Niti.",
      link: "https://archive.org/details/chanakya-Neeti",
      image: "https://example.com/image-sanskrit.jpg", // Replace with actual image URL
    },
    {
      title: "Chanakya Niti - English Translation",
      description: "An English translation of Chanakya's timeless teachings.",
      link: "https://archive.org/details/chanakya-chanakya-neeti-2018",
      image: "https://example.com/image-english.jpg", // Replace with actual image URL
    },
    {
      title: "Chanakya Niti - Hindi Translation",
      description: "A Hindi version of Chanakya Niti with commentary.",
      link: "https://hindunidhi.com/chanakya-niti-hindi/",
      image: "https://example.com/image-hindi.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="book-section">
      <h2>Chanakya Niti Books</h2>
      <div className="book-container">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <img src={book.image} alt={`${book.title} cover`} className="book-image" />
            <p>{book.description}</p>
            <a
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="book-link"
            >
              View or Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChanakyaBook;
