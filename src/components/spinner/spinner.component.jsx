import React from 'react';

import SpinnerImage from './skinny-spinner.gif';
import './spinner.css';

const Spinner = () => (
    <div className='spinner-page'>
        <div>
            <div><img className='spinner-image' src={SpinnerImage} alt="Loading Data..."/></div>
            <div>Loading Data...</div>
        </div>
    </div>
);

export default Spinner;

