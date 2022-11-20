import { autoType } from 'd3';
import React from 'react';
import './button.css';
let assetsPath = require.context('./', false, /\.(png|jpe?g|svg)$/);
function Button(props) {
    //const [toggle, setToggle] = React.useState(false);

    const imageURL = props.imageURL;
    return (
        <button className={props.className} onClick={props.onClick}>  
            <img className="Image" src={assetsPath(imageURL)}/>
        </button>
    )
}


export default Button;
