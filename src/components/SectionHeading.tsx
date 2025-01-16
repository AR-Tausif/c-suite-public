import { ComponentType } from "@/interface";
import { FC } from "react";
interface IProps extends ComponentType {
  title: string;
  desc?: string;
}
const SectionHeading: FC<IProps> = ({ title, desc, className }) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
        {title}
      </h2>
      <div className="w-24 h-1 bg-cerulean-blue-800 mx-auto"></div>
      <p className="mt-6 text-xl text-gray-600">{desc}</p>
    </div>
  );
};

export default SectionHeading;
