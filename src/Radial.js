import "./styles.css";
import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import "./Radial.css";

export default function RadialSport() {
  const [uvDynamic, setUvDynamic] = useState(0);

  useEffect(() => {
    // Simuler la récupération et la mise à jour de la valeur dynamique
    setUvDynamic(12); // Exemple : uvDynamic est mis à jour à 75
  }, []);

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
      <div className="radial-text">
        <p className="percent">{uvDynamic}%</p>
        <p>de votre objectif</p>
      </div>
    </div>
  );
}
