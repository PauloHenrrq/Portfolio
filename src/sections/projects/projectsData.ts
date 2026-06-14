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
    description: 'Hub técnico pessoal para centralização de ferramentas, workflows e MCPs do ecossistema de desenvolvimento.',
    details: 'Um ecossistema pessoal projetado para documentar e organizar ferramentas avançadas de desenvolvimento, como workflows customizados e MCPs (Model Context Protocol). Além de atuar como repositório de consulta rápida para o meu dia a dia, o hub funciona como uma central de compartilhamento de conhecimento prático para a comunidade técnica.',
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
    description: 'MVP sob medida para gestão de clínica odontológica, integrando automação de contatos via WhatsApp e fluxos dedicados.',
    details: 'Desenvolvido como um MVP customizado para atender às necessidades operacionais de uma clínica odontológica parceira. O sistema centraliza a comunicação usando o WhatsApp como canal ativo, dividindo-se em duas vertentes funcionais: um painel administrativo para a recepção e uma interface dedicada para os pacientes. O projeto implementa práticas consolidadas de mercado, incluindo autenticação segura de ponta a ponta (login, registro e recuperação de credenciais) e fluxo responsivo de agendamento.',
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
