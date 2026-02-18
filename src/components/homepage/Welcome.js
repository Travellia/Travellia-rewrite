import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselWrapper from "@/components/ui/carousel";

export default function Welcome() {
  const slide = [{ id: 1, image: "/home/welcome/welcome.png" }];

  return (
    <section className="h-[65vh] md:h-[72vh] relative lg:h-[77vh] xl:h-screen max-w-[100vw] flex items-center justify-center ">
      <CarouselWrapper
        slides={slide}
        className={"!absolute"}
        navigation={true}
      />
      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-7 z-10">
        <h2 className="w-full text-center font-bold text-primary tracking-widest text-[clamp(3rem,10vw,12rem)]">
          TRAVELLIA
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
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
