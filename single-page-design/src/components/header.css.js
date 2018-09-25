import styled, { keyframes } from 'react-emotion'
import backgroundImage from '../resources/images/hero.jpg'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

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

    ${MEDIAQUERY.phone} {
      clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
    }
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
`

export default HeaderMain
