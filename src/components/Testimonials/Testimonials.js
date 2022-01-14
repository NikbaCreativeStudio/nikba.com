import React from 'react'
import './Testimonials.css'
import LazyLoad from "react-lazyload"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useStaleSWR } from '../../api'
import { Loading } from "../../components/Loader/Loader"


export const Testimonials = () => {

    // Load Testimonials from Api
    const { data, error } = useStaleSWR('/items/testimonials?fields=name,text,image.data')
    if (!data) return <Loading />
    if (error) return <div className="api_fail">Failed to load</div>

    return (
        <div className="testimonials">
            <h3 className="testimonials_title">Testimonials</h3>
            <Carousel className="testimonials_list">
            {data.data.map((testimonial, index) => (
                <div>
                <LazyLoad offset={100} height={320} once key={index} className="testimonial">
                    <div className="testimonial_text">
                        {testimonial.text}
                    </div>
                    
                    <img src={testimonial.image.data.full_url} alt={testimonial.name} />
                </LazyLoad>
                </div>
            ))}
            </Carousel>
        </div>
    )
}