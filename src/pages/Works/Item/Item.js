import React from 'react';
import LazyLoad from "react-lazyload"
import { Link } from 'react-router-dom';

export const Item = (work) => {

    const { title, url, cover } = work.work

    return (
        <LazyLoad offset={100} height={300} once className="work">
            <Link to={`/works/${url}`}>
                <div className="work_inner">
                    <div className="work_image">
                        <div className="work_hover">
                            <div className="work_hover-content">
                                View Project
                            </div>
                        </div>
                        <img src={cover.data.thumbnails[7].url} alt={title} />
                    </div>
                    <h3>{title}</h3>
                </div>
            </Link>
        </LazyLoad>
    );
}