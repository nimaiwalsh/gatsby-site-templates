import React from 'react'
import Link from 'gatsby-link'
import HeaderContainer from './Header.css'

import logo from '../resources/images/logo.png'
import userpic from '../resources/images/user.jpg'
import magnifying_glass from '../resources/icons/magnifying-glass.svg'
import bookmark from '../resources/icons/bookmark.svg'
import chat from '../resources/icons/chat.svg'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} alt="" className="logo" />
    </Link>

    <form action="#" className="search">
      <input type="text" className="search__input" placeholder="hello" />
      <button className="search__button">
        <svg className="search__icon">
          <use xlinkHref={`#${magnifying_glass.id}`} />
        </svg>
      </button>
    </form>

    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref={`#${bookmark.id}`} />
        </svg>
        <span className="user-nav__notification">11</span>
      </div>
      <div className="user-nav__icon-box">
        <svg className="user-nav__icon">
          <use xlinkHref={`#${chat.id}`} />
        </svg>
        <span className="user-nav__notification">9</span>
      </div>
      <div className="user-nav__user">
        <img src={userpic} alt="user photo" className="user-nav__user-photo" />
        <span className="user-nav__username">Nim</span>
      </div>
    </nav>
  </HeaderContainer>
)

export default Header
