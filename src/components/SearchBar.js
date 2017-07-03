import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import { PropTypes } from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

export default class SearchBar extends Component {
  
  state = {
    query: '',
    books: [],
    message: ''
  }
  
  searchBooks = (query) => {
    this.setState({query: query.trim() })
    BooksAPI.search(query)
    .then((books) => {
        if (Array.isArray(books)) {
          this.setState( (prevState) => ({books: books, message: `${books.length} books found`}))
          this.clearQuery()
        } else {
           this.setState(prevState => ({books: [], message: `No books found with title ${query}`}))
           this.clearQuery()
        }
      }
    )
  }
  
  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.searchBooks(evt.target.value)
    }
  }

  clearQuery = () => {
    this.setState({query: ''})
  }
  
  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onKeyPress={this.handleKeyPress}
            />
          </div>
        </div>
        <div className="search-books-results">
          <h3> {this.state.message} </h3>
          <ol className="books-grid">
              {(this.state.books.length !== 0) && this.state.books.map((book, idx) => (
                <li key={`${book.id}-${idx}`}>
                  <Book book={book} imageLink={book.imageLinks.smallThumbnail} />
                </li>))}
          </ol>
        </div>
      </div>
    )
  }
}
