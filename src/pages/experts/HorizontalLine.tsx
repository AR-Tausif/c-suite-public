import { ComponentType } from "@/interface";

interface TProps extends ComponentType {
  index: number;
  arrLength: number;
}
export const HorizontalLine = ({ index, arrLength }: TProps) => {
  return (
    <div className="flex">
      <div className={`${index === 0 ? "" : "bg-black"} w-[50%] h-0.5`} />
      <div
        className={`${
          index === arrLength - 1 ? "" : " bg-black"
        } w-[50%] h-0.5`}
      />
    </div>
  );
};

// <div
//   className={`flex shrink-0 mt-0 mr-14 max-w-full ${height ? "h-[" + height +"]" : "h-0.5"} bg-gray-500 w-[${width}] max-md:mr-2.5`}
//   role="presentation"
// />
