import BannerHero from "../../public/banner-hero.png";
import { Button } from "../components/ui/button";
const HeaderHero = () => {
  return (
    <div className="relative h-[80vh]">
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
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-gray-900 transform transition duration-500 hover:scale-105 flex justify-center items-center">
              CONTACT
            </Button>
          </a>
          <a href="#solution">
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-gray-900 transform transition duration-500 hover:scale-105 flex justify-center items-center">
              SOLUTION
            </Button>
          </a>
        </div>
      </div>

     
    </div>
  );
};
export default HeaderHero;
