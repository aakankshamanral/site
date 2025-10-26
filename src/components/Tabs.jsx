import React from 'react';
import './Tabs.css';

function Tabs({ active, setActive }) {
  return (
    <div className="tabs">
      {['About Me', 'Experiences', 'Recommended'].map((tab) => (
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
