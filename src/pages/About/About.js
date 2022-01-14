import React, { Fragment } from "react";

import { Close } from "../../components/Close/Close";
import { Clients } from "../../components/Clients/Clients";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Page } from "../../components/Page/Page";

export const About = () => {
    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />
                    <Page id="1" />
                    
                    <Clients />

                    <Testimonials />
                </article>
            </div>
        </Fragment>
    );
}