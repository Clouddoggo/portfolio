import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

class About extends Component {
    render() {
        return (
            <Container>
                <h3 class="mt-lg-4 mb-lg-3">About Me</h3>
                <section id="about" class="media">
                    <img class="d-flex align-self-center mr-lg-4 rounded-circle" width="25%" height="15%" src={require("../images/no-copyright.jpg")} alt="A photo of me" />
                    <div class="media-body">
                        <p class="shadow p-1 ml-lg-3 rounded">I like reading books
                </p>
                    </div>
                </section>
            </Container>
        );
    }
}

export default About;