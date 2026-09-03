/*
  Fleet — one record per vehicle, shared by /fleet, the service pages, the
  home page, and the vehicle viewer so names, capacities, and photos never
  drift between pages.

  ADDING PHOTOS: drop the file in src/assets/, import it below, and append it
  to the vehicle's `images` array. The viewer shows every image in order and
  lets visitors swipe / arrow through them. The first image is the card cover.
*/
import type { ImageMetadata } from "astro";
import escalade from "../assets/escalade.png";
import s580 from "../assets/s580.png";
import sienna from "../assets/sienna.png";
import sprinter from "../assets/sprinter.png";
import maybach0552 from "../assets/maybach/maybach-0552.jpg";
import maybach0559 from "../assets/maybach/maybach-0559.jpg";
import maybach0523 from "../assets/maybach/maybach-0523.jpg";
import maybach0522 from "../assets/maybach/maybach-0522.jpg";
import maybach0521 from "../assets/maybach/maybach-0521.jpg";
import maybach0524 from "../assets/maybach/maybach-0524.jpg";
import maybach0557 from "../assets/maybach/maybach-0557.jpg";
import maybachRear from "../assets/maybach/maybach-rear.jpg";
import maybach0535 from "../assets/maybach/maybach-0535.jpg";
import maybach0527 from "../assets/maybach/maybach-0527.jpg";
import maybach0640 from "../assets/maybach/maybach-0640.jpg";
import maybach0642 from "../assets/maybach/maybach-0642.jpg";
import escArm0777 from "../assets/escalade-armored/escalade-armored-0777.jpg";
import escArm0773 from "../assets/escalade-armored/escalade-armored-0773.jpg";
import escArm0783 from "../assets/escalade-armored/escalade-armored-0783.jpg";
import escArm0781 from "../assets/escalade-armored/escalade-armored-0781.jpg";
import escArm0778 from "../assets/escalade-armored/escalade-armored-0778.jpg";
import escArm0780 from "../assets/escalade-armored/escalade-armored-0780.jpg";
import escArm0772 from "../assets/escalade-armored/escalade-armored-0772.jpg";

export type Tier = "armored" | "executive" | "group";

export interface Vehicle {
  /* URL-safe id: card anchor (/fleet#id) and dialog id. */
  id: string;
  name: string;
  tier: Tier;
  tierLabel: string;
  capacity: string;
  description: string;
  images: ImageMetadata[];
  /* How the cover image sits in the card frame. Studio cutouts on white
     want "contain" (default); real photographs fill the frame with "cover". */
  coverFit?: "contain" | "cover";
  /* Canonical service name — preselects the contact form's service pill. */
  service: string;
}

export const tierLabels: Record<Tier, string> = {
  armored: "Armored",
  executive: "Executive",
  group: "Group & Delegation",
};

const ARMORED = "Armored Transportation";
const EXECUTIVE = "Executive & Group Transportation";

export const vehicles: Vehicle[] = [
  {
    id: "bulletproof-escalade",
    name: "Bulletproof Escalade",
    tier: "armored",
    tierLabel: tierLabels.armored,
    capacity: "Up to 6",
    description:
      "Level 6 protection behind factory bodywork, with space for a principal and detail or a small delegation.",
    /* Cover first; front, side, rear. */
    images: [escArm0777, escArm0773, escArm0783, escArm0781, escArm0778, escArm0780, escArm0772],
    coverFit: "cover",
    service: ARMORED,
  },
  {
    id: "bulletproof-maybach",
    name: "Bulletproof Maybach",
    tier: "armored",
    tierLabel: tierLabels.armored,
    capacity: "Up to 3",
    description: "Head-of-state comfort under Level 6 armor.",
    /* Cover first; exteriors, then the cabin and details. */
    images: [
      maybach0552,
      maybach0559,
      maybach0523,
      maybach0522,
      maybach0521,
      maybach0524,
      maybach0557,
      maybachRear,
      maybach0535,
      maybach0527,
      /* Armoured rear door: the glass and frame thickness. */
      maybach0642,
      maybach0640,
    ],
    coverFit: "cover",
    service: ARMORED,
  },
  {
    id: "mercedes-s580",
    name: "Mercedes S580",
    tier: "executive",
    tierLabel: tierLabels.executive,
    capacity: "Up to 3",
    description: "The executive sedan standard for boardrooms, embassies, and terminals.",
    images: [s580],
    service: EXECUTIVE,
  },
  {
    id: "escalade",
    name: "Escalade",
    tier: "executive",
    tierLabel: tierLabels.executive,
    capacity: "Up to 6",
    description: "Room for teams, security details, and luggage.",
    images: [escalade],
    service: EXECUTIVE,
  },
  {
    id: "mercedes-sprinter",
    name: "Mercedes Sprinter",
    tier: "group",
    tierLabel: tierLabels.group,
    capacity: "Up to 14",
    description: "Executive seating for advance teams, press pools, and staff movements.",
    images: [sprinter],
    service: EXECUTIVE,
  },
  {
    id: "toyota-sienna",
    name: "Toyota Sienna",
    tier: "group",
    tierLabel: tierLabels.group,
    capacity: "Up to 7",
    description: "Low-profile option for staff transfers and discreet movements.",
    images: [sienna],
    service: EXECUTIVE,
  },
  {
    id: "party-bus",
    name: "Party Bus",
    tier: "group",
    tierLabel: tierLabels.group,
    capacity: "Up to 30",
    description: "Group transportation for celebrations and corporate events.",
    images: [],
    service: EXECUTIVE,
  },
  {
    id: "coach-bus",
    name: "Coach Bus",
    tier: "group",
    tierLabel: tierLabels.group,
    capacity: "Up to 55",
    description: "Full-delegation capacity for summits, conferences, and official visits.",
    images: [],
    service: EXECUTIVE,
  },
];

export const byTier = (tier: Tier): Vehicle[] => vehicles.filter((v) => v.tier === tier);

/* Contact-form URL with the service pill and vehicle preselected. */
export const inquireHref = (v: Vehicle): string =>
  `/contact?service=${encodeURIComponent(v.service)}&vehicle=${encodeURIComponent(v.name)}`;
