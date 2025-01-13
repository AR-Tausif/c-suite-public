import { ComponentType } from "@/interface";

interface IProps extends ComponentType {
  height: string;
}
export const VerticalLine = ({ height, className }: IProps) => {
  return (
    <div
      className={`flex shrink-0 w-0.5 bg-black h-[${height}] ${className ? className : ""}`}
      role="presentation"
    />
  );
};
