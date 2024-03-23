import React from 'react';
import Navbar from './Navbar';

const Root = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Root;
