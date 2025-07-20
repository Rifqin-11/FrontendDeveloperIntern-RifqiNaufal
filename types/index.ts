import { LucideIcon } from "lucide-react";

export interface ApiResponse<T = unknown> {
  data: T;
  meta?: ApiResponseMeta;
}

// === IDEAS ===
export interface IdeaImage {
  id: string;
  mime: string;
  file_name: string;
  url: string;
}

export interface Idea {
  id: number;
  title: string;
  content?: string;
  published_at: string;
  slug?: string;
  small_image: IdeaImage[];
  medium_image: IdeaImage[];
}

export interface FilterParams {
  page: number;
  size: number;
  sort: "newest" | "oldest";
}

export interface ApiResponseMeta {
  current_page: number;
  from?: number;
  last_page: number;
  per_page: number;
  to?: number;
  total: number;
}

export interface IdeasApiResponse {
  data: Idea[];
  meta: ApiResponseMeta;
}

// === CONTACT ===

export interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  color: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

// === ABOUT ===

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export type AboutValue = Value;

export interface AboutTeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface AboutMilestone {
  year: string;
  event: string;
  description: string;
}

// === Career ===

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

// === SERVICES ===

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

// === WORK ===

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  client: string;
  technologies: string[];
  results: string;
}


export interface StatItem {
  label: string;
  value: string;
  icon: string;
}
