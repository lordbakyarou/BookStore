import React from "react";
import "../Style/Books.css";

const Books = ({ booksDetail }) => {
  console.log(booksDetail);
  //   booksDetail
  //     .then((res) => console.log(res.items))
  //     .catch((err) => console.log(err));
  return (
    <div className="books">
      {booksDetail.map((book, index) => {
        if (index > 2) {
          return null;
        }
        return (
          <div className="book">
            <div className="book-background">
              <div className="books-img">
                <img src={book.volumeInfo.imageLinks.thumbnail} />
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                <p className="book-desc">{book.searchInfo.textSnippet}</p>
                <button className="readmore">Now Read!</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
