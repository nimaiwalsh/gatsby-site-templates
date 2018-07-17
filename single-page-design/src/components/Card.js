import React from 'react'
import CardContainer from './Card.css'

const Card = (props) => (
  <CardContainer {...props} >
    <div className="side side-front">
      <div className="picture">&nbsp;</div>
      <h4 className="heading">
        <span className="heading-span">
          {props.heading}
        </span>
      </h4>
      <div className="details">Details</div>
    </div>
    <div className="side side-back" />
  </CardContainer>
)

export default Card
