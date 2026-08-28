import { threeStarUmrahPackagesData } from "./3-starUmrahPackages";
import { fourStarUmrahPackagesData } from "./4-starUmrahPackage";
import { fiveStarUmrahPackagesData } from "./5-starUmrahPackage";

const NIGHTS_SLUG_BY_HEADING = {
  "7 NIGHTS PACKAGES": "7-nights",
  "10 NIGHTS PACKAGES": "10-nights",
  "14 NIGHTS PACKAGES": "14-nights",
};

const ALL_STAR_PACKAGES = [
  ...threeStarUmrahPackagesData,
  ...fourStarUmrahPackagesData,
  ...fiveStarUmrahPackagesData,
];

// Keyed by the `tier` route segment used at /hajj-umrah/[tier],
// e.g. "3-star-7-nights", "4-star-10-nights", "5-star-14-nights".
export const StarPackagesByTier = ALL_STAR_PACKAGES.reduce((acc, section) => {
  const tier = `${section.stars}-star-${NIGHTS_SLUG_BY_HEADING[section.heading]}`;

  acc[tier] = {
    heading: `${section.type} ${section.heading}`,
    stars: section.stars,
    cards: section.cards,
  };

  return acc;
}, {});
