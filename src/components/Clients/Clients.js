import React from 'react'
import './Clients.css'

import { useStaleSWR } from '../../api' 

import { Loading } from "../../components/Loader/Loader"
import { Image } from '../../components/Image/Image'

export const Clients = () => {

    
    // Load Clients from Api
    const { data, error } = useStaleSWR('/items/clients')
    if (error) return <div className="api_fail">Failed to load</div>
    if (!data) return <Loading />

    return (
    <div className="clients">
        <h3 className="clients_title">Our Clients</h3>
        <div className="clients_list">
            {data.data.map((client, index) => (
                <div className="client" key={index}>
                    <Image id={client.image} title={client.title} height={53} />
                </div>
            ))}
        </div>
    </div>
    )
}