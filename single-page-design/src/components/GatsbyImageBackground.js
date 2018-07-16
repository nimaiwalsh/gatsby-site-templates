import React from 'react'
import Img from 'gatsby-image'
import { css } from 'react-emotion'

const GatsbyImageBackground = ({sizes}) => {
  return (
    <div className={styles}>
      <Img className="background-image" sizes={sizes} />
      <div className="background-overlay" />
    </div>
  )
}

export default GatsbyImageBackground

const styles = css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -99;
    
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .background-image,
  .background-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .background-overlay {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    );
  }
`
