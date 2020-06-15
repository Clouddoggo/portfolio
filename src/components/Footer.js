import React, { Component } from 'react';
import Socials from './Socials';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="d-flex justify-content-center">
                    <div class="pt-2">
                        <Socials></Socials>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;