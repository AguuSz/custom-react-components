import React from 'react';

const Modal = ({ handleClose, show, children }) => {

    if (show) {
        return (
            <div className="modal">
                <section className="modal-main">
                    {children}
                    <button className="boton-modal" onClick={handleClose}>x</button>
                </section>
            </div>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
};

export default Modal;