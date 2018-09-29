import styled from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

const Section = styled('section')`
  background-color: ${COLOURS.colorGreyLight1};
  padding: 25rem 0 15rem 0;
  margin-top: -10rem;

  ${MEDIAQUERY.tabletPort} {
    padding: 15rem 0 10rem 0;
  }
`
export default Section
