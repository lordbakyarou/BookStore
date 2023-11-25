import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Books from "./Components/Books";
import MoreBooks from "./Components/MoreBooks";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes&maxResults=30"
      )
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      {books ? <Books booksDetail={books} /> : ""}

      {books ? <MoreBooks booksDetail={books} /> : ""}
    </div>
  );
};

export default App;
