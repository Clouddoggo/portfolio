import React, { Component } from 'react';
import { Image, Modal } from 'react-bootstrap';

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
        return (
            <div className="pb-4">
                <h4>{this.props.title} {" "}
                    <a className="fa fa-info-circle" onClick={() => this.handleShow(this.props.id)} href="#projects"> </a></h4>
                <br></br>
                <Image
                    src={require(`../assets/images/${this.props.image}`)}
                    alt="Project image"
                    width={this.props.width}
                />

                <Modal
                    show={this.state.show === this.props.id} onHide={this.handleClose} centered
                >
                    <Modal.Header closeButton closeLabel="close window">
                        <Modal.Title>
                            {this.props.type} <a className="fa fa-github" target="_blank" rel="noopener noreferrer" href={this.props.src} alt="view source code"> </a>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.details}</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Thumbnail;