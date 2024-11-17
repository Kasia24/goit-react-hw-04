import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
