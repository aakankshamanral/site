import React from 'react';
import AboutWidget from './components/AboutWidget';
import GalleryWidget from './components/GalleryWidget';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="left-half"></div>
      <div className="right-half">
        <AboutWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
