import AppButton from "./AppButton";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import SolutionContentBox from "./SolutionContentBox";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const Solution = () => {
  const solutionData = [
    {
      title: "Digital Strategy",
      content:
        "Comprehensive digital transformation strategies tailored to your business needs.",
      bg: "from-blue-600 to-purple-600",
    },
    {
      title: "Process Optimization",
      content:
        "Streamline operations and enhance efficiency through modern solutions.",
      bg: "from-purple-600 to-pink-600",
    },
    {
      title: "Innovation Lab",
      content: "Cutting-edge solutions leveraging the latest technologies.",
      bg: "from-pink-600 to-red-600",
    },
  ];
  return (
    <section id="solution" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Our Solution" />

        {/* content upgoing here */}
        <Container>
          <div className="flex justify-center items-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-6xl"
            >
              <CarouselContent>
                {solutionData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="">
                          <SolutionContentBox item={item} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Container>

        <div className="mt-20 text-center">
          <a href="#contact">
            <AppButton className="">
              Get Started
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </AppButton>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
