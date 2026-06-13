import type { ProjectItem } from './types';

import phhubCard from '@/assets/projects/PHHub/view-image.jpg';
import phhubCoreHome from '@/assets/projects/PHHub/core-home.jpeg';
import phhubCoreOverview from '@/assets/projects/PHHub/core-overview.jpeg';
import phhubCoreTools from '@/assets/projects/PHHub/core-tools.jpeg';
import phhubCoreWorkflows from '@/assets/projects/PHHub/core-workflows.jpeg';
import phhubIAPrompts from '@/assets/projects/PHHub/ia-prompts.jpeg';
import phhubIAMcp from '@/assets/projects/PHHub/ia-mcp.jpeg';
import phhubIAAllMcp from '@/assets/projects/PHHub/ia-all-mcp.jpeg';

import odontoSyncCard from '@/assets/projects/OdontoSync/view-image.png';
import odontoSyncDashboard from '@/assets/projects/OdontoSync/admin-dashboard.jpeg';
import odontoSyncAgenda from '@/assets/projects/OdontoSync/admin-agenda.jpeg';
import odontoSyncPatients from '@/assets/projects/OdontoSync/admin-patients.jpeg';
import odontoSyncProfile from '@/assets/projects/OdontoSync/admin-profile.jpeg';
import odontoSyncUserHome from '@/assets/projects/OdontoSync/user-home.jpeg';
import odontoSyncUserAlert from '@/assets/projects/OdontoSync/user-alert.jpeg';
import odontoSyncUserAppointments from '@/assets/projects/OdontoSync/user-appointments.jpeg';

export const PROJECTS: ProjectItem[] = [
  {
    id: '01',
    title: 'PHHub',
    description: 'Um ecossistema unificado focado em alta performance e design premium. Substitui a fragmentação por eficiência centralizada e integração fluida.',
    details: 'Desenvolvido para centralizar ferramentas internas de desenvolvimento com foco em latência ultrabaixa e micro-frontends. Conta com um design system proprietário baseado em glassmorphism e animações fluidas via Framer Motion, integrando painéis de monitoramento de integridade e dados de telemetria em tempo real.',
    techs: ['Next.js', 'TypeScript', 'Vanilla CSS', 'Zustand'],
    link: 'https://ph-hub-six.vercel.app/',
    github: 'https://github.com/PauloHenrrq/PH-Hub',
    cardImage: phhubCard,
    modalImage: phhubCard,
    themeColor: '#BD00FF',
    themeGlow: 'rgba(189, 0, 255, 0.15)',
    hasTabs: true,
    tab1Key: 'core',
    tab1LabelLong: '🧪 Laboratório Core',
    tab1LabelShort: '🧪 Lab',
    tab1Images: [
      phhubCoreHome,
      phhubCoreOverview,
      phhubCoreTools,
      phhubCoreWorkflows
    ],
    tab2Key: 'ia',
    tab2LabelLong: '🧠 IA & Conectores',
    tab2LabelShort: '🧠 IA',
    tab2Images: [
      phhubIAPrompts,
      phhubIAMcp,
      phhubIAAllMcp
    ]
  },
  {
    id: '02',
    title: 'OdontoSync',
    description: 'Sistema de gestão odontológica que unificou prontuários e agendamentos sob um dashboard em tempo real, gerando 30% mais eficiência operacional.',
    details: 'Uma plataforma SaaS completa desenvolvida para clínicas odontológicas. Resolve a fragmentação de prontuários clínicos e históricos médicos através de uma arquitetura modularizada, integrando calendários interativos, faturamento integrado e relatórios de métricas administrativas gerados de forma assíncrona.',
    techs: ['React', 'Node.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
    link: 'https://github.com/PauloHenrrq',
    github: 'https://github.com/PauloHenrrq',
    cardImage: odontoSyncCard,
    modalImage: odontoSyncCard,
    themeColor: '#05A093',
    themeGlow: 'rgba(5, 160, 147, 0.15)',
    objectPosition: 'center top',
    watermarkPosition: 'center top',
    hasTabs: true,
    tab1Key: 'admin',
    tab1LabelLong: '🏥 Painel da Clínica',
    tab1LabelShort: '🏥 Clínica',
    tab1Images: [
      odontoSyncDashboard,
      odontoSyncAgenda,
      odontoSyncPatients,
      odontoSyncProfile
    ],
    tab2Key: 'user',
    tab2LabelLong: '📱 App do Paciente',
    tab2LabelShort: '📱 Paciente',
    tab2Images: [
      odontoSyncUserHome,
      odontoSyncUserAlert,
      odontoSyncUserAppointments
    ]
  },
];
