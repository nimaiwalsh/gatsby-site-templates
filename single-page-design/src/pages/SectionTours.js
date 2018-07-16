import React from 'react'
import Section from './SectionTours.css'
import { Row, Col } from '../components/layoutComponents'
import { HeadingSecondary } from '../components/styledComponents'
import { CenterText } from '../components/utilityComponents'
import Card from '../components/Card'

const SectionTours = () => {
  return (
    <Section>
      <CenterText>
        <HeadingSecondary marginBottom >Most popular tours</HeadingSecondary>
      </CenterText>
      <Row>
        <Col OneofThree>
          <Card secondary />
        </Col>
        <Col OneofThree>
          <Card primary />
        </Col>
        <Col OneofThree>
          <Card tertiary />
        </Col>
      </Row>
    </Section>
  )
}

export default SectionTours
