import React from "react";
import { Link } from "react-router-dom";
import './Services.css';

import {Close} from "../../components/Close/Close";
import {Loading} from "../../components/Loader/Loader";


import {getServices} from "../../Api";

import Image from "../../components/Image/Image";

export class Services extends React.Component {

    // State
    state = {
        services: [],
        loading: true
    }    

    // Methods
    componentDidMount() {
        this.loadServices();
    }

    // Load Services
    loadServices =()=>(
        getServices().then(response => {
            this.setState({
                services: response,
                loading: false
            });
        }).catch(error => {
            console.log(error);
            this.setState({ loading: false });
        })
    )

   

    render() {

        
        const {services} = this.state;
        const {loading} = this.state;
        

        return (
            <div className="main">
                <article>
                    <Close Path="/" />
                    {loading ? (
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
                                    state={{ id: service.id}}
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
        );
    }
};