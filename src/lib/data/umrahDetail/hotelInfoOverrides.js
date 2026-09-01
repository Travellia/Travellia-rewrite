// Hand-maintained hotel info for hotels that have no Word document in
// "references/Holy Travellers Misc Material/Hotels/...".
//
// This file is NOT generated -- entries here win over hotelInfo.js and survive
// re-running scripts/generate-hotel-info.py. Edit it freely.
//
// Shape matches the generated data: { city, stars, highlights, description,
// facilities: [{ category, items }] }.

export const HOTEL_INFO_OVERRIDES = {
  // Emaar Khalil is the one hotel in the package data with no reference
  // document, so this entry was assembled from public listings in Aug 2026
  // rather than from client material. UNVERIFIED -- please confirm with the
  // hotel before treating any of it as final. Notes on what the sources
  // disagreed about:
  //   * Wi-Fi     -- 4 of 5 listings say free Wi-Fi, one says none. Included.
  //   * Parking   -- sources split; omitted rather than guess.
  //   * Restaurant-- consistently reported as NOT on site, so only the paid
  //                  buffet breakfast is listed here.
  //   * Stars     -- trip.com says 2-star; the client's own price documents
  //                  (3 Star Umrah Pacakges.docx, Prices for DECEMBER.docx)
  //                  list it in 3-star packages, so 3 is used here.
  "Emaar Khalil": {
    city: "Makkah",
    stars: 3,
    highlights: [
      "Free Wi-Fi",
      "24-hour services",
      "Air conditioning",
      "Breakfast",
    ],
    description: [
      "Emaar Al Khalil Hotel sits on Ibrahim Al Khalil Street in the Mesfala district of Makkah, around 800 metres from Masjid al-Haram — roughly a 10 to 12 minute walk depending on the route and the crowds.",
      "The hotel offers air-conditioned rooms with a flat-screen TV, an electric kettle and a safe, with cots and extra bedding available on request. A 24-hour reception, daily housekeeping, luggage storage and lockers are provided for pilgrims.",
      "A buffet breakfast is served each morning for an additional charge. There is no restaurant on site, but cafes and restaurants are within a short walk of the hotel.",
    ],
    facilities: [
      {
        category: "General",
        items: [
          "24-hour reception",
          "Lift",
          "Luggage storage",
          "Locker room",
          "On-site prayer area",
          "Smoking area",
          "No pets allowed",
        ],
      },
      {
        category: "Internet",
        items: ["Free Wi-Fi"],
      },
      {
        category: "Dining",
        items: ["Buffet breakfast (surcharge)", "Halal meals"],
      },
      {
        category: "Room Amenities",
        items: [
          "Air conditioning",
          "Flat-screen TV",
          "Satellite channels",
          "Electric kettle",
          "Safe deposit box",
          "Ironing facilities on request",
          "Cots",
        ],
      },
      {
        category: "Bathroom",
        items: ["Private bathroom", "Free toiletries"],
      },
      {
        category: "Services",
        items: ["Daily housekeeping", "Laundry", "Concierge services"],
      },
      {
        category: "Safety",
        items: [
          "CCTV in common areas",
          "CCTV outside property",
          "Smoke alarms",
          "Fire extinguishers",
          "Key card access",
        ],
      },
    ],
  },
};
