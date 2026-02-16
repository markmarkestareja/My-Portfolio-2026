import "./App.css";
import { Routes, Route } from "react-router-dom";

import HeroPage from "./pages/heroPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroPage />} />
      </Routes>
    </>
  );
}

export default App;
