import React, { Component } from 'react';
import { Link } from "react-scroll";

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul id="nav-bar" class="nav fixed-top pl-4 py-3">
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link text-white" to="about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link text-white" to="experience">Experience</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link text-white" to="projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link text-white" to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;