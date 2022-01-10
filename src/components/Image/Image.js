import React, { Fragment } from 'react'
import { useStaleSWR } from '../../api' 
import LazyLoad from "react-lazyload"

export const Image = ({ id, title, height }) => {

    // Image height
    const image_height = height ? height : 'auto'

    // Load Image from Api
    const { data, error } = useStaleSWR(`/files/${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <div style={{height: image_height}}></div>


    return (
        <Fragment>
            <LazyLoad offset={100} height={image_height} once>
                <img src={data.data.data.full_url} alt={title} />
            </LazyLoad>
        </Fragment>
    );
};