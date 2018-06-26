import { injectGlobal } from 'react-emotion'

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
    font-size: 62.5%;
  }

  body {
    /*This font family can now be inhertited from all child elements*/
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.7;
    color: #777;
    padding: 3rem;

    box-sizing: border-box;  
  }
`

export default globalCSS