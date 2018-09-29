import styled from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

const Section = styled('section')`
  background-color: ${COLOURS.colorGreyLight1};
  padding: 25rem 0;
  margin-top: -20vh;

  ${MEDIAQUERY.tabletPort} {
    padding: 20rem 0;
  }
`

export default Section