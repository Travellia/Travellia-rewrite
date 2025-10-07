import Welcome from "@/components/homepage/Welcome";
import OfferedServices from "@/components/homepage/OfferedServices";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] bg-background">
      <Welcome />
      <OfferedServices />
    </div>
  );
}
