import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import Nav from './Nav'

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
    const search = <SearchBar searchBooks={this.searchBooks} />
    const {handleShelfChange} = this.props

    return(
      <div className="">
        <Nav navLink={search} searchBooks={this.searchBooks}/>
        <SearchResults
          results={this.state.books}
          message={this.state.message}
          handleShelfChange={handleShelfChange}
        />
      </div>
    )
  }
}
