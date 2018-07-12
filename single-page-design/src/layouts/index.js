import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import globalCSS from '../utils/global.css'

import Header from '../components/header'
import SectionAbout from '../pages/SectionAbout'
import SectionFeatures from '../pages/SectionFeatures'

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
      <SectionAbout />
      <SectionFeatures data={data}/>
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
    sectionFeaturesImage: imageSharp(id: { regex: "/nat-4.jpg/" }) {
      sizes(maxWidth: 1100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
