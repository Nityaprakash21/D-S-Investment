export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  dropdownItems?: string[][]; // Array of columns
}

export interface BlogItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}