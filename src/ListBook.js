import React from 'react';
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom';

class ListBook extends React.Component{

   
   
    render(){
        const { books,onShelfChange} = this.props;
        const currentlyReading = books.filter((book) => book.shelf === 'currentlyReading');
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead')
        const read = books.filter((book) => book.shelf === 'read')

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <BookShelf 
              bookshelfTitle='Currently Reading'
              bookshelfBooks={currentlyReading}
              onShelfChange = {onShelfChange}
             
              
          />
          <BookShelf
              bookshelfTitle='Want to Read'
              bookshelfBooks={wantToRead}
              onShelfChange = {onShelfChange}
          />
          <BookShelf 
              bookshelfTitle='Read' 
              bookshelfBooks={read}
              onShelfChange = {onShelfChange}
          />
                
            </div>
            <div className="open-search">
              <Link to="/search"><button>Add a book</button></Link>
            </div>
          </div>
        )
    }

}
export default ListBook;