import styled from 'react-emotion'
import { COLOURS } from '../utils/theme'

const CardContainer = styled('div')`
  /*Higher perspective makes card look like it spins*/
  perspective: 150rem;
  /*Container needs same height as children as it collapses due to children absolute position*/
  height: 50rem;
  position: relative;

  & .side {
    height: 50rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(${COLOURS.colorBlackRGB}, .15);
    /*Hides back face of the card*/
    backface-visibility: hidden;
    overflow: hidden;
  }

  & .side-front {
    background-color: ${COLOURS.colorWhite};
  }

  & .side-back {
    transform: rotateY(180deg);
    ${props => props.primary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorPrimaryLight}, ${COLOURS.colorPrimaryDark});`}
    ${props => props.secondary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorSecondaryLight}, ${COLOURS.colorSecondaryDark});`}
    ${props => props.tertiary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorTertiaryLight}, ${COLOURS.colorTertiaryDark});`}
  }

  /*Rotate card sides on card container hover*/
  &:hover .side-front {
    transform: rotateY(-180deg);
  }

  &:hover .side-back {
    transform: rotateY(0deg);
  }

  /*FRONT-SIDE STYLES OF ELEMENTS*/
  & .picture {
    height: 23rem;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    background-size: cover;
    /*New CSS property to blend image with gradient overlay*/
    background-blend-mode: screen;
    /* Background image and gradient colour based on props */
    ${props => props.primary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorPrimaryLight}, ${COLOURS.colorPrimaryDark}), url(${props.image});`}
    ${props => props.secondary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorSecondaryLight}, ${COLOURS.colorSecondaryDark}), url(${props.image});`}
    ${props => props.tertiary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorTertiaryLight}, ${COLOURS.colorTertiaryDark}), url(${props.image});`}
  }
  
  & .heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: ${COLOURS.colorWhite};
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
  }

  & .heading-span {
    padding: 1rem 1.5rem;
    /*CSS property to clone the properties when the box breaks onto line*/
    box-decoration-break: clone;
    ${props => props.primary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorPrimaryLight}, ${COLOURS.colorPrimaryDark});`}
    ${props => props.secondary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorSecondaryLight}, ${COLOURS.colorSecondaryDark});`}
    ${props => props.tertiary && `background-image: linear-gradient(to right bottom, ${COLOURS.colorTertiaryLight}, ${COLOURS.colorTertiaryDark});`}
  }
`

export default CardContainer
