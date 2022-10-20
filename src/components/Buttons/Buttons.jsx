import React from "react";
import { Link } from "react-router-dom";

import "./buttons.css"

const buttons = ({ link, titulo, clase }) => {
  return (
    <div className="botones">
      
        <button className={clase}>{titulo}</button>
      
    </div>
  );
};

export default buttons;