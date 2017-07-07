import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'

import BookShelf from './components/BookShelf'
import Search from './components/Search'
import BookDisplay from './components/BookDisplay'
import SearchLink from './components/SearchLink'


import './App.css'


const NoMatch = ({ location }) => (
  (location.pathname !== '/search') && (
    <div>
      <div className="list-books-title">
        <h1>Orion's List</h1>
      </div>
      <div className="nav-bar">
        <Link to="/search">Search More Books</Link>
      </div>
      <div>
        <h3>Sorry, the page your looking for is not available.</h3>
      </div>
    </div>
  )
)

class BooksApp extends Component {
  state = {
    allBooks: []
  }
  
  handleShelfChange = (book, shelf) => {
    let bookId = book.id
    let result = this.state.allBooks.filter((book) => (book.id === bookId))
    let target_book = result.pop()
    target_book.shelf = shelf
    this._updateBookApi(target_book, shelf)
    this._updateBooks(target_book)
  }
  
  addToShelf = (book, shelf) => {
    book.shelf = shelf
    let bookId = book.id
    let results = this.state.allBooks.filter((book) => (book.id !== bookId))
    let new_results = results.concat(book)
    this._updateBookApi(book, shelf)
    this.setState({allBooks: new_results})
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
        <Route exact path="/search" render={ () => <Search handleShelfChange={this.addToShelf} /> } />
        <Route exact path="/" render={() => <BookShelf
            handleShelfChange={this.handleShelfChange}
            books={this.state.allBooks}
            navLink={<SearchLink />}
          />} />
        <Route exact path="/book/:id" render={(router) => <BookDisplay
            addToShelf={this.addToShelf}
            router={router}
          /> } />
        <Route exact path="/:anything" component={NoMatch} />
      </div>
      )
   }
}

export default BooksApp
