import React, { Fragment } from "react";
import './Work.css';

import { useStaleSWR } from '../../api' 
import { useParams } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import { Image } from "../../components/Image/Image";
import { Gallery } from "./Gallery";
import { Layers } from "./Layers";

export const Work = () => {

    const { url } = useParams()

    // Load Work from Api
    const { data, error } = useStaleSWR(`/items/works?filter[url]=${url}&single=true`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/works" />
                    
                        <h2 className="page_title">{data.data.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: data.data.text }} className="page_text" />

                        {data.data.header ? (
                            <div className="work_image">
                                <Image id={data.data.header} title={data.data.title} height={1400} />
                            </div>
                        ) : null}

                        <Layers id={data.data.id} title={data.data.title} />

                        <Gallery id={data.data.id} title={data.data.title} />

                        {data.data.footer ? (
                            <div className="work_image">
                                <Image id={data.data.footer} title={data.data.title} height={1400} />
                            </div>
                        ) : null}

                        <div className="work_links">
                            {data.data.website ? (
                                <a href={data.data.website} target="_blank" rel="noopener noreferrer">
                                    View website
                                </a>
                            ) : null}

                            {data.data.behance ? (
                                <a href={data.data.behance} target="_blank" rel="noopener noreferrer">
                                    View on Behance
                                </a>
                            ) : null}
                        </div>

                </article>
            </div>
        </Fragment>
    );

}