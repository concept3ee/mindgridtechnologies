import AboutMissionVision from "./_components/about-mission-vision/About-Mission-Vision";
import Contact from "./_components/contact/Contact";
import Footer from "./_components/footer/Footer";
import Hero from "./_components/hero/Hero";
import Header from "./_components/header/Header";
import Partner from "./_components/partners/Partners";
import Pricing from "./_components/pricing/Pricing";
import Services from "./_components/services/Services";
import TestingTeam from "./_components/testingTeam/TestingTeam";

export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen">
        <Header />
        <section>
          <Hero />
        </section>
        <section id="about-mission-vision">
          <AboutMissionVision />
        </section>
        <section id="services">
          <Services />
        </section>
        <TestingTeam />
        <section id="pricing">
          <Pricing />
        </section>
        <Partner />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
