import React, { Fragment } from "react";

import { useStaleSWR } from '../../api'

import { useParams } from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";

export const Service = () => {


    const { url } = useParams()

    // Load Service from Api
    const { data, error } = useStaleSWR(`/items/services?filter[url]=${url}&single=true`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/services" />

                    <h2 className="page_title">{data.data.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: data.data.text }} className="page_text" />
                </article>
            </div>
        </Fragment>
    );

}