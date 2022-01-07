import React from "react";
import './Contacts.css';

import { ReactComponent as PhoneIcon } from './phone.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as BehanceIcon } from './behance.svg';

import { Close } from "../../components/Close/Close";
import { Link } from "react-router-dom";

export const Contact = () => (
    <div className="main">
        <article>
            <Close Path="/" />
            <h2 className="page_title">Contacts</h2>
            <div className="contacts">
                <div><PhoneIcon /> +373 69 820 825</div>
                <div><PhoneIcon /> +373 79 820 825</div>
                <div><MailIcon /> office@nikba.com</div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d679.8160708838104!2d28.81773362201309!3d47.03504464235663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d825e7b16d960a7!2sNikba+Creative+Studio!5e0!3m2!1sen!2s!4v1508239811841" width="100%" height="400" frameBorder="0" border="0" title="map" loading="lazy" allowFullScreen></iframe>

            <div className="contact_footer">
                <div className="social">
                    <div>
                        <a href="//fb.com/nikba/" target="_blank" rel="noreferrer">
                            <FacebookIcon />
                            <span>Facebook</span>
                        </a>
                    </div>
                    <div>
                        <a href="//instagram.com/nikba_com/" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div>
                        <a href="//linkedin.com/company/nikba-creative-studio" target="_blank" rel="noreferrer">
                            <LinkedinIcon />
                            <span>Linkedin</span>
                        </a>
                    </div>
                    <div>
                        <a href="//www.behance.net/nikba" target="_blank" rel="noreferrer">
                            <BehanceIcon />
                            <span>Google</span>
                        </a>
                    </div>
                </div>
                <Link to="/contact/quote" className="quote">Get a Quote</Link>
            </div>
        </article>
    </div>
);