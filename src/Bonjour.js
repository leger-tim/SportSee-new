import React from "react";
import "./Bonjour.css";

function Bonjour({ name = "Johnny Johnson" }) {
  return (
    <div className="bonjour">
      <h1>
        Bonjour <span className="name">{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Bonjour;
