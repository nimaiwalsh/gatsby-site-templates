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
    transform: rotateY(180deg);
  }

  &:hover .side-back {
    transform: rotateY(0deg);
  }

`

export default CardContainer
