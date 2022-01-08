import React from 'react';
import './Logo.css';
import { ReactComponent as Logo } from './logo.svg';

export const LogoComponent = () => (
    <div className="logo">
        <Logo />
    </div>
);