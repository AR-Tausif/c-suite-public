import * as React from "react";
import { LeaderCardProps } from "./types";
import { Button } from "@/components/ui/button";

export const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  position,
  description,
  imageUrl
}) => {
  return (
    <article className="flex justify-center items-center gap-5 max-md:flex-col">
      <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Portrait of ${name}, ${position}`}
          className="object-contain grow w-full rounded-xl aspect-[0.81] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start self-stretch my-auto text-base font-medium max-md:mt-10 max-md:max-w-full">
          <h2 className="text-xl font-semibold text-black">{name}</h2>
          <p className="text-zinc-800">{position}</p>
          <p className="self-stretch mt-3.5 text-sm text-stone-400 max-md:max-w-full">
            {description}
          </p>
          <Button
            className="px-8 py-1.5 mt-4 max-w-full text-white whitespace-nowrap bg-blue-800 rounded w-[104px] max-md:px-5"
            aria-label={`View more details about ${name}`}
          >
            View
          </Button>
        </div>
      </div>
    </article>
  );
};