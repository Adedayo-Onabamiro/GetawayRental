import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "../Accordion/Accordion.css";

export const Accordion = ({ panels }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    const activateTab = (index) => {
      setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
    };
  
    return (
      <div className="accordion" role="tablist">
        {panels.map((panel, index) => {
          const isActive = activeTab === index;
          const innerStyle = {
            height: isActive ? panel.height : 0,
            overflow: isActive ? 'visible' : 'hidden',
          };
  
          return (
            <div className='panelsBox'>
                         <div
              key={index}
              className="panel"
              role="tabpanel"
              aria-expanded={isActive}
            >
              <button
                className="panel__label"
                role="tab"
                onClick={() => activateTab(index)}
              >
                {panel.label}
              </button>
              <div
                className="panel__inner"
                style={innerStyle}
                aria-hidden={!isActive}
              >
                <p className="panel__content">{panel.content}</p>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    );
  };
  