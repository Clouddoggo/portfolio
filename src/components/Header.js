import React, { Component } from 'react';

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
                    <li class="nav-item">
                        <a class="nav-link lead text-white" href="#contact">CONTACT</a>
                    </li>
                </ul>
                <div id="introduction" class="justify-content-center text-center">
                    <h1 class="text-white">Hi! I am Jel.</h1>
                    <p class="text-white">I am a Year 2 Computer Science student at the National University of Singapore.</p>
                </div>
            </header>
        );
    }
}

export default Header;