// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"; // Importer useParams
// import UserInfos from "./userInfos.js";

// const ParentComponent = () => {
//   const [userData, setUserData] = useState(null);
//   const [activityData, setActivityData] = useState(null);
//   const [averageSessionsData, setAverageSessionsData] = useState(null);
//   const [performanceData, setPerformanceData] = useState(null);
//   let { userId } = useParams(); // Utilisation de useParams pour récupérer l'ID de l'utilisateur depuis l'URL

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const userResponse = await fetch(
//           `http://localhost:3000/user/${userId}`
//         );
//         const activityResponse = await fetch(
//           `http://localhost:3000/user/${userId}/activity`
//         );
//         const averageSessionsResponse = await fetch(
//           `http://localhost:3000/user/${userId}/average-sessions`
//         );
//         const performanceResponse = await fetch(
//           `http://localhost:3000/user/${userId}/performance`
//         );

//         if (userResponse.ok) {
//           const jsonData = await userResponse.json();
//           setUserData(jsonData);
//         }

//         if (activityResponse.ok) {
//           const jsonData = await activityResponse.json();
//           const transformedData = jsonData.data.sessions.map((session) => ({
//             day: session.day,
//             pv: session.kilogram,
//             uv: session.calories,
//           }));
//           setActivityData(transformedData);
//         }

//         if (averageSessionsResponse.ok) {
//           const jsonData = await averageSessionsResponse.json();
//           const formattedData = jsonData.data.sessions.map((session) => {
//             const dayMap = ["L", "M", "M", "J", "V", "S", "D"];
//             return {
//               day: dayMap[session.day - 1],
//               sessionLength: session.sessionLength,
//             };
//           });
//           setAverageSessionsData(formattedData);
//         }

//         const customSubjects = {
//           1: "Cardio",
//           2: "Énergie",
//           3: "Endurance",
//           4: "Force",
//           5: "Vitesse",
//           6: "Intensité",
//         };

//         if (performanceResponse.ok) {
//           const jsonData = await performanceResponse.json();
//           const perfData = jsonData.data.data.map((item) => ({
//             subject: customSubjects[item.kind],
//             A: item.value,
//             fullMark: 250,
//           }));
//           setPerformanceData(perfData);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     loadData();
//   }, [userId]); // Ajout de userId comme dépendance de useEffect pour recharger les données quand l'ID change

//   return (
//     <UserInfos
//       userData={userData}
//       activityData={activityData}
//       averageSessionsData={averageSessionsData}
//       performanceData={performanceData}
//     />
//   );
// };

// export default ParentComponent;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserInfos from "./userInfos.js";

const ParentComponent = () => {
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const { userId } = useParams();

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
            const dayMap = ["L", "M", "M", "J", "V", "S", "D"];
            return {
              day: dayMap[session.day - 1],
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
          const perfData = jsonData.data.data.map((item) => ({
            subject: customSubjects[item.kind],
            A: item.value,
            fullMark: 250,
          }));
          setPerformanceData(perfData);
        }
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, [userId]);

  return (
    <UserInfos
      userData={userData}
      activityData={activityData}
      averageSessionsData={averageSessionsData}
      performanceData={performanceData}
    />
  );
};

export default ParentComponent;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import UserInfos from "./userInfos.js";

// const ParentComponent = () => {
//   const [userData, setUserData] = useState(null);
//   const [activityData, setActivityData] = useState(null);
//   const [averageSessionsData, setAverageSessionsData] = useState(null);
//   const [performanceData, setPerformanceData] = useState(null);
//   const [scoreData, setScoreData] = useState(null);
//   const [loading, setLoading] = useState(true); // Indicateur de chargement
//   const [error, setError] = useState(null); // Indicateur d'erreur
//   const { userId } = useParams();

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const userResponse = await fetch(
//           `http://localhost:3001/user/${userId}`
//         );
//         if (!userResponse.ok)
//           throw new Error(`User data fetch failed: ${userResponse.status}`);
//         const userData = await userResponse.json();

//         const activityResponse = await fetch(
//           `http://localhost:3001/user/${userId}/activity`
//         );
//         if (!activityResponse.ok)
//           throw new Error(
//             `Activity data fetch failed: ${activityResponse.status}`
//           );
//         const activityData = await activityResponse.json();

//         const averageSessionsResponse = await fetch(
//           `http://localhost:3001/user/${userId}/average-sessions`
//         );
//         if (!averageSessionsResponse.ok)
//           throw new Error(
//             `Average sessions data fetch failed: ${averageSessionsResponse.status}`
//           );
//         const averageSessionsData = await averageSessionsResponse.json();

//         const performanceResponse = await fetch(
//           `http://localhost:3001/user/${userId}/performance`
//         );
//         if (!performanceResponse.ok)
//           throw new Error(
//             `Performance data fetch failed: ${performanceResponse.status}`
//           );
//         const performanceData = await performanceResponse.json();

//         const scoreResponse = await fetch(
//           `http://localhost:3001/user/${userId}/score`
//         );
//         if (!scoreResponse.ok)
//           throw new Error(`Score data fetch failed: ${scoreResponse.status}`);
//         const scoreData = await scoreResponse.json();

//         setUserData(userData);
//         setActivityData(
//           activityData.data.sessions.map((session) => ({
//             day: session.day,
//             pv: session.kilogram,
//             uv: session.calories,
//           }))
//         );
//         setAverageSessionsData(
//           averageSessionsData.data.sessions.map((session) => {
//             const dayMap = ["L", "M", "M", "J", "V", "S", "D"];
//             return {
//               day: dayMap[session.day - 1],
//               sessionLength: session.sessionLength,
//             };
//           })
//         );
//         const customSubjects = {
//           1: "Cardio",
//           2: "Énergie",
//           3: "Endurance",
//           4: "Force",
//           5: "Vitesse",
//           6: "Intensité",
//         };
//         setPerformanceData(
//           performanceData.data.data.map((item) => ({
//             subject: customSubjects[item.kind],
//             A: item.value,
//             fullMark: 250,
//           }))
//         );
//         setScoreData(scoreData);

//         setLoading(false); // Fin du chargement
//       } catch (err) {
//         console.error(err);
//         setError(err.message);
//         setLoading(false); // Fin du chargement même en cas d'erreur
//       }
//     }

//     loadData();
//   }, [userId]);

//   if (loading) {
//     return <p>Loading data...</p>; // Afficher un message de chargement pendant le chargement des données
//   }

//   if (error) {
//     return <p>Error: {error}</p>; // Afficher un message d'erreur si une erreur survient
//   }

//   return (
//     <UserInfos
//       userData={userData}
//       activityData={activityData}
//       averageSessionsData={averageSessionsData}
//       performanceData={performanceData}
//       scoreData={scoreData}
//     />
//   );
// };

// export default ParentComponent;
