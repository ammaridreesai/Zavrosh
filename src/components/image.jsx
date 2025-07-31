import React from "react";
import LazyImage from './LazyImage';

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div>
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <LazyImage src={smallImage} className="img-fluid" alt={`${title} technology icon`} />
        </a>{" "}
      </div>
    </div>
  );
};
