import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Results = ({ results }) => {
  return (
    <Table>
      <Header>
        <Col>Name</Col>
        <Col>Description</Col>
        <Col>Stars</Col>
        <Col>Language</Col>
        <Col>Owners Name</Col>
      </Header>
      {
        results.map(result => {
          return (
            <Row key={result.id}>
              <Col>{result.name}</Col>
              <Col>{result.description}</Col>
              <Col>{result.stars}</Col>
              <Col>{result.language}</Col>
              <Col>{result.ownerName}</Col>
            </Row>
          );
        })
      }
      </Table>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    score: PropTypes.number,
    stars: PropTypes.number,
    language: PropTypes.string,
    ownerName: PropTypes.string
  }))
};

export default Results;

const Table = styled.div`
  border: solid 1px #000;
`;

const Row = styled.div`
  display: flex;
  border-bottom: solid 1px black;
  background-color: #FFF;
  
  &:nth-child(even) {
    background-color: #EEE;
  }
  
  &:last-child {
   border-bottom: none;
  }
`;

const Header = styled.div`
  display: flex;
  font-weight: bold;
  background-color: #FFF;
  border-bottom: solid 2px #000;
`;

const Col = styled.div`
  flex: ${({ flex }) => flex || '1'};
  border-right: solid 1px #000;
  padding: 3px;
  
  &:last-child {
   border-right: none;
  }
`;
