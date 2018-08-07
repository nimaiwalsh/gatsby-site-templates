import React from 'react'
import CardContainer from './Card.css'
import { Button } from './styledComponents'

const Card = (props) => (
  <CardContainer {...props} >
    <div className="side side-front">
      <div className="picture">&nbsp;</div>
      <h4 className="heading">
        <span className="heading-span">
          {props.heading}
        </span>
      </h4>
      <div className="details">
        {props.children}
      </div>
    </div>
    <div className="side side-back">
      <div className="call-to-action">
        <div className="price-box">
          <p className="price-only">Only</p>
          <p className="price-value">{props.price}</p>
          <Button white href="#">Click me</Button>
        </div>
      </div>
    </div>
  </CardContainer>
)

export default Card
