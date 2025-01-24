import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/bse.css";
import "./css/embla.css";
import HeaderHero from "./sections/HeaderHero";
import Overview from "./sections/OverviewSection";
import CoreConcept from "./sections/CoreConcept";
import LeaderSection from "./sections/LeaderSection";
import Contact from "./sections/Contact";
import WhatIsCSuite from "./sections/WhatIsCSuite";
import Solution from "./sections/SolutionSection";
import { InfiniteMovingCardsDemo } from "./sections/InfiniteMovingCardsDemo";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeaderHero />
      <WhatIsCSuite />
      <Overview />
      <CoreConcept />
      <Solution />
      <LeaderSection />
      <InfiniteMovingCardsDemo />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
