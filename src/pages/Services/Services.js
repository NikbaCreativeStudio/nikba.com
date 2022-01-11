import React, { Fragment } from "react";
import './Services.css';
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'

import { Link } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";


export const Services = () => {

    // Load Services from Api
    const { data, error } = useStaleSWR('/items/services?fields=title,short,url,image.data')
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />
                    <h2 className="page_title">Our Services</h2>
                    <div className="services">
                        {data.data.map((service, index) => (
                            <LazyLoad offset={100} height={320} once key={index} className="service">
                                <Link to={`/services/${service.url}`}>
                                    <div className="service_inner">
                                        <img src={service.image.data.full_url} alt={service.title} />
                                        <h3>{service.title}</h3>
                                        <p>{service.short}</p>
                                    </div>
                                </Link>
                            </LazyLoad>
                        ))}
                    </div>
                </article>
            </div>
        </Fragment>
    );

}