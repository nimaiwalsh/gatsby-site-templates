import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import globalCSS from '../utils/global.css'

import Navigation from '../components/Navigation'
import Header from '../components/header'
import SectionAbout from '../pages/SectionAbout'
import SectionFeatures from '../pages/SectionFeatures'
import SectionTours from '../pages/SectionTours'
import StoriesSection from '../pages/StoriesSection'
import BookingSection from '../pages/BookingSection'
import FooterSection from '../pages/FooterSection'
import Modal from '../components/Modal'
class Layout extends Component {
  render() {
    const children = this.props.children
    const data = this.props.data
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation />
        <Header siteTitle={data.site.siteMetadata.title} data={data} />
        <main>
          <SectionAbout />
          <SectionFeatures data={data} />
          <SectionTours />
          <StoriesSection />
          <BookingSection />
        </main>
        <FooterSection />
        {/* <div>{children()}</div> */}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: imageSharp(id: { regex: "/hero.jpg/" }) {
      sizes(maxWidth: 1100) {
        ...GatsbyImageSharpSizes
      }
    }
    sectionFeaturesImage: imageSharp(id: { regex: "/nat-4.jpg/" }) {
      sizes(maxWidth: 1100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
