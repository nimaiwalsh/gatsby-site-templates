import styled from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

const Section = styled('section')`
  position: relative;
  padding: 15rem 0;

  ${MEDIAQUERY.tabletPort} {
    padding: 10rem 0;
  }
`
export default Section
