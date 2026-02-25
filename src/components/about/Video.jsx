import React from "react";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";
import Image from "next/image";

const Video = () => {
  return (
    <ContentLayoutWrapper>
      <div className="relative w-full h-[30vh] md:h-[40vh] xl:h-[50vh] rounded-3xl overflow-hidden">
        <Image
          src="/about/video/video.png"
          alt="Video thumbnail"
          fill
          className="object-cover"
          priority
        />
      </div>
    </ContentLayoutWrapper>
  );
};

export default Video;
