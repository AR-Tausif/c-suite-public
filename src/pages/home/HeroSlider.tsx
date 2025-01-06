
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function HeroSlider() {
  return (
    <Carousel className="w-screen max-h-screen overflow-hidden">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-full">
            {/* <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-500">
              
            </div> */}
            <div className="relative w-full h-full">
              <img src="https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg" width={"100%"} height="80vh" alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

