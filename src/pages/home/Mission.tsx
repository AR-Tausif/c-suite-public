
import Container from "@/components/Container";
import { ImageCard } from "./ImageCard";
import { SectionHeading } from "./SectionHeading";

export const Mission = () => {
  const listArr = [
    "Through stragtegic network and approach, bring together and engaging experts, for alignment and enablement of its agenda.",
    "Involving leaders and experts on relevant domains",
    "Associating and affiliating with credible organizations, platforms, agencies & institutions",
    "Through research and communication make recommendations",
    "Offer credible methologies for strategic networking and developments",
  ];
  return (
    <div className="py-20 w-full bg-white">
      <Container>
        <div className="flex gap-12 items-center max-md:flex-col">
          
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-4 w-full text-sm max-md:mt-10 max-md:max-w-full">
              <SectionHeading primary="Our" secondary="Mission" />
              <div className="mt-8 text-zinc-600 max-md:max-w-full">
                <p className="description-text">
                  A premier network of organizations and executives across
                  industries, that inculcates and promotes the modern, ethical
                  and responsible practices of people management and support
                  capacity development of the next generation leadership talents
                  of the nation ensuring the best placement of C-Level
                  Executives (CXOs) using resources gathered from the network,
                  understanding the needs of our clients.
                </p>
              </div>
              <div className="mt-8 mr-8 text-zinc-600 max-md:mr-2.5">
                {/* <p className="description-text">
                So Symbolsense and the team are well concerned each moment to be
                reason of satisfied clients smile
                </p> */}
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  {listArr.map((item) => (
                    <li key={item} className="flex gap-4 description-text">
                      <svg
                        className="w-3.5 h-3.5 mt-2 text-green-500 dark:text-green-400 flex-shrink-0"
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
          <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7d99abf1dfeeaae61d7b82a4fd596f9188f49b394fe692f3c4a4d8d176a22b?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9"
              alt="Vision illustration"
              className="grow aspect-[1.78] max-md:mt-10 max-md:max-w-"
            />
            <ImageCard
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf7d99abf1dfeeaae61d7b82a4fd596f9188f49b394fe692f3c4a4d8d176a22b?placeholderIfAbsent=true&apiKey=c164382b341b449397a4a0d906ba38f9"
              alt="Vision illustration"
              className="grow aspect-[1.78] max-md:mt-10 max-md:max-w-"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
