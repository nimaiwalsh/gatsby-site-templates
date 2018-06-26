import React from 'react'
import Link from 'gatsby-link'
import Section from './SectionOne.css'
import { HeadingSecondary } from '../utils/styledComponents'
import { Row, Col, CenterText, Container } from '../utils/layoutComponents'

const SectionOne = () => (
  <Section>
    <CenterText marginBottom>
      <HeadingSecondary>Exciting tours for adventures</HeadingSecondary>
    </CenterText>
  </Section>
)

export default SectionOne
