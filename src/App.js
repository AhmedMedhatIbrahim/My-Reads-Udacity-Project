import "./App.css";
import * as BooksAPI from "./Components/BooksAPI.js";
import { useState, useEffect, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./Components/SearchBook.js";
import BooksPage from "./Components/Books.js";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((elem) => {
      setBooks(elem);
    });
  }, []);

  const handleStatusChange = (BookID, NewStatus) => {
    BooksAPI.update({ id: BookID }, NewStatus).then(() => {
      BooksAPI.getAll().then((elem) => {
        setBooks(elem);
      });
    });
  };

  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksPage
              handleStatusChange={handleStatusChange}
              SavedBook={books}
            />
          }
        />

        <Route
          path="/Search"
          element={
            <SearchPage
              CurrBooks={books}
              handleStatusChange={handleStatusChange}
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
