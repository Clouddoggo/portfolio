import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

// TODO: add checks for required fields & check submit button working

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { message: '' };
    }

    changeHandler = (event) => {
        const entered = event.target.value;
        if (entered.trim().length === 0) {
            alert("Field cannot be empty");
            return;
        }
        this.setState({ message: event.target.value });
        console.log("message: " + event.target.value);
    }

    render() {
        return (
            <section id="contact">
                <p>Have an idea you want to bring to life? Contact me!</p>
                <Image src={require("../images/clouddoggo.png")} className="pb-3" alt="photo of me" roundedCircle width="100vw" />
                <div className="pb-5">
                    <a class="fa fa-github" href="https://github.com/Clouddoggo" alt="go to GitHub profile" title="Visit my GitHub"></a>
                    <a class="fa fa-envelope" href="mailto:jel.lim@u.nus.edu" alt="Email me" title="Email me"></a>
                    <a class="fa fa-instagram" href="https://www.instagram.com/jel_x/?hl=en" alt="go to Instagram profile" title="Follow me on Instagram"></a>
                </div>
            </section>
        );
    }
}

export default Contact;