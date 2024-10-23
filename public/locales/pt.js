import React from 'react'; // Add this line to import React
import { Droplets, Flower2, Baby } from 'lucide-react';
export const translations = {
  language: 'Português',
  nav: {
    services: 'Serviços',
    approach: 'Abordagem',
    mission: 'Missão',
    team: 'Equipa',
    podcast: 'Podcast',
    newsletter: 'Newsletter',
  },
  hero: {
    title: 'Cuidados de Saúde Feminina, *quando precisar.*',
    subtitle: 'Marque uma consulta com Especialistas em Saúde da Mulher - À Sua Conveniência.',
    cta1: 'Como a podemos ajudar? Faça o quiz',
    cta2: 'Reservar agora',
    cta2Help: 'Marque a sua consulta',
    cta2Help2: 'em menos de 3 minutos.',
  },
  podcast: {
    title: 'Elevando a Saúde Feminina com Patrícia Mota, PT, PhD',
    subtitle: 'O podcast',
    description:
      'Acompanhe "Elevando a Saúde Feminina" da Eleva Care e capacite a sua jornada de saúde. Os nossos especialistas discutem investigações de ponta em saúde feminina e traduzem estudos complexos em dicas práticas, todas as semanas. Do bem-estar reprodutivo à saúde mental, cobrimos tudo.',
    cta: 'Ouvir agora',
  },
  services: {
    title: 'Como Podemos Ajudar',
    subtitle: 'Cuidado especializado, personalizado para si',
    description:
      'Obtenha cuidados personalizados com profissionais altamente qualificados em saúde feminina em todo o mundo. Conectamos você à experiência de que precisa, desde consultas online até recursos locais, tudo adaptado à sua jornada de saúde.',
    items: [
      {
        icon: <Baby className="h-12 w-12 text-elevaPrimary" />,
        title: 'Gravidez e Pós-Parto',
        description:
          'Apoio abrangente para mulheres durante a transformação da gravidez e maternidade.',
        items: [
          '**Fisioterapia:** Prepare-se para o parto, controle a dor, recupere a força, trate a diástase abdominal e intervenções focadas no assoalho pélvico para prevenir e tratar disfunções.',
          '**Cuidados Obstétricos e Ginecológicos:** Tratamento especializado durante a gravidez e recuperação pós-parto.',
          '**Orientação Nutricional:** Otimize a sua alimentação para uma gravidez e pós-parto saudáveis.',
          '**Apoio em Saúde Mental:** Apoio emocional para os desafios da maternidade.',
          '**Exercício:** Benefícios do exercício terapêutico para gravidez e pós-parto, adaptado às mudanças do corpo e recuperação saudável.',
        ],
        image: '/img/Pregnant-Woman-Flowers.jpg?height=450&width=300?monochrome=006D77',
        cta: 'Saber mais',
      },
      {
        icon: <Droplets className="h-12 w-12 text-elevaPrimary" />,
        title: 'Saúde Pélvica',
        description:
          'Cuidados especializados que satisfazem as necessidades únicas da saúde pélvica ao longo da vida.',
        items: [
          '**Fisioterapia Pélvica:** Tratamento especializado para incontinência, prolapso de órgãos pélvicos e dor pélvica, incluindo dor durante o sexo.',
          '**Cuidados Obstétricos e Ginecológicos Especializados:** Diagnóstico e tratamento para uma gama de problemas de saúde pélvica como prolapso, endometriose e disfunção sexual.',
          '**Apoio em Saúde Mental:** Consultoria e terapia para enfrentar os aspetos psicológicos de preocupações com a saúde pélvica.',
        ],
        image: '/img/Woman-Working-Out-Living-Room.jpg?height=450&width=300',
        cta: 'Saber mais',
      },
      {
        icon: <Flower2 className="h-12 w-12 text-elevaPrimary" />,
        title: 'Em Todas as Fases',
        description:
          'Apoio holístico para a saúde feminina, desde a adolescência até a menopausa e além.',
        items: [
          '**Saúde Adolescente:** Enfrente a puberdade, menstruação e primeiros anos da vida adulta feminina com confiança e apoio.',
          '**Gestão da Menopausa:** Acompanhe as mudanças hormonais, controle sintomas e priorize o seu bem-estar.',
          '**Bem-Estar Mental:** Acesso a terapia para gerir o stress, ansiedade, depressão e outras preocupações de saúde mental.',
          '**Exercício e Nutrição:** Descubra planos de exercício e guias nutricionais personalizadas.',
          '**Fisioterapia:** Gestão de dor, prevenção de lesões e otimização do desempenho físico, com especialização em saúde do assoalho pélvico para atletas e mulheres ativas.',
        ],
        image: '/img/Smiling-Women-Photo.jpg?height=450&width=300',
        cta: 'Saber mais',
      },
    ],
  },
  approach: {
    title: 'Na Eleva Care, acreditamos que:',
    items: [
      'Toda mulher merece acesso a **cuidados de saúde de qualidade**.',
      '**O conhecimento é poder** nas decisões sobre a saúde.',
      '**A colaboração** traz melhores resultados de saúde.',
      'A saúde feminina é uma **jornada em constante evolução**.',
      '**A saúde pélvica** é fundamental para o bem-estar geral.',
    ],
    description:
      'Na Eleva Care, acreditamos em uma abordagem colaborativa. O nosso time de especialistas trabalha em conjunto para oferecer um apoio abrangente e personalizado, garantindo que todos os aspetos da sua saúde sejam atendidos.',
  },
  mission: {
    title: 'A Nossa Missão',
    subtitle: 'Transformar a saúde feminina através de inovação e compaixão',
    description:
      'Na Eleva Care, estamos dedicados a empoderar mulheres de todas as idades para que assumam o controle da sua saúde e bem-estar. A nossa missão é fornecer uma plataforma de apoio inclusiva que conecte indivíduos com recursos liderados por especialistas, informação baseada em evidências e uma comunidade colaborativa de profissionais de saúde.',
    vision: {
      title: 'A Nossa Visão',
      description:
        'Construir uma ponte entre a investigação científica e a aplicação prática, oferecendo soluções acessíveis e personalizadas para a saúde feminina em todas as fases da vida.',
    },
    cta: 'Junte-se a nós',
    stats: [
      { value: '10K+', label: 'Mulheres Ajudadas' },
      { value: '50+', label: 'Profissionais Especializados' },
      { value: '95%', label: 'Satisfação das Pacientes' },
      { value: '24/7', label: 'Suporte Disponível' },
    ],
    beliefs: {
      title: 'Na Eleva Care, acreditamos que:',
      items: [
        'Toda mulher merece acesso a cuidados de saúde de qualidade.',
        'O conhecimento é poder nas decisões sobre a saúde.',
        'A colaboração traz melhores resultados de saúde.',
        'A saúde feminina é uma jornada em constante evolução.',
        'A saúde pélvica é fundamental para o bem-estar geral.',
      ],
    },
  },
  team: {
    title: 'Conheça a Nossa Equipa',
    subtitle: 'Fundada por especialistas apaixonados em saúde feminina',
    description:
      'A Eleva Care é liderada por uma equipa de profissionais dedicados que combinam anos de experiência em saúde feminina, tecnologia e cuidados ao paciente. Os nossos fundadores e principais membros estão empenhados em revolucionar o acesso e a experiência de saúde das mulheres.',
    members: [
      {
        name: 'Patricia Mota, PT, PhD',
        role: 'Cofundadora & CEO',
        image: '/img/team/team-patricia-mota.jpg?height=1200&width=1200',
        quote:
          'A nossa missão é elevar os cuidados de saúde feminina, tornando-os mais acessíveis, inovadores e capacitando todas as mulheres.',
      },
      {
        name: 'Cristine Homsi Jorge, PT, PhD',
        role: 'Diretora Científica',
        image: '/img/team/team-cristine-homsi-jorge.jpg?height=1200&width=1200',
        quote:
          'A nossa pesquisa inovadora é a base para soluções de saúde que realmente atendem às necessidades únicas das mulheres.',
      },
      {
        name: 'Alexandre Delgado, PT, PhD',
        role: 'Diretor de Investigação e Inovação',
        image: '/img/team/team-alexandre-delgado-br.png?height=1200&width=1200',
        quote:
          'Inovar na saúde feminina significa buscar continuamente novos conhecimentos para melhorar os cuidados e a qualidade de vida.',
      },
      {
        name: 'Patricia Driusso, PT, PhD',
        role: 'Diretora de Pesquisa Clínica',
        image: '/img/team/team-patricia-driusso.jpg?height=1200&width=1200',
        quote:
          'O nosso foco é fechar a lacuna entre a ciência e a prática, capacitando as mulheres com melhores resultados de saúde.',
      },
      {
        name: 'Joana Goulão',
        role: 'Fisioterapeuta',
        image: '/img/team/team-joana-goulao.jpg?height=1200&width=1200',
        quote:
          'A saúde pélvica é um pilar crucial para o bem-estar geral das mulheres, e estou comprometida em oferecer o melhor apoio possível.',
      },
    ],
  },
  newsletter: {
    title: 'Femme Focus',
    subtitle: 'Uma Publicação da Eleva Care',
    description:
      'O seu destaque mensal sobre saúde da mulher, conselhos de especialistas e histórias inspiradoras para nutrir cada etapa da sua jornada de bem-estar.',
    placeholder: 'Insira o seu email',
    cta: 'Inscreva-se',
    privacy: 'Respeitamos a sua privacidade. Pode cancelar a subscrição a qualquer momento.',
  },

  social: {
    title: 'Siga-nos nas redes sociais',
    description:
      'Junte-se à nossa comunidade online para estar a par das nossas últimas investigações, recursos e conselhos sobre saúde feminina.',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    scholar: 'Google Scholar',
  },
  footer: {
    copyright: '© 2024 Eleva Care. All rights reserved.',
    privacy: 'Política de Privacidade',
    terms: 'Termos e Condições',
  },
};
