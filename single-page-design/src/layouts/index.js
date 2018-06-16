import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal } from 'react-emotion'

import Header from '../components/header'

//Global styles and resets
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* Default font size is 16px*/
    /* We want to use rems through out project and we want 1rem = 10px, 
    /* So Font size should be 10px/16px = 62.5% */
    font-size: 62.5%;
  }

  body {
    /*This font family can now be inhertited from all child elements*/
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #777;
    padding: 30px;  
  }
`

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
    <div>{children()}</div>
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
