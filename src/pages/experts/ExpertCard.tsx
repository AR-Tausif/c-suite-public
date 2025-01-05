import * as React from 'react';
import { ExpertCardProps } from './type';

export const ExpertCard: React.FC<ExpertCardProps> = ({ imageSrc, title, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={alt}
        className="object-contain self-center rounded-full aspect-square w-[55px]"
      />
      <div className="mt-1.5">{title}</div>
    </div>
  );
};