import React from 'react'
import styles from './BackgroundVideo.css'

const BackgroundVideo = ({ source1, source2 }) => {
  return (
    <div className={styles}>
      <video className="video" autoPlay muted loop>
        <source src={ source1 } type="video/mp4" />
        <source src={ source2 } type="video/webm" />
        Your browser is not supported
      </video>
    </div>
  )
}

export default BackgroundVideo
