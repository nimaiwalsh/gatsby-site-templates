import styled from 'react-emotion'
import { COLOURS, FONT, MARGIN } from '../utils/theme'

export const Form = styled('form')``

export const FormGroup = styled('div')`
  & :not(:last-child) {
    margin-bottom: ${MARGIN.marginBottomSmall};
    font-size: inherit;
  }

  input {
    font-family: inherit;
    color: inherit;
    font-size: 1.2rem;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(${COLOURS.colorWhiteRGB}, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all 0.3s;

    & ::placeholder {
      color: ${COLOURS.colorGreyDark2};
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(${COLOURS.colorBlackRGB}, 0.1);
    border-bottom: 3px solid ${COLOURS.colorPrimary};
  }

  input:focus:invalid {
    border-bottom: 3px solid ${COLOURS.colorSecondaryDark};
  }

  label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transform: translateY(0);
    transition: all 0.3s;
  }

  /*hide label when placeholder is visible before
  anything is enetered into the input
  */
  input:placeholder-shown + label {
    opacity: 1;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`

export const FormRadioGroup = styled('div')`
  & :not(:last-child) {
    margin-bottom: ${MARGIN.marginBottomMedium};
  }
`

/*Radio Buttons*/

export const Radio = styled('div')`
  width: 50%;
  display: inline-block;

  & .radio-label {
    font-size: ${FONT.fontSizeDefault};
    cursor: pointer;
    position: relative;
    padding-left: 4.5rem;
  }

  & .radio-button {
    height: 3rem;
    width: 3rem;
    border: 5px solid ${COLOURS.colorPrimary};
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -0.4rem;

    /*Dot inside the radio button*/
    &::after {
      content: '';
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${COLOURS.colorPrimary};
      opacity: 0;
      transition: opacity .2s;
    }
  }

  /*When input checked, choose the radio-botton span element pseduo element*/
  & .radio-input:checked + .radio-label .radio-button::after {
    opacity: 1;
  }

  & .radio-input {
    display: none;
  }
`
