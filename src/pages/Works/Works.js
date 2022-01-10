import React, { Fragment, useState } from "react";
import './Works.css';

import { useStaleSWR } from '../../api' 

import { Link } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import { WorksImage } from "./WorksImage";

export const Works = () => {

    const [cnt, setCnt] = useState(6)

    // Load total Works count
    const { data: totalWorks } = useStaleSWR('/items/works?fields=id')
    let limit = 6
    
    if(totalWorks) {
        limit = Object.keys(totalWorks.data).length
    }

    // Load Works from Api
    const { data, error } = useStaleSWR(`/items/works?limit=${cnt}`)
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
                                        <div className="work_hover">
                                            <div className="work_hover-content">
                                                View Project
                                            </div>
                                        </div>
                                        <WorksImage id={work.cover} title={work.title} />
                                    </div>
                                    <h3>{work.title}</h3>
                                </div>
                            </Link>
                        ))}

                    </div>
                    {cnt < limit && (
                        <button className="load_more" onClick={() => setCnt(cnt + 3)}>Load More</button>
                    )}
                        
                </article>
            </div>
        </Fragment>
    );

}