import React from 'react'

import './mobile-message.css';

const MobileMessage = () => (
    <div className="mobile-message">
        <div className="message">Chart is too big for your screen.<br/> Turn your device sideways.</div>        
        <div className="phone">
            <div className="phone-screen"></div>
            <div className="phone-button"></div>
        </div>
    </div>
)
export default MobileMessage;