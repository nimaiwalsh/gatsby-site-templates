import React from 'react'

import { Row } from '../components/layoutComponents'
import { HeadingSecondary } from '../components/styledComponents'
import { CenterText } from '../components/utilityComponents'
import StoryCard from '../components/StoryCard'
import BackgroundVideo from '../components/BackgroundVideo'
import Section from './StoriesSection.css'

import Image1 from '../resources/images/nat-8.jpg'
import Image2 from '../resources/images/nat-9.jpg'
import bgvideomp4 from '../resources/images/video.mp4'
import bgvideowebm from '../resources/images/video.webm'

const StoriesSection = () => {
  return (
    <Section id="stories">
      <BackgroundVideo source1={bgvideomp4} source2={bgvideowebm} />
      <CenterText>
        <HeadingSecondary marginBottom>We make people happy</HeadingSecondary>
      </CenterText>
      <Row>
        <StoryCard
          image={Image1}
          caption="Mary Smith"
          heading="I had the best weekend with my family"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora repellendus temporibus, quidem facilis dolorum dolor. Optio quibusdam sint voluptatem id veritatis. Exercitationem esse non incidunt fugiat tempora nisi doloribus!"
        />
      </Row>
      <Row>
        <StoryCard
          image={Image2}
          caption="Jack Citizen"
          heading="I feel so much more energised"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempora repellendus temporibus, quidem facilis dolorum dolor. Optio quibusdam sint voluptatem id veritatis. Exercitationem esse non incidunt fugiat tempora nisi doloribus!"
        />
      </Row>
    </Section>
  )
}

export default StoriesSection
