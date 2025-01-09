import Container from "@/components/Container";
import { HeroSlider } from "./HeroSlider";
import { Mission } from "./Mission";
import { Vission } from "./Vission";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <div className="py-10 bg-gray-100">
      <Container>
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">WHAT IS C- SUITE?</h2>
          <p className="w-2/4 description-text">
            A dynamic partner of engagement, placement, assessment, recruitment
            and development solutions, delivering unparalleled C-Level
            leadership expertise as strategic lifeline for, established,
            transforming or startup companies during transition, challenges and
            distinct projects.
          </p>
        </div>
      </Container>
      </div>
      <Mission />
      <Vission />
    </div>
  );
};

export default Home;
