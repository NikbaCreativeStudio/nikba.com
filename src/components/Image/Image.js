import React from 'react';
import LazyLoad from "react-lazyload";

import { getFiles } from "../../Api";

export default class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
    }

    componentDidMount() {
        this.loadFile();
    }

    loadFile = () => (
        getFiles(this.props.fileId).then(response => {
            this.setState({
                image: response
            });
        }).catch(error => {
            console.log(error);
        })
    )



    render() {

        return (
            <>
                <LazyLoad height={100} once>
                    <img src={this.state.image} alt={this.props.fileTitle} />
                </LazyLoad>
            </>
        );
    }
}