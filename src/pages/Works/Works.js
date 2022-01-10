import React, { Fragment } from "react";
import './Works.css';

import { useStaleSWR } from '../../api' 

import { Link } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import { Image } from "../../components/Image/Image";

export const Works = () => {

    // Load Works from Api
    const { data, error } = useStaleSWR('/items/works')
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />


    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />
                    
                    <h2 className="page_title">Our Best Work</h2>
                    <div className="works">
                        {data.data.map((work, index) => (

                            <Link
                                className="work"
                                key={index}
                                to={`/works/${work.url}`}
                            >
                                <div className="work_inner">
                                    <div className="work_image">
                                        <Image id={work.cover} title={work.title} height={212} />
                                    </div>
                                    <h3>{work.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                        
                </article>
            </div>
        </Fragment>
    );

}