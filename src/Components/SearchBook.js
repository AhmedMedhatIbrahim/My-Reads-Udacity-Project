import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI.js";
import { useState } from "react";

function SearchPage(props) {
  //console.log(props.CurrBooks);
  ///search
  let [searched, setSearched] = useState([]);
  let UserInput = "";
  let Foundcheck = "x";

  const HandleSearch = (e) => {
    UserInput = e.target.value.trim();
    if (!UserInput) {
      setSearched([]);
      return false;
    }

    BooksAPI.search(UserInput).then((elem) => {
      if (elem.error !== "empty query") {
        setSearched(elem);
      } else {
        setSearched([]);
      }
    });
  };

  const HandleChange = (e) => {
    props.handleStatusChange(e.target.id, e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onKeyUp={HandleSearch}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searched.map((elem) => {
            for (var i = 0; i < props.CurrBooks.length; i++) {
              if (props.CurrBooks[i].id === elem.id) {
                Foundcheck = props.CurrBooks[i].shelf;
                break;
              } else {
                Foundcheck = "x";
              }
            }

            return (
              <li key={elem.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${
                          elem.imageLinks
                            ? elem.imageLinks.thumbnail
                            : "No thumbnail was found"
                        }")`,
                      }}
                    ></div>
                    <div className="book-shelf-changer">
                      <select
                        id={elem.id}
                        onChange={HandleChange}
                        value={Foundcheck !== "x" ? Foundcheck : "none"}
                      >
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{elem.title}</div>
                  <div className="book-authors">
                    {elem.author ? elem.author : "No Authors were found"}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
