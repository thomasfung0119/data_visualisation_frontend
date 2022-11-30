import React, { useState } from 'react';
import './dropdown.css';

function Dropdown(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    props.setMenu('Line Chart');
    setOpen(false);
  };

  const handleMenuTwo = () => {
    props.setMenu('Area Chart');
    setOpen(false);
  };

  const handleMenuFour = () => {
    props.setMenu('Bar Chart');
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>{`${props.menu}⠀⠀▼`}</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={handleMenuOne}>Line Chart</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuTwo}>Area Chart</button>
          </li>
          <li className="menu-item">
            <button onClick={handleMenuFour}>Bar Chart</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;