import { autoType } from 'd3';
import React from 'react';
import './button.css';

function Button(props) {
    //const [toggle, setToggle] = React.useState(false);

    const imageURL = props.imageURL;
    return (
        <button className={props.className} onClick={props.onClick}>  
            <img className="Image" src={require("./vaccine.svg")}/>
        </button>
    )
}


export default Button;
