import SectionHeading from "@/components/SectionHeading";
import AppButton from "../components/AppButton";
import LeaderCard from "../components/LeaderCard";

const LeaderSection = () => {
  return (
    <section id="leadership" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Leadership" titleTxtColor="text-gray-100" />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <LeaderCard />
          <LeaderCard />
          <LeaderCard />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeIn">
            Our leadership team brings together decades of experience in
            technology, business strategy, and digital innovation
          </p>
          <a href="#contact">
            <AppButton className="inline-flex items-center bg-cerulean-blue-800 ">
              Connect With Us
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
            </AppButton>
          </a>
        </div>
      </div>
    </section>
  );
};
export default LeaderSection;
