import React, { Component } from  'react'
import PropTypes from 'prop-types'
import Book from './Book'

export default class SearchResults extends Component {
  
  static PropTypes = {
    results: PropTypes.array.isRequired,
    message: PropTypes.string.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  }
  
  render() {
    const {message, results, handleShelfChange} = this.props

    return(
      <div className="search-books-results">
        <h3>{message}</h3>
        <ol className="books-grid">
          {(results.length !== 0) && results.map((book, idx) => (
            <li key={`${book.id}-${idx}`}>
              <Book
                searchPage={true}
                book={book}
                imageLink={book.imageLinks.smallThumbnail}
                handleShelfChange={handleShelfChange} />
            </li>))}
        </ol>
      </div>
    )
  }
}
