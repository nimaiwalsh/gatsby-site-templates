import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Button } from './styledComponents'

import {
  NavigationContainer,
  NavigationBackground,
  NavigationButton,
  BurgerMenuIcon,
  Nav,
} from './Navigation.css'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navopen: false,
    }
  }

  toggleNav = () => {
    this.setState({ navopen: !this.state.navopen })
  }

  render() {
    const { navopen } = this.state
    return (
      <NavigationContainer>
        <NavigationBackground navOpen={navopen} />
        <NavigationButton onClick={this.toggleNav}>
          <BurgerMenuIcon navOpen={navopen} />
        </NavigationButton>
        <Nav navOpen={navopen}>
          <ul className="list" onClick={ this.toggleNav } >
            <li className="item">
              <Link className="link" to="#about">
                About Natous
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#features">
                Your benefits
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#tours">
                Popular tours
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#stories">
                Stories
              </Link>
            </li>
            <li className="item">
              <Link className="link" to="#booking">
                Book now
              </Link>
            </li>
          </ul>
        </Nav>
      </NavigationContainer>
    )
  }
}
