import React from 'react'

import { Row } from '../components/layoutComponents'
import { HeadingSecondary } from '../components/styledComponents'
import ContactForm from '../components/ContactForm'

import Section from './BookingSection.css'

const StoriesSection = () => {
  return (
    <Section id="booking">
      <Row>
        <div className="booking-box">
          <div className="form-box">
            <HeadingSecondary marginBottom>Book now</HeadingSecondary>
            <ContactForm />
          </div>
        </div>
      </Row>
    </Section>
  )
}

export default StoriesSection
