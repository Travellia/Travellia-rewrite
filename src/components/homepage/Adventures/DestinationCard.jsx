import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

const DestinationCard = ({ destination }) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldShowDetails = isHovered;

  return (
    <Card
      className="relative bg-transparent overflow-hidden rounded-4xl border-none transition-all duration-500 ease-out cursor-pointer group"
      style={{
        width: "clamp(280px, 20vw, 380px)",
        height: "clamp(280px, 22vw, 400px)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div
        className={`relative h-full flex flex-col justify-between rounded-3xl transition-colors duration-300 mx-4 ${
          shouldShowDetails ? "bg-black/90 justify-start" : "justify-between items-center"
        }`}
      >
        <div
          className={`flex gap-1 justify-centertransition-all duration-300 ${
            shouldShowDetails ? "self-center mt-28" : "self-end"
          }`}
        >
          {[...Array(destination.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
        </div>

        {/* Bottom Content */}
        <div className="">
          {/* Title */}
          <h3 className="text-white text-3xl font-semibold text-center mt-3">
            {destination.title}
          </h3>

          {/* Description and Button - Only show on hover or if center card */}
          <div
            className={` transition-all duration-500 px-6 ${
              shouldShowDetails
                ? "block translate-y-0"
                : "hidden translate-y-4 pointer-events-none"
            }`}
          >
            {destination.description && (
              <p className="text-white/90 text-sm text-center leading-relaxed mt-3">
                {destination.description}
              </p>
            )}
            <div className="flex justify-center">
              <button className="text-primary hover:text-primary text-sm font-medium transition-colors mt-3">
                View all tours
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DestinationCard;
