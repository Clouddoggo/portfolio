import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

class Thumbnail extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    toggleHover() {
        this.setState({
            hover: !this.state.hover
        });
    }


    render() {
        return (
            <div className="col-sm-6 pb-4">
                <div className="project-overlay">
                    <div className="project-details">
                        <h4>{this.props.type} <a class="fa fa-github" href={this.props.src} title="View the source code"></a></h4>
                        <p className="px-4">
                            {this.props.details}
                        </p>
                    </div>
                    <h4>{this.props.title}</h4>
                    <Image
                        src={require(`../images/${this.props.image}`)}
                        alt="Project image"
                        width="450"
                    />
                </div>
            </div>
        )
    }
}

export default Thumbnail;