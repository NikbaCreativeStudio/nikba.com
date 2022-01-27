import React, { Fragment, useState } from "react";
import './Works.css';

import { useStaleSWR } from '../../api'
import { Loading } from "../../components/Loader/Loader";
import { Close } from "../../components/Close/Close";
import { Item } from "./Item/Item";

export const Works = () => {

    const [cnt, setCnt] = useState(6)

    // Load total Works count
    const { data: totalWorks } = useStaleSWR('/items/works?fields=id')
    const last = totalWorks ? Object.keys(totalWorks.data).length : 6
    

    // Load Works from Api
    const { data, error } = useStaleSWR(`/items/works?fields=title,url,cover.data&sort=-id`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />


    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />

                    <h2 className="page_title">Our Best Work</h2>
                    <div className="works">
                        {data.data.slice(0, cnt).map((work, index) => (
                            <Item key={index} work={work} />
                        ))}
                    </div>
                    {cnt < last && (
                        <button className="load_more" onClick={() => setCnt(cnt + 3)}>Load More</button>
                    )}

                </article>
            </div>
        </Fragment>
    );

}