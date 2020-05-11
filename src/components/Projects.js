import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

class Projects extends Component {
    render() {
        // To switch to data file
        // let data = this.props.data;

        return (
            <section id="projects">
                <Container id="projects-container d-flex justify-content-center">
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <h4 class="card-title">Todo App</h4>
                                    <p class="card-text">
                                        Heroku deployment in progress
                                    </p>
                                    <a href="#!" class="btn btn-primary">Learn more</a>
                                    <a href="https://github.com/Clouddoggo/todo-app" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <h4 class="card-title">Duke</h4>
                                    <p class="card-text">
                                        Individual project for CS2103T Software Engineering
                                    <ul>
                                            <li>Worked on basic commands such as add, delete, find and list tasks</li>
                                            <li>Added help command for users to view list of commands available</li>
                                            <li>Wrote a comprehensive User Guide for new and existing users</li>
                                        </ul>
                                    </p>
                                    <a href="#!" class="btn btn-primary">Learn more</a>
                                    <a href="https://github.com/Clouddoggo/duke" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <h4 class="card-title">JelphaBot</h4>
                                    <p class="card-text">
                                        Team project for CS2103T Software Engineering.
                                        Worked on the productivity aspect for users
                                        <ul>
                                            <li><code>start</code> and <code>stop</code> timer commands</li>
                                            <li>Switch tab command: productivity, :p and :P</li>
                                            <li>Rendering of productivity panel</li>
                                        </ul>
                                        Also worked on morphing the existing address book into a task manager by adding the DateTime class and test cases
    </p>
                                    <a href="#!" class="btn btn-primary">Learn more</a>
                                    <a href="https://github.com/Clouddoggo/main" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <h4 class="card-title">This Website</h4>
                                    <p class="card-text">
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
    </p>
                                    <a href="#!" class="btn btn-primary">Learn more</a>
                                    <a href="https://github.com/Clouddoggo/portfolio" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;