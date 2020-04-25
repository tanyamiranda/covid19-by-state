import React, {useState} from 'react';

import './dropdown.css';

const ShortDropDown = ({fieldName, optionList, labelsList, defaultSelected, onChangeEvent}) => {

    const [listDisplaySize, setListDisplaySize] = useState(1);
    
    const displayLargerList = () => {

        if (optionList.length < 10)
            setListDisplaySize(optionList.length)
        else
            setListDisplaySize(10);
    }

    const resetDisplayList = () => {
        setListDisplaySize(0);
    }
    
    return (

        <select className="short-drop-down" name={fieldName} 
            onChange ={onChangeEvent} 
            defaultValue={defaultSelected} 
            size={listDisplaySize} 
            onMouseDown={displayLargerList}
            onBlur={resetDisplayList}
        >
            {
                optionList.map ((item, index) => 
                        <option className="short-drop-down-option" onClick={resetDisplayList} key={item} value={item} >
                            {!labelsList ? item : labelsList[item] }
                        </option>
                )
            }
        </select>
    )

}

export default ShortDropDown;