import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <a href="https://github.com/Clouddoggo" alt="go to GitHub profile">
                            Github<i className="fa fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:jel.lim@u.nus.edu" alt="email me">
                            Email<i className="fa fa-envelope"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;