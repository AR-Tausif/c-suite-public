import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/bse.css";
import "./css/embla.css";
import HeaderHero from "./components/HeaderHero";
import Overview from "./components/OverviewSection";
import CoreConcept from "./components/CoreConcept";
import LeaderSection from "./components/LeaderSection";
import ExpertTeam from "./components/ExpertTeam";
import Container from "./components/Container";
import Contact from "./components/Contact";
import Solution from "./components/Solution";

const App = () => {
  return (
    <>
      <ResponsiveNavbar />
      <HeaderHero />
      
      <Container>
        <div className="flex justify-between items-center py-10 border-b">
        <div className="relative inline-block text-center">
        {/* <!-- Red borders --> */}
        <div className="absolute top-0 left-0 h-2 w-28 bg-red-600"></div>
        <div className="absolute top-0 left-0 h-16 w-2 bg-red-600"></div>
        
        <div className="absolute bottom-0 right-0 h-2 w-28 bg-red-600"></div>
        <div className="absolute bottom-0 right-0 h-16 w-2 bg-red-600"></div>
        
        {/* <!-- Text --> */}
          <h2 className="text-4xl font-bold p-5 px-8">WHAT IS C- SUITE?</h2>
    </div>
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
