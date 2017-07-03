import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookControl extends Component {
  
  state = {
    bookId: this.props.bookId
  }
  
  changeShelf = (event) => {
    console.log("Fired")
    this.props.handleShelfChange(this.state.bookId, event.target.value)
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.changeShelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>)
  }
}

const BookCover = ({book, image}) => {
  return(<div
      className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>
      </div>)
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
          <BookCover book={book} image={imageLink} />
          <BookControl handleShelfChange={handleShelfChange} bookId={book.id}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{!!(book.authors) && book.authors.join(", ")}</div>
      </div>
    )
  }
}
