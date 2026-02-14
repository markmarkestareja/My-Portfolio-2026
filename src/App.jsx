import "./App.css";
import AboutHero from "./pages/hero/aboutHero";
import HeroSection from "./pages/hero/hero";
import ProcessHero from "./pages/hero/processHero";
import ProjectHero from "./pages/hero/projectHero";
import ContactHero from "./pages/hero/contactHero";
import Footer from "./components/footer";

function App() {
  return (
    
    <>
      <HeroSection />
      <AboutHero />
      <ProjectHero />
      <ProcessHero />
      <ContactHero />
      <Footer />
    </>
  );
}

export default App;
