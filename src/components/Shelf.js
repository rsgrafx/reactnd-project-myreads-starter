import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

export default class Shelf extends Component {
  
  static PropTypes = {
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const {books, shelfTitle} = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(
              book => (
                <li key={book.title}>
                  <Book book={book} />
                </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
