import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/bse.css";
import "./css/embla.css";
import HeaderHero from "./components/HeaderHero";
import Overview from "./components/OverviewSection";
import CoreConcept from "./components/CoreConcept";
import Solution from "./components/Solution";
import LeaderSection from "./components/LeaderSection";
import ExpertTeam from "./components/ExpertTeam";
import { Contact } from "lucide-react";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeaderHero />
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
