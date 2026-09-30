import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowIcon from "@/components/ui/ArrowIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Incredible Destinations",
    description:
      "Discover handpicked holiday destinations and family-friendly getaways, planned around you.",
    iconPath: "/home/offered-services/destination.webp",
    href: "/holidayPackages",
  },
  {
    title: "Best Flight Options",
    description:
      "Compare fares from trusted airlines and fly from your nearest UK airport at the best price.",
    iconPath: "/home/offered-services/flight-route.webp",
    href: "/flights",
  },
  {
    title: "Hajj / Umrah Tours",
    description:
      "All-inclusive Hajj and Umrah packages with flights, visa, hotels near the Haram and Ziyarat.",
    iconPath: "/home/offered-services/religion.webp",
    href: "/hajj-umrah",
  },
  {
    title: "Luxury Accommodation",
    description:
      "Comfortable, well-located hotels and resorts, from 3-star value stays to 5-star luxury.",
    iconPath: "/home/offered-services/five.webp",
    href: "/hotels",
  },
];
export default function BestServices() {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          align="center"
          eyebrow="Why Travellia"
          title={
            <>
              We offer the best <em>services.</em>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="h-full">
              <article className="group flex h-full flex-col gap-5 rounded-card border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:bg-ink hover:text-white hover:shadow-lift">
                <span className="grid size-16 place-items-center rounded-full bg-sand transition-colors group-hover:bg-white">
                  <Image src={service.iconPath} alt="" width={36} height={36} className="object-contain" />
                </span>
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="flex-1 text-ink/65 transition-colors group-hover:text-white/70">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="flex items-center justify-between rounded-full bg-sand py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink transition-colors group-hover:bg-gold"
                >
                  Book Now
                  <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
                    <ArrowIcon className="size-4" />
                  </span>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
}
