import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class About extends Component {
    render() {
        return (
            <div class="media">
                {/* <Image class="d-flex align-self-center mr-3" src={require("../images/mountain.jpg")} roundedCircle alt="A photo of me" fluid /> */}
                <div class="media-body">
                    <h3>About me</h3>
                    <p>I am like reading books</p>
                    <p>test text (still about me)</p>
                </div>
            </div>

        );
    }
}

export default About;