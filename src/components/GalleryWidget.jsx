import React, { useState } from 'react';
import './GalleryWidget.css';

const QuestionIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" stroke="#6B7280" strokeWidth="2" fill="none" />
    <path
      d="M9.5 9a2.5 2.5 0 1 1 5 0c0 1.5-2 2-2 4"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="17" r="1" fill="#6B7280" />
  </svg>
);

const SquaresIcon = () => (
  <svg width="24" height="24" fill="#6B7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="5" height="5" rx="1" />
    <rect x="10" y="3" width="5" height="5" rx="1" />
    <rect x="3" y="10" width="5" height="5" rx="1" />
    <rect x="10" y="10" width="5" height="5" rx="1" />
    <rect x="3" y="17" width="5" height="5" rx="1" />
    <rect x="10" y="17" width="5" height="5" rx="1" />
  </svg>
);

const LeftArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RightArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function GalleryWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([
    '/images/sampleimg.png',
    '/images/sampleimg.png', 
    '/images/sampleimg.png'
  ]);

  const nextSlide = () => {
    if (images.length <= 4) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > images.length - 4 ? 0 : nextIndex;
      });
    }
  };

  const prevSlide = () => {
    if (images.length <= 4) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((prevIndex) => {
        const prevIndexNew = prevIndex - 1;
        return prevIndexNew < 0 ? images.length - 4 : prevIndexNew;
      });
    }
  };

  const handleAddImage = () => {
    const newImages = [...images, '/images/sampleimg.png'];
    setImages(newImages);
    
    if (newImages.length > 4) {
      setCurrentIndex(newImages.length - 4);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 4);

  return (
    <div className="gallery-card">
      <div className="gallery-header">
        <div className="gallery-title-container">
          <h3 className="gallery-title">Gallery</h3>
        </div>
        <div className="gallery-controls">
          <button className="add-image-btn" onClick={handleAddImage}>
            + ADD IMAGE
          </button>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={prevSlide}>
              <LeftArrowIcon />
            </button>
            <button className="nav-btn" onClick={nextSlide}>
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
      
      <div className="gallery-body">
        <div className="question-icon-top">
          <QuestionIcon />
        </div>
        
        <div className="icons-column">
          <SquaresIcon className="squares-icon" />
        </div>

        <div className="gallery-content">
          <div className="gallery-container">
            {visibleImages.map((img, idx) => (
              <div key={idx} className="image-wrapper">
                <img 
                  src={img} 
                  alt="gallery" 
                  className="gallery-img" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/90x90/374151/FFFFFF?text=Image';
                  }} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryWidget;