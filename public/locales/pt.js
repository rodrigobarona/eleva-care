import React from 'react'; // Add this line to import React
import { Droplets, Flower2, Baby } from 'lucide-react';
export const translations = {
  language: 'Português',
  nav: {
    services: 'Serviços',
    approach: 'Abordagem',
    mission: 'Missão',
    team: 'Equipa',
  },
  hero: {
    title: 'Empoderando a saúde da mulher em todas as fases',
    subtitle:
      'A Eleva Care oferece uma abordagem holística à saúde da mulher, aproximando-a profissionais especializados que se dedicam a apoiar as mulheres em todas as fases da vida.',
    cta1: 'Fazer um Questionário',
    cta2: 'Agendar Agora',
  },
  podcast: {
    title: 'Elevando a Saúde das Mulheres com Patrícia Mota, PT, PhD pela Eleva Care',
    description:
      'Capacite a sua jornada de saúde com "Elevando a Saúde da Mulher" pela Eleva Care. Os nossos apresentadores especialistas analisam semanalmente as investigações mais recentes em saúde feminina, transformando estudos complexos em conhecimentos práticos',
    cta: 'Ouça Agora',
  },
  services: {
    title: 'Os Nossos Serviços',
    subtitle: 'Cuidados de saúde para todas as fases da vida da mulher',
    items: [
      {
        icon: <Baby className="h-12 w-12 text-[#0d6c70]" />,
        title: 'Gravidez e Pós-parto',
        description:
          'Cuidados abrangentes para apoiar as mulheres durante a jornada transformadora da gravidez e início da maternidade.',
        items: [
          '**Fisioterapia:** Prepare-se para o parto, controle a dor, recupere a força, trate a diástase abdominal e receba intervenções específicas para o pavimento pélvico para prevenir e tratar disfunções.',
          '**Cuidados Obstétricos/Ginecológicos:** Receba cuidados especializados durante toda a sua gravidez e recuperação pós-parto.',
          '**Orientação Nutricional:** Otimize a sua dieta para uma gravidez saudável e uma jornada pós-parto equilibrada.',
          '**Apoio à Saúde Mental:** Enfrente os desafios emocionais e mentais da maternidade com orientação adequada.',
          '**Exercício:** Explore os benefícios do exercício terapêutico durante a gravidez e pós-parto, concebido para apoiar as mudanças do seu corpo e promover uma recuperação saudável.',
        ],
        image: '/img/Pregnant-Woman-Flowers.jpg?height=450&width=300',
      },
      {
        icon: <Droplets className="h-12 w-12 text-[#0d6c70]" />,
        title: 'Saúde Pélvica',
        description:
          'Cuidados especializados que atendem às necessidades únicas de saúde pélvica ao longo da vida.',
        items: [
          '**Fisioterapia Pélvica:** Tratamento especializado para incontinência, prolapso de órgãos pélvicos e dor pélvica, incluindo dor durante as relações sexuais.',
          '**Cuidados Obstétricos/Ginecológicos Especializados:** Diagnóstico e tratamento especializados para uma variedade de problemas de saúde pélvica, incluindo prolapso, endometriose e disfunção sexual.',
          '**Apoio à Saúde Mental:** Aconselhamento e terapia para abordar os aspetos psicológicos da saúde pélvica.',
        ],
        image: '/img/Woman-Working-Out-Living-Room.jpg?height=450&width=300',
      },
      {
        icon: <Flower2 className="h-12 w-12 text-[#0d6c70]" />,
        title: 'Em Todas as Fases',
        description:
          'Apoio holístico para questões de saúde feminina desde a adolescência até à menopausa e mais além.',
        items: [
          '**Saúde das Adolescentes:** Viva a puberdade, menstruação e início da vida adulta com confiança e apoio.',
          '**Gestão da Menopausa:** Aborde as mudanças hormonais, controle os sintomas e priorize o seu bem-estar.',
          '**Bem-estar Mental:** Aceda a terapia e apoio para gerir o stress, ansiedade, depressão e outras preocupações de saúde mental.',
          '**Fitness e Nutrição:** Descubra planos de exercícios personalizados e orientação nutricional adaptados às suas necessidades individuais.',
          '**Fisioterapia:** Controle a dor, previna lesões e otimize o seu desempenho físico, com expertise especializada em saúde do pavimento pélvico para mulheres ativas e atletas femininas.',
        ],
        image: '/img/Smiling-Women-Photo.jpg?height=450&width=300',
      },
    ],
  },
  approach: {
    title: 'Na Eleva Care, acreditamos que:',
    items: [
      'Todas as mulheres merecem acesso a cuidados de qualidade.',
      'Conhecimento é poder nas decisões de saúde.',
      'A colaboração leva a melhores resultados.',
      'A saúde da mulher é uma jornada evolutiva ao longo da vida.',
      'A saúde pélvica é essencial para o bem-estar geral.',
    ],
    description:
      'Na Eleva Care, acreditamos numa abordagem colaborativa aos cuidados.  \n A nossa equipa de especialistas trabalha em conjunto para lhe oferecer um apoio abrangente e personalizado.',
  },
  mission: {
    title: 'A Nossa Missão',
    subtitle: 'Transformar os cuidados de saúde das mulheres através da inovação e compaixão',
    description:
      'Na Eleva Care, dedicamo-nos a capacitar mulheres de todas as idades para assumirem o controlo da sua saúde e bem-estar. A nossa missão é proporcionar uma plataforma de apoio e inclusiva que conecta indivíduos com recursos liderados por especialistas, informações baseadas em evidências e uma comunidade colaborativa de profissionais de saúde.',
    vision: {
      title: 'A Nossa Visão',
      description:
        'Colmatar a lacuna entre a investigação científica e a aplicação prática, oferecendo soluções de cuidados de saúde feminina acessíveis e personalizadas em todas as fases da vida.',
    },
    cta: 'Junte-se a Nós',
    stats: [
      { value: '10K+', label: 'Mulheres Ajudadas' },
      { value: '50+', label: 'Profissionais Especialistas' },
      { value: '95%', label: 'Satisfação das Pacientes' },
      { value: '24/7', label: 'Apoio Disponível' },
    ],
    beliefs: {
      title: 'Na Eleva Care, acreditamos que:',
      items: [
        'Toda mulher merece acesso a cuidados de saúde de qualidade.',
        'O conhecimento é poder nas decisões de saúde.',
        'A colaboração leva a melhores resultados de saúde.',
        'A saúde da mulher é uma jornada evolutiva ao longo da vida.',
        'A saúde pélvica é essencial para o bem-estar geral.',
      ],
    },
  },
  team: {
    title: 'Conheça a Nossa Equipa',
    subtitle: 'Fundada por especialistas apaixonados pela saúde da mulher',
    description:
      'A Eleva Care é liderada por uma equipa de profissionais dedicados que reúnem anos de experiência em saúde da mulher, tecnologia e cuidados ao paciente. Os nossos fundadores e membros-chave da equipa estão empenhados em revolucionar a forma como as mulheres acedem e experienciam os cuidados de saúde.',
    members: [
      {
        name: 'Dra. Patrícia Mota',
        role: 'Fundadora e CEO',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'O nosso objetivo é tornar os cuidados de saúde especializados para mulheres acessíveis a todas, independentemente da localização ou circunstâncias.',
      },
      {
        name: 'Dra. Sofia Rodriguez',
        role: 'Diretora Médica',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Estamos a colmatar a lacuna entre a investigação de ponta e os cuidados diários ao paciente.',
      },
      {
        name: 'Emma Chen',
        role: 'Responsável pela Experiência do Paciente',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Na Eleva Care, estamos a reimaginar os cuidados de saúde para colocar as necessidades e experiências das mulheres em primeiro lugar.',
      },
      {
        name: 'Dra. Aisha Patel',
        role: 'Investigadora Principal',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'A nossa investigação impulsiona a inovação na saúde da mulher, levando a melhores resultados para todas.',
      },
    ],
  },
  newsletter: {
    title: 'Mantenha-se Atualizada',
    description:
      'Subscreva a nossa newsletter para as últimas novidades em saúde da mulher, dicas de especialistas e conteúdo exclusivo.',
    placeholder: 'Introduza o seu email',
    cta: 'Subscrever',
    privacy: 'Respeitamos a sua privacidade. Cancele a subscrição a qualquer momento.',
  },
  social: {
    title: 'Siga-nos',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    scholar: 'Google Scholar',
  },
  footer: {
    copyright: '© 2024 Eleva Care. Todos os direitos reservados.',
    terms: 'Termos de Serviço',
    privacy: 'Privacidade',
  },
};
