import React from 'react';

import './config-section.css';

const ConfigSection = ({fieldName, fieldDefaultValue, fieldClickEvent, fieldDataMap}) => {

    const keys = Object.keys(fieldDataMap);

    return (
        <span className="config-section">
            <select name={fieldName} defaultValue={fieldDefaultValue}  onChange={fieldClickEvent}>
                {keys.map ((item) => 
                    <option key={item} value={item} >{fieldDataMap[item]}</option>
                )}
            </select>
        </span>
    )

}

export default ConfigSection;