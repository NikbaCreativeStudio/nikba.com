import React from 'react';
import Loader from "react-loader-spinner";
import './Loader.css';

export const Loading = () => (
  <div className="loader">
    <Loader
      type="Oval"
      color="#fff"
      height={30}
      width={30}
      timeout={0} //3 secs
    />
  </div>
);