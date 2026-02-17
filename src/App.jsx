import "./App.css";
import { Routes, Route } from "react-router-dom";

import HeroPage from "./pages/heroPage";
import ContactPage from "./pages/contactPage";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
