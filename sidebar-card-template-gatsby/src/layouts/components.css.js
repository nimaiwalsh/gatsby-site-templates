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

export const SideBar = styled('nav')`
  background-color: ${COLOURS.greyDark1};
  flex: 0 0 18%; /* Flex: flex-grow flex-shrink flex-basis */
`

export const MainContent = styled('main')`
  background-color: #FFF;
  flex: 1;
`