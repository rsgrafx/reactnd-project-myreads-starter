import React, { Component } from  'react'
import {Link} from 'react-router-dom'

import Shelf from './Shelf'

export default class BookShelf extends Component {
  render() {
    const {currently, wantToRead, read} = this.props.books
    
    return(
      <div className="list-books">
      <div className="list-books-title">
        <h1>Orion's Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          
          <Shelf shelfTitle="Currently Reading" books={currently}/>
          <Shelf shelfTitle="Want to Read" books={wantToRead}/>
          <Shelf shelfTitle="Read" books={read} />
          
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" >Add a book </Link>
      </div>
    </div>)
  }
}
