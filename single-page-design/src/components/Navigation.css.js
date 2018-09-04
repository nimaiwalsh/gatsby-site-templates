import styled from 'react-emotion'
import { COLOURS } from '../utils/theme'

export const NavigationContainer = styled('div')`
`
export const NavigationBackground = styled('div')`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background-color: ${COLOURS.colorPrimary};
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(${COLOURS.colorPrimaryLight}, ${COLOURS.colorPrimaryDark});
  z-index: 1000;

  /*ANIMATION EFFECT*/
  transform: scale(80);
`
export const NavigationButton = styled('div')`
  background-color: ${COLOURS.colorWhite};
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 3000;
`
export const Nav = styled('nav')`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000;

  & .list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  & .item {
    margin: 1rem;
  }

  & .link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem; 
      color: ${COLOURS.colorWhite};
      text-decoration: none;
      text-transform: uppercase;

      /*Gradient effect used for animation*/
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${COLOURS.colorWhite} 50%);
      /*Background size increase gives the effect of gradient moving over the link*/
      background-size: 230%;
      transition: all .5s;
    }

    &:hover, 
    &:active {
      background-position: 100%;
      color: ${COLOURS.colorPrimary};
      transform: translateX(1rem);
    }
  }
`

