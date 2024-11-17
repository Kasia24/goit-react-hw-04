import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        className="img"
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;
