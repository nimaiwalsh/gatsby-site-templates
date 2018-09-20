import styled, { keyframes } from 'react-emotion'
import { COLOURS } from '../utils/theme'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(.25);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Popup = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(${COLOURS.colorBlackRGB}, 0.8);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled('div')`
  position: relative;
  display: block;
  width: 75%;
  background-color: rgba(${COLOURS.colorWhiteRGB}, 1);
  box-shadow: 0 2rem 4rem rgba(${COLOURS.colorBlackRGB}, 0.8);
  border-radius: 3px;
  overflow: hidden;
  display: flex;

  /*Animate the content card when displayed on screen*/
  animation: ${fadeIn} .5s .1s;
  animation-fill-mode: backwards;

  .popup-left {
    width: 33.33333%;
  }

  .popup-right {
    width: 66.666667%;
    align-self: center;
    padding: 3rem 5rem;

    & .text {
      font-size: 1.4rem;
      margin-bottom: 4rem;

      /*Break text into columns*/
      column-count: 2;
      column-gap: 4rem; //1em = 14 pixels 
      column-rule: 1px solid ${COLOURS.colorGreyLight1};

      hyphens: auto;
    }
  }

  .image {
    display: block;
    width: 100%;
  }
`

export const CloseButton = styled('div')`
  color: ${COLOURS.colorGreyDark2};
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  font-size: 3rem;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: ${COLOURS.colorPrimary};
  }
`
