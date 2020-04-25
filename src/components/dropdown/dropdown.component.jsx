import React, {useState} from 'react';

import './dropdown.css';

const ShortDropDown = ({fieldName, optionList, defaultSelected, onChangeEvent}) => {

    const [listDisplaySize, setListDisplaySize] = useState(1);
    
    const displayLargerList = () => {
        setListDisplaySize(10);
    }

    const resetDisplayList = () => {
        setListDisplaySize(0);
    }

    return (

        <select name={fieldName} 
            onChange ={onChangeEvent} 
            defaultValue={defaultSelected} 
            size={listDisplaySize} 
            onMouseDown={displayLargerList}
        >
            {
                optionList.map (item => 
                        <option onClick={resetDisplayList} key={item} value={item} >{item}</option>
                )
            }
        </select>
    )

}

export default ShortDropDown;