import React, { Fragment } from "react";
import './Work.css';
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'
import { useParams } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import { Gallery } from "./Gallery";
import { Layers } from "./Layers";

export const Work = () => {

    const { url } = useParams()

    // Load Work from Api
    const { data, error } = useStaleSWR(`/items/works?fields=id,title,text,header.data,footer.data,website,behance&filter[url]=${url}&single=true`)
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
                        <LazyLoad offset={100} height={300} once className="work_image">
                            <img src={data.data.header.data.thumbnails[8].url} alt={data.data.title} />
                        </LazyLoad>
                    ) : null}

                    <Layers id={data.data.id} title={data.data.title} />

                    <Gallery id={data.data.id} title={data.data.title} />

                    {data.data.footer ? (
                        <LazyLoad offset={100} height={300} once className="work_image">
                            <img src={data.data.footer.data.thumbnails[8].url} alt={data.data.title} />
                        </LazyLoad>
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