import React, { Fragment, useContext, useEffect } from "react";
import './Works.css';

import { ApiContext } from "../../context/api/apiContext";

import {Link} from 'react-router-dom';
import { Close } from "../../components/Close/Close";
import { Loading } from "../../components/Loader/Loader";
import {Image} from "../../components/Image/Image";

export const Works = () => {

    const { isLoading, works, getWorks, } = useContext(ApiContext);
    

    useEffect(() => {
        getWorks();
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
                        <h2 className="page_title">Our Best Work</h2>
                        <div className="works">
                            {works.map((work, index) => (
                                
                                <Link 
                                    className="work"
                                    key={index} 
                                    to={`/works/${work.url}`}
                                    state={{ id: work.id}}
                                >
                                    <div className="work_inner">
                                        <Image fileId={work.cover} fileTitle={work.title} />
                                        <h3>{work.title}</h3>
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