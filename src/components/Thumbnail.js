import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import FittedImage from 'react-fitted-image';


class Thumbnail extends Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: null,
            setShow: false,
        }
    }

    handleClose() {
        this.setState({ show: null });
    }

    handleShow(id) {
        this.setState({ show: id });
    }

    render() {
        const text = this.props.details;

        return (
            <div className="pb-4">
                <h4>{this.props.title} {" "}
                    <Button variant="link" className="fa fa-info-circle" onClick={() => this.handleShow(this.props.id)}></Button></h4>
                <br></br>
                <TransformWrapper>
                    <TransformComponent>
                        <FittedImage fit="contain" src={require(`../assets/images/${this.props.image}`)} alt="Project image"></FittedImage>
                    </TransformComponent>
                </TransformWrapper>

                <Modal
                    show={this.state.show === this.props.id} onHide={this.handleClose} centered
                >
                    <Modal.Header closeButton closeLabel="close window">
                        <Modal.Title>
                            {this.props.type} <a className="fa fa-github" target="_blank" rel="noopener noreferrer" href={this.props.src} alt="view source code"> </a>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="thumbnail-text">{text}</div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Thumbnail;