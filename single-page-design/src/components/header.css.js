import styled, { keyframes } from 'react-emotion'
import backgroundImage from '../resources/images/hero.jpg'
import { COLOURS } from '../utils/theme'
import { moveInLeft, moveInRight } from '../utils/animations.css'

const HeaderMain = styled('header')`
  position: relative;

  /*Background image using Gatsby Image - unfortunately can't use CSS background-image property*/
  & .background-image,
  & .background-overlay {
    position: absolute;
    width: 100%;
    height: 90vh;
    top: 0;
    left: 0;

    /* Create a nice polygon shape to clip the bottom*/
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  }

  & .background-overlay {
    background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    );
  }

  & .logo-box {
    position: absolute;
    top: 40px;
    left: 4rem;
  }

  & .logo {
    height: 3.5rem;
  }

  & .text-box {
    /* Centre item */
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  & .heading-primary {
    color: #FFF;
    text-transform: uppercase;
    margin-bottom: 6rem;
    /*Fix animation shacking on child elements*/
    backface-visibility: hidden;

    &__main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3.5rem;

      animation: ${moveInLeft} 1s ease-out;

      /*
      animation-name:
      animation-duration:
      animation-delay:
      animation-iteration-count: the nuber of times the animation plays
      animation-timing-function: ease-out, ease-in, cubic-bezier() etc...
      */
    }

    &__sub {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.75rem;

      animation: ${moveInRight} 1s ease-out;
    }
  }
`

export default HeaderMain
