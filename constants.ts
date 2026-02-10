import { NavItem, BlogItem, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Blog', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const SERVICE_TABS = [
  "Mutual Fund Distribution",
  "Portfolio Management",
  "Treasury Management",
  "Risk Management",
  "Alternate Investments"
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 1,
    title: "Gold and Silver rally: Playing a devil's advocate",
    excerpt: "We have always maintained the importance of asset allocation in a portfolio. While recent rallies are exciting, cautious optimization is key...",
    author: "Aditya Karnik",
    readTime: "5 MINS READ",
    image: "https://picsum.photos/400/300?random=10"
  },
  {
    id: 2,
    title: "Understanding Market Volatility in 2024",
    excerpt: "Volatility is an inherent part of investing. Here is how you can navigate the ups and downs without losing sight of your long-term goals.",
    author: "Sarah Jenkins",
    readTime: "4 MINS READ",
    image: "https://picsum.photos/400/300?random=11"
  },
  {
    id: 3,
    title: "The Rise of Sustainable Investing",
    excerpt: "ESG funds are seeing record inflows. Discover why sustainable investing is becoming a cornerstone of modern portfolio strategy.",
    author: "Rajesh Kumar",
    readTime: "6 MINS READ",
    image: "https://picsum.photos/400/300?random=12"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I start investing with D&S Investment?",
    answer: "Starting is simple. You can reach out to us via our 'Contact Us' page, or use the 'Submit a Query' button. One of our relationship managers will get in touch to understand your financial goals."
  },
  {
    question: "What is the minimum investment required?",
    answer: "We cater to a wide range of investors. The minimum investment depends on the specific product or service you choose, such as Mutual Funds or PMS."
  },
  {
    question: "Are my investments safe?",
    answer: "We are a regulated financial distributor. Your investments are held directly with the respective AMCs or financial institutions. We provide the guidance and platform to manage them efficiently."
  },
  {
    question: "Do you offer tax planning services?",
    answer: "Yes, tax efficiency is a core part of our wealth management strategy. We advise on tax-saving instruments and efficient withdrawal strategies."
  }
];