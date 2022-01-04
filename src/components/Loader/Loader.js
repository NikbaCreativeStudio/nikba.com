import React from 'react';
import Loader from "react-loader-spinner";
import './Loader.css';

export const Loading = () => ( 
    <div className="loader">
    <Loader
        type="Puff"
        color="#ffffff"
        height={70}
        width={70}
        timeout={3000} //3 secs
      />
    </div>
);