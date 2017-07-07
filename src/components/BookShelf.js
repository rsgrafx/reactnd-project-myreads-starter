import React, { Component } from  'react'
import {Link} from 'react-router-dom'

import Shelf from './Shelf'
import Nav from './Nav'

export default class BookShelf extends Component {
  
  render() {
    const {books, handleShelfChange} = this.props
    let read = books.filter((book) => (book.shelf === "read"))
    let currentlyReading = books.filter((book) => (book.shelf === "currentlyReading"))
    let wantToRead = books.filter((book) => (book.shelf === "wantToRead"))
    
    return(
      <div>
        <Nav navLink={this.props.navLink} />
        <div className="list-books">
          <div className="list-books-content">
            <div>
              <Shelf
                shelfTitle="Currently Reading"
                books={currentlyReading}
                handleShelfChange={handleShelfChange}/>
              <Shelf
                shelfTitle="Want to Read"
                books={wantToRead}
                handleShelfChange={handleShelfChange}/>
              <Shelf
                shelfTitle="Read"
                books={read}
                handleShelfChange={handleShelfChange}/>
            </div>
          </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
    )
  }
}
