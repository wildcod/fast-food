import React from 'react';
import SearchFilter from '../components/base/SearchFilter/SearchFilter';
import Layout from '../components/Layout/Layout';
import './Home.scss';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard';

const Home: React.FC = () => {
  return (
    <Layout>
      <SearchFilter />
      <div className="home-search-grid">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </Layout>
  );
};

export default Home;
