import { css } from 'react-emotion'
import { COLOURS } from '../utils/theme'

const styles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -99;
  opacity: .15;
  /* ensure child video does not overflow */
  overflow: hidden;

  .video {
    width: 100%;
    height: 100%;
    /*Similar to background images*/
    object-fit: cover;
  }
`

export default styles
