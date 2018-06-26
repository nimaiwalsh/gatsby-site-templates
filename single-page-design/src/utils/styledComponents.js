import styled from 'react-emotion'
import { COLOURS } from './theme'
import { moveInBottom } from './animations.css'

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
  /*Make background gradient display where text is only*/
  -webkit-background-clip: text;
  color: transparent;
  
  transition: all .2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem rgba(0,0,0,.2);
  }
`

export const Button = styled('a')`
  &:link,
  &:visited {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    background-color: ${props =>
      props.white ? `${COLOURS.colorWhite}` : props.green ? 'green' : ''};
    color: ${props =>
      props.white ? `${COLOURS.colorGreyDark}` : props.green ? 'green' : ''};
    transition: all 0.2s;
    animation: ${props =>
      props.animated ? `${moveInBottom} .5s ease-out .75s` : ''};
    /*Ensures the first keyframe is applied before animation*/
    animation-fill-mode: backwards;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  /*Pressed*/
  &:active {
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
      props.white ? `${COLOURS.colorWhite}` : props.green ? 'green' : ''};
    transition: all 0.2s;
  }

  &:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
`
