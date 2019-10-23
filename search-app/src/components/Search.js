import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as searchActions from '../redux/actions/search';
import Results from './Results';
import PropTypes from 'prop-types';

const Search = ({ results, search, isFetching }) => {
  const [searchString, setSearchString] = useState('');
  const [sortBy, setSortBy] = useState('');
  const searchInput = useRef(null);
  useEffect(() => searchInput.current.focus(), []);

  return (
    <Wrapper>
      <h2>Github Repository Query</h2>

      <SearchOptions>
        <Flex>
          <Subheading>Query Text:</Subheading>
          <Input ref={searchInput} type="text" value={searchString} onChange={e => setSearchString(e.target.value)} />
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

      {isFetching ? <Loader /> : <h2>{results.length > 0 ? 'Results' : 'No results to display'}</h2>}
      {(results.length > 0 && !isFetching) && <Results results={results} />}
    </Wrapper>
  );
};

Search.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    score: PropTypes.number,
    stars: PropTypes.number,
    language: PropTypes.string,
    ownerName: PropTypes.string
  })),
  search: PropTypes.func,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => ({
  results: state.search.results,
  isFetching: state.search.isFetching
});

export default connect(mapStateToProps, {
  search: searchActions.searchAsync
})(Search);

const Wrapper = styled.div`
  padding: 15px;
  background-color: aliceblue;
  min-height: 100vh;
`;

const SearchOptions = styled.div`
  display: flex;
`;

const Flex = styled.div`
  flex: ${({ flex }) => flex || '1'};
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

const Loader = styled.div`
  margin: auto;
  border: 16px solid #F3F3F3;
  border-radius: 50%;
  border-top: 16px solid #3498DB;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
