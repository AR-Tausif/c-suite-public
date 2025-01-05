import * as React from "react";
import { LeaderCardProps } from "./types";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DrwerDetails } from "./DrawerDetails";

export const LeaderCard: React.FC<LeaderCardProps> = ({
  name,
  position,
  description,
  imageUrl,
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

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="mt-3 hover:bg-blue-600 hover:text-zinc-100"
                aria-label={`View more details about ${name}`}
              >
                View details
              </Button>
            </DialogTrigger>
            <DrwerDetails/>
          </Dialog>
        </div>
      </div>
    </article>
  );
};
