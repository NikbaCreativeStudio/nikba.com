import React from 'react';
import './Nav.css';

import { Link } from "react-router-dom";

export const Nav = () => (
    <nav className="nav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Cases</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
);