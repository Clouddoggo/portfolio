import React, { Component } from 'react';
import Socials from './Socials';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <ul id="nav-bar" class="nav justify-content-center fixed-top">
                    <li class="nav-item">
                        <a class="nav-link lead text-white" href="#home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link lead text-white" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link lead text-white" href="#projects">PROJECTS</a>
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