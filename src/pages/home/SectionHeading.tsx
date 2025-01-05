import * as React from "react";
import { HeadingProps } from "./Types";

export const SectionHeading: React.FC<HeadingProps> = ({ primary, secondary }) => (
  <div className="flex gap-3 text-3xl font-extrabold whitespace-nowrap">
    <div className="text-neutral-700">{primary}</div>
    <div className="basis-auto">{secondary}</div>
  </div>
);