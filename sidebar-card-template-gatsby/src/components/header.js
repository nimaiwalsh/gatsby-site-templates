import React from 'react'
import Link from 'gatsby-link'
import styles from './header.css'

const Header = ({ siteTitle }) => (
  <div className={styles}>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
