import React, { Fragment, useContext, useEffect } from "react";

import { ApiContext } from "../../context/api/apiContext";
import { useLocation } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";

export const Service = () => {

    const { isLoading, service, getService } = useContext(ApiContext);
    const location = useLocation()
    const { id } = location.state

    useEffect(() => {
        getService(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/services" />
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <h2 className="page_title">{service.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: service.text }} className="page_text" />
                        </>
                    )}
                </article>
            </div>
        </Fragment>
    );

}