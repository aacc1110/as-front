import React from 'react';
import styled from 'styled-components';

const SearchBlock = styled.div`
  .search {
    border: 1px solid black;
    display: flex;
    width: 700px;
    height: 1.25rem;
    margin: 0 left;
    padding-left: 1rem;
  }
`;

interface SearchProps {}

const Search: React.FC<SearchProps> = props => {
  return (
    <SearchBlock>
      <input className="search" />
    </SearchBlock>
  );
};

export default Search;
