import Welcome from "@/components/homepage/Welcome";
import OfferedServices from "@/components/homepage/OfferedServices";
import Adventures from "@/components/homepage/Adventures";
import PopularDestination from "@/components/homepage/PopularDestination";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Welcome />
      <OfferedServices />
      <Adventures />
      <PopularDestination />
    </div>
  );
}
