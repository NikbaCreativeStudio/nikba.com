import React, {Fragment} from 'react'

import { useStaleSWR } from '../../api' 

import { Loading } from "../../components/Loader/Loader"
import { GalleryImage } from './GalleryImage'

export const Gallery = ({id, title}) => {

    // Load Gallery from Api
    const { data, error } = useStaleSWR(`/items/works_gallery?filter[works_id]=${id}`)
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
        <Fragment>
            {data.data.length > 0 ? (
            <div className="work_gallery"> 
                {data.data.map((gallery, index) => (
                    <div className="gallery_image" key={index} >
                        <GalleryImage id={gallery.gallery_id} title={title} />
                    </div>
                ))}
            </div>
            ) : null}
        </Fragment>
    )
}