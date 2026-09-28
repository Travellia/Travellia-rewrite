import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const UmrahPackageCard = ({ data }) => {
  return (
    <Card className="w-full overflow-hidden p-2 !gap-3 flex flex-col">
      {/* Image Header */}
      <div className="relative h-48 w-full rounded-xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <CardHeader className="pb-1 !px-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary">{data.title}</h3>

        {/* Star Rating */}
        <div className="flex gap-1 mt-2">
          {[...Array(data.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
      </CardHeader>

      <CardContent className="pb-1 !px-3 flex-1">
        <ul className="space-y-2 text-sm text-gray-700">
          {data.features.map((feature, i) => {
            return (
              <li className="flex items-start" key={i}>
                <span className="mr-1 text-primary">●</span>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-3 py-3 border-t !px-3">
        <Button asChild className="btn-main w-full">
          <Link href={data.href}>Book Now</Link>
        </Button>
        <p className="text-sm text-gray-600">
          Starting from{" "}
          <span className="text-2xl font-bold text-primary">
            £{data.price}
          </span>{" "}
          per person
        </p>
      </CardFooter>
    </Card>
  );
};

export default UmrahPackageCard;
