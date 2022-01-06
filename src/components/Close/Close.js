import React from 'react';
import { Link } from "react-router-dom";

export const Close = (props) => (
    <Link className="close" to={props.Path}>Close</Link>
);
