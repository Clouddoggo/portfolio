import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li class="github">
                        <a href="https://github.com/Clouddoggo" alt="go to GitHub profile" title="Visit my GitHub">GitHub</a>
                    </li>
                    <li class="email">
                        <a href="mailto:jel.lim@u.nus.edu" alt="email me" title="Email me">Email</a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;