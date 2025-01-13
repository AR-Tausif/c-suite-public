import * as React from "react";
import { ExpertCardProps } from "./type";
import { Button } from "@/components/ui/button";
import { Expert } from "./Expert";
import { VerticalLine } from "./VerticalLine";
import DotDiv from "@/components/DotDiv";

export const ExpertCard: React.FC<ExpertCardProps> = ({ marketers, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="text-center">
        <Button className="bg-blue-500">{title}</Button>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center mr-5">
          <DotDiv/>
          <VerticalLine height="" className="h-9" />
        </div>
        <div className="">
          <div className="flex z-10 text-xs text-black">
            {marketers.map((marketer, index) => (
              <Expert
                key={index}
                index={index}
                arrLength={marketers.length}
                {...marketer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
