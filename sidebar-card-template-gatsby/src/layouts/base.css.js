import { injectGlobal } from 'emotion'
import { COLOURS } from '../utils/theme'

//Global normalised standard settings
const globalStyles = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    /* 1rem = 10px, 10px/16 = 62.5% */
    font-size: 62.5%; 
  }

  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: ${COLOURS.greyDark2};
    background-image: linear-gradient(to right bottom, ${COLOURS.primaryLight}, ${COLOURS.primaryDark});
    background-size: cover;
    background-repeat: no-repeat;

    min-height: 100vh; 
  }
`

export default globalStyles
