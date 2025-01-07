import * as React from "react";
import { ImageCard } from "./ImageCard";
import { SectionHeading } from "./SectionHeading";
import Container from "@/components/Container";

export const Vission: React.FC = () => {
  // const missionImages = [
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e32c4cfc237a6e62dfbf176bbcc51695508897e80a6646c4e6f29ea76262ea8?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 1", className: "grow mt-5 aspect-[1.79] max-md:mt-10" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8e9bbae55baf8c8574f060f428520ee25762e1607385fcfc850fbd5ddbc784ed?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 2", className: "grow aspect-[2.11] max-md:mt-6" },
  //   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e32c4cfc237a6e62dfbf176bbcc51695508897e80a6646c4e6f29ea76262ea8?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9", alt: "Mission illustration 3", className: "grow mt-5 aspect-[1.79] max-md:mt-10" }
  // ];

  const listArr = [
    "Nation first",
    "Altruism",
    "Community development",
    "Ethics and Integrity",
    "Agility"
  ]
  return (
    <>
    
      {/* <div className="flex flex-col pt-24 pb-10 w-full bg-stone-200 ">
        <Container>
         <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center">
         <SectionHeading primary="Our" secondary="Mission" />
        <div className="flex items-center gap-10 w-full max-md:max-w-full">
            <div className="flex shrink-0 my-auto w-1 rounded-xl bg-stone-300 h-[34px]" />
          <div className="flex flex-wrap flex-auto gap-3 text-sm text-zinc-600">
            <div className="flex-auto max-md:max-w-full">
              <p className="description-text">
              Reciving inputs & then reploying clients with updates continuously
              are the strong process that each & every team members perceive as
              a top priority task. Symbolsense never hesitates to deal with tons
              of email for varification
              </p>
            </div>
          </div>
        </div>
         </div>
        <div className="mt-16 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center gap-5 max-md:flex-col">
            {missionImages.map((image, index) => (
              <div key={index} className={`flex flex-col ${index === 1 ? 'w-2/5' : 'w-[30%]'} max-md:ml-0 max-md:w-full`}>
                <ImageCard {...image} />
              </div>
            ))}
          </div>
        </div>
        </Container>
      </div> */}

      <div className="py-20 w-full bg-white">
          <Container>
        <div className="flex gap-20 max-md:flex-col">
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7d99abf1dfeeaae61d7b82a4fd596f9188f49b394fe692f3c4a4d8d176a22b?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9"
              alt="Vision illustration"
              className="grow aspect-[1.78] max-md:mt-10 max-md:max-w-"
            />
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 w-full text-sm max-md:mt-10 max-md:max-w-full">
              <SectionHeading primary="Our" secondary="Vission" />
              <div className="mt-8 text-zinc-600 max-md:max-w-full">
                <p className="description-text">
                A premier forum of leaders and experts with a goal to nurture and promote capacity of executives and leaders to overcome challenges of today and tomorrow by empoweringf them with access to large community of business in the country.
                </p>
              </div>
              <div className="mt-8 mr-8 text-zinc-600 max-md:mr-2.5">
                {/* <p className="description-text">
                So Symbolsense and the team are well concerned each moment to be
                reason of satisfied clients smile
                </p> */}

<ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  {listArr.map((item) => (
                    <li key={item} className="flex items-center description-text">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        </Container>
      </div>
      </>
  );
};
