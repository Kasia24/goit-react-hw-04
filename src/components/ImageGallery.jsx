import React from "react";
import ImageCard from "./ImageCard";

const ImageGallery = ({ images }) => (
  <ul className="gallery">
    {images.map((image) => (
      <li key={image.id}>
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
