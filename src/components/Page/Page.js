import React, { Fragment } from 'react'
import './Page.css'
import { Loading } from "../../components/Loader/Loader"
import { useStaleSWR } from '../../api'

export const Page = ({ id }) => {

    // Load Page from Api
    const { data, error } = useStaleSWR(`/items/pages/${id}?fields=title,text`)
    if (!data) return <Loading />
    if (error) return <div className="api_fail">Failed to load</div>

    return (
        <Fragment>
            <h2 className="page_title">{data.data.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: data.data.text }} />
        </Fragment>
    )
}
