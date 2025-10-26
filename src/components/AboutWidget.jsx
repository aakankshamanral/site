import React, { useState } from 'react';
import Tabs from './Tabs';
import './AboutWidget.css';

function AboutWidget() {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="about-card">
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="about-content">
        {activeTab === 'About Me' && (
          <p>
            Hello! I'm Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br/><br/>
            I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella.
          </p>
        )}

        {activeTab === 'Experiences' && (
          <p>
            I’ve spent over a decade helping clients grow their businesses through Salesforce solutions, focusing on CRM and customer engagement.
          </p>
        )}

        {activeTab === 'Recommended' && (
          <p>
            Dave is highly recommended for his expertise, communication, and dedication to his clients' success.
          </p>
        )}
      </div>
    </div>
  );
}

export default AboutWidget;
