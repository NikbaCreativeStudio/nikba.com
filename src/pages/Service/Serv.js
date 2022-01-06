import React from 'react';
import { useLocation } from 'react-router-dom';

import { Service } from './Service';

export const Serv = () => {
    const location = useLocation()
    const { id } = location.state
    
    return (
        <>
            <Service id={id} />
        </>
    );
}