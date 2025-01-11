import * as React from "react";
import { ExpertCardProps } from "./type";
import { Button } from "@/components/ui/button";
import { Expert } from "./Expert";

export const ExpertCard: React.FC<ExpertCardProps> = ({marketers}) => {
  return (
    <div className="flex flex-col space-y-5">
    <div className="text-center">
      <Button className="bg-blue-500">SQL</Button>
    </div>

    <div className="flex z-10 flex-col pr-8 pl-16 mt-0 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex z-10 gap-1 text-xs text-black">
        {marketers.map((marketer, index) => (
          <Expert key={index} index={index} arrLength={marketers.length} {...marketer} />
        ))}
      </div>
    </div>
  </div>
  );
};
