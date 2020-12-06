import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";
import { Row } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="p-5">
                    <h2 class="title">PROJECTS</h2>
                    <Row>
                        <Thumbnail
                            src="https://github.com/Clouddoggo/AnnoyingAlarm"
                            image="ChairVise.png"
                            title="Annoying Alarm"
                            type="Individual project"
                            details="AnnoyingAlarm is an alarm sharing mobile application. Users can sync their contacts and create alarms for themselves or their contacts by sending a created alarm via Wi-Fi. Additional features include dark theme, a password encoded alarm so users can only dismiss it if the password entered is correct. This project was built with Flutter and Firebase."
                        />
                        <Thumbnail
                            src="https://github.com/AY1920S2-CS2103T-F09-2/main"
                            image="JelphaBot.png"
                            title="JelphaBot"
                            type="Group project"
                            details="JelphaBot is a personal task manager built from code written for an address book. It supports CRUD of tasks and events for NUS modules. Additional features include a calendar, a daily overview, reminders and a productivity view. I took charge of the productivity feature. This project was built with JavaFX and Java 11."
                        />
                        <Thumbnail
                            src="https://github.com/Clouddoggo/duke"
                            image="Duke.png"
                            title="Duke"
                            type="Individual project"
                            details="Duke is a personal task manager. It supports CRUD of tasks and events. It also has functions to mark a task as done. In the event of mistake, users can unmark a done task. This project was built with JavaFX and Java 11."
                        />
                        <Thumbnail
                            src="https://github.com/Clouddoggo/"
                            image="ChairVise.png"
                            title="ChairVisE4.0"
                            type="Group project"
                            details="ChairVisE4.0 is a conference data visualisation management system. It is built upon ChairVisE3.0 that supports the importing of conference data, chart visualisation and a calendar view. Changes made include a UI redesign, integration of a responsive web design framework, and a conference data sharing channel - ChairHub. This project was built with Java 8, ChartJS, VueJS and Vuetify."
                        />
                    </Row>
                </div>
            </section>
        );
    }
}

export default Projects;