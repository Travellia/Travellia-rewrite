import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative h-[100vh] w-[100vw] flex items-center justify-center">
      <Carousel className="absolute w-full h-full z-1">
        <CarouselContent className={"w-full h-full relative"}>
          <CarouselItem>
            <Image
              src="/home/welcome/welcome.jpg"
              alt="Scenic mountain view for travel"
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/home/welcome/welcome2.jpg"
              alt="Scenic mountain view for travel"
              fill
              className="object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/home/welcome/welcome3.jpg"
              alt="Scenic mountain view for travel"
              fill
              className="object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent border-none text-white" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent border-none text-white" />
      </Carousel>
      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-4 z-10">
        <h2 className="w-full text-center font-bold text-primary tracking-widest text-[clamp(4rem,10vw,12rem)]">
          TRAVELLIA
        </h2>
        <div className="flex items-center justify-center gap-6">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/70 rounded-full px-6 py-3 flex items-center gap-2"
          >
            <p className="font-semibold">Explore Our Tours</p>
            <FaArrowRightLong />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-primary hover:bg-primary/20 hover:text-primary rounded-full px-6 py-3 flex items-center gap-2 border border-primary"
          >
            <p className="font-semibold">Explore Our Tours</p>
            <FaArrowRightLong />
          </Button>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
}
