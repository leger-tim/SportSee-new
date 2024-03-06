// import React, { useState, useEffect } from "react";
// import App from "./App.js";

// const ParentComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const response = await fetch("http://localhost:3000/user/12");
//         if (response.ok) {
//           const jsonData = await response.json();
//           setData(jsonData);
//         } else {
//           throw new Error(`Error ${response.status}: ${await response.text()}`);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     loadData();
//   }, []);

//   return <App data={data} />;
// };

// export default ParentComponent;
