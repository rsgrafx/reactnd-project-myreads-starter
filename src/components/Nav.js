import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Orion's List</Link>
          {props.navLink}
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/">My bookshelf</Link>
          </li>
        </ul>
      </div>
    </div>
  )

export default Nav;
