import BannerHero from "../../public/banner-hero.png";
import Container from "../components/Container";
import { Button } from "../components/ui/button";
const HeaderHero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="max-h-[80vh] min-h-[80vh]"
        style={{
          backgroundImage: `url(${BannerHero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      ></div>
      <div className="absolute py-20 px-16 bg-red-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 centered">
        <h1 className="text-4xl font-semibold text-center text-white tracking-tight">
          Rapid evolution of the corporate world
        </h1>
        <div className="flex justify-center items-center gap-5 mt-5 text-xl">
          <a href="#contact">
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-gray-100">
              CONTACT
            </Button>
          </a>
          <a href="#solution">
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-gray-100">
              SOLUTION
            </Button>
          </a>
        </div>
      </div>

      <Container>
        <div className="flex justify-between items-center py-6 border-b">
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
    </div>
  );
};
export default HeaderHero;
