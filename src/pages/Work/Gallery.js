import React, { Fragment } from 'react'
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'

import { Loading } from "../../components/Loader/Loader"

export const Gallery = ({ id, title }) => {

    // Load Layers from Api
    const { data, error } = useStaleSWR(`/items/works_gallery?fields=gallery_id.data&filter[works_id]=${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            {data.data.length > 0 ? (
                <div className="work_gallery">
                    {
                        data.data.map((gallery, index) => (
                            <LazyLoad offset={100} height={300} once className="gallery_image" key={index}>
                                <img src={gallery.gallery_id.data.thumbnails[9].url} alt={title} />
                            </LazyLoad>
                        ))
                    }
                </div>
            ) : null}
        </Fragment>
    )
}