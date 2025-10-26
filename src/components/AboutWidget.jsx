import React, { useState } from 'react';
import Tabs from './Tabs';
import './AboutWidget.css';

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

function AboutWidget() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="about-card">
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="about-body">
        <div className="question-icon-top">
          <QuestionIcon />
        </div>
        
        <div className="icons-column">
          <SquaresIcon className="squares-icon" />
        </div>

        <div className="about-content">
          {activeTab === 'About Me' && (
            <div className="content-text">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
              <br /><br />
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
            </div>
          )}

          {activeTab === 'Experiences' && (
            <div className="content-text">
              I've spent over a decade helping clients grow their businesses through Salesforce solutions, focusing on CRM and customer engagement.
            </div>
          )}

          {activeTab === 'Recommended' && (
            <div className="content-text">
              Dave is highly recommended for his expertise, communication, and dedication to his clients' success.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutWidget;