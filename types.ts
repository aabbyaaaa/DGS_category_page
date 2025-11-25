export interface FAQItem {
  question: string;
  answer: string;
}

export interface TocItem {
  id: string;
  title: string;
}

export enum SectionId {
  WHAT_IS = 'what-is',
  USAGE = 'usage',
  FAQ = 'faq'
}