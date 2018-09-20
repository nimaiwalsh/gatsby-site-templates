import React from 'react'

import SectionAbout from '../page-sections/SectionAbout'
import SectionFeatures from '../page-sections/SectionFeatures'
import SectionTours from '../page-sections/SectionTours'
import StoriesSection from '../page-sections/StoriesSection'
import BookingSection from '../page-sections/BookingSection'

const index = ({ data }) => {
  return (
    <div>
      <SectionAbout />
      <SectionFeatures data={ data } />
      <SectionTours />
      <StoriesSection />
      <BookingSection />
    </div>
  )
}

export default index

export const query = graphql`
  query indexPageQuery {
    sectionFeaturesImage: imageSharp(id: { regex: "/nat-4.jpg/" }) {
      sizes(maxWidth: 1100) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
