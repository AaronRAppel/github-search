import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as searchActions from '../redux/actions/search';
import Results from './Results';

const Search = ({ results, search}) => {
  const [searchString, setSearchString] = useState('');
  const [sortBy, setSortBy] = useState('');

  return (
    <Wrapper>
      <Heading>Github Repository Query</Heading>

      <SearchOptions>
        <Flex>
          <Subheading>Query Text:</Subheading>
          <Input type="text" value={searchString} onChange={e => setSearchString(e.target.value)} />
        </Flex>
        <Flex>
          <Subheading>Sort By:</Subheading>
          <input type="radio" name="sortBy" value={sortBy} onChange={() => setSortBy('score')} /> Score
          <br />
          <input type="radio" name="sortBy" value={sortBy} onChange={() => setSortBy('stars')} /> Stars
        </Flex>
      </SearchOptions>

      <Button onClick={() => search(searchString, sortBy)}>Click here to get results</Button>
      <hr />


      <div>
        <h2>{results.length > 0 ? 'Results' : 'No results to display'}</h2>
        {results.length > 0 && <Results results={results} />}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  results: state.search.results
});

export default connect(mapStateToProps, {
  search: searchActions.searchAsync
})(Search);

const Wrapper = styled.div`
  padding: 15px;
  background-color: aliceblue;
`;

const SearchOptions = styled.div`
  display: flex;
`;

const Flex = styled.div`
  flex: ${({ flex }) => flex || '1'};
`;

const Heading = styled.h2`
`;

const Subheading = styled.h3`
  margin: 5px 0;
`;

const Input = styled.input`
  border-radius: 3px;
  padding: 2px;
  font-size: 14px;
`;

const Button = styled.button`
  background: #5FA3BC;
  color: #FFF;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
`;
