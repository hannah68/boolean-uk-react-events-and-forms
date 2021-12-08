import React from 'react';

const CheckboxesGroup = (props) => {
    const {id, name, label} = props.checkbox;
    
    return (
        <div>
            <input 
                type="checkbox" 
                id={id} 
                name={name}
                onChange={props.handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default CheckboxesGroup

