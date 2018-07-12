import React, { Component } from 'react'
import Section from './SectionFeatures.css'

import { Row, Col } from '../components/layoutComponents'
import FeatureBox from '../components/FeatureBox'
import GatsbyImageBackground from '../components/GatsbyImageBackground'

import { ReactComponent as Icon } from '../resources/icons/basic_alarm.svg'

const SectionFeatures = ({ data }) => (
  <Section>
    <GatsbyImageBackground sizes={data.sectionFeaturesImage.sizes}/>
    <Row>
      <Col OneofFour>
        <FeatureBox
          icon={<Icon />}
          heading="Explore the world"
          content="lorem epsum"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<Icon />}
          heading="Explore the world"
          content="lorem epsum"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<Icon />}
          heading="Explore the world"
          content="lorem epsum"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<Icon />}
          heading="Explore the world"
          content="lorem epsum"
        />
      </Col>
    </Row>
  </Section>
)

export default SectionFeatures
