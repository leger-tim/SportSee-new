import "./App.css";
import { Routes, Route } from "react-router-dom";
import PC from "./PC";
// // import IconBox from "./composants/Icons";
// import BarSport from "./composants/Bar";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/user/:userId" element={<PC />} />
//         {/* <Route path="/user/:userId/activity" element={<IconBox />} /> */}
//         <Route path="/user/:userId/activity" element={<BarSport />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import BarSport from "./composants/Bar";
import LineSport from "./composants/Line";
import HexaSport from "./composants/Hexa";
import RadialSport from "./composants/Radial";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/:userId" element={<PC />} />
        <Route path="/user/:userId/activity" element={<BarSport />} />
        <Route path="/user/:userId/average-sessions" element={<LineSport />} />
        <Route path="/user/:userId/performance" element={<HexaSport />} />
        <Route path="/user/:userId/score" element={<RadialSport />} />
      </Routes>
    </div>
  );
}

export default App;
