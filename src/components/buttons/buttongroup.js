import React from 'react';
import Button from './button';
import './buttongroup.css';

function ButtonGroup(props){
    const [toggledButton, setToggledButton] = React.useState(0);
    return (
        <div className="ButtonGroup">
            {props.buttons.map((button, index) => (
                <Button
                    key={index}
                    text={button.text}
                    imageURL={button.imageURL}
                    className={toggledButton===index ? "activeButton" : "Button"}
                    onClick={()=>{
                        setToggledButton(index); 
                    }}
                />
            ))}
        </div>
    )
}
export default ButtonGroup;
