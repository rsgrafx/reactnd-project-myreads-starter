import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import BookControl from './BookControl'

const BookCover = ({book, image}) => {
  return(
      <Link to={`/book/${book.id}`}>
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>
        </div>
      </Link>
    )
}

export default class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    imageLink: PropTypes.string.isRequired,
    handleShelfChange: PropTypes.func.isRequired
  }
  
  render() {
    let { book, imageLink, handleShelfChange } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <BookCover
            book={book}
            image={imageLink} />
          <BookControl
            handleShelfChange={handleShelfChange}
            book={book}
            shelf={book.shelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{!!(book.authors) && book.authors.join(", ")}</div>
      </div>
    )
  }
}
