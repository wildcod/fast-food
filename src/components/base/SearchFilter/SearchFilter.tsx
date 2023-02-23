import React from 'react';
import Title from '../../common/Typography/Title/Title';
import './SearchFilter.scss';

const SearchFilter: React.FC = () => {
  return (
    <div className="search-filter-container">
      <Title level={5} className="restaurant-count">
        1780 restaurants
      </Title>
      <div>Filters</div>
    </div>
  );
};

export default SearchFilter;
