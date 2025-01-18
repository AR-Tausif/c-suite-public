import { FC } from "react";
import { Button } from "./ui/button";
import { ComponentType } from "@/interface";

interface IAppButton extends ComponentType {
  type?: "submit" | "reset" | "button" | undefined,
}
const AppButton: FC<IAppButton> = ({ children, ...props }) => {
  return (
    <Button className={`text-lg font-semibold text-white rounded-full hover:shadow-lg transition-all duration-300 ${props.className} py-6 px-8`} type={props.type? props.type : "button"}>
      {children}
    </Button>
  );
};

export default AppButton;
