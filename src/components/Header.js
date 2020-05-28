import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Socials from './Socials';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <ul id="nav-bar" class="nav justify-content-center fixed-top">
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="home">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="about">ABOUT</Link>
                    </li>
                    <li class="nav-item">
                        <Link smooth={true} duration={550} class="nav-link lead text-white" to="projects">PROJECTS</Link>
                    </li>
                </ul>
                <div id="introduction">
                    <h1 class="display-3 font-weight-bold">Hi! I am Jel.</h1>
                    <p>I am a Year 3 Computer Science student at the National University of Singapore.
                    <br></br>
                    I like brainstorming optimisation solutions for a faster and smoother overall user experience.</p>
                    <Socials></Socials>
                </div>
            </header>
        );
    }
}

export default Header;