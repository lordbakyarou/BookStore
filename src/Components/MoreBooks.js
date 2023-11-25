import React from "react";

import "../Style/MoreBooks.css";

const MoreBooks = ({ booksDetail }) => {
  return (
    <div className="more-books">
      <h1 className="text">More Books</h1>
      <div className="books-list">
        {booksDetail.map((book, index) => {
          return (
            <div className="single-book">
              <img src={book.volumeInfo.imageLinks.thumbnail}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreBooks;
