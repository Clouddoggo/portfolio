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
        this.setState({ message: event.target.value });
        console.log("message: " + event.target.value);
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.message);
    }

    render() {
        return (
            <section id="contact">
                <Container>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label class="float-left">Email address (required)</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupName">
                            <Form.Row>
                                <Col>
                                    <Form.Label class="float-left">First name (required)</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label class="float-left">Last name (required)</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label class="float-left">Your message (required)</Form.Label>
                            <Form.Control as="textarea" rows="4" onChange={this.changeHandler} />
                        </Form.Group>
                        <Button class="btn-primary" type="submit" onSubmit={this.submitHandler}>Submit</Button>
                    </Form>
                </Container>
            </section>
        );
    }
}

export default Contact;