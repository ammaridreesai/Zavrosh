import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

const LazyImage = ({ src, alt, className, placeholder }) => {
  const { imageSrc, isLoaded, imgRef } = useLazyImage(src, placeholder);

  return (
    <div className={`lazy-image-wrapper ${isLoaded ? 'loaded' : 'loading'}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${className || ''}`}
        loading="lazy"
      />
      {!isLoaded && (
        <div className="lazy-placeholder">
          <div className="pulse-animation"></div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;