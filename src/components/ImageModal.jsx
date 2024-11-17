import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    className="modal"
    overlayClassName="overlay"
  >
    <img src={image.urls.regular} alt={image.alt_description || "Image"} />
    <p>Author: {image.user.name}</p>
    <p>Likes: {image.likes}</p>
  </Modal>
);

export default ImageModal;
