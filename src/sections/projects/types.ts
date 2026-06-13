export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  details: string;
  techs: string[];
  link: string;
  github: string;
  cardImage?: string;
  modalImage?: string;
  themeColor?: string;
  themeGlow?: string;
  objectPosition?: string;
  watermarkPosition?: string;
  hasTabs?: boolean;
  tab1Key?: string;
  tab1LabelLong?: string;
  tab1LabelShort?: string;
  tab1Images?: string[];
  tab2Key?: string;
  tab2LabelLong?: string;
  tab2LabelShort?: string;
  tab2Images?: string[];
}

export interface ProjectCardProps {
  project: ProjectItem;
  onBreach: (id: string) => void;
}
