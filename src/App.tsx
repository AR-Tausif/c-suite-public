import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/bse.css";
import "./css/embla.css";
import HeaderHero from "./sections/HeaderHero";
import Overview from "./sections/OverviewSection";
import CoreConcept from "./sections/CoreConcept";
import LeaderSection from "./sections/LeaderSection";
import ExpertTeam from "./sections/ExpertTeam";
import Contact from "./sections/Contact";
import Solution from "./sections/Solution";
import WhatIsCSuite from "./sections/WhatIsCSuite";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeaderHero />
      <WhatIsCSuite/>
      <Overview />
      <CoreConcept />
      <Solution />
      <LeaderSection />
      <ExpertTeam />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
