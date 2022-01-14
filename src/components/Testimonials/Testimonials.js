import React from 'react'
import './Testimonials.css'


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useStaleSWR } from '../../api'
import { Loading } from "../../components/Loader/Loader"


export const Testimonials = () => {

    // Load Testimonials from Api
    const { data, error } = useStaleSWR('/items/testimonials?fields=name,text,company,image.data')
    if (!data) return <Loading />
    if (error) return <div className="api_fail">Failed to load</div>

    return (
        <div className="testimonials">
            <h3 className="testimonials_title">Testimonials</h3>
            <Carousel 
                className="testimonials_list"
                
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
                emulateTouch={true}
            >
            {data.data.map((testimonial, index) => (
                <div key={index} className="item">
                
                    <div className="testimonial">
                        <div className="testimonial_image">
                            <img src={testimonial.image.data.full_url} alt={testimonial.name} />
                        </div>
                        <div className="testimonial_text">
                            {testimonial.text}
                        </div>

                        <div className="testimonial_author">
                            <div className="testimonial_author_company">
                                {testimonial.company}
                            </div>
                            <div className="testimonial_author_name">
                            {testimonial.name}
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            ))}
            </Carousel>
        </div>
    )
}