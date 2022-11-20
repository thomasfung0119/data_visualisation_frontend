import React from 'react';
import './button.css';

function Button(props) {
    const [toggle, setToggle] = React.useState(false);
  return (
    <button className="button" 
    onClick={()=>setToggle(!toggle)}
    style={{opacity: toggle ? 0.6 : 1}}
    >
        <h1>{props.text}</h1>
    </button>
  )
}


export default Button;
