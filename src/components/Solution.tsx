import Container from "./Container";
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
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate__animated animate__fadeIn">
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

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
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300 animate__animated animate__pulse animate__infinite"
          >
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;
