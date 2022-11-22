import React, { useState } from "react";
import Button from "./button";
import "./buttongroup.css";

function ButtonGroup({ buttons, selectedButton, onToggle }) {
  return (
    <div className="buttonGroup">
      {buttons.map((button, index) => (
        <Button
          key={button.text}
          imageURL={button.imageURL}
          className={
            button.text === selectedButton ? "button toggled" : "button notToggled"
          }
          onClick={() => {
            onToggle(button.text);
          }}
        />
      ))}
    </div>
  );
}

export default ButtonGroup;
