import styled from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

const Section = styled('section')`
  /*Required relative pos for gatsby background*/
  position: relative;
  padding: 20rem 0;
  transform: skewY(-7deg);
  margin-top: -10rem;

  /*Select row and skew the row horizonatal*/
  & .row {
    transform: skewY(7deg); 
  }

  ${MEDIAQUERY.tabletPort} {
    padding: 15rem 0;
  }
`
export default Section
