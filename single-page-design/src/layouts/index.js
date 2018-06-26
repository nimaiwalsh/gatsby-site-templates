import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import globalCSS from '../utils/global.css'

import Header from '../components/header'
import SectionOne from '../pages/SectionOne'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} data={data} />
    <main>
      <SectionOne />
    </main>
    {/* <div>{children()}</div> */}
  </div>
)

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
  }
`
