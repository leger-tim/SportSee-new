import React from "react";
import "../style/LeftBar.css";

function LeftBar({ icon, alt }) {
  return (
    <div className="four-icons">
      <img src={icon} alt="Icon" />
    </div>
  );
}

export default LeftBar;
