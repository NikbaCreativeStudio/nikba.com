import React, { Fragment } from 'react'
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'

import { Loading } from "../../components/Loader/Loader"

export const Layers = ({ id, title }) => {

    // Load Layers from Api
    const { data, error } = useStaleSWR(`/items/works_files?fields=works_files_id.data&filter[works_id]=${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            {data.data.length > 0 ? (
                data.data.map((gallery, index) => (
                    <LazyLoad offset={100} height={300} once className="work_image" key={index}>
                        <img src={gallery.works_files_id.data.thumbnails[8].url} alt={title} />
                    </LazyLoad>
                ))
            ) : null}
        </Fragment>
    )
}