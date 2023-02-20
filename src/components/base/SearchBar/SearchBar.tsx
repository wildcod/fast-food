import React from 'react';
import MainSearch from './MainSearch';
import SearchPlace from './SaarchPlace';
import './Styles.scss';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <div className="wrapper">
        <SearchPlace />
        <MainSearch />
      </div>
    </div>
  );
};

export default SearchBar;
