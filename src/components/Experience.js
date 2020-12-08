import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class Experience extends Component {
    render() {
        return (
            <section id="experience" className="my-3 pt-5">
                <Container fluid className="d-flex flex-column">
                    <h2 className="title">EXPERIENCE</h2>
                    <h3 className="sub-title">Work</h3>
                    <Row>
                        <Col>
                            <h4>May - August 2020</h4>
                        </Col>
                        <Col className="text-left">
                            <h5>Product Intern, GBCI Ventures Pte. Ltd.</h5>
                            <ul>
                                <li>Redesigned onboarding flow for Fincy, an e-wallet with the ability to exchange and transfer fiat and cryptocurrency.</li>
                                <li>Conducted detailed research to better Fincy's interfaces and presented the solutions to superiors.</li>
                                <li>Designed a web application for Fincy's business users to verify their corporation.</li>
                                <li>Took charge of product design for the new marketplace feature to be intergrated into Fincy.</li>
                                <li>Performed acceptance and exploratory testing for Fincy and BCB Blockchain (Solidity version).</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>August - November 2019 & 2020</h4>
                        </Col>
                        <Col className="text-left">
                            <h5>Teaching Assistant, CS1101S Progamming Methodology</h5>
                            <ul>
                                <li>Conducted weekly discussion sessions with students.</li>
                                <li>Graded online assignments and gave detailed feedback for improvement.</li>
                            </ul>
                        </Col>
                    </Row>
                    <h3 className="sub-title mt-5">Activities</h3>
                    <Row>
                        <Col>
                            <h4>October 2020</h4>
                        </Col>
                        <Col className="text-left">
                            <h5>Facebook Singapore Virtual Hack, Facebook</h5>
                            <ul>
                                <li>Competed in the coding challenge as a team of 5 and came in third.</li>
                                <li>Participated in the product design challenge and presented a solution to encourage exercising.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>May 2019</h4>
                        </Col>
                        <Col className="text-left">
                            <h5>CyberDefenders Discovery Camp, Defence Science Technology Agency</h5>
                            <ul>
                                <li>Picked up digital forensics skills such as analysing packets using Wireshark and pinging ports.</li>
                                <li>Learned to use security analysis tools in both Linux and Windows environments.</li>
                                <li>Competed in the online qualifiers and got through to the on site competition.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Experience;