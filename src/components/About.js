import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

// TODO: make bar and image responsive

class About extends Component {
    render() {
        return (
            <section id="about" class="p-lg-4">
                <Container>
                    <h2 class="title">ABOUT</h2>
                    <Row>
                        <Col>
                            <h3 class="pb-lg-4">About Me</h3>
                            <Image src={require("../images/clouddoggo.png")} roundedCircle width="30%" height="45%" alt="photo of me" responsive />
                            <p class="pt-lg-4">
                                I like brainstorming optimisation solutions for a faster and smoother overall user experience.
                                I have a passion for creating intuitive, dynamic user interfaces.
                                I mainly work on the backend of the applications below.
                            </p>
                        </Col>
                        <Col>
                            <h3>Languages</h3>
                            <div class="p-lg-3">
                                <div class="p-lg-3">
                                    <span class="language">Java</span>
                                    <ProgressBar now={60} />
                                </div>
                                <div class="p-lg-3">
                                    <span class="language">HTML</span>
                                    <ProgressBar now={45} />
                                </div>
                                <div class="p-lg-3">
                                    <span class="language">Python</span>
                                    <ProgressBar now={35} />
                                </div>
                                <div class="p-lg-3">
                                    <span class="language">CSS</span>
                                    <ProgressBar now={30} />
                                </div>
                                <div class="p-lg-3">
                                    <span class="language">JavaScript</span>
                                    <ProgressBar now={25} />
                                </div>
                                <div class="p-lg-3">
                                    <span class="language">C</span>
                                    <ProgressBar now={20} />
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        );
    }
}

export default About;