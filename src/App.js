import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

import BookShelf from './components/BookShelf'
import Search from './components/Search'

import './App.css'

class BooksApp extends Component {
  state = {
    allBooks: []
  }
  
  handleShelfChange = (bookId, shelf) => {
    let result = this.state.allBooks.filter((book) => (book.id === bookId))
    let target_book = result.pop()
    target_book.shelf = shelf
    this._updateBookApi(target_book, shelf)
    this._updateBooks(target_book)
  }
  
  _updateBooks = (target_book) => {
    let remaining_books = this.state.allBooks.filter((book) => (book.id !== target_book.id))
    let books = remaining_books.concat(target_book)
    this.setState({allBooks: books})
  }
  
  _updateBookApi = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(res => console.log(res))
  }

  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prevState) => ({allBooks: books}))
      })
  }
    
  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={ () => <Search 
          handleShelfChange={this.handleShelfChange} />
        }
        />
        <Route exact path="/" render={() => <BookShelf
            handleShelfChange={this.handleShelfChange}
            books={this.state.allBooks}
          />} />
      </div>
      )
   }
}

export default BooksApp
