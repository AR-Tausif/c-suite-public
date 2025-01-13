import * as React from "react";
import { ExpertProps } from "./type";
import { VerticalLine } from "./VerticalLine";
import DotDiv from "@/components/DotDiv";
import { HorizontalLine } from "./HorizontalLine";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

export const Expert: React.FC<ExpertProps> = ({
  index,
  arrLength,
  imageSrc,
  title,
  alt,
  name,
}) => {
  return (
    <div>
      <HorizontalLine arrLength={arrLength} index={index} />
      <div className="flex flex-col  items-center justify-center gap-1">
        <div className="flex flex-col items-center justify-center">
          <VerticalLine height="" className="h-8" />
          <DotDiv />
        </div>
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex flex-col items-center px-2">
              <img
                loading="lazy"
                src={imageSrc}
                alt={alt}
                className="object-contain self-center rounded-full aspect-square w-[55px]"
              />
              <div className="mt-1.5 text-center">{title}</div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src={imageSrc} />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@{name}</h4>
                <p className="text-sm">
                  {alt}
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
};
