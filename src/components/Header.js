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
                    <h1 class="display-2 font-weight-bold">Hi! I am Jel.</h1>
                    <p>I am a Year 2 Computer Science student at the National University of Singapore.</p>
                    <Socials></Socials>
                </div>
            </header>
        );
    }
}

export default Header;