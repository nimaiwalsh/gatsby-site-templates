import { css } from 'react-emotion'
import { COLOURS, MEDIAQUERY } from '../utils/theme'

const styles = css`
  background-color: rgba(${COLOURS.colorWhiteRGB}, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(${COLOURS.colorBlackRGB}, 0.15);
  transition: transform 0.2s;

  ${MEDIAQUERY.tabletPort} {
    padding: 2rem;
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }

  svg {
    height: 8rem;
    margin-bottom: 2rem;

    ${MEDIAQUERY.tabletPort} {
      height: 4rem;
      margin-bottom: 2rem;
    }
  }
`

export default styles
