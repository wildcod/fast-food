import React from 'react';
import imageLogo from '../../../assets/fast-food-logo.png';
import cartImage from '../../../assets/cart.png';
import SearchBar from '../../base/SearchBar/SearchBar';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="wrapper">
        <div>
          <img src={imageLogo} width="79" height="72" />
        </div>
        <SearchBar />
        <div className="nav-links">
          <nav>
            <ul>
              <li>
                <img src={cartImage} width="30" height="30" />
                <span>Cart</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
