import React, { Fragment } from "react";
import './Works.css';

//import { useStaleSWR } from '../../api'
import useSWRInfinite from "swr/infinite";
//import { Loading } from "../../components/Loader/Loader";
import { Close } from "../../components/Close/Close";
import { Item } from "./Item/Item";


// Fetching data from the API
const fetcher = ( url ) => fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error fetching data');
        })
        .then(({ data }) => {
            return data
        })
        .catch((error) => console.log( error ));

// Api Url
const apiUrl = process.env.REACT_APP_API_URL

// Page limit
const pageLimit = 6

export const Works = () => {

    const { data, size, setSize } = useSWRInfinite(
        ( index ) => {
            return `${apiUrl}/items/works?fields=title,url,cover.data&sort=-id&offset=${index * pageLimit}&limit=${pageLimit}`
        },
        fetcher
    );

    const works = data ? [].concat(...data) : [];
    const isEmpty = data?.[0]?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < pageLimit);
        
    return (
        <Fragment>
            <div className="main">
                <article>
                    <Close Path="/" />

                    <h2 className="page_title">Our Best Work</h2>
                    <div className="works">
                        {works && works.map( ( work, index ) => <Item key={index} work={work} /> )}
                    </div>

                    {!isReachingEnd && <button className="load_more" onClick={() => setSize(size + 1)}>Load More</button>}
                </article>
            </div>
        </Fragment>
    );

}