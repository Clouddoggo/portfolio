import React, { Component } from 'react';
import { Link } from "react-scroll";

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul id="nav-bar" class="nav justify-content-center fixed-top">
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="about">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="projects">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navigation;