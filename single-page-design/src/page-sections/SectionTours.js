import React, { Component } from 'react'
import Section from './SectionTours.css'
import { Row, Col } from '../components/layoutComponents'
import { HeadingSecondary, Button } from '../components/styledComponents'
import { CenterText } from '../components/utilityComponents'
import Card from '../components/Card'
import Modal from '../components/Modal'

import card1img from '../resources/images/nat-5.jpg'
import card2img from '../resources/images/nat-6.jpg'
import card3img from '../resources/images/nat-7.jpg'
class SectionTours extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
    }
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    return (
      <Section id="tours">
        <Modal open={ this.state.modalOpen } handleClose={ this.toggleModal } />
        <CenterText>
          <HeadingSecondary marginBottom>Most popular tours</HeadingSecondary>
        </CenterText>
        <Row>
          <Col OneofThree>
            <Card
              secondary
              image={card1img}
              heading={'The Sea Explorer'}
              price={'$297'}
            >
              <ul>
                <li>3 day tours</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: Easy</li>
              </ul>
            </Card>
          </Col>
          <Col OneofThree>
            <Card
              primary
              image={card2img}
              heading={'The Forest Hiker'}
              price={'$340'}
            >
              <ul>
                <li>7 day tour</li>
                <li>Up to 20 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: Medium</li>
              </ul>
            </Card>
          </Col>
          <Col OneofThree>
            <Card
              tertiary
              image={card3img}
              heading={'The Snow Adventurer'}
              price={'$420'}
            >
              <ul>
                <li>7 day tour</li>
                <li>Up to 20 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Difficulty: Hard</li>
              </ul>
            </Card>
          </Col>
        </Row>

        <CenterText>
          <Button green onClick={ this.toggleModal } >
            Discover all tours
          </Button>
        </CenterText>
      </Section>
    )
  }
}

export default SectionTours
