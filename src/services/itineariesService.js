import Itinearies from "@/lib/data/Itinearies";

export async function getItinearies() {
  return Itinearies;
}

export async function getItinearyById(id) {
  const intId = Number(id);
  return Itinearies.find((item) => item.id === intId);
}

