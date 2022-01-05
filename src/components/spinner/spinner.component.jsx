import React from 'react';

import SpinnerImage from './spinning-blue-circle.gif';
import './spinner.css';

const Spinner = () => (
    <div className='spinner-page'>
        <div>
            <div><img className='spinner-image' src={SpinnerImage} alt="Loading CDC Data"/></div>
            <div>Loading CDC Data...</div>
        </div>
    </div>
);

export default Spinner;

