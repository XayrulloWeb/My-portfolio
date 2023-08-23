import React from 'react';

function Contact(props) {
    return (
        <div className="contact" id="contact">
            <div className="contact_container">
                <div className="contact_start">
                    <div className="contact_text">
                        <h3>Get In Touch</h3>
                    </div>

                    <div className="contact_content">
                        <input className="contact_input" type="text" placeholder="Name"/>
                        <input className="contact_input" type="text" placeholder="Last Name"/>
                        <input className="contact_input" type="email" placeholder="Email"/>
                        <input className="contact_input" type="number" placeholder="Phone number"/>
                    </div>
                    <input className="contact_input-message" placeholder="Message....."/>

                    <div className="contact_btn">
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;