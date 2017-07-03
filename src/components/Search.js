import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import SearchBar from './SearchBar'

export default class Search extends Component {
  
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
  
  clearQuery = () => {
    this.setState({query: ''})
  }
  
  render() {
    const {handleShelfChange} = this.props
    return(
      <div className="search-books">
        <SearchBar
          handleShelfChange={handleShelfChange}
          searchBooks={this.searchBooks}
        />
        <div className="search-books-results">
          <h3> {this.state.message} </h3>
          <ol className="books-grid">
              {(this.state.books.length !== 0) && this.state.books.map((book, idx) => (
                <li key={`${book.id}-${idx}`}>
                  <Book
                    book={book}
                    imageLink={book.imageLinks.smallThumbnail}
                    handleShelfChange={handleShelfChange} />
                </li>))}
          </ol>
        </div>
      </div>
    )
  }
}
