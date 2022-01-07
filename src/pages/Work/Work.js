import React, { Fragment, useContext, useEffect } from "react";
import './Work.css';

import { ApiContext } from "../../context/api/apiContext";
import { useLocation } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import {Image} from "../../components/Image/Image";

export const Work = () => {

    const { isLoading, work, getWork, workLayers, getWorkLayers  } = useContext(ApiContext);
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        getWork(id);
        getWorkLayers(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/works" />
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                        <h2 className="page_title">{work.title}</h2>
                        <div dangerouslySetInnerHTML={ {__html: work.text} } className="page_text" />
                        
                        {work.header ? (
                            <div className="work_image">
                                <Image fileId={work.header} fileTitle={work.title} />
                            </div>
                        ): null}
                        
                        {workLayers.length > 0 ? (
                            workLayers.map((layer, index) => (
                                <div className="work_image" key={index} >
                                    <Image fileId={layer.works_files_id} fileTitle={work.title} key={index} />
                                </div>
                            ))
                        ): null}

                        {work.footer ? (
                            <div className="work_image">
                                <Image fileId={work.footer} fileTitle={work.title} />
                            </div>
                        ): null}
                        
                        <div className="work_links">
                            {work.website? (
                                <a href={work.website} target="_blank" rel="noopener noreferrer">
                                    View website
                                </a>
                            ): null}

                            {work.behance? (
                                <a href={work.behance} target="_blank" rel="noopener noreferrer">
                                    View on Behance
                                </a>
                            ): null}
                        </div>

                        </>
                    )}
                </article>
            </div>
        </Fragment>
    );

}