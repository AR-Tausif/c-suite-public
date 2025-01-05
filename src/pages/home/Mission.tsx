import * as React from "react";
import { ImageCard } from "./ImageCard";
import { SectionHeading } from "./SectionHeading";

export const Mission: React.FC = () => {
  const missionImages = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e32c4cfc237a6e62dfbf176bbcc51695508897e80a6646c4e6f29ea76262ea8?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 1", className: "grow mt-5 aspect-[1.79] max-md:mt-10" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e9bbae55baf8c8574f060f428520ee25762e1607385fcfc850fbd5ddbc784ed?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 2", className: "grow aspect-[2.11] max-md:mt-6" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e32c4cfc237a6e62dfbf176bbcc51695508897e80a6646c4e6f29ea76262ea8?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 3", className: "grow mt-5 aspect-[1.79] max-md:mt-10" }
  ];

  return (
      <div className="flex flex-col pt-24 pb-10 w-full bg-stone-200 ">
         <div className="flex gap-48 items-center">
         <SectionHeading primary="Our" secondary="Mission" />
        <div className="flex items-center gap-10 w-full max-md:max-w-full">
            <div className="flex shrink-0 my-auto w-1 rounded-xl bg-stone-300 h-[34px]" />
          <div className="flex flex-wrap flex-auto gap-3 text-sm text-zinc-600">
            <div className="flex-auto max-md:max-w-full">
              Reciving inputs & then reploying clients with updates continuously
              are the strong process that each & every team members perceive as
              a top priority task. Symbolsense never hesitates to deal with tons
              of email for varification
            </div>
          </div>
        </div>
         </div>
        <div className="mt-16 ml-2.5 w-full max-w-[866px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {missionImages.map((image, index) => (
              <div key={index} className={`flex flex-col ${index === 1 ? 'w-2/5' : 'w-[30%]'} max-md:ml-0 max-md:w-full`}>
                <ImageCard {...image} />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};
