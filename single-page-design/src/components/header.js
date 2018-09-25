import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import logo from '../resources/images/logo-white.png'

import HeaderMain from './header.css'
import { HeadingPrimary, Button } from '../components/styledComponents'

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
      <HeadingPrimary>
        <span className="main">Outdoors</span>
        <span className="sub">Is where life happens</span>
      </HeadingPrimary>
      <Button white animated href="#">Click me</Button>
    </div>
  </HeaderMain>
)

export default Header
