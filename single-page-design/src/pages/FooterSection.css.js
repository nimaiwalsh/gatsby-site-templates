import styled from 'react-emotion'
import { COLOURS } from '../utils/theme'

export const Footer = styled('footer')`
  background-color: ${COLOURS.colorGreyDark3};
  padding: 10rem 0;
  font-size: 1.4rem;
  color: ${COLOURS.colorGreyLight1};

  a {
    &:link,
    &:visited {
      color: ${COLOURS.colorGreyLight1};
      background-color: ${COLOURS.colorGreyDark3};
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      transition: all 0.2s;
    }

    &:hover,
    &:active {
      color: ${COLOURS.colorPrimary};
      box-shadow: 0 1rem 2rem rgba(${COLOURS.colorBlackRGB}, 0.4);
      transform: rotate(5deg) scale(1.3);
    }
  }
`

export const LogoBox = styled('div')`
  text-align: center;
  margin-bottom: 8rem;

  img {
    width: 15rem;
    height: auto;
  }
`

export const FooterNavigation = styled('div')`
  border-top: 1px solid ${COLOURS.colorGreyDark};
  padding-top: 2rem;
  display: inline-block;

  & ul {
    list-style: none;
  }

  & li {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

export const CopyrightText = styled('p')`
  border-top: 1px solid ${COLOURS.colorGreyDark};
  padding-top: 2rem;
  width: 80%;
  float: right;
`
