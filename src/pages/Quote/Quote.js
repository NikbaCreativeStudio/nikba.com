import React, {useState, useContext} from "react";
import './Quote.css';

import {Close} from "../../components/Close/Close";


export const Quote = () => {

    //const [value, setValue] = useState('');


    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Form Submited')

    };

    return (
    <div className="main">
        <article>
            <Close Path="/contact" />
            <h2 className="page_title">Get a Quote</h2>
            <div className="form">
                <form onSubmit={submitHandler}>
                    
                    <div className="form_group">
                        <label htmlFor="form_name">Your Name *</label>
                        <input type="text" name="name" placeholder="Name" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your first name.
                        </div>
                    </div>

                    <div className="form_group">
                        <label htmlFor="form_email">Your Email *</label>
                        <input type="email" name="email" placeholder="Email" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your email.
                        </div>
                    </div>

                    <div className="form_group">
                        <label htmlFor="form_phone">Your Phone Number</label>
                        <input type="tel" name="phone" placeholder="Phone" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your phone number.
                        </div>
                    </div>

                    <div className="form_group">
                        <label htmlFor="form_message">Your Message *</label>
                        <textarea name="message" placeholder="Message" required ></textarea>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <div className="invalid-feedback">
                            Please enter your message.
                        </div>
                    </div>

                    <div className="form_group">
                        <button type="submit">Send</button>
                    </div>

    
                </form>
            </div>
        </article>
    </div>
    )
}