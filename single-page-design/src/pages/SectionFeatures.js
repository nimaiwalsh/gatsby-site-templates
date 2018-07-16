import React, { Component } from 'react'
import Section from './SectionFeatures.css'

import { Row, Col } from '../components/layoutComponents'
import FeatureBox from '../components/FeatureBox'
import GatsbyImageBackground from '../components/GatsbyImageBackground'

import { ReactComponent as WorldIcon } from '../resources/icons/basic_world.svg'
import { ReactComponent as CompassIcon } from '../resources/icons/basic_compass.svg'
import { ReactComponent as MapIcon } from '../resources/icons/basic_map.svg'
import { ReactComponent as HeartIcon } from '../resources/icons/basic_heart.svg'

const SectionFeatures = ({ data }) => (
  <Section>
    <GatsbyImageBackground sizes={data.sectionFeaturesImage.sizes}/>
    <Row className="row">
      <Col OneofFour>
        <FeatureBox
          icon={<WorldIcon />}
          heading="Explore the world"
          content="lorem epsum itaque explicabo praesentium expedita modi quam cumque. Quaerat"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<CompassIcon />}
          heading="Meet nature"
          content="Amet consectetur adipisicing elit. Sed quia architecto iusto ipsum dolorem. Nice Excellent"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<MapIcon />}
          heading="Find your way"
          content="Lorem epsum itaque explicabo praesentium expedita modi quam cumque. Quaerat?"
        />
      </Col>
      <Col OneofFour>
        <FeatureBox
          icon={<HeartIcon />}
          heading="Live a healthier life"
          content="Lorem epsum itaque explicabo praesentium expedita modi quam cumque. Quaerat?"
        />
      </Col>
    </Row>
  </Section>
)

export default SectionFeatures
