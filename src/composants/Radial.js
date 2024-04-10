import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../style/Radial.css";

export default function RadialSport({ score }) {
  const [uvDynamic, setUvDynamic] = useState(0);
  let score100 = score * 100;

  useEffect(() => {
    setUvDynamic(score100); // Utilisez la prop score ici
  }, [score100]);

  // Calculer l'angle de remplissage basé sur uvDynamic
  const fillAngle = (uvDynamic / 100) * 360;

  const data = [
    {
      name: "Progression",
      uv: 100, // La valeur maximale pour dessiner la barre complète
      fill: uvDynamic === 0 ? "transparent" : "#fe0000", // Couleur de la barre de progression
    },
  ];

  return (
    <div className="radial-container">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={220}
          height={220}
          cx={110}
          cy={110}
          innerRadius={70}
          outerRadius={100}
          barSize={10}
          data={data}
          startAngle={180}
          endAngle={180 - fillAngle} // Angle de fin basé sur uvDynamic
        >
          <RadialBar
            minAngle={0}
            dataKey="uv"
            cornerRadius={10}
            background={false}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

/* <div className="radial-text">
          <p className="percent">{uvDynamic}%</p>
          <p>de votre objectif</p>
        </div> */
