import styled from 'react-emotion'
import { COLOURS } from '../../utils/theme'

const SideBarContainer = styled('nav')`
  background-color: ${COLOURS.greyDark1};
  /* Flex: flex-grow flex-shrink flex-basis */
  flex: 0 0 18%; 
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;


    &__item {
      position: relative;
      /*pseudoclass - all but last child*/
      &:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    }
    
    /*Pink box for hover effect*/
    &__link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      background-color: ${COLOURS.primary};
      z-index: -1;
      transform: scaleY(0);
      transition: transform 0.2s,
                  width cubic-bezier(1,0,0,1) 0.4s 0.2s, /*transiton length 0.4s delay by 0.2s*/
                  background-color 0.1s;
    }

    &__link:hover::before,
    &__link--active::before {
      transform: scaleY(1);
      width: 100%;
    }

    &__link:active::before {
      background-color: ${COLOURS.primaryLight};
    }

    &__link:link,
    &__link:visited {
      color: ${COLOURS.greyLight1};
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 1.5rem 3rem;
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
    }

    &__icon {
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 2rem;
      /* colour of parent element */
      fill: currentColor; 
    }
  
  }

  .legal {
    font-size: 1.2rem;
    color: ${COLOURS.greyLight4};
    text-align: center;
    padding: 2.5rem;

  }
`

export default SideBarContainer