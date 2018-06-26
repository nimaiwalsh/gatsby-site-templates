import styled from 'react-emotion'
import { COLOURS, GRID } from './theme'

export const CenterText = styled('div')`
  text-align: center;
  ${props => props.marginBottom && 'margin-bottom: 8rem'};
`

export const Row = styled('div')`
  max-width: ${GRID.gridWidth};
  background-color: orange;
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: ${GRID.gutterVertical};
  }

  /*CLEARFIX*/
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`
export const Col = styled('div')`
  ${props =>
    props.OneofTwo && `width: calc((100% - ${GRID.gutterHorizontal}) / 2)`};
  ${props =>
    props.OneofThree &&
    `width: calc((100% - 2 * ${GRID.gutterHorizontal}) / 3)`};
  ${props =>
    props.TwoofThree &&
    `width: calc(2 * (100% - 2 * ${GRID.gutterHorizontal}) / 3 + ${
      GRID.gutterHorizontal
    })`};
  ${props =>
    props.OneofFour &&
    `width: calc((100% - 3 * ${GRID.gutterHorizontal}) / 4)`};
  ${props =>
    props.TwoofFour &&
    `width: calc(2 * (100% - 3 * ${GRID.gutterHorizontal}) / 4 + ${
      GRID.gutterHorizontal
    })`};
  ${props =>
    props.ThreeofFour &&
    `width: calc(3 * (100% - 3 * ${GRID.gutterHorizontal}) / 4 + 2 * ${
      GRID.gutterHorizontal
    })`};

  background-color: blue;
  float: left;

  &:not(:last-child) {
    margin-right: ${GRID.gutterHorizontal};
  }
`

/* USING THE GRID*/
/*
<Row>
  <Col OneofTwo>Column 1/2</Col>
  <Col OneofTwo>Column 1/2</Col>
</Row>
<Row>
  <Col OneofThree>Column 1/3</Col>
  <Col OneofThree>Column 1/3</Col>
  <Col OneofThree>Column 1/3</Col>
</Row>
<Row>
  <Col OneofThree>Column 1/3</Col>
  <Col TwoofThree>Column 2/3</Col>
</Row>
<Row>
  <Col OneofFour>Column 1/4</Col>
  <Col OneofFour>Column 1/4</Col>
  <Col OneofFour>Column 1/4</Col>
  <Col OneofFour>Column 1/4</Col>
</Row>
<Row>
  <Col OneofFour>Column 1/4</Col>
  <Col OneofFour>Column 1/4</Col>
  <Col TwoofFour>Column 2/4</Col>
</Row>
<Row>
  <Col OneofFour>Column 1/4</Col>
  <Col ThreeofFour>Column 3/4</Col>
</Row> 
*/
