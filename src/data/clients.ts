/*
  Client register — the home page logo wall.
  A client either names a monochrome logo in src/assets/clients/ (from
  Wikimedia Commons or supplied by the owner) or is typeset as a wordmark:
  a title and an optional tracked line beneath it. A note names the office
  when the logo alone doesn't (a national emblem, say).

  Order matters: the strip loops, so keep clients that share a logo apart.
*/
export type ClientLogo =
  | "mayo"
  | "hss"
  | "bmc"
  | "childrens"
  | "hopkins"
  | "afosi"
  | "uae"
  | "qatar-embassy"
  | "qatar-consulate"
  | "suiteplace"
  | "aqra"
  | "suitesolutions";

export interface Client {
  name: string;
  place: string;
  logo?: ClientLogo;
  mark?: { title: string; sub?: string };
  note?: string;
}

export const clients: Client[] = [
  {
    name: "Medical Attaché Office, Embassy of Qatar",
    place: "Washington, DC",
    logo: "qatar-embassy",
    note: "Embassy of Qatar\nMedical Attaché Office",
  },
  { name: "Embassy of the United Arab Emirates", place: "Washington, DC", logo: "uae" },
  {
    name: "Qatar Consulate General",
    place: "New York, NY",
    logo: "qatar-consulate",
    note: "Consulate General of Qatar",
  },
  {
    name: "Department of the Air Force Office of Special Investigations",
    place: "Quantico, VA",
    logo: "afosi",
  },
  {
    name: "Security Attaché Office, Embassy of Qatar",
    place: "Washington, DC",
    logo: "qatar-embassy",
    note: "Embassy of Qatar\nSecurity Attaché Office",
  },
  { name: "Mayo Clinic", place: "Rochester, MN · Jacksonville, FL", logo: "mayo" },
  { name: "Johns Hopkins Medicine", place: "Baltimore, MD", logo: "hopkins" },
  { name: "Hospital for Special Surgery", place: "New York, NY", logo: "hss" },
  { name: "Boston Medical Center", place: "Boston, MA", logo: "bmc" },
  { name: "Children's National Medical Center", place: "Washington, DC", logo: "childrens" },
  {
    name: "Barwa Knowledge Company",
    place: "Vienna, VA",
    mark: { title: "Barwa", sub: "Knowledge Company" },
  },
  { name: "Suite Solutions Inc.", place: "Pentagon City, VA", logo: "suitesolutions" },
  { name: "My Suite Place", place: "Tysons Corner, VA", logo: "suiteplace" },
  { name: "Aqra Travel", place: "California", logo: "aqra" },
];
