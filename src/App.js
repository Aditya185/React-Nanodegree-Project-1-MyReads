import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Search from './Search';
import * as BooksAPI from './BooksAPI';
import ListBook from './ListBook';
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then(books => {
        this.setState({books})
        //console.log(books);
      })
  }
  
  onShelfChange = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => ({
      books: state
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <div>
        <Route exact path='/' render={() => (
          <ListBook  books = {this.state.books}/>
        )}/>
        <Route path='/search' render={() => (
          <Search />
        )}/>
        </div>
      
        
       
      </div>
    )
  }
}

export default BooksApp
