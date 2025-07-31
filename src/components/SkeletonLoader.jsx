import React from 'react';

export const SkeletonLoader = ({ type = 'default', className = '' }) => {
  const getSkeletonContent = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`skeleton-card ${className}`}>
            <div className="skeleton skeleton-image" style={{ height: '200px', marginBottom: '15px' }}></div>
            <div className="skeleton skeleton-title" style={{ height: '24px', marginBottom: '10px', width: '80%' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '16px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '16px', width: '60%' }}></div>
          </div>
        );
      case 'image':
        return <div className={`skeleton ${className}`} style={{ height: '200px', width: '100%' }}></div>;
      case 'text':
        return (
          <div className={`skeleton-text-block ${className}`}>
            <div className="skeleton" style={{ height: '16px', marginBottom: '8px' }}></div>
            <div className="skeleton" style={{ height: '16px', marginBottom: '8px', width: '90%' }}></div>
            <div className="skeleton" style={{ height: '16px', width: '70%' }}></div>
          </div>
        );
      case 'testimonial':
        return (
          <div className={`skeleton-testimonial ${className}`}>
            <div className="skeleton skeleton-avatar" style={{ height: '60px', width: '60px', borderRadius: '50%', marginBottom: '15px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '16px', marginBottom: '8px' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '16px', marginBottom: '8px', width: '80%' }}></div>
            <div className="skeleton skeleton-text" style={{ height: '14px', width: '40%' }}></div>
          </div>
        );
      default:
        return <div className={`skeleton ${className}`} style={{ height: '100px', width: '100%' }}></div>;
    }
  };

  return <div className="skeleton-loader">{getSkeletonContent()}</div>;
};

export default SkeletonLoader;