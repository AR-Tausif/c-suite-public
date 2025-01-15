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
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeaderHero />
      <Container>
        <div className="flex justify-between items-center py-10">
          <h2 className="text-4xl font-bold">WHAT IS C- SUITE?</h2>
          <p className="w-2/4 text-gray-600">
            A dynamic partner of engagement, placement, assessment, recruitment
            and development solutions, delivering unparalleled C-Level
            leadership expertise as strategic lifeline for, established,
            transforming or startup companies during transition, challenges and
            distinct projects.
          </p>
        </div>
      </Container>
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
