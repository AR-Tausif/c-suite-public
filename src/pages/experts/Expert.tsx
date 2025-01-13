import * as React from "react";
import { ExpertProps } from "./type";
import { VerticalLine } from "./VerticalLine";
import DotDiv from "@/components/DotDiv";
import { HorizontalLine } from "./HorizontalLine";

export const Expert: React.FC<ExpertProps> = ({
  index,
  arrLength,
  imageSrc,
  title,
  alt,
}) => {
  return (
    <div className="">
      <HorizontalLine arrLength={arrLength} index={index} />
      <div className="flex flex-col  items-center justify-center gap-1">
        <div className="flex flex-col items-center justify-center">
          <VerticalLine height="" className="h-8" />
          <DotDiv />
        </div>
        <div className="flex flex-col items-center px-2">
          <img
            loading="lazy"
            src={imageSrc}
            alt={alt}
            className="object-contain self-center rounded-full aspect-square w-[55px]"
          />
          <div className="mt-1.5 text-center">{title}</div>
        </div>
      </div>
    </div>
  );
};
