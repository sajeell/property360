import React from 'react';
import '../static/CompStyle.css';
import Middle1 from './Middle1.jsx'
import Middle2 from './Middle2.jsx'
import Middle3 from './Middle3.jsx'
import Middle4 from './Middle4.jsx'

const Middle = () => {
  return (
    <div>
      <h3 id="middle-heading">We deal in all kinds of:</h3>
      <div className="middle-wrapper">
        <div className="middle-row-1">
          <div className="middle-row-item">
            <Middle1 />
          </div>
          <div className="middle-row-item">
            <Middle2 />
          </div>
        </div>
        <div className="middle-row-2">
          <div className="middle-row-item">
            <Middle3 />
          </div>
          <div className="middle-row-item">
            <Middle4 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
