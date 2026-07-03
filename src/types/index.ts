export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  src: string;
  year: string;
  category: string[];
  tags: string[];
  link: string;
  github?: string;
  stats: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "ai" | "devops" | "tools" | "databases";
  description: string;
  level: number;
  years: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  current: boolean;
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
  icon: string;
  description: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  skills: string[];
  credentialUrl?: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  initials: string;
  avatarColor: string;
}
