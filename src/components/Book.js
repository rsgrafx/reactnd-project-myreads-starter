import React, { Component } from 'react'
import PropTypes from 'prop-types'

const BookControl = (props) => {
  return(
    <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>)
}

const BookCover = ({book}) => {
  return(<div
      className="book-cover"
      style={{ width: book.image.width, height: book.image.height, backgroundImage: `url(${book.image.url})` }}>
      </div>)
}

export default class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired
  }
  
  render() {
    let { book } = this.props
    return(
      <div className="book">
        <div className="book-top">
          <BookCover book={book} />
          <BookControl />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}/div>
      </div>
    </div>
    )
  }
}
