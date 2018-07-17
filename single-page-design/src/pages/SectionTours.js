import React from 'react'
import Section from './SectionTours.css'
import { Row, Col } from '../components/layoutComponents'
import { HeadingSecondary } from '../components/styledComponents'
import { CenterText } from '../components/utilityComponents'
import Card from '../components/Card'

import card1img from '../resources/images/nat-5.jpg'
import card2img from '../resources/images/nat-6.jpg'
import card3img from '../resources/images/nat-7.jpg'

const SectionTours = () => {
  return (
    <Section>
      <CenterText>
        <HeadingSecondary marginBottom>Most popular tours</HeadingSecondary>
      </CenterText>
      <Row>
        <Col OneofThree>
          <Card secondary image={card1img} heading={'The Sea Explorer'} />
        </Col>
        <Col OneofThree>
          <Card primary image={card2img} heading={'The Sea Explorer'} />
        </Col>
        <Col OneofThree>
          <Card tertiary image={card3img} heading={'The Sea Explorer'} />
        </Col>
      </Row>
    </Section>
  )
}

export default SectionTours
