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
    margin-left: 3rem;
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
    display: flex;

    &__icon-box {
    }

    &__icon {
      height: 2.25rem;
      width: 2.25rem;
    }

    &__notification {
    }

    &__user-photo {
      height: 3.75rem;
      width: 3.75rem;
    }

    &__username {
    }
  }
`

export default HeaderContainer
