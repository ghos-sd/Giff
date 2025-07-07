export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  popular?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  thumbnail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}