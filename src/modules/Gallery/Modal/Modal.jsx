import styles from './modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';

const ModalRoot = document.querySelector('#ModalRoot');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.keyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyDown);
    }

    keyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    onOverlayClose = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { children } = this.props;
        const { largeImageURL } = this.props.image;
        return createPortal(
            <div onClick={this.onOverlayClose} className={styles.overlay}>
                <div className={styles.modal}>
                    {children}
                    <img className={styles.img} src={largeImageURL} alt="img" />
                </div>
            </div>,
            ModalRoot
        );
    }
}

export default Modal;

Modal.propTypes = {
    image: PropTypes.object,
    onClose: PropTypes.func,
};