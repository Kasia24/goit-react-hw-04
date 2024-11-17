import React from "react";
import ImageCard from "./ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => (
  <ul className="gallery">
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard image={image} className="image-item" />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
