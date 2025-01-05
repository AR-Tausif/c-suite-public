import * as React from "react";
import { ExpertCardProps } from "./type";
import { VerticalLine } from "./VerticalLine";

export const ExpertCard: React.FC<ExpertCardProps> = ({
  imageSrc,
  title,
  alt,
  height,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <VerticalLine height={height!} />
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
