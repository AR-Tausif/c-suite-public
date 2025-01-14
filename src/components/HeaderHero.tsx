import BannerHero from "../../public/banner-hero.png";
import { Button } from "./ui/button";
const HeaderHero = () => {
  return (
    <div className="relative">

    <div
      className="max-h-[70vh] min-h-[70vh]"
      style={{
        backgroundImage: `url(${BannerHero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "cover"
      }}
    >
    </div>
        <div className="absolute py-20 px-16 bg-red-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 centered">
            <h1 className="text-4xl font-semibold text-center text-white tracking-tight">Rapid evolution of the corporate world</h1>
            <div className="flex justify-center items-center gap-5 mt-5 text-xl">
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-red-700">Contact</Button>
            <Button className="py-5 bg-gray-100 px-8 text-slate-800 text-xl hover:text-red-700">Sale</Button>
            </div>
        </div>
    </div>
  );
};
export default HeaderHero;
