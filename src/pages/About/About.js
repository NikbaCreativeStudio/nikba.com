import React, { Fragment } from "react";

import { Close } from "../../components/Close/Close";
import { Clients } from "../../components/Clients/Clients";
import { Page } from "../../components/Page/Page";

export const About = () => {
    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />
                    <Page id="1" />
                    <Clients />
                </article>
            </div>
        </Fragment>
    );
}