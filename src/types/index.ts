/* ═══════════════════════════════════════════════════════════
   Portfolio PH — Global Type Definitions
   ═══════════════════════════════════════════════════════════ */

export type SectionId = 'hero' | 'about' | 'projects' | 'stacks' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Stack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'database' | 'mobile';
  proficiency: 'learning' | 'intermediate' | 'advanced' | 'expert';
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
