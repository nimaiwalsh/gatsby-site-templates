import styled from 'react-emotion'
import { COLOURS, LINE } from '../utils/theme'

const PageContainer = styled('div')`
  /*GALLERY SECTION*/
  .gallery {
    display: flex;

    &__item {
      width: 100%;
      display: block;
    }
  }

  /*OVERVIEW SECTION*/
  .overview {
    display: flex;
    align-items: center;
    border-bottom: ${LINE};

    &__heading {
      font-size: 2.25rem;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 1.5rem 3rem;
    }

    &__stars {
      /*Pushes the other flex items to the right*/
      margin-right: auto;
      
      display: flex;
      align-items: center;
    }

    &__icon-star,
    &__icon-location {
      width: 1.75rem;
      height: 1.75rem;
      fill: ${COLOURS.primary};
    }

    &__location {
      font-size: 1.2rem;
      display: flex;
      vertical-align: center;

    }

    &__icon-location {
      margin-right: 0.5rem;
    }

    &__rating {
      background-color: ${COLOURS.primary};
      margin-left: 3rem;
      color: #FFF;
      padding: 0 2.25rem;
      align-self: stretch;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__rating-average {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: -3px;
    }

    &__rating-count {
      font-size: .8rem;
      text-transform: uppercase;
    }
  }

  /*DETAIL SECTION*/
  .detail {
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: ${COLOURS.greyLight1};
    border-bottom: ${LINE};
  }

  .description {
    background: #FFF;
    box-shadow: ${COLOURS.shadowLight};
    
    padding: 3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;
  }

  .user-reviews {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .recommend {
    font-size: 1.3rem;
    color: ${COLOURS.greyDark3};

    display: flex;
    align-items: center;

    &__count {
      margin-right: auto;
    }

    &__friends {

    }

    & img {
      box-sizing: content-box;
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      border: .3rem solid #FFF;
      /*overlap images*/
      &:not(:last-child) {
        margin-right: -1.5rem;
      }
    }
  }

  /*USER REVIEWS*/
  .review {
    background-color: #FFF;
    box-shadow: ${COLOURS.shadowLight};
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    &__text {
      position: relative;
      z-index: 2;
    }

    &__user {
      margin-top: 3rem;
      display: flex;
      align-items: center;
    }

    &__photo {
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 50%;
      margin-right: 1.5rem;
    }

    &__user-box {
      margin-right: auto;
    }

    &__user-name {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1.1rem;
      margin-bottom: .4rem;
    }

    &__user-date {
      font-size: 1rem;
      color: ${COLOURS.greyDark2};
    }

    &__rating {
      color: ${COLOURS.primary};
      font-size: 2.5rem;
    }

    &::before {
      content: "\\201C";
      position: absolute;
      top: -2.75rem;
      left: -1rem;
      font-size: 20rem;
      color: ${COLOURS.greyLight2};
      line-height: 1;
      font-family: sans-serif;
      z-index: 1;
    }
  }
`
export default PageContainer