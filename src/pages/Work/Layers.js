import React, { Fragment } from 'react'

import { useStaleSWR } from '../../api'

import { Loading } from "../../components/Loader/Loader"
import { Image } from '../../components/Image/Image'

export const Layers = ({ id, title }) => {

    // Load Layers from Api
    const { data, error } = useStaleSWR(`/items/works_files?filter[works_id]=${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
        {data.data.length > 0 ? (
            data.data.map((gallery, index) => (
                <div className="work_image" key={index} >
                    <Image id={gallery.works_files_id} title={title} height={1400} />
                </div>
            ))
        ) : null}
        </Fragment>
    )
}