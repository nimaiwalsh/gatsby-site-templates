import styled from 'react-emotion'
import { COLOURS } from '../../utils/theme'

const HeaderContainer = styled('header')`
  background-color: #fff;
  border-bottom: ${COLOURS.greyLight2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  height: 7rem;

  .logo {
    height: 3.25rem;
    margin-left: 2rem;
  }

  .search {
    flex: 0 0 40%;
    /* Nested flex container */
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLOURS.greyDark3};

    &__input {
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: ${COLOURS.greyLight2};
      border: none;
      padding: 0.7rem 2rem;
      border-radius: 100px;
      width: 90%;
      transition: all 0.2s;
      margin-right: -3.25rem;

      &:focus {
        outline: none;
        width: 100%;
        background-color: ${COLOURS.greyLight3};
      }

      &::placeholder {
        font-weight: 100;
        color: ${COLOURS.greyLight4};
      }
    }

    &__input:focus + .search__button {
      background-color: ${COLOURS.greyLight3};
    }

    &__button {
      border: none;
      background-color: ${COLOURS.greyLight2};

      &:focus {
        outline: none;
      }

      &:active {
        transform: translateY(2px);
      }
    }

    &__icon {
      height: 2rem;
      width: 2rem;
      fill: ${COLOURS.greyDark3};
    }
  }

  .user-nav {
    /* override header element vertical center and stretch top to bottom*/
    align-self: stretch;

    display: flex;
    align-items: center;
    justify-content: center;

    /* Direct chidren */
    & > * {
      padding: 0 2rem;
      cursor: pointer;
      height: 100%;

      display: flex;
      align-items: center;
    }

    & > *:hover {
      background-color: ${COLOURS.greyLight2}
    }

    &__icon-box {
      position: relative;
    }

    &__icon {
      height: 2.25rem;
      width: 2.25rem;
      fill: ${COLOURS.greyDark2};
    }

    &__notification {
      font-size: 0.8rem;
      height: 1.75rem;
      width: 1.75rem;
      border-radius: 50%;
      background-color: ${COLOURS.primary};
      color: #FFF;

      position: absolute;
      top: 1rem;
      right: 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__user-photo {
      height: 3.75rem;
      width: 3.75rem;
      border-radius: 50%;
      margin-right: 1rem;
    }

    &__username {
      color: ${COLOURS.greyDark2};
    }
  }
`

export default HeaderContainer
