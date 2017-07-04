import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

import BookControl from './BookControl'

export default class BookDisplay extends Component {
  
  state = {
    book: {},
  }
  
  componentDidMount() {
    const {match} = this.props.router
    
    BooksAPI.get(match.params.id)
      .then(book => this.setState({book: book}))
  }
  
  render() {
    const {book, shelf} = this.state
    const {addToShelf} = this.props
    return(
      <div>
        <div className="list-books-title">
          <h1>Orion's List</h1>
        </div>
        <div className="nav-bar">
          <Link to="/search">Search More Books</Link>
        </div>
        <div className="bookshelf">
          <h3>Book Title: {book.title} </h3>
          <div id="book-display">Current shelf: {book.shelf}
            <div>
              <BookControl
                onDisplay={true}
                handleShelfChange={addToShelf}
                book={book}
                shelf={shelf} />
            </div>
          </div>
          
          <hr />
          
          <p>{!!(book.description) && book.description}</p>
          <div>
            <b>Author(s): {book.authors} </b><br />
            <small> Pages: {book.pageCount} </small><br />
            <small> Published: {book.publishedDate} </small><br />
            <small> Publisher: {book.publisher} </small>
          </div>
        </div>
        <div className="nav-bar">
          <Link to="/">My BookShelf</Link>
        </div>
      </div>)
  }
}
