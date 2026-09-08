import { getHotelInfo } from "./hotelInfo";

// Builds the Makkah/Madinah hotel blocks shown at
// /hajj-umrah/[tier]/umrahDetail from the package card the user clicked,
// so the carousels show that package's hotels instead of a fixed pair.

const parseNights = (nights) => {
  const total = nights?.match(/^(\d+)\s*Nights?/i);
  const split = nights?.match(/\((\d+)\s*Makkah\s*\+\s*(\d+)\s*Madinah\)/i);

  return {
    totalNights: total?.[1] ?? null,
    makkahNights: split?.[1] ?? null,
    madinahNights: split?.[2] ?? null,
  };
};

const buildStayItem = (card, stars) => {
  const { totalNights, makkahNights, madinahNights } = parseNights(card.nights);

  const title = totalNights ? `${totalNights} Nights Stay` : "Your Stay";
  const content =
    makkahNights && madinahNights
      ? `${makkahNights} Nights in Makkah + ${madinahNights} Nights in Madinah at ${stars}-star hotels near Haram and Masjid-e-Nabawi.`
      : `Accommodation at ${stars}-star hotels near Haram and Masjid-e-Nabawi.`;

  return {
    id: 1,
    image: "/umrahDetail/umrahPackage/bed.png",
    alt: "bed",
    title,
    content,
  };
};

const SHARED_PACKAGE_ITEMS = [
  {
    id: 2,
    image: "/umrahDetail/umrahPackage/car.png",
    alt: "car",
    title: "Transport",
    content:
      "Air-conditioned transfers included for airport pickup/drop and Makkah–Madinah travel.",
  },
  {
    id: 3,
    image: "/umrahDetail/umrahPackage/visa.png",
    alt: "visa",
    title: "Visa Processing",
    content: " Complete Umrah visa services included in the package.",
  },
  {
    id: 4,
    image: "/umrahDetail/umrahPackage/support.png",
    alt: "support",
    title: "Support",
    content:
      " 24/7 assistance by our dedicated ground staff throughout your journey.",
  },
  {
    id: 5,
    image: "/umrahDetail/umrahPackage/meal.png",
    alt: "meal",
    title: "Meals",
    content:
      "Not included – enjoy the freedom to choose from nearby restaurants.",
  },
];

// The last image of each hotel set is a portrait/odd-ratio shot, so it is
// letterboxed rather than cropped inside the carousel.
const withFit = (images = []) =>
  images.map((image, index) =>
    index === images.length - 1 && images.length > 1
      ? { src: image, fit: "contain" }
      : image
  );

export const buildHotelPackageDetails = (card, stars) => {
  const stayItem = buildStayItem(card, stars);
  const packages = [stayItem, ...SHARED_PACKAGE_ITEMS];

  return {
    makkah: {
      heading: "MAKKAH HOTEL PACKAGE",
      desc: card.makkah,
      image: "/umrahDetail/umrahPackage/makkahHotel.png",
      images: withFit(card.makkahImages),
      alt: card.makkah,
      stars,
      info: getHotelInfo(card.makkah),
      packages,
    },
    madinah: {
      heading: "MADINAH HOTEL PACKAGE",
      desc: card.madinah,
      image: "/umrahDetail/umrahPackage/madinahHotel.png",
      images: withFit(card.madinahImages),
      alt: card.madinah,
      stars,
      info: getHotelInfo(card.madinah),
      packages,
    },
  };
};
