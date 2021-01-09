import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";
import { Button, Row, Container, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Projects extends Component {

    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Scroll or pinch the images to zoom in/out of them!
            </Tooltip>
        )

        return (
            <section id="projects" className="pt-5">
                <h2 className="title">
                    <OverlayTrigger placement="bottom" delay={{ show: 200, hide: 330 }}
                        overlay={renderTooltip}>
                        <Button variant="link" className="fa fa-lightbulb-o mr-4"></Button>
                    </OverlayTrigger>
                    PROJECTS
                </h2>

                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/flutter-alarm"
                                image="alarm.svg"
                                title="Flutter Alarm"
                                type="Individual project"
                                details="Flutter Alarm is a mobile alarm application. Users may create alarms that are locked with passwords. The back, home and lock buttons are locked when the user lands on the page to enter the alarm's password. Snoozing, copying and pasting are also prohibited on that page. For a detailed list of features, please refer to the README on GitHub. This project was built with Flutter and Firebase."
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Thumbnail
                                src="https://github.com/AY1920S2-CS2103T-F09-2/main"
                                image="jelphabot.png"
                                title="JelphaBot"
                                type="Group project"
                                details="JelphaBot is a desktop personal task manager built from an address book. It supports CRUD of tasks and events for NUS modules. Additional features include a calendar, a daily overview, reminders and a productivity view. I delivered the productivity feature. For a detailed list of features and use cases, please refer to the User Guide and Developer Guide on GitHub. This project was built with JavaFX and Java 11."
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/duke"
                                image="duke.png"
                                title="Duke"
                                type="Individual project"
                                details="Duke is a desktop personal task manager. It supports CRUD of tasks and events. It also has functions to mark a task and unmark a task as done. For a detailed list of features, please refer to the GitHub pages link on GitHub. This project was built with JavaFX and Java 11."
                            />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Thumbnail
                                src="https://github.com/Clouddoggo/"
                                image="chairvise.png"
                                title="ChairVisE 4.0"
                                type="Group project"
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