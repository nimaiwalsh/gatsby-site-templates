import React from 'react'
import Link from 'gatsby-link'
import HeaderMain from './header.css'
import Img from 'gatsby-image'
import logo from '../resources/images/logo-white.png'

const Header = ({ siteTitle, data }) => (
  //Background image needs to be own element and not css background property
  //to utilise Gatsby Image sizes
  <HeaderMain>
    <Img className="background-image" sizes={data.headerImage.sizes} />
    <div className="background-overlay" />

    <div className="logo-box">
      <img src={logo} alt="Logo" className="logo" />
    </div>

    <div className="text-box">
      <h1 className="heading-primary">
        <span className="heading-primary__main">Outdoors</span>
        <span className="heading-primary__sub">Is where life happens</span>
      </h1>
    </div>

  </HeaderMain>
)

export default Header
