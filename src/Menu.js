import React from "react";
import "./App.css";
  
const Menu = ({ setLineColor }) => {
  return (
    <div className="Menu">
      <input
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
    </div>
  );
};
  
export default Menu;