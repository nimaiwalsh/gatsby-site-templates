export const COLOURS = {
  colorPrimary: '#55c57a',
  colorPrimaryLight: '#7ed56f',
  colorPrimaryDark: '#28b485',

  colorSecondaryLight: '#FFB900',
  colorSecondaryDark: '#FF7730',

  colorTertiaryLight: '#2998FF',
  colorTertiaryDark: '#5643FA',

  colorGreyLight1: '#f7f7f7',
  colorGreyLight2: '#EEE',

  colorGreyDark: '#777',
  colorGreyDark2: '#999',
  colorGreyDark3: '#333',

  colorGreyMedium: '#c0c0c0ff',
  colorWhite: '#FFF',
  colorBlack: '#000',
  colorWhiteRGB: '255,255,255',
  colorBlackRGB: '0,0,0',
}

export const FONT = {
  fontSizeDefault: '1.6rem',
}

export const GRID = {
  gridWidth: '114rem',
  gutterVertical: '8rem',
  gutterVerticalSmall: '6rem',
  gutterHorizontal: '6rem',
}

export const MARGIN = {
  marginBottomSmall: '1.5rem',
  marginBottomMedium: '4rem',
  marginBottomLarge: '8rem',
}

export const MEDIAQUERY = {
  //0 - 600px: Phone
  //600 - 900px: Tablet portrait
  //900 - 1200px: Tablet landscape
  //[1200-1800]: Desktop first - this is where all our normal styles appear
  //1800px +: Big desktop

  //em are better than rem's in Media Queries - more stable. 
  //1em = 16px

  //Order of applying modia queries
  // Base/Global + tyography > General Layout + grid > page layout > components

  bigDesktop: '@media (min-width: 112.5em)', //1800px
  tabletLand: '@media (max-width: 75em)', //1200px
  tabletPort: '@media (max-width: 56.25em)', //900px 900/16
  phone: '@media (max-width: 37.5em)', //600px 600/16
}

