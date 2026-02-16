import AboutHero from "../components/hero/aboutHero";
import HeroSection from "../components/hero/hero";
import ProcessHero from "../components/hero/processHero";
import ProjectHero from "../components/hero/projectHero";
import ContactHero from "../components/hero/contactHero";

import Footer from "../components/footer";

function HeroPage() {
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

export default HeroPage;