import React, { useEffect, useCallback } from "react";
import "./Modal.css";

const Modal = ({ show, onClose, project }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (show) {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [show, handleKeyDown]);  

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.name}</h2>
        <img src={project.src} alt={project.alt} className="modal-image" />
        <p>{project.descriptionm}</p>
        <a
          href={project.url}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
