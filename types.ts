import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: 'Business' | 'Salon' | 'Restaurant' | 'Portfolio';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface CostEstimate {
  type: string;
  pages: number;
  features: string[];
  total: number;
}
