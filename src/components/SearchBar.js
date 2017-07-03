import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class SearchBar extends Component {
    
  handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchBooks(evt.target.value)
    }
  }
  
  render() {
    return(
      <div className="search-books-bar">
        <Link to='/' className='close-search'>Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>)
  }
}
