import Contact from "@/components/Contact";
import CoreConcept from "@/components/CoreConcept";
import ExpertTeam from "@/components/ExpertTeam";
import LeaderSection from "@/components/LeaderSection";
import Overview from "@/components/OverviewSection";
import Solution from "@/components/Solution";

const Home = () => {
  return (
    <div>
      <Overview />
      <CoreConcept />
      <Solution />
      <LeaderSection />
      <ExpertTeam />
      <Contact />
    </div>
  );
};

export default Home;
