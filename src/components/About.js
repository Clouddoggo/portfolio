import React, { Component } from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap';
import Typed from 'typed.js';

class About extends Component {
    componentDidMount() {
        const strings = ['Product Design.', 'UI/UX.', 'Quality Assurance.'];

        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: 2,
        }

        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <section id="about" className="my-4">
                <Container id="about-container">
                    <Row className="justify-content-center">
                        <Col className="col-10 col-sm-6">
                            <h1 className="josefin">Hello, I am Jel.</h1>
                            <p className="lora">
                                I am in my penultimate year at the National University of Singapore (NUS) majoring in Computer Science.
            I have interests in <span
                                    style={{ whiteSpace: 'pre' }}
                                    ref={(el) => { this.el = el; }}
                                />
                            </p>
                            <a className="fa fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Clouddoggo" alt="go to GitHub profile" title="Visit my GitHub"> </a>
                        </Col>
                        <Col className="col-6">
                            <Image src={require("../assets/images/card.png")} alt="photo of me" rounded width="200vw" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <h3>Technical Skills</h3>
                            <Row>
                                <Col>
                                    <h4 className="sub-title">Programming</h4>
                                    <ul className="ul-no-style">
                                        <li>Java</li>
                                        <li>JavaScript</li>
                                        <li>HTML/CSS</li>
                                        <li>Python</li>
                                        <li>Dart</li>
                                        <li>C</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h4 className="sub-title">Frameworks</h4>
                                    <ul className="ul-no-style">
                                        <li>VueJS</li>
                                        <li>Vuetify</li>
                                        <li>ReactJS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>
                                </Col>
                            </Row>

                        </Col>
                        <Col>
                            <h3>Non-Technical Skills</h3>
                            <Row>
                                <Col>
                                    <h4 className="sub-title">Fluent</h4>
                                    <ul className="ul-no-style">
                                        <li>English</li>
                                        <li>Mandarin Chinese</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h4 className="sub-title">Learning</h4>
                                    <ul className="ul-no-style">
                                        <li>Japanese</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;