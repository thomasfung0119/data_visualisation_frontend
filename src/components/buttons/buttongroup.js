import React, { useState } from "react";
import Button from "./button";
import "./buttongroup.css";

function ButtonGroup({ buttons }) {
  const [toggledButton, setToggledButton] = useState(0);
  return (
    <div className="buttonGroup">
      {buttons.map((button, index) => (
        <Button
          key={button.text}
          imageURL={button.imageURL}
          className={
            toggledButton === index ? "button toggled" : "button notToggled"
          }
          onClick={() => {
            setToggledButton(index);
          }}
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
