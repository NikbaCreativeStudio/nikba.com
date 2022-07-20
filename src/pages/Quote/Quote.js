import { useState } from 'react';
import './Quote.css';

import { useForm } from 'react-hook-form';

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

    // Api url
    const apiUrl = process.env.REACT_APP_API_URL
    const apiToken = 'Bearer '.concat(process.env.REACT_APP_API_TOKEN);

    // Date
    let date_ob = new Date()
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()
    let cur_date = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    const onSubmit = async (data) => {

        setDisabled(true);

        const body = {
            name: data.name,
            email: data.email,
            message: data.message,
            date: cur_date
        }

        const mail_body = {
            "to": "office@nikba.com",
            "subject": "New Message from Nikba Website",
            "body": "Name: " + data.name + "<br />Email: " + data.email + "<br />Message: " + data.message,
            "type": "html"
        }

        try {
            await fetch(`${apiUrl}/items/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiToken
                },
                body: JSON.stringify(body),
            })

            await fetch(`${apiUrl}/mail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': apiToken
                },
                body: JSON.stringify(mail_body),
            })

            setShow(true);
            reset()
            setDisabled(false)

        }
        catch (err) {
            console.log(err);
        }
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
                            <label htmlFor="form_message">Message *</label>
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