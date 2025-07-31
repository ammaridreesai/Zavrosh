import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  ...props 
}) => {
  // Create a subtle gradient placeholder
  const defaultPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOGY5ZmEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlOWVjZWYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+';
  
  const { imageSrc, isLoaded, imgRef } = useLazyImage(src, placeholder || defaultPlaceholder);

  return (
    <div className={`lazy-image-wrapper ${!isLoaded ? 'loading' : 'loaded'}`} ref={imgRef}>
      <img
        src={imageSrc}
        alt={alt}
        className={`lazy-image ${className}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.4s ease-in-out'
        }}
        {...props}
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