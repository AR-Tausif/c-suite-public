import * as React from 'react';
import { NumberedItemProps } from './type';

export const NumberedItem: React.FC<NumberedItemProps> = ({ number, text, showLine = false, lineWidth }) => {
  return (
    <div className="flex gap-1.5">
      <div className="px-3 w-8 h-8 text-sm rounded-full bg-zinc-300" role="presentation">
        {number}
      </div>
      <div className="my-auto text-base">{text}</div>
      {showLine && (
        <div className={`flex shrink-0 my-auto h-0.5 bg-zinc-300 ${lineWidth}`} role="presentation" />
      )}
    </div>
  );
};