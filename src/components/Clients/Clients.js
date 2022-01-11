import React from 'react'
import './Clients.css'
import LazyLoad from "react-lazyload"

import { useStaleSWR } from '../../api'
import { Loading } from "../../components/Loader/Loader"


export const Clients = () => {

    // Load Clients from Api
    const { data, error } = useStaleSWR('/items/clients?fields=title,image.data')
    if (!data) return <Loading />
    if (error) return <div className="api_fail">Failed to load</div>

    return (
        <div className="clients">
            <h3 className="clients_title">Our Clients</h3>
            <div className="clients_list">
                {data.data.map((client, index) => (
                    <LazyLoad offset={100} height={320} once key={index} className="client">
                        <img src={client.image.data.full_url} alt={client.title} />
                    </LazyLoad>
                ))}
            </div>
        </div>
    )
}