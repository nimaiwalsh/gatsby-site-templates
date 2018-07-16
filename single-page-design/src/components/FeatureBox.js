import React from 'react'
import styles from './FeatureBox.css'
import { HeadingTertiary } from './styledComponents'

const FeatureBox = props => {
  //props.icon should always be an svg
  return (
    <div className={styles}>
      {props.icon}
      <HeadingTertiary marginBottom>{props.heading}</HeadingTertiary>
      <p>{props.content}</p>
    </div>
  )
}

export default FeatureBox
