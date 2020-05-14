import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

class Projects extends Component {

    render() {
        // To switch to data file
        // let data = this.props.data;

        return (
            <section id="projects">
                <Container class="d-flex justify-content-center" fluid>
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/Todo-App.png")} width="70%" />
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#todoModal">
                                        Learn more
                                    </Button>
                                    <div class="modal" id="todoModal" tabindex="-1" role="dialog" aria-labelledby="todoModal" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <Modal.Header>
                                                    <h5 class="modal-title" id="todoModal">Todo App</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    Heroku deployment in progress
      </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </Modal.Footer>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://github.com/Clouddoggo/todo-app" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/Duke.png")} width="30%" />
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#dukeModal">
                                        Learn more
                                    </Button>
                                    <div class="modal" id="dukeModal" tabindex="-1" role="dialog" aria-labelledby="dukeModal" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <Modal.Header>
                                                    <h5 class="modal-title" id="dukeModal">Duke</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <ul>
                                                        <li>Worked on basic commands such as add, delete, find and list tasks</li>
                                                        <li>Added help command for users to view list of commands available</li>
                                                        <li>Wrote a comprehensive User Guide for new and existing users</li>
                                                    </ul>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </Modal.Footer>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://github.com/Clouddoggo/duke" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/JelphaBot.png")} width="70%" />
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#jelphabotModal">
                                        Learn more
                                    </Button>
                                    <div class="modal" id="jelphabotModal" tabindex="-1" role="dialog" aria-labelledby="jelphabotModal" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <Modal.Header>
                                                    <h5 class="modal-title" id="jelphabotModal">JelphaBot</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <ul>
                                                        <li>In charge of the productivity aspect of app</li>
                                                        <li><code>start</code> and <code>stop</code> timer commands</li>
                                                        <li>Switch tab command: productivity, :p and :P</li>
                                                        <li>Rendering of productivity panel</li>
                                                    </ul>
                                        Also worked on morphing the existing address book into a task manager by adding the DateTime class and test cases
      </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </Modal.Footer>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="https://github.com/Clouddoggo/main" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/Duke.png")} width="30%" />
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#websiteModal">
                                        Learn more
                                    </Button>
                                    <div class="modal" id="websiteModal" tabindex="-1" role="dialog" aria-labelledby="websiteModal" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <Modal.Header>
                                                    <h5 class="modal-title" id="websiteModal">This porfolio</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    Some quick example text to build on the card title
                                                    and make up the bulk of the card's content.
      </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                </Modal.Footer>
                                            </div>
                                        </div>
                                    </div>
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