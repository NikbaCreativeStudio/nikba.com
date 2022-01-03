import React from "react";
import './Contacts.css';

import {Close} from "../../components/Close/Close";
import { Link } from "react-router-dom";

export const Contact = () => (
    <div className="main">
        <article>
            <h2 className="page_title">Contacts</h2>
            <div className="contacts">			
                <div><i className="icon fa-phone"></i> +373 69 820 825</div>
                <div><i className="icon fa-phone"></i> +373 79 820 825</div>
                <div><i className="icon fa-envelope-o"></i> office@nikba.com</div>
            </div>	
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d679.8160708838104!2d28.81773362201309!3d47.03504464235663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d825e7b16d960a7!2sNikba+Creative+Studio!5e0!3m2!1sen!2s!4v1508239811841" width="100%" height="400" frameBorder="0" border="0" title="map" loading="lazy" allowFullScreen></iframe>

            <div className="contact_footer">
                <div className="social">
                    <div><a href="//fb.com/nikba/" target="_blank" rel="noreferrer" className="icon fa-facebook"><span>Facebook</span></a></div>
                    <div><a href="//instagram.com/nikba_com/" target="_blank" rel="noreferrer" className="icon fa-instagram"><span>Instagram</span></a></div>
                    <div><a href="//linkedin.com/company/nikba-creative-studio" target="_blank" rel="noreferrer" className="icon fa-linkedin"><span>Linkedin</span></a></div>
                    <div><a href="//www.behance.net/nikba" target="_blank" rel="noreferrer" className="icon fa-behance"><span>Google</span></a></div>
                </div>

                <Link to="/quote" className="quote">Get a Quote</Link>
            </div>

            <Close />

        </article>
    </div>
);