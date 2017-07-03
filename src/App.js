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
  componentWillMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((prevState) => ({allBooks: books}))
      })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchBar} />
        <Route exact path="/" render={() => <BookShelf books={this.state.allBooks} />} />
      </div>
      )
   }
}

export default BooksApp
