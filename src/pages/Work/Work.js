import React, { Fragment, useContext, useEffect } from "react";
import './Work.css';

import { ApiContext } from "../../context/api/apiContext";
import { useLocation } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import Image from "../../components/Image/Image";

export const Work = () => {

    const { isLoading, work, getWork } = useContext(ApiContext);
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        getWork(id);
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
                        {/*
                        {layers.length > 0 ? (
                            layers.map((layer, index) => (
                                <div className="work_image" key={index} >
                                    <Image fileId={layer.works_files_id} fileTitle={work.title} key={index} />
                                </div>
                            ))
                        ): null}
                        */}
                        
                        </>
                    )}
                </article>
            </div>
        </Fragment>
    );

}