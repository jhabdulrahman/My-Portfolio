// src/app/models/portfolio.model.ts

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  duration: string;
  domain: string;
  highlights: string[];
  link: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  cgpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Portfolio {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
