import React, { Fragment } from 'react'
import { useStaleSWR } from '../../api' 
import LazyLoad from "react-lazyload"
import { Loading } from "../../components/Loader/Loader"

export const GalleryImage = ({ id, title }) => {


    // Load Image from Api
    const { data, error } = useStaleSWR(`/files/${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            <LazyLoad offset={100} height={800}>
                <img src={data.data.data.thumbnails[9].url} alt={title} />
            </LazyLoad>
        </Fragment>
    );
};