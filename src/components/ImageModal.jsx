import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ustawienie elementu dla modalnego

const ImageModal = ({ isOpen, image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
