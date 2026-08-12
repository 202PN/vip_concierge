/*
  Service architecture — two groups.
  Used by Header (dropdown), Footer, Home, and /services so the IA never drifts.
*/
export interface ServiceItem {
  name: string;
  href: string;
  note: string;
}

export interface ServiceGroup {
  title: string;
  blurb: string;
  items: ServiceItem[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: "Transportation",
    blurb: "Armored and executive transportation, planned and operated by professionals.",
    items: [
      {
        name: "Armored Transportation",
        href: "/armored-transportation",
        note: "Level 6 ballistic fleet, certified security chauffeurs",
      },
      {
        name: "Executive & Group Transportation",
        href: "/executive-corporate-transportation",
        note: "Mercedes S580 and Escalade to Sprinter, Sienna, party bus, and coach",
      },
    ],
  },
  {
    title: "Concierge Services",
    blurb: "Accommodation, travel, and document services for institutional clients.",
    items: [
      {
        name: "Furnished Apartments",
        href: "/furnished-apartments",
        note: "Delegation and extended-stay residences",
      },
      {
        name: "Travel Arrangement",
        href: "/travel-arrangement",
        note: "Private jet charter and multi-city itineraries",
      },
      {
        name: "Document Authentication",
        href: "/document-authentication",
        note: "Apostille and embassy legalization",
      },
    ],
  },
];

export const allServices: ServiceItem[] = serviceGroups.flatMap((g) => g.items);
