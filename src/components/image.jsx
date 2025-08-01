import React from 'react';

export const Image = ({ title, largeImage, smallImage, className }) => {
  return (
    <img 
      src={smallImage || largeImage} 
      alt={title} 
      className={className}
      loading="lazy"
    />
  );
};