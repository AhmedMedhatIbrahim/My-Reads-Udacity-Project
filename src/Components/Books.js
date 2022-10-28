import { Link } from "react-router-dom";
import BooksGroup from "./BooksGroup.js";

const BooksPage = (props) => {
  let onStatusChange = (BookID, NewStatus) => {
    props.handleStatusChange(BookID, NewStatus);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <BooksGroup
                  onStatusChange={onStatusChange}
                  SavedBook={props.SavedBook}
                  bookStatus="currentlyReading"
                />
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <BooksGroup
                  onStatusChange={onStatusChange}
                  SavedBook={props.SavedBook}
                  bookStatus="wantToRead"
                />
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <BooksGroup
                  onStatusChange={onStatusChange}
                  SavedBook={props.SavedBook}
                  bookStatus="read"
                />
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/Search" className="add-contact">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default BooksPage;
