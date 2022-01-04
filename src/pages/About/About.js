import React from "react"; 
import './About.css';

import {Close} from "../../components/Close/Close";
import {Loading} from "../../components/Loader/Loader";

import {getPage, getClients} from "../../Api";

import Image from "../../components/Image/Image";

export class About extends React.Component {

    // State
    state = {
        page: [],
        clients: [],
        loading: true
    }    

    // Methods
    componentDidMount() {
        this.loadPage();
        this.loadClients();
    }

    // Load Page
    loadPage =()=>(
        getPage('1').then(response => {
            this.setState({
                page: response,
                loading: false
            });
        }).catch(error => {
            console.log(error);
            this.setState({ loading: false });
        })
    )

    // Load Clients
    loadClients =()=>(
        getClients().then(response => {
            this.setState({
                clients: response,
                loading: false
            });
        }).catch(error => {
            console.log(error);
            this.setState({ loading: false });
        })
    )

    render() {

        const {page} = this.state;
        const {clients} = this.state;
        const {loading} = this.state;
        

        return (
            <div className="main">
                <article>
                    <Close />
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                        <h2 className="page_title">{ page.title }</h2>
                        <div dangerouslySetInnerHTML={ {__html: page.text} } className="page_text" />

                        <div className="clients">
                            <h3 className="clients_title">Our Clients</h3>
                            <div className="clients_list">
                                {clients.map((client, index) => (
                                    <div className="client" key={index}>
                                        <Image fileId={client.image} fileTitle={client.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        </>
                    )}
                </article>
            </div>
        );
    }
};