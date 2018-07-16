import styled from 'react-emotion'
import { COLOURS } from '../utils/theme'

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
`
export default Section