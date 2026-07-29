export interface Office {
  id: "ny" | "lahore";
  city: string;
  country: string;
  pinColor: "blue" | "orange";
}

export const offices: Office[] = [
  { id: "ny", city: "Tuxedo, New York", country: "United States", pinColor: "blue" },
  { id: "lahore", city: "Lahore", country: "Pakistan", pinColor: "orange" },
];
