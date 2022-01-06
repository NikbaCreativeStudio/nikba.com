import React from 'react';
import Image from "../../components/Image/Image";

export const Clients = ({ clients }) => (
    <div className="clients">
        <h3 className="clients_title">Our Clients</h3>
        <div className="clients_list">
            {clients.map((client) => (
                <div className="client" key={client.id}>
                    <Image fileId={client.image} fileTitle={client.title} />
                </div>
            ))}
        </div>
    </div>
);