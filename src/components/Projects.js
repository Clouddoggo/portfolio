import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";
import { Row, Container, Col } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="pt-5">
                <h2 className="title">PROJECTS</h2>
                <Container>
                    <Row>
                        <Col>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/AnnoyingAlarm"
                                image="alarm.svg"
                                title="Annoying Alarm"
                                type="Individual project"
                                width="200"
                                details="AnnoyingAlarm is an alarm sharing mobile application. Users have to first authenticate themselves with their mobile numbers. Next, they can sync their contacts and create alarms for themselves or their contacts by sending a created alarm via Wi-Fi. Alarms are all locked with a password so that dismissing or snoozing can only be done if the password entered is correct. Passwords cannot be copied from the screen and pasted into the entry field. This project was built with Flutter and Firebase."
                            />
                        </Col>
                        <Col>
                            <Thumbnail
                                src="https://github.com/AY1920S2-CS2103T-F09-2/main"
                                image="jelphabot.png"
                                title="JelphaBot"
                                type="Group project"
                                width="540"
                                details="JelphaBot is a desktop personal task manager built from code written for an address book. It supports CRUD of tasks and events for NUS modules. Additional features include a calendar, a daily overview, reminders and a productivity view. I took charge of the productivity feature. This project was built with JavaFX and Java 11."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/duke"
                                image="duke.png"
                                title="Duke"
                                type="Individual project"
                                width="540"
                                details="Duke is a desktop personal task manager. It supports CRUD of tasks and events. It also has functions to mark a task as done. In the event of mistake, users can unmark a done task. This project was built with JavaFX and Java 11."
                            />
                        </Col>
                        <Col>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/"
                                image="chairvise.png"
                                title="ChairVisE 4.0"
                                type="Group project"
                                width="540"
                                details="ChairVisE4.0 is a conference data visualisation management system web application. It is built upon ChairVisE3.0 that supports the importing of conference data, chart visualisation and a calendar view. Changes made include a UI redesign, integration of a responsive web design framework, and a conference data sharing channel - ChairHub. This project was built with Java 8, ChartJS, VueJS and Vuetify. Please note that the source code for this project is not available for public viewing. For more information, please contact me."
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Projects;