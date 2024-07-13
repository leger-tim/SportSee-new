import React from "react";
import "../style/Icons.css";

function IconBox({ icon, text1, text2, bgColor }) {
  return (
    <div className="icon-box">
      <div className="img-container" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt="Icon" />
      </div>
      <div className="text-content">
        <p className="kcal">{text1}</p>
        <p className="macro">{text2}</p>
      </div>
    </div>
  );
}

export default IconBox;
