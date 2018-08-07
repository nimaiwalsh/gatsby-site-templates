import React from 'react'
import CardContainer from './StoryCard.css'
import { HeadingTertiary } from '../components/styledComponents'

const StoryCard = ({ image, caption, heading, text }) => {
  return (
    <CardContainer>
      <div>
        <figure className="shape">
          <img src={`${image}`} />
          <figcaption className="caption">{caption}</figcaption>
        </figure>
        <div className="text">
          <HeadingTertiary marginBottom>{heading}</HeadingTertiary>
          <p>{text}</p>
        </div>
      </div>
    </CardContainer>
  )
}

export default StoryCard
