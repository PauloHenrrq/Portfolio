import mcpIcon from '@/assets/model-context-protocol-icon.svg';
import promptIcon from '@/assets/prompt_17653455.png';

/**
 * Gera URL do ícone de uma tecnologia a partir do repositório devicon.
 */
export const getIconUrl = (name: string) =>
  `https://raw.githubusercontent.com/devicons/devicon/master/icons/${name}/${name}-original.svg`;

/**
 * Mapeamento global de tecnologias com seus ícones e cores.
 * Fonte única de verdade — usado por Methodology e Stacks.
 */
export const TECH_CONFIG: Record<string, { icon: string; color: string }> = {
  'React Native': { icon: getIconUrl('react'), color: '#61DAFB' },
  'TypeScript': { icon: getIconUrl('typescript'), color: '#3178C6' },
  'React / Next.js': { icon: getIconUrl('react'), color: '#61DAFB' },
  'Tailwind CSS': { icon: getIconUrl('tailwindcss'), color: '#38BDF8' },
  'Node.js / Express': { icon: getIconUrl('nodejs'), color: '#339933' },
  'Prisma ORM': { icon: getIconUrl('prisma'), color: '#5A67D8' },
  'PostgreSQL': { icon: getIconUrl('postgresql'), color: '#4169E1' },
  'MySQL': { icon: getIconUrl('mysql'), color: '#4479A1' },
  'Python': { icon: getIconUrl('python'), color: '#3776AB' },
  'Docker': { icon: getIconUrl('docker'), color: '#2496ED' },
  'Next.js': { icon: getIconUrl('nextjs'), color: '#000000' },
  'Express': { icon: getIconUrl('express'), color: '#FFFFFF' },
  'Vite': { icon: getIconUrl('vitejs'), color: '#646CFF' },
  'MCPs': { icon: mcpIcon, color: '#FFFFFF' },
  'Prompts': { icon: promptIcon, color: '#00F5FF' },
  'Automação': { icon: getIconUrl('bash'), color: '#4EAA25' },
  'Agentes IA': { icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png', color: '#3776AB' },
};
