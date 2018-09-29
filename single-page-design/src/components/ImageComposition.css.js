import { css } from 'react-emotion';
import { COLOURS, MEDIAQUERY } from '../utils/theme';

const styles = css`
  position: relative;

  & img {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,.4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 2rem;

    ${MEDIAQUERY.tabletPort} {
      float: left;
      position: relative;
      width: 33.3333%;
      box-shadow: 0 1.5rem 3rem rgba(0,0,0,.2);
    }

    &.img1 {
      left: 0;
      top: -2rem;

      ${MEDIAQUERY.tabletPort} {
        top: 0;
        transform: scale(1.2)
      }
    }

    &.img2 {
      right: 0;
      top: 2rem;

      ${MEDIAQUERY.tabletPort} {
        top: -1rem;
        transform: scale(1.3);
        z-index: 100;
      }
    }

    &.img3 {
      left: 20%;
      top: 10rem;

      ${MEDIAQUERY.tabletPort} {
        top: 0;
        left: 0;
        transform: scale(1.2)
      }
    }

    &:hover {
      /*Outline is like a normal border but can contain an offset*/
      outline: 1.5rem solid ${COLOURS.colorPrimary};

      transform: scale(1.05) translateY(-.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0,0,0,.6);
      z-index: 20;
    }  
  }

  /*When container hovered, apply styles to img that is not hovered */
  &:hover img:not(:hover) {
    transform: scale(.9);
  }
`

export default styles