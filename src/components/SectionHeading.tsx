import { ComponentType } from "@/interface";
import { FC } from "react";
interface IProps extends ComponentType {
  title: string;
  desc?: string;
  titleClassName?:string;
}
const SectionHeading: FC<IProps> = ({ title, desc, className, titleClassName }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className={`text-4xl font-bold text-gray-900 border-b-[3px] border-b-red-600 inline pb-3 mb-4 ${titleClassName}`}>
        {title}
      </h2>
      {/* <div className="w-24 h-1 bg-red-600 mx-auto"></div> */}
      <p className="mt-6 text-xl text-gray-600">{desc}</p>
    </div>
  );
};

export default SectionHeading;
