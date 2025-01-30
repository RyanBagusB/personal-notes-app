import React from 'react';

const NoteSkeleton = () => {
  return (
    <div className="card-container">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="card">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton-body">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteSkeleton;
