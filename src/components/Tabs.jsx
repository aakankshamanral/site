import React from 'react';
import './Tabs.css';

function Tabs({ active, setActive }) {
  const tabs = ['About Me', 'Experiences', 'Recommended'];

  return (
    <div className="tabs-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab ${active === tab ? 'active' : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Tabs;