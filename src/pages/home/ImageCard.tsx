import * as React from "react";
import { ImageCardProps } from "./Types";

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className={`object-contain w-full rounded-xl shadow-xl ${className}`}
  />
);