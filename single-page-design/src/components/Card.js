import React from 'react'
import CardContainer from './Card.css'

const Card = (props) => (
  <CardContainer {...props} >
    <div className="side side-front" />
    <div className="side side-back" />
  </CardContainer>
)

export default Card
