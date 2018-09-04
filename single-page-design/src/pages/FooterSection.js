import React from 'react'
import Link from 'gatsby-link'

import { Row, Col } from '../components/layoutComponents'
import { Footer, LogoBox, FooterNavigation, CopyrightText } from './FooterSection.css'

import logo from '../resources/images/logo-green-2x.png'

const StoriesSection = () => {
  return (
    <Footer>
      <LogoBox>
        <img src={logo} />
      </LogoBox>
      <Row>
        <Col OneofTwo>
          <FooterNavigation>
            <ul>
              <li><Link to="#">Company</Link></li>
              <li><Link to="#">Contact us</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms</Link></li>
            </ul>
          </FooterNavigation>
        </Col>
        <Col OneofTwo>
          <CopyrightText>
            Built by <a href="https://nimaiwalsh.com">Nimai Walsh</a> Copyright &copy; by Nimai Walsh. Design inspired by Jonas.
          </CopyrightText>
        </Col>
      </Row>
    </Footer>
  )
}

export default StoriesSection
