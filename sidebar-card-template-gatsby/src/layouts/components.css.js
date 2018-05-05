import styled from 'react-emotion'
import { CONTAINER, COLOURS } from '../../utils/theme'

export const Container = styled('div')`
  max-width: ${CONTAINER.maxWidth};
  margin: 8rem auto; //Centre the container;
  background-color: ${COLOURS.greyLight2};
  box-shadow: ${COLOURS.shadowDark};

  min-height: 50rem;
`

export const Content = styled('div')`
  display: flex;
`

export const MainContent = styled('main')`
  background-color: #FFF;
  flex: 1;

  /* TEST */
  height: 80rem;
`