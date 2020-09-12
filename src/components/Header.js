import React, { Component } from 'react';
import Socials from './Socials';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <div id="introduction">
                    <h1 class="display-3 font-weight-bold">Hi! I am Jel.</h1>
                    <p>I am a Year 3 Computer Science student from the National University of Singapore.
                    <br></br>
                    I like brainstorming optimisation solutions for a faster and smoother overall user experience.</p>
                    <Socials></Socials>
                </div>
            </header>
        );
    }
}

export default Header;