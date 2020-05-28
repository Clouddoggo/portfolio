import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';

class Projects extends Component {

    render() {
        // To switch to data file
        // let data = this.props.data;

        return (
            <section id="projects" class="p-lg-5">
                <Container class="d-flex justify-content-center">
                    <h2 class="title">PROJECTS</h2>
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <div id="todoCarousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#todoCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#todoCarousel" data-slide-to="1"></li>
                                        </ol>
                                        <div class="carousel-inner" role="listbox">
                                            <div class="carousel-item active">
                                                <Image class="d-block w-100" src={require("../images/Todo-Front.png")} alt="First Todo App slide" width="105%" />
                                            </div>
                                            <div class="carousel-item">
                                                <Image class="d-block w-100" src={require("../images/Todo-Back.png")} alt="Second Todo App slide" width="105%" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#todoCarousel" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#todoCarousel" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <Card.Text>
                                        Heroku deploment in progress.
                                    </Card.Text>
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#todoModal">
                                        Learn more
                                    </Button>
                                    <a href="https://github.com/Clouddoggo/todo-app" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/Duke.png")} width="30%" />
                                    <Card.Text>
                                        <ul>
                                            <li>Worked on basic commands such as add, delete, find and list tasks</li>
                                            <li>Added help command for users to view list of commands available</li>
                                            <li>Wrote a comprehensive User Guide for new and existing users</li>
                                        </ul>
                                    </Card.Text>
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#dukeModal">
                                        Learn more
                                    </Button>
                                    <a href="https://github.com/Clouddoggo/duke" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                    <Row>
                        <div class="card-group align-items-stretch col-lg-12">
                            <Card>
                                <div class="card-body">
                                    <div id="jelphaBotCarousel" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#jelphaBotCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#jelphaBotCarousel" data-slide-to="1"></li>
                                            <li data-target="#jelphaBotCarousel" data-slide-to="2"></li>
                                            <li data-target="#jelphaBotCarousel" data-slide-to="3"></li>
                                            <li data-target="#jelphaBotCarousel" data-slide-to="4"></li>
                                        </ol>
                                        <div class="carousel-inner" role="listbox">
                                            <div class="carousel-item active">
                                                <Image class="d-block w-100" src={require("../images/JelphaBot.png")} alt="First JelphaBot slide" width="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <Image class="d-block w-100" src={require("../images/TaskListTab.png")} alt="Second JelphaBot slide" width="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <Image class="d-block w-100" src={require("../images/CalendarTab.png")} alt="Third JelphaBot slide" width="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <Image class="d-block w-100" src={require("../images/ProductivityTab.png")} alt="Fourth JelphaBot slide" width="100%" />
                                            </div>
                                            <div class="carousel-item">
                                                <Image class="d-block w-100" src={require("../images/reminderpopup.png")} alt="Fifth JelphaBot slide" width="85%" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#jelphaBotCarousel" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#jelphaBotCarousel" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <Card.Text>
                                        <ul>
                                            <li>Morphed the given address book into a task manager by adding the DateTime class and test cases</li>
                                            <li>In charge of the productivity aspect of app</li>
                                            <li><code>start</code> and <code>stop</code> timer commands</li>
                                            <li>Switch tab command: <code>productivity</code>, <code>:p</code> and <code>:P</code></li>
                                            <li>Rendering of productivity panel</li>
                                        </ul>
                                    </Card.Text>
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#jelphabotModal">
                                        Learn more
                                    </Button>
                                    <a href="https://github.com/Clouddoggo/main" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                            <Card>
                                <div class="card-body">
                                    <Image src={require("../images/Duke.png")} width="30%" />
                                    <Card.Text>
                                        Some quick example text to build on the card title
                                        and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button class="btn btn-primary" data-toggle="modal" data-target="#websiteModal">
                                        Learn more
                                    </Button>
                                    <a href="https://github.com/Clouddoggo/portfolio" target="_blank" class="btn btn-primary">Source code</a>
                                </div>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </section >
        );
    }
}

export default Projects;