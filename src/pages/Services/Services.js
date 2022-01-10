import React, { Fragment } from "react";
import './Services.css';

import { useStaleSWR } from '../../api' 

import { Link } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import { Svg } from "../../components/Svg/Svg";

export const Services = () => {

    // Load Services from Api
    const { data, error } = useStaleSWR('/items/services')
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
                            <Link
                                className="service"
                                key={index}
                                to={`/services/${service.url}`}
                            >
                                <div className="service_inner">
                                    <Svg id={service.image} title={service.title} height={80} />
                                    <h3>{service.title}</h3>
                                    <p>{service.short}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </article>
            </div>
        </Fragment>
    );

}