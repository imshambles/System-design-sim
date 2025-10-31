import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimulatorPage from "./pages/SimulatorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimulatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
