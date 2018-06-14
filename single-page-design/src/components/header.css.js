import { css } from 'react-emotion';
import backgroundImage from '../resources/images/hero.jpg'
import { COLOURS } from '../utils/theme'

const styles = css`
  height: 95vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.8), 
    rgba(40, 180, 131, 0.8)), 
    url(${backgroundImage});
  background-size: cover;
  background-position: top;

  /*Create a nice polygon image and clip the bottom*/
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

export default styles