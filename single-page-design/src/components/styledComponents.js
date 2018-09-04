import styled from 'react-emotion'
import { COLOURS, MARGIN, FONT } from '../utils/theme'
import { moveInBottom } from '../utils/animations.css'

export const HeadingSecondary = styled('h2')`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  letter-spacing: .2rem;
  background-image: linear-gradient(
    to right,
    ${COLOURS.colorPrimaryDark},
    ${COLOURS.colorPrimaryLight}
  );
  /*Make background gradient display only where there is text*/
  -webkit-background-clip: text;
  color: transparent;
  
  transition: all .2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem rgba(0,0,0,.2);
  }

  /*PROPS UTILITIES*/
  ${props => props.marginBottom && `margin-bottom: ${MARGIN.marginBottomLarge}`};
`

export const HeadingTertiary = styled('h3')`
  font-size: ${FONT.fontSizeDefault};
  font-weight: 700;
  text-transform: uppercase;
  ${props => props.marginBottom && `margin-bottom: ${MARGIN.marginBottomSmall}`};
`

export const Paragraph = styled('p')`
  font-size: ${FONT.fontSizeDefault};
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`

export const Button = styled('a')`
  &,
  &:link,
  &:visited {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    background-color: ${props =>
      props.white ? `${COLOURS.colorWhite}` : props.green ? `${COLOURS.colorPrimary}` : ''};
    color: ${props =>
      props.white ? `${COLOURS.colorGreyDark}` : props.green ? `${COLOURS.colorWhite}` : ''};
    transition: all 0.2s;
    animation: ${props =>
      props.animated ? `${moveInBottom} .5s ease-out .75s` : ''};
    /*Ensures the first keyframe is applied before animation*/
    animation-fill-mode: backwards;
  }

  /*For Button element below*/
    border: none;
    cursor: pointer;
    font-size: ${FONT.fontSizeDefault};

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  /*Pressed*/
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  /*Radiating glow effect*/
  &::after {
    content: '';
    display: inline-block;
    height: 100%; /*Same height/width of parent button*/
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${props =>
      props.white ? `${COLOURS.colorWhite}` : props.green ? `${COLOURS.colorPrimary}` : ''};
    transition: all 0.2s;
  }

  &:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
`
/*emotion.js - apply the styles from button above to this component*/
export const FormButton = Button.withComponent('button')

export const ButtonText = styled('a')`
  &:link,
  &:visited {
    font-size: ${FONT.fontSizeDefault};
    color: ${COLOURS.colorPrimary};
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid ${COLOURS.colorPrimary};
    padding: 3px;
    transition: all .2s;
  }

  &:hover {
    background-color: ${COLOURS.colorPrimary};
    color: #FFF;
    box-shadow: 0 1rem 2rem rgba(0,0,0,.15);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    transform: translateY(0);
  }
`