import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-bar">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                </nav>
            </header>
        );
    }
}

export default Header;