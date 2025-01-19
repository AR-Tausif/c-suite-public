import { ComponentType } from "@/interface";
import { FC } from "react";
interface IProps extends ComponentType {
  title: string;
  desc?: string;
  titleTxtColor?: string;
}
const SectionHeading: FC<IProps> = ({
  title,
  desc,
  className,
  titleTxtColor
}) => {

  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2
        className={`text-4xl font-bold inline ${
          titleTxtColor ? titleTxtColor : "text-gray-900"
        }`}
      >
        {title} 
      </h2>
      {/* <div className="w-24 h-1 bg-red-600 mx-auto"></div> */}
      <p className="mt-1 mb-2 text-xl text-gray-600">{desc}</p>
      <div className={`max-w-md h-1 mt-3 bg-cerulean-blue-800 mx-auto`} style={{width: `${title.length*1.2}rem`}}></div>
    </div>
  );
};

export default SectionHeading;
