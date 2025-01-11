import * as React from "react";
import { ExpertProps } from "./type";
import { VerticalLine } from "./VerticalLine";

export const Expert: React.FC<ExpertProps> = ({
  imageSrc,
  title,
  alt,
}) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      {/* <VerticalLine height={height!} /> */}

    <div className="flex flex-col items-center justify-center">
    <VerticalLine height="10rem" />
      <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
      
    </div>
      <div className="flex flex-col items-center">
        <img
          loading="lazy"
          src={imageSrc}
          alt={alt}
          className="object-contain self-center rounded-full aspect-square w-[55px]"
        />
        <div className="mt-1.5">{title}</div>
      </div>
    </div>
  );
};
