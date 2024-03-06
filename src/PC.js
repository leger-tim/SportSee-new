import React, { useState, useEffect } from "react";
import App from "./App.js";

const ParentComponent = () => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const userId = 12; // or 18

  useEffect(() => {
    async function loadData() {
      try {
        const userResponse = await fetch(
          `http://localhost:3000/user/${userId}`
        );
        const activityResponse = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const averageSessionsResponse = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const performanceResponse = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );

        if (userResponse.ok) {
          const jsonData = await userResponse.json();
          setUserData(jsonData);
        }

        if (activityResponse.ok) {
          const jsonData = await activityResponse.json();
          const transformedData = jsonData.data.sessions.map((session) => ({
            day: session.day,
            pv: session.kilogram,
            uv: session.calories,
          }));
          setActivityData(transformedData);
        }

        if (averageSessionsResponse.ok) {
          const jsonData = await averageSessionsResponse.json();
          const formattedData = jsonData.data.sessions.map((session) => {
            // Vous pouvez convertir `day` en un format de jour plus lisible si nécessaire
            const dayMap = ["L", "M", "M", "J", "V", "S", "D"]; // Par exemple, 1 = Lundi
            return {
              day: dayMap[session.day - 1], // Ajuster l'index si nécessaire
              sessionLength: session.sessionLength,
            };
          });
          setAverageSessionsData(formattedData);
        }

        const customSubjects = {
          1: "Cardio",
          2: "Énergie",
          3: "Endurance",
          4: "Force",
          5: "Vitesse",
          6: "Intensité",
        };

        if (performanceResponse.ok) {
          const jsonData = await performanceResponse.json();
          // Transformer les données de performance pour le composant HexaSport
          const perfData = jsonData.data.data.map((item) => ({
            subject: customSubjects[item.kind],
            A: item.value,
            fullMark: 250, // Définir une valeur de fullMark adaptée à votre usage
          }));
          setPerformanceData(perfData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <App
      userData={userData}
      activityData={activityData}
      averageSessionsData={averageSessionsData}
      performanceData={performanceData}
    />
  );
};

export default ParentComponent;
