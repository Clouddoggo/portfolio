import React, { Component } from 'react';
import Thumbnail from "./Thumbnail";
import { Row } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <section id="projects" class="text-center">
                <div className="p-5">
                    <h2 class="title">PROJECTS</h2>
                    <Row>
                        <Thumbnail
                            src="https://github.com/Clouddoggo/AnnoyingAlarm"
                            image="CalendarTab.png"
                            title="Annoying Alarm"
                            category="Mobile"
                        />
                        <Thumbnail
                            src="https://github.com/AY1920S2-CS2103T-F09-2/main"
                            image="JelphaBot.png"
                            title="JelphaBot"
                            category="Desktop"
                        />
                        <Thumbnail
                            src="https://github.com/Clouddoggo/duke"
                            image="Duke.png"
                            title="Duke"
                            category="Desktop"
                        />
                        <Thumbnail
                            src="https://github.com/Clouddoggo/portfolio"
                            image="Todo-Front.png"
                            title="Portfolio"
                            category="Website"
                        />
                        <Thumbnail
                            src="https://github.com/Clouddoggo"
                            image="Todo-Front.png"
                            title="ChairVisE"
                            category="Web"
                        />
                    </Row>
                </div>
            </section>
        );
    }
}

export default Projects;