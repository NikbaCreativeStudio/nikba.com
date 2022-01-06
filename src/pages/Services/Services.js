import React, { Fragment, useContext, useEffect } from "react";
import './Services.css';

import { ApiContext } from "../../context/api/apiContext";

import {Link} from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import Image from "../../components/Image/Image";

export const Services = () => {

    const { isLoading, services, getServices, } = useContext(ApiContext);

    useEffect(() => {
        getServices();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <>
                            <h2 className="page_title">Our Services</h2>
                            <div className="services">
                                {services.map((service, index) => (

                                    <Link
                                        className="service"
                                        key={index}
                                        to={`/services/${service.url}`}
                                        state={{ id: service.id }}
                                    >
                                        <div className="service_inner">
                                            <Image fileId={service.image} fileTitle={service.title} />
                                            <h3>{service.title}</h3>
                                            <p>{service.short}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </article>
            </div>
        </Fragment>
    );

}