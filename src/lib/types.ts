export interface TeamMember {
  name: string;
  title: string;
  image: string;
  email?: string;
}

export interface AdvisoryMember {
  name: string;
  credentials: string[];
  image: string;
  linkedIn?: string;
}

export interface TimelineStep {
  title: string;
  description: string;
}

export interface Pillar {
  heading: string;
  items: { label: string; text: string }[];
}

export interface NavItem {
  label: string;
  href: string;
}
