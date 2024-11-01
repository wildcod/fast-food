import React from 'react';
import Typography from '../common/Typography/Typography';
import './RestaurantCard.scss';

const IMAGE_SRC =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/a929110e-bc63-4ddb-8132-7c3f037ea5c9_188433.JPG';

const RatingPlusDelivery: React.FC = () => (
  <div className="rating-plus-delivery">
    <span>4.2</span>
    <span>.</span>
    <span>32-32 mins</span>
  </div>
);

const RestaurantCard: React.FC = () => {
  return (
    <div className="container">
      <div className="restaurant-image">
        <img src={IMAGE_SRC} />
      </div>
      <div className="restaurant-details">
        <Typography component="div" className="name">
          KFC
        </Typography>
        <RatingPlusDelivery />
        <Typography component="div" className="heighlights top-food">
          Food Names
        </Typography>
        <Typography component="div" className="heighlights location">
          Location
        </Typography>
      </div>
    </div>
  );
};

export default RestaurantCard;
