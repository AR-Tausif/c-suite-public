import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const imgArr = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/6483579/pexels-photo-6483579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/7693201/pexels-photo-7693201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
export function HeroSlider() {
  return (
    <Carousel className="w-[100%] max-h-[70vh] overflow-hidden">
      <CarouselContent>
        {imgArr.map((item, index) => (
          <CarouselItem key={index} className="w-full h-full">
            {/* <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-500">
              
            </div> */}
            <div className="relative w-full h-full">
              <img src={item.img} width={"100%"} height="70vh" alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
