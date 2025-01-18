import AppButton from "../components/AppButton";
import EmblaCarousel from "../components/EmblaCarousel";
import SectionHeading from "../components/SectionHeading";

const ExpertTeam = () => {
  const OPTIONS = { dragFree: true, loop: false, slidesToScroll: "auto" };
  const SLIDE_COUNT = 15;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <section id="experts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Expert Team" desc="Meet our team of experienced professionals" />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <div className="text-center">
          <a href="#contact">
            <AppButton className="inline-flex items-center">
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
            </AppButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
