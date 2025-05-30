import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MapUK from "./pages/MapUK.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapUK />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
