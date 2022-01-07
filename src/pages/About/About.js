import React, { Fragment, useContext, useEffect } from "react";
import './About.css';

import { ApiContext } from "../../context/api/apiContext";

import {Close} from "../../components/Close/Close";
import {Loading} from "../../components/Loader/Loader";
import { Clients } from "../../components/Clients/Clients";

export const About = () => {

    const {isLoading, clients, getClients, page, getPage} = useContext(ApiContext);

    useEffect(() => {
        getClients();
        getPage(1);
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
                    <h2 className="page_title">{page.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: page.text}} className="page_text" />
                    

                    <Clients clients={clients} />
                    </>
                )}
            </article>
        </div>
        </Fragment>
    );

}