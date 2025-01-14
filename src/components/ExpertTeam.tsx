import EmblaCarousel from "./EmblaCarousel";
import ExpertCard from "./ExpertCard";

const ExpertTeam = () => {
  const OPTIONS = { dragFree: true, loop: true, slidesToScroll: 'auto' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <section id="experts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
            Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600">
            Meet our team of experienced professionals
          </p>
        </div>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Expert 1 --> */}
          <ExpertCard/>

          
          {/* <!-- Expert 2 --> */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden group animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Emma Rodriguez
              </h3>
              <p className="text-purple-600 text-center mb-4">
                UI/UX Specialist
              </p>
              <p className="text-gray-600 text-center mb-6">
                8+ years in digital product design
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Expert 3 --> */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden group animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-600 to-red-600 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                David Kumar
              </h3>
              <p className="text-purple-600 text-center mb-4">
                Cloud Architect
              </p>
              <p className="text-gray-600 text-center mb-6">
                12+ years in cloud infrastructure
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Expert 4 --> */}
          <div
            className="bg-white rounded-xl shadow-lg overflow-hidden group animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-yellow-600 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                Sophie Chen
              </h3>
              <p className="text-purple-600 text-center mb-4">Data Scientist</p>
              <p className="text-gray-600 text-center mb-6">
                9+ years in AI and machine learning
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 text-sm text-purple-600 border border-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
            Work With Our Experts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
