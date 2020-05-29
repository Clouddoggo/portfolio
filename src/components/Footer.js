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
                    <div class="p-3">
                        <span class="text-white">Made with ReactJS and Bootstrap 4</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;