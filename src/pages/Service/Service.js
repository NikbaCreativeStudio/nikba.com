import React from "react";
import {Close} from "../../components/Close/Close";
import {Loading} from "../../components/Loader/Loader";
import {getService} from "../../Api";

export class Service extends React.Component {

    // State
    state = {
        service: null,
        loading: true
    }    

    // Methods
    componentDidMount() {
        let {id} = this.props;
        this.loadService(id);
    }

    // Load Service
    loadService =(item)=>{
        getService(item).then(response => {
            this.setState({
                service: response,
                loading: false
            });
        }).catch(error => {
            console.log(error);
        });
    }


        
    




    render() {
        const {loading} = this.state;
        const {service} = this.state;

        return (
            <div className="main">
                <article>
                    <Close Path="/services" />
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                        <h2 className="page_title">{service.title}</h2>
                        <div dangerouslySetInnerHTML={ {__html: service.text} } className="page_text" />
                        </>
                    )}
                </article>
            </div>
        );
    }
};