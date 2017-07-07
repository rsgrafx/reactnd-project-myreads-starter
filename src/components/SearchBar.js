import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

export default class SearchBar extends Component {
  state = {query: ''}
  
  handleKeyPress = (evt) => {
    this.setState({query: evt.target.value})
    this.delayedFetch()
  }
  
  fetchBooks = () => {
    this.props.searchBooks(this.state.query)
  }
    
  componentWillMount() {
    this.delayedFetch = _.debounce(this.fetchBooks, 500)
  }
  
  render() {
    return(
      <div className="navbar-form navbar-left" role="search">
        <div className="form-group search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <input
            type="text"
            placeholder="Search by title or author"
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    )
  }
}
