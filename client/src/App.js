import { Routes, Route } from "react-router-dom";
import PregFrec from "./components/PregFrec";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/help" element={<PregFrec />} />
      </Routes>
    </div>
  );
}

export default App;
