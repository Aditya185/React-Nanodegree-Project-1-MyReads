import React from 'react';
import './App.css';


class Book extends React.Component {
 
    ONShelfChanges = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    };

  render() {
      const {book} = this.props;
      let image = book.imageLinks ? book.imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ image}")` }}></div>
          <div className="book-shelf-changer">
            
            <select onChange={this.ONShelfChanges} value={book.shelf} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            
          </div>
        </div>
         <div className="book-title">{book.title}</div>
         <div className="book-authors">{book.author}</div>
      </div>
    )
  }
}

export default Book
