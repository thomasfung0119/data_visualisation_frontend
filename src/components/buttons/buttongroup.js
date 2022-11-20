import React from 'react';
import Button from './button';
import './buttongroup.css';

function ButtonGroup(props){
    return (
        <div className="ButtonGroup">
            {props.buttons.map((button, index) => (
                <Button
                    key={index}
                    text={button.text}
                />
            ))}
        </div>
    )
}
export default ButtonGroup;
