import * as React from "react";
import { HeadingProps } from "./Types";

export const SectionHeading: React.FC<HeadingProps> = ({ primary, secondary }) => (
  <div className="flex gap-3 text-4xl font-extrabold whitespace-nowrap">
    <div className="text-neutral-900">{primary}</div>
    <p className="basis-auto text-4xl font-extrabold bg-gradient-to-tl from-purple-600 to-red-500 bg-clip-text text-transparent">{secondary}</p>
  </div>
);