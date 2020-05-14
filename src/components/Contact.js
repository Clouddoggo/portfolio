import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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
                <h3 class="mt-lg-4 mb-lg-3 align">Tell me something!</h3>
                <Container>
                    <div>
                        <Form action="mailto:jel.lim@u.nus.edu" method="post" enctype="text/plain">
                            <Form.Group controlId="formGroupName">
                                <Form.Row>
                                    <Col>
                                        <Form.Label class="float-left">First name (required)</Form.Label>
                                        <Form.Control required placeholder="First name" onChange={this.changeHandler} />
                                    </Col>
                                    <Col>
                                        <Form.Label class="float-left">Last name (required)</Form.Label>
                                        <Form.Control required placeholder="Last name" onChange={this.changeHandler} />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label class="float-left">Email address (required)</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email" onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formSubject">
                                <Form.Label class="float-left">Your subject</Form.Label>
                                <Form.Control onChange={this.changeHandler} />
                            </Form.Group>
                            <Form.Group controlId="form.ControlTextarea">
                                <Form.Label class="float-left">Your message (required)</Form.Label>
                                <Form.Control required as="textarea" rows="4" onChange={this.changeHandler} />
                            </Form.Group>
                            <Button class="btn-primary" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Contact;