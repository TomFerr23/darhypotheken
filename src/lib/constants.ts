import type {
  TeamMember,
  AdvisoryMember,
  TimelineStep,
  Pillar,
  NavItem,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Purpose", href: "#purpose" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const PILLARS: Pillar[] = [
  {
    heading: "Duurzaam",
    items: [
      {
        label: "Inclusiviteit",
        text: "We maken woningbezit voor iedereen toegankelijk.",
      },
      {
        label: "Duurzaam",
        text: "Bijdragen aan een betere toekomst met duurzame financiële oplossingen.",
      },
    ],
  },
  {
    heading: "Alternatief",
    items: [
      {
        label: "Mede-eigendom",
        text: "Met ons koop je de woning samen, en in termijnen koop je ons aandeel uit.",
      },
      {
        label: "Vaste Betalingen",
        text: "Geniet van financiële stabiliteit zonder onverwachte rentewijzigingen; je betaalt altijd hetzelfde bedrag.",
      },
    ],
  },
  {
    heading: "Rentevrij",
    items: [
      {
        label: "Geen Rente",
        text: "In plaats van rente te betalen voor het lenen, betaal je een vergoeding voor het gebruik van de woning.",
      },
      {
        label: "Vermogensopbouw",
        text: "Vermogen opbouwen zonder traditionele rente.",
      },
    ],
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    title: "Vaste Maandelijkse Betalingsstructuur",
    description:
      "De vaste maandelijkse betalingstermijn bestaat uit (i) aflossing en (ii) vergoeding.",
  },
  {
    title: "Aflossingsplan van 30 Jaar",
    description:
      "Het aflossingsschema (30 jaar) is gebaseerd op het aandeel van DAR in de aankoopprijs.",
  },
  {
    title: "Marktgebaseerde Vergoeding",
    description: "De prijs/vergoeding is gebaseerd op marktvoorwaarden.",
  },
  {
    title: "Eindovername van Eigendom",
    description:
      "Aan het einde van de looptijd neemt de consument het mede-eigendomsaandeel over.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Fouad el Kanfaoui",
    title: "Chief Financial Officer (CFO) & Co-Founder",
    image: "/images/team/fouad_new.png",
    email: "fouad@darhypotheken.nl",
  },
  {
    name: "Sharif Soliman",
    title: "Chief Executive Officer (CEO) & Co-Founder",
    image: "/images/team/sharif_last.png",
    email: "sharif@darhypotheken.nl",
  },
  {
    name: "Rachid Chetouani",
    title: "Chief Risk Officer (CRO) & Co-Founder",
    image: "/images/team/rachid_new.png",
    email: "rachid@darhypotheken.nl",
  },
  {
    name: "Albert Trox",
    title: "Chief Investment Officer (CIO)",
    image: "/images/team/albert_new.png",
    email: "albert@darhypotheken.nl",
  },
  {
    name: "Frans de Kievit",
    title: "Chief Operating Officer (COO)",
    image: "/images/team/frans_new.png",
    email: "frans@darhypotheken.nl",
  },
  {
    name: "Karim Helal",
    title: "Chief Marketing Officer (CMO) & Co-Founder",
    image: "/images/team/karim-dar.png",
    email: "karim@darhypotheken.nl",
  },
];

export const ADVISORY_MEMBERS: AdvisoryMember[] = [
  {
    name: "Ferdinand Veenman",
    credentials: [
      "Ex CEO Blauwtrust Groep",
      "Ex Financial Services KPMG",
      "+35 years experience",
    ],
    image: "/images/advisory/ferdinand.png",
  },
  {
    name: "Mike de Boer",
    credentials: [
      "Ex CFO Knab",
      "Co founder Knab",
      "+30 years experience",
    ],
    image: "/images/advisory/mike.png",
  },
  {
    name: "Jan Poot",
    credentials: [
      "Ex Vontobel",
      "Ex Aegon",
      "+35 years experience",
    ],
    image: "/images/advisory/jan.png",
  },
];
