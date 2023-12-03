// Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, project }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>{project.name}</h2>
                <img src={project.src} alt={project.alt} className="modal-image" />
                <p>{project.descriptionl}</p>
                <button onClick={onClose} className="modal-close-btn">Close</button>
            </div>
        </div>
    );
};

export default Modal;
