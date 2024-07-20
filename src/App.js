import "./App.css";
import { Routes, Route } from "react-router-dom";
import PC from "./PC";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/user/:userId" element={<PC />} />
      </Routes>
    </div>
  );
}

export default App;
