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
            <section id="about" class="p-5">
                <Container>
                    <h2 class="title">ABOUT</h2>
                    <Row>
                        <Col>
                            <h3 class="pb-3">About Me</h3>
                            <Image src={require("../images/clouddoggo.png")} alt="photo of me" roundedCircle width="35%" />
                            <p class="pt-4">
                                Though I mainly work on the backend of the applications below, I have a passion for creating intuitive, dynamic user interfaces and aesthetics.
                            </p>
                        </Col>
                        <Col>
                            <h3>Languages</h3>
                            <div class="p-3">
                                <div>
                                    <span class="language">Java</span>
                                    <ProgressBar now={60} label="60%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">HTML5</span>
                                    <ProgressBar now={45} label="45%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">CSS3</span>
                                    <ProgressBar now={45} label="45%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">Python</span>
                                    <ProgressBar now={30} label="30%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">JavaScript</span>
                                    <ProgressBar now={25} label="25%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">C</span>
                                    <ProgressBar now={17} label="17%" srOnly />
                                </div>
                                <div class="pt-3">
                                    <span class="language">Golang</span>
                                    <ProgressBar now={10} label="10%" srOnly />
                                </div>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section >
        );
    }
}

export default About;