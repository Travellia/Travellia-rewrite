import React from "react";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";
import Image from "next/image";

const Video = () => {
  return (
    <ContentLayoutWrapper>
      <div className="relative h-[30vh] w-full overflow-hidden rounded-frame shadow-lift md:h-[45vh] xl:h-[55vh]">
        <Image
          src="/about/video/video.png"
          alt="Video thumbnail"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </ContentLayoutWrapper>
  );
};

export default Video;
