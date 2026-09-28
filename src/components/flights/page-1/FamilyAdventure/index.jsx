import Image from "next/image";
import React from "react";
import { PhoneCall } from "lucide-react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/SectionHeading";

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper>
        <div className="grid overflow-hidden rounded-frame border border-line bg-white shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[300px] lg:min-h-[480px]">
            <Image
              src="/home/adventure/5.jpg"
              alt="Traveller on a swing above the jungle in Bali"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
            <Eyebrow>Family adventures</Eyebrow>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink md:text-5xl">
              Book your flights
              <br />
              <em className="font-serif font-normal normal-case tracking-normal text-gold">
                effortlessly.
              </em>
            </h2>
            <p className="max-w-lg leading-relaxed text-ink/65">
              Enjoy seamless booking to our top family-friendly destinations.
              Whether it&apos;s theme parks, wildlife safaris, interactive
              museums, or outdoor activities, embark on exciting adventures and
              create lasting memories with your loved ones in safe, fun-filled
              environments.
            </p>
            <p className="flex items-center gap-3 font-semibold text-ink">
              <span className="grid size-10 place-items-center rounded-full bg-sand text-gold-deep">
                <PhoneCall className="size-4" />
              </span>
              Agent will be in touch with you.
            </p>
            <ArrowButton href="#plan-your-trip">Request a call</ArrowButton>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
