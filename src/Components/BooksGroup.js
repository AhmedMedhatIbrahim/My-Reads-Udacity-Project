import React, { Fragment } from "react";
const BooksGroup = (props) => {
  const HandleChange = (e) => {
    props.onStatusChange(e.target.id, e.target.value);
  };

  let NewRendered = props.SavedBook.map((elem) => {
    if (elem.shelf === props.bookStatus) {
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
                <select id={elem.id} onChange={HandleChange} value={elem.shelf}>
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
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
    }
    return false;
  });
  return <Fragment>{NewRendered}</Fragment>;
};

export default BooksGroup;
