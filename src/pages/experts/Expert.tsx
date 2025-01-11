import * as React from "react";
import { ExpertProps } from "./type";
import { VerticalLine } from "./VerticalLine";

export const Expert: React.FC<ExpertProps> = ({
  index,
  arrLength,
  imageSrc,
  title,
  alt,
}) => {
  return (
    <div className="">
      <div className="flex">
        <div className={`${index === 0 ? "" : "bg-zinc-300"} w-[50%] h-0.5`} />
        <div
          className={`${
            index === arrLength - 1 ? "" : " bg-zinc-300"
          } w-[50%] h-0.5`}
        />
      </div>
      <div className="flex flex-col  items-center justify-center gap-1">
        <div className="flex flex-col items-center justify-center">
          <VerticalLine height="" className="h-20" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
        </div>
        <div className="flex flex-col items-center px-8">
          <img
            loading="lazy"
            src={imageSrc}
            alt={alt}
            className="object-contain self-center rounded-full aspect-square w-[55px]"
          />
          <div className="mt-1.5">{title}</div>
        </div>
      </div>
    </div>
  );
};
