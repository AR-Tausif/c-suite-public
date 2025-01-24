import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import SolutionContentBox from "@/components/SolutionContentBox";

export default function Solution() {
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
    {
      title: "Innovation Lab",
      content: "Cutting-edge solutions leveraging the latest technologies.",
      bg: "from-pink-600 to-red-600",
    },
  ];
  return (
    <Container className="py-20">
      <SectionHeading title="Solution" />
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl"
      >
        <CarouselContent className="p-4">
          {solutionData.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="">
                  <CardContent className="flex aspect-square items-center justify-center">
                    {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
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
    </Container>
  );
}
