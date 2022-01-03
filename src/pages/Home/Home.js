import React from "react";
import './Home.css';

// import components
import {Nav} from '../../components/Nav/Nav';
import {LogoComponent} from '../../components/Logo/Logo';

export const Home = () => (
    <div className="home">
        <LogoComponent />
        
        <div className="container">
            <div className="row">
                <h1>NIKBA CREATIVE STUDIO</h1>
                <p>We are a creative design studio based in Chisinau - Moldova.<br /> We design with passion, we care about customers!</p>
            </div>
        </div>

        <Nav />
    </div>
);