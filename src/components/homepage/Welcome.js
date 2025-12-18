"use client";

import { useState, useEffect } from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import CarouselWrapper from "@/components/ui/carousel";

export default function Welcome() {
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const slides = [
    { id: 1, image: "/home/welcome/welcome.jpg" },
    { id: 2, image: "/home/welcome/welcome2.jpg" },
    { id: 3, image: "/home/welcome/welcome3.jpg" },
  ];

  return (
    <section className="relative h-screen max-w-[100vw] flex items-center justify-center">
      <CarouselWrapper slides={slides} className={"!absolute"} navigation={showNavigation} />
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
