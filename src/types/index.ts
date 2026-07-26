export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  icon: string;
  category: ServiceCategory;
  features: string[];
  price?: string;
  popular?: boolean;
}

export type ServiceCategory =
  | "packages"
  | "exterior"
  | "interior"
  | "wheel-tire"
  | "protection"
  | "specialty"
  | "add-ons";

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  description: string;
  duration: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  location: string;
  initials: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceArea {
  name: string;
  slug: string;
  state: string;
  description: string;
  longDescription: string;
  keywords: string[];
  neighborhoods: string[];
  zipCodes: string[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface BeforeAfter {
  id: string;
  title: string;
  service: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  vehicleSize: string;
  service: string;
  address: string;
  date: string;
  time: string;
  notes: string;
}
