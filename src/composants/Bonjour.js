import React from "react";
import "../style/Bonjour.css";

function Bonjour({ firstName }) {
  return (
    <div className="bonjour">
      <h1>
        Bonjour <span className="name">{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Bonjour;
