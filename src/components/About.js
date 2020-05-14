import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

class About extends Component {
    render() {
        return (
            <section id="about">
                <Container>
                    <Image src={require("../images/JelphaBot.png")} roundedCircle width="20%" height="15%"></Image>
                </Container>
            </section>
        );
    }
}

export default About;