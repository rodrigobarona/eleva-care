import { Heart, Leaf, Users, Baby, Brain, Dumbbell } from "lucide-react";

export const translations = {
  language: "Português",
  nav: {
    services: "Serviços",
    approach: "Abordagem",
    mission: "Missão",
    team: "Equipa",
  },
  hero: {
    title: "Capacitando a Saúde das Mulheres em Todas as Etapas",
    subtitle:
      "A Eleva Care oferece uma abordagem holística à saúde das mulheres, conectando-a com prestadores especializados que se dedicam a apoiar as mulheres em todas as fases da vida.",
    cta1: "Fazer um Questionário",
    cta2: "Marcar Agora",
  },
  podcast: {
    title:
      "Elevando a Saúde das Mulheres com Patrícia Mota, PT, PhD pela Eleva Care",
    description:
      'Capacite a sua jornada de saúde com "Elevando a Saúde das Mulheres" pela Eleva Care. As nossas apresentadoras especialistas analisam semanalmente as pesquisas mais recentes em saúde feminina, traduzindo estudos complexos em informações práticas. Desde o bem-estar reprodutivo até à saúde mental, abordamos tudo.',
    cta: "Ouvir Agora",
  },
  services: {
    title: "Os Nossos Serviços",
    subtitle: "Cuidados abrangentes para cada fase da vida de uma mulher",
    items: [
      {
        icon: <Baby className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Gravidez e Pós-parto",
        description:
          "Cuidados e apoio especializados durante toda a sua jornada de gravidez e pós-parto, incluindo fisioterapia, cuidados obstétricos/ginecológicos e orientação nutricional.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        icon: <Leaf className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Saúde Pélvica",
        description:
          "Tratamentos especializados para dor pélvica, incontinência e prolapso, com planos personalizados adaptados às suas necessidades únicas.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        icon: <Brain className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Bem-estar Mental",
        description:
          "Acesso a terapia e apoio para stress, ansiedade e depressão, garantindo que a sua saúde mental é priorizada em todas as etapas.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        icon: <Dumbbell className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Fitness e Nutrição",
        description:
          "Planos de fitness personalizados e orientação nutricional para ajudá-la a alcançar os seus objetivos de saúde e sentir-se no seu melhor.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        icon: <Users className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Saúde Adolescente",
        description:
          "Apoio especializado para jovens mulheres que atravessam a puberdade, menstruação e a transição para a idade adulta.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        icon: <Heart className="w-12 h-12 text-[#0d6c70] mb-4" />,
        title: "Gestão da Menopausa",
        description:
          "Cuidados abrangentes para abordar as mudanças hormonais e priorizar o bem-estar durante a transição da menopausa.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  approach: {
    title: "A Nossa Abordagem",
    description:
      "Na Eleva Care, acreditamos numa abordagem colaborativa aos cuidados. A nossa equipa de especialistas trabalha em conjunto para lhe proporcionar um apoio abrangente e personalizado, garantindo que todos os aspectos da sua saúde são abordados.",
  },
  mission: {
    title: "A Nossa Missão",
    subtitle:
      "Transformar os cuidados de saúde das mulheres através da inovação e compaixão",
    description:
      "Na Eleva Care, dedicamo-nos a capacitar mulheres de todas as idades para assumirem o controlo da sua saúde e bem-estar. A nossa missão é fornecer uma plataforma de apoio e inclusiva que conecte indivíduos com recursos liderados por especialistas, informações baseadas em evidências e uma comunidade colaborativa de profissionais de saúde.",
    vision: {
      title: "A Nossa Visão",
      description:
        "Colmatar a lacuna entre a investigação científica e a aplicação prática, oferecendo soluções de cuidados de saúde feminina acessíveis e personalizadas ao longo de todas as fases da vida.",
    },
    cta: "Junte-se a Nós",
    stats: [
      { value: "10K+", label: "Mulheres Ajudadas" },
      { value: "50+", label: "Prestadores Especializados" },
      { value: "95%", label: "Satisfação das Pacientes" },
      { value: "24/7", label: "Apoio Disponível" },
    ],
    beliefs: {
      title: "Na Eleva Care, acreditamos que:",
      items: [
        "Toda mulher merece acesso a cuidados de saúde de qualidade.",
        "O conhecimento é poder nas decisões de saúde.",
        "A colaboração leva a melhores resultados de saúde.",
        "A saúde das mulheres é uma jornada em constante evolução ao longo da vida.",
        "A saúde pélvica é essencial para o bem-estar geral.",
      ],
    },
  },
  team: {
    title: "Conheça a Nossa Equipa",
    subtitle: "Fundada por especialistas apaixonados em saúde feminina",
    description:
      "A Eleva Care é liderada por uma equipa de profissionais dedicados que reúnem anos de experiência em saúde feminina, tecnologia e cuidados ao paciente. Os nossos fundadores e membros-chave da equipa estão comprometidos em revolucionar a forma como as mulheres acedem e experienciam os cuidados de saúde.",
    members: [
      {
        name: "Dra. Patrícia Mota",
        role: "Fundadora e CEO",
        image: "/placeholder.svg?height=400&width=300",
        quote:
          "O nosso objetivo é tornar os cuidados de saúde feminina especializados acessíveis a todas, independentemente da localização ou circunstâncias.",
      },
      {
        name: "Dra. Sofia Rodriguez",
        role: "Diretora Médica",
        image: "/placeholder.svg?height=400&width=300",
        quote:
          "Estamos a colmatar a lacuna entre a investigação de ponta e os cuidados diários às pacientes.",
      },
      {
        name: "Emma Chen",
        role: "Responsável pela Experiência da Paciente",
        image: "/placeholder.svg?height=400&width=300",
        quote:
          "Na Eleva Care, estamos a reimaginar os cuidados de saúde para colocar as necessidades e experiências das mulheres em primeiro lugar.",
      },
      {
        name: "Dra. Aisha Patel",
        role: "Investigadora Principal",
        image: "/placeholder.svg?height=400&width=300",
        quote:
          "A nossa investigação impulsiona a inovação na saúde das mulheres, levando a melhores resultados para todas.",
      },
    ],
  },
  newsletter: {
    title: "Mantenha-se Atualizada",
    description:
      "Subscreva a nossa newsletter para receber as últimas novidades em saúde feminina, dicas de especialistas e conteúdo exclusivo.",
    placeholder: "Insira o seu e-mail",
    cta: "Subscrever",
    privacy:
      "Respeitamos a sua privacidade. Cancele a subscrição a qualquer momento.",
  },
  social: {
    title: "Siga-nos",
    linkedin: "LinkedIn",
    instagram: "Instagram",
    facebook: "Facebook",
    twitter: "Twitter",
    scholar: "Google Scholar",
  },
  footer: {
    copyright: "© 2024 Eleva Care. Todos os direitos reservados.",
    terms: "Termos de Serviço",
    privacy: "Privacidade",
  },
};
