import React from 'react';
import './Loader.css'; // Ensure you create this CSS file

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <h1 className="loader-text">
          Yashil <span className="highlight">Maskan</span>
        </h1>
      </div>
    </div>
  );
};

export default Loader;
