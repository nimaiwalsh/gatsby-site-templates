import React from 'react'
import styles from './FeatureBox.css'

const FeatureBox = props => {
  //props.icon should always be an svg
  return (
    <div className={styles}>
      {props.icon}
      <h3>{props.heading}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default FeatureBox
