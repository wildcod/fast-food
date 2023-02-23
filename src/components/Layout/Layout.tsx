import React from 'react';
import Header from '../common/Header/Header';
import './Layout.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
