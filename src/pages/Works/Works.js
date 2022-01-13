import React, { Fragment, useState } from "react";
import './Works.css';
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'

import { Link } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";


export const Works = () => {

    const [cnt, setCnt] = useState(6)

    // Load total Works count
    const { data: totalWorks } = useStaleSWR('/items/works?fields=id')
    const last = totalWorks ? Object.keys(totalWorks.data).length : 6
    

    // Load Works from Api
    const { data, error } = useStaleSWR(`/items/works?fields=title,url,cover.data&sort=-id`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />


    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />

                    <h2 className="page_title">Our Best Work</h2>
                    <div className="works">
                        {data.data.slice(0, cnt).map((work, index) => (
                            <LazyLoad offset={100} height={300} once key={index} className="work">
                                <Link to={`/works/${work.url}`}>
                                    <div className="work_inner">
                                        <div className="work_image">
                                            <div className="work_hover">
                                                <div className="work_hover-content">
                                                    View Project
                                                </div>
                                            </div>
                                            <img src={work.cover.data.thumbnails[7].url} alt={work.title} />
                                        </div>
                                        <h3>{work.title}</h3>
                                    </div>
                                </Link>
                            </LazyLoad>
                        ))}

                    </div>
                    {cnt < last && (
                        <button className="load_more" onClick={() => setCnt(cnt + 3)}>Load More</button>
                    )}

                </article>
            </div>
        </Fragment>
    );

}