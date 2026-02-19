import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const OurPopularCard = ({ data }) => {
  return (
    <Card
      className={`
    group relative 
    h-[clamp(380px,32vw,500px)] 
    bg-transparent 
    !p-4 
    overflow-hidden
    after:absolute 
    after:inset-0 
    after:bg-black/45 
    after:rounded-lg
    after:z-0
  `}
    >
      <Image
        src={data.src}
        alt={`${data.country}, ${data.city}`}
        fill
        loading="lazy"
        className="absolute top-0 left-0 object-cover rounded-lg z-0"
      />

      <div className="flex flex-col justify-between h-full z-10">
        <div className="flex justify-between items-center">
          <h2 className="flex items-center gap-1">
            <FaMapMarkerAlt className="inline-block text-primary" />
            <span className="text-white font-semibold uppercase text-lg hovwe:text-2xl">
              {data.country}, {data.city}
            </span>
          </h2>
          <div className="flex items-center gap-1">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl uppercase text-white/90 font-semibold mb-1 tracking-wide text-xl group-hover:text-3xl">
            Discover {data.country}
          </h1>
          <p className="text-[13px] text-gray-200">{data.description}</p>
          <div className="hidden group-hover:flex duration-500 items-center justify-between">
            <div>
              <span className="text-xl uppercase font-bold text-primary">
                ${data.price}
              </span>
              <span className="text-sm text-gray-200">/per person</span>
            </div>
            <div>
              <span className="text-sm text-gray-200 uppercase">
                {data.duration}
              </span>
            </div>
          </div>
          {data.tags && (
            <div className="hidden  group-hover:flex duration-500 gap-1 items-center justify-between">
              <div className="flex flex-wrap gap-2 mt-2">
                {data.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-block bg-white/90 text-gray-700 text-[0.5rem] font-semibold px-2 py-1 rounded-full mt-2 uppercase"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <Button className={"uppercase text-white rounded-full"}>
                Book now
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default OurPopularCard;
