import React from "react";
import Button from "./button";
import "./buttongroup.css";

function ButtonGroup(props) {
  const [toggledButton, setToggledButton] = React.useState(0);
  return (
    <div className="buttonGroup">
      {props.buttons.map((button, index) => (
        <Button
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
