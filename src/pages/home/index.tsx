import Contact from "@/components/Contact";
import CoreConcept from "@/components/CoreConcept";
import ExpertCard from "@/components/ExpertCard";
import ExpertTeam from "@/components/ExpertTeam";
import LeaderCard from "@/components/LeaderCard";
import Overview from "@/components/OverviewSection";
import Solution from "@/components/Solution";


const Home = () => {
  return (
    <div>
      <Overview />
      <CoreConcept />
      <Solution />
      <section id="leadership" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">Leadership Team</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <LeaderCard/>
              <LeaderCard/>
              <LeaderCard/>
                
            </div>

            <div className="mt-20 text-center">
                <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeIn">Our leadership team brings together decades of experience in technology, business strategy, and digital innovation</p>
                <a href="#contact" className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg transition-all duration-300 animate__animated animate__pulse animate__infinite">
                    Connect With Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>
      <ExpertTeam />
      <Contact />
    </div>
  );
};

export default Home;
