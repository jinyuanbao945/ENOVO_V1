export enum Language {
  EN = 'English',
  ZH = '中文',
  FR = 'Français',
  ES = 'Español',
  ID = 'Bahasa Indonesia',
  MS = 'Bahasa Melayu'
}

export interface NavItem {
  label: string;
  path: string;
}

export interface TechnologyItem {
  id: string;
  title: string;
  description: string;
  kpis: string[];
  icon: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
}