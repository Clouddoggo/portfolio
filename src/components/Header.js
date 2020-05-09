import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link lead" href="#home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link lead" href="#about">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link lead" href="#projects">PROJECTS</a>
                    </li>
                </ul>
                <div class="container">
                    <div class="page-header">
                        <h1>Hi! I am Jel.</h1>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;