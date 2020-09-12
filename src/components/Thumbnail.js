import React, { Component } from 'react';
import { Image, Button } from 'react-bootstrap';

class Thumbnail extends Component {
    constructor(props) {
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
            // <h5>{this.props.category}</h5>
            <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="project-item">
                    <div className="project-overlay">
                        {" "}
                        <div className="project-details">
                            <h4>{this.props.title}</h4>
                            <Button className="btn-light" href={this.props.src}>Source</Button>
                        </div>
                        <Image
                            src={require(`../images/${this.props.image}`)}
                            alt="Project image"
                            width="350"
                        />{" "}
                    </div>
                </div>
            </div>
        )
    }
}

export default Thumbnail;