import React from 'react';
import './Tabs.css';

function Tabs({ active, setActive }) {
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${active === tab ? 'active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="slider" data-active-tab={tabs.indexOf(active)}>
          <div className="slider-inner"></div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;