import { ComponentType } from "@/interface";

interface TProps extends ComponentType {
    height?: string;
    width: string;
}
export const HorizontalLine = ({ width, height,  }: TProps) => {
  return (
    <div
      className={`flex shrink-0 mt-0 mr-14 max-w-full ${height ? "h-[" + height +"]" : "h-0.5"} bg-gray-500 w-[${width}] max-md:mr-2.5`}
      role="presentation"
    />
  );
};
