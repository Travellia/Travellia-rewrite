import React from "react";
import TestimonialCard from "@/components/common/Testimonial/TestimonialCard";

// Single review card; shares its design with the testimonial carousel cards.
const ProfileCard = ({ data }) => (
  <TestimonialCard
    className="shadow-lift"
    testimonial={{
      comment: data.comment.replace(/^"|"$/g, ""),
      user: { name: data.name, location: data.location, src: data.src, alt: data.name },
    }}
  />
);

export default ProfileCard;
