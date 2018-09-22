import { injectGlobal } from 'react-emotion'
import { FONT, MEDIAQUERY } from './theme'

//Global styles and resets
const globalCSS = injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');

  *, 
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* Default font size is 16px*/
    /* We want to use rems through out project and we want 1rem = 10px, 
    /* So Font size should be 10px/16px = 62.5% */

    /*As rem's have been used throughout the project, adjusting the default
    font size at different breakpoints will also increase/decrease all elements*/
    
    font-size: 62.5%;

    ${MEDIAQUERY.bigDesktop} {
      font-size: 75%; //1rem = 12px, 12/16 = 80%
    }

    ${MEDIAQUERY.tabletLand} {
      font-size: 56.25%; //1rem = 9px, 9/16 = 56.25%
    }

    ${MEDIAQUERY.tabletPort} {
      font-size: 50%; //1rem = 8px, 8/16 = 50%
    }
  }

  body {
    /*This font family can now be inhertited from all child elements*/
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: ${FONT.fontSizeDefault};
    line-height: 1.7;
    color: #777;
    padding: 3rem;

    box-sizing: border-box;  
  }
`

export default globalCSS
