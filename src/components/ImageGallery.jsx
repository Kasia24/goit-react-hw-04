import React from "react";
import ImageCard from "./ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li key={image.id} className="image-item">
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
