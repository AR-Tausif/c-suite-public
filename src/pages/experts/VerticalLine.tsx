import { ComponentType } from "@/interface";

interface IProps extends ComponentType {
  height: string;
}
export const VerticalLine = ({ height }: IProps) => {
  return (
    <div
      className={`flex shrink-0 w-0.5 bg-zinc-300 h-[${height}]`}
      role="presentation"
    />
  );
};
