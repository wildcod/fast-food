import React from 'react';
import Title from '../../common/Typography/Title/Title';
import Typography from '../../common/Typography/Typography';
import './SearchFilter.scss';

const FILTERS = [
  {
    displayName: 'Relavance',
    key: 'relavance',
  },
  {
    displayName: 'Delivery Time',
    key: 'deliveryTime',
  },
  {
    displayName: 'Rating',
    key: 'rating',
  },
  {
    displayName: 'Cost: Low To High',
    key: 'lowToHigh',
  },
  {
    displayName: 'Cost: High To Low',
    key: 'highToLow',
  },
];

const SearchFilter: React.FC = () => {
  return (
    <div className="search-filter-container">
      <Title level={5} className="restaurant-count">
        1780 restaurants
      </Title>
      <div className="filter-container">
        <ul>
          {FILTERS.map((filter) => (
            <li key={filter.key}>
              <Typography component="span" variant="small">
                {filter.displayName}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
