import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookShelf extends React.Component{

   
   
    render(){
        const {bookshelfTitle,bookshelfBooks} = this.props;
      
        return(
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{bookshelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {bookshelfBooks
                        .map((book) => {
                            return <li key={book.id}>
                                <Book book={book} />
                            </li>
                        })
                      }
                      
                    </ol>
                  </div>
                
              
              </div>
           
           
          </div>
        )
    }

}
export default BookShelf;