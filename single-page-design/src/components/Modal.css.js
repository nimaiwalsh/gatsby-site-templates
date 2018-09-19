import styled from 'react-emotion'
import { COLOURS } from '../utils/theme'

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
  display: block;
  width: 75%;
  background-color: rgba(${COLOURS.colorWhiteRGB}, 1);
  box-shadow: 0 2rem 4rem rgba(${COLOURS.colorBlackRGB}, 0.8);
  border-radius: 3px;
  overflow: hidden;
  display: flex;

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
  color: #fff;
`
