import React from 'react'
import styles from './BackgroundVideo.css'
// import Img from 'gatsby-image'

import { Popup, Content, CloseButton } from './Modal.css'
import { HeadingSecondary, HeadingTertiary } from './styledComponents'
import Image1 from '../resources/images/nat-8.jpg'
import Image2 from '../resources/images/nat-9.jpg'

const Modal = ({ open, handleClose }) => {
  /*only render Modal if it is open*/
  if (!open) {
    return null
  }

  return (
    <Popup open={open}>
      <CloseButton onClick={() => handleClose()}>Close</CloseButton>
      <Content>
        <div className="popup-left">
          <img className="image" src={Image1} />
          <img className="image" src={Image2} />
        </div>
        <div className="popup-right">
          <HeadingSecondary>Start booking now</HeadingSecondary>
          <HeadingTertiary marginBottom>
            Important &ndash; Please read these terms
          </HeadingTertiary>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ducimus suscipit nulla a omnis saepe fugit obcaecati debitis, minima
            veritatis placeat.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium ducimus suscipit nulla a omnis saepe fugit
            obcaecati debitis, minima veritatis placeat.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laudantium ducimus suscipit nulla
            a omnis saepe fugit obcaecati debitis, minima veritatis placeat.
          </div>
        </div>
      </Content>
    </Popup>
  )
}

export default Modal
