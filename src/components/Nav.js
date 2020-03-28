import React from 'react'
import { Link } from 'gatsby'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <ul>
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/clusters" className="link">
          Clusters
        </Link>
      </li>
      <li>
        <Link to="/help" className="link">
          Helpful Links
        </Link>
      </li>
      <li>
        <Link to="/faq" className="link">
          Faq
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
