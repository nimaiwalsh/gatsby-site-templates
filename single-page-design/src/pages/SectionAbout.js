import React from 'react'
import Link from 'gatsby-link'
import Section from './SectionAbout.css'
import {
  HeadingSecondary,
  HeadingTertiary,
  Paragraph,
  ButtonText,
} from '../components/styledComponents'
import { Row, Col } from '../components/layoutComponents'
import { CenterText } from '../components/utilityComponents'
import ImageComposition from '../components/ImageComposition'

import Image1 from '../resources/images/nat-1.jpg'
import Image2 from '../resources/images/nat-2.jpg'
import Image3 from '../resources/images/nat-3.jpg'

const SectionOne = () => (
  <Section>
    <CenterText>
      <HeadingSecondary marginBottom>
        Exciting tours for adventures
      </HeadingSecondary>
    </CenterText>
    <Row>
      <Col OneofTwo>
        <HeadingTertiary marginBottom>
          You are going to fall in love with nature
        </HeadingTertiary>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum
          excepturi quos reiciendis placeat debitis mollitia ullam voluptate,
          nemo laudantium id quod neque culpa, veritatis, vitae est et tempora
          odio.
        </Paragraph>
        <HeadingTertiary marginBottom>Live new adventures</HeadingTertiary>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eum
          excepturi quos reiciendis placeat debitis mollitia ullam voluptate,
          nemo laudantium id quod neque culpa, veritatis, vitae est et tempora
          odio.
        </Paragraph>
        <ButtonText href="#">Press me &rarr;</ButtonText>
      </Col>
      <Col OneofTwo>
        <ImageComposition 
          image1={{img:Image1, alt:'Image 1'}} 
          image2={{img:Image2, alt:'Image 2'}}
          image3={{img:Image3, alt:'Image 3'}} 
        />
      </Col>
    </Row>
  </Section>
)

export default SectionOne
