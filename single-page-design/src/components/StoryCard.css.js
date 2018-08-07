import styled from 'react-emotion'
import { COLOURS, FONT } from '../utils/theme'

const CardContainer = styled('div')`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(${COLOURS.colorBlackRGB}, .1);
  background-color: ${COLOURS.colorWhite};
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: ${FONT.fontSizeDefault};
  /*Skew the whole card*/
  transform: skewX(-12deg);
  /* all direct childredn should not be skewed */
  & > * {
    transform: skewX(12deg);
  }

  .shape {
    position: relative;
    height: 15rem;
    width: 15rem;
    float: left;
    /*Makes text flow around the shape specified*/
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    /*Transform is best for floated items*/
    transform: translateX(-3rem);
  }
  
  img {
      height: 100%;
      transform: translateX(-4rem) scale(1.4);
      transition: all .5s;
      /*smooths transition glitch*/
      backface-visibility: hidden;
  }

  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: ${COLOURS.colorWhite};
    text-align: center;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all .5s;
    /*smooths transition glitch*/
    backface-visibility: hidden;
  }

  /*Animate caption on image hover*/
  & .shape:hover .caption {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  /*Image blur animation*/
  & .shape:hover img {
    transform: translateX(-4rem) scale(1);
    filter: blur(3px) brightness(80%);
  }


`

export default CardContainer
