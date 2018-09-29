import styled from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

import boxBackground from '../resources/images/nat-10.jpg'

const Section = styled('section')`
  position: relative;
  padding: 15rem 0;
  background-image: linear-gradient(
    to right bottom,
    ${COLOURS.colorPrimaryLight},
    ${COLOURS.colorPrimaryDark}
  );

  & .booking-box {
    /*SOLID COLOUR GRADIENT - White linear gradient shape*/
    background-image: linear-gradient(
        105deg,
        rgba(${COLOURS.colorWhiteRGB}, 0.9) 0%,
        rgba(${COLOURS.colorWhiteRGB}, 0.9) 50%,
        transparent 50%
      ),
      url(${boxBackground});
    /*Same as background-size: cover is the same as 100%-*/
    background-size: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(${COLOURS.colorBlackRGB}, 0.3);

    ${MEDIAQUERY.tabletLand} {
      background-image: linear-gradient(
          105deg,
          rgba(${COLOURS.colorWhiteRGB}, 0.9) 0%,
          rgba(${COLOURS.colorWhiteRGB}, 0.9) 65%,
          transparent 65%
        ),
        url(${boxBackground});
      background-size: cover;
    }

    ${MEDIAQUERY.tabletPort} {
      background-image: linear-gradient(
          to right,
          rgba(${COLOURS.colorWhiteRGB}, 0.9) 0%,
          rgba(${COLOURS.colorWhiteRGB}, 0.9) 100%
          
        ),
        url(${boxBackground});
    }
  }

  & .form-box {
    width: 50%;
    padding: 6rem;

    ${MEDIAQUERY.tabletLand} {
      width: 70%;
    }

    ${MEDIAQUERY.tabletPort} {
      width: 100%;
    }
  }
`
export default Section
