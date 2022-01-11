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
    let limit = 6

    if (totalWorks) {
        limit = Object.keys(totalWorks.data).length
    }

    // Load Works from Api
    const { data, error } = useStaleSWR(`/items/works?fields=title,url,cover.data&sort=-id&limit=${cnt}`)
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
                    {cnt < limit && (
                        <button className="load_more" onClick={() => setCnt(cnt + 6)}>Load More</button>
                    )}

                </article>
            </div>
        </Fragment>
    );

}