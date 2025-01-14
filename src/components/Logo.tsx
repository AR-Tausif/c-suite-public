import { ComponentType } from "@/interface";
import LogoImage from "../../public/logo.png";
import { FC } from "react";

const Logo: FC<ComponentType> = ({ className }) => {
  return (
    <div className="">
      <img
        src={LogoImage}
        alt="logo image"
        className={`${className ? className : "max-w-36"}`}
      />
      {/* <h1 className="text-white font-bold text-xl">ServicePro</h1> */}
    </div>
  );
};
export default Logo;
