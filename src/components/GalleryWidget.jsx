import React, { useState } from 'react';
import './GalleryWidget.css';

function GalleryWidget() {
  const [images, setImages] = useState([
    '/images/sampleimg.png',
    '/images/sampleimg.png',
    '/images/sampleimg.png',
  ]);

  const handleAddImage = () => {
    setImages([...images, '/images/sampleimg.png']);
  };

  return (
    <div className="gallery-card">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <button className="add-btn" onClick={handleAddImage}>+ Add Image</button>
      </div>
      <div className="gallery-container">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt="gallery" className="gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;
