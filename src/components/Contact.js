import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <p>Have an idea you want to bring to life? Contact me!</p>
                <Image src={require("../assets/images/clouddoggo.png")} className="pb-3" alt="photo of me" roundedCircle width="100vw" />
                <div className="pb-5">
                    <a className="fa fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Clouddoggo" alt="go to Github profile" title="Visit my Github"> </a>
                    <a className="fa fa-envelope" href="mailto:jel.lim@u.nus.edu" alt="Email me" title="Email me"> </a>
                    <a className="fa fa-instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jel_x/?hl=en" alt="go to Instagram profile" title="Follow me on Instagram"> </a>
                </div>
            </section>
        );
    }
}

export default Contact;