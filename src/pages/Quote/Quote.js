import { useState, useContext } from 'react';
import './Quote.css';

import { useForm } from 'react-hook-form';
import { ApiContext } from '../../context/api/apiContext';


import { Close } from "../../components/Close/Close";


export const Quote = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [disabled, setDisabled] = useState(false);
    
    const [show, setShow] = useState(false);

    const api = useContext(ApiContext);

    const onSubmit = async (data) => {
        
        
            setDisabled(true);

            api.addQuote(data).then(() => {
                setShow(true);
                reset()
                setDisabled(false)
            }).catch(() => {
                setShow(false);
                setDisabled(false)
            });
    }

    return (
        <div className="main">
            <article>
                <Close Path="/contact" />
                <h2 className="page_title">Get a Quote</h2>
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>

                        <div className="form_group">
                            <label htmlFor="form_name">Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your name'
                                    },
                                    maxLength: {
                                        value: 30,
                                        message: 'Please use 30 characters or less'
                                    }
                                })}
                            />
                            {errors.name &&
                                <div className="invalid-feedback">
                                    {errors.name.message}
                                </div>
                            }
                        </div>

                        <div className="form_group">
                            <label htmlFor="form_email">Your Email *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your email'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Please enter a valid email'
                                    }
                                })}
                            />
                            {errors.email &&
                                <div className="invalid-feedback">
                                    {errors.email.message}
                                </div>
                            }
                        </div>

                        <div className="form_group">
                            <label htmlFor="form_subject">Your Phone Number</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                {...register('subject', {
                                    required: {
                                        value: true,
                                        message: 'Please enter a subject'
                                    },
                                    maxLength: {
                                        value: 75,
                                        message: 'Subject cannot exceed 75 characters'
                                    }
                                })}
                            />
                            {errors.subject &&
                                <div className="invalid-feedback">
                                    {errors.subject.message}
                                </div>
                            }
                        </div>

                        <div className="form_group">
                            <label htmlFor="form_message">Your Message *</label>
                            <textarea
                                name="message"
                                placeholder="Message"
                                {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'Please enter a message'
                                    }
                                })}
                            ></textarea>

                            {errors.message &&
                                <div className="invalid-feedback">
                                    {errors.message.message}
                                </div>
                            }
                        </div>

                        <div className="form_group">
                            <button type="submit" disabled={disabled}>Send</button>
                        </div>

                        {show &&
                            <div className="form_group response">
                                <strong>Thanks for being awesome! </strong>
                                <p>We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members. </p>
                            </div>
                        }

                    </form>
                </div>
            </article>
        </div>
    )
}