import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

import BookShelf from './components/BookShelf'
import SearchBar from './components/SearchBar'

import './App.css'

class BooksApp extends Component {
  state = {
    allBooks: []
  }
  
  handleShelfChange = (bookId, shelf) => {
    let target_book = this.state.allBooks.filter((book) => (book.id === bookId))
    BooksAPI.update(target_book, shelf)
      .then((res) => console.log(res))
      
    BooksAPI.getAll()
      .then((books) => {
        console.log(books.filter((book) => (book.id === bookId)), "TARGET BOOK")
        this.setState({allBooks: books})
      })
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
        <Route exact path="/search" render={ () => <SearchBar handleShelfChange={this.handleShelfChange} /> } />
        <Route exact path="/" render={() => <BookShelf
            handleShelfChange={this.handleShelfChange}
            books={this.state.allBooks}
          />} />
      </div>
      )
   }
}

export default BooksApp
