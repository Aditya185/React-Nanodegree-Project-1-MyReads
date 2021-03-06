import React from 'react';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import Book from './Book';
import DebounceInput from 'react-debounce-input';

class Search extends React.Component{

    state = {
        searchResults : []
    };

    search = (event) => {
        const current_query = event.target.value;
        if (!current_query) {
            this.setState({searchResults: []});
            return;
        }

        BooksAPI
            .search(current_query, 20)
            .then(searchResults => {
                if (!searchResults || searchResults.error) {
                    this.setState({searchResults: []});
                    return;
                }
                
                searchResults = searchResults.map((book) => {
                    const bookOnShelf = this
                        .props
                        .books
                        .find(bo => bo.id === book.id);
                    book.shelf = bookOnShelf
                        ? bookOnShelf.shelf
                        : "none";
                    return book;
                });
              

                this.setState({searchResults});
            });
    };


    
   
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                
               <DebounceInput
                            minLength={2}
                            debounceTimeout={325}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.search}/>
                
              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                        {this.state.searchResults && this
                            .state
                            .searchResults
                            .map((book, index) => (
                                <li key={book.id + index}>
                                    <Book book={book} onShelfChange={this.props.onShelfChange}/>
                                </li>
                            ))}
                    </ol>
            </div>
          </div>
        )
    }

}
export default Search;