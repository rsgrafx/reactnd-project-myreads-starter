import React from 'react'
import {Link} from 'react-router-dom'

const SearchLink = (props) => {
  return(
    <ul className="nav navbar-nav navbar-right">
      <li><Link to="/search">Search More Books</Link></li>
    </ul>
  )
}

export default SearchLink;
