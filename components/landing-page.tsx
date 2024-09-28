"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ChevronRight,
  Heart,
  Leaf,
  Sparkles,
  Users,
  Globe,
  ChevronDown,
  Podcast,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  BookOpen,
  X,
  Baby,
  Brain,
  Dumbbell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react"; // Ensure React is imported

const translations = {
  en: {
    language: "English",
    nav: {
      services: "Services",
      approach: "Approach",
      mission: "Mission",
      team: "Team",
    },
    hero: {
      title: "Empowering Women's Health at Every Stage",
      subtitle:
        "Eleva Care offers a holistic approach to women's health, connecting you with expert providers who specialize in supporting women through every stage of life.",
      cta1: "Take a Quiz",
      cta2: "Book Now",
    },
    podcast: {
      title:
        "Elevating Women's Health with Patrícia Mota, PT, PhD by Eleva Care",
      description:
        "Empower your health journey with \"Elevating Women's Health\" by Eleva Care. Our expert hosts break down cutting-edge research in women's health each week, translating complex studies into actionable insights. From reproductive wellness to mental health, we cover it all.",
      cta: "Listen Now",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive care for every stage of a woman's life",
      items: [
        {
          icon: <Baby className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Pregnancy & Postpartum",
          description:
            "Expert care and support throughout your pregnancy and postpartum journey, including physical therapy, OB/GYN care, and nutritional guidance.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Leaf className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Pelvic Health",
          description:
            "Specialized treatments for pelvic pain, incontinence, and prolapse, with customized plans tailored to your unique needs.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Brain className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Mental Wellness",
          description:
            "Access to therapy and support for stress, anxiety, and depression, ensuring your mental health is prioritized at every stage.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Dumbbell className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Fitness & Nutrition",
          description:
            "Personalized fitness plans and nutritional guidance to help you achieve your health goals and feel your best.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Users className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Teen Health",
          description:
            "Specialized support for young women navigating puberty, menstruation, and the transition to adulthood.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Heart className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Menopause Management",
          description:
            "Comprehensive care to address hormonal changes and prioritize well-being during the menopausal transition.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    approach: {
      title: "Our Approach",
      description:
        "At Eleva Care, we believe in a collaborative approach to care. Our team of experts work together to provide you with comprehensive and personalized support, ensuring that every aspect of your health is addressed.",
    },
    mission: {
      title: "Our Mission",
      subtitle:
        "Transforming women's health care through innovation and compassion",
      description:
        "At Eleva Care, we are dedicated to empowering women of all ages to take control of their health and well-being. Our mission is to provide a supportive and inclusive platform that connects individuals with expert-led resources, evidence-based information, and a collaborative community of healthcare professionals.",
      vision: {
        title: "Our Vision",
        description:
          "To bridge the gap between scientific research and practical application, delivering accessible and personalized women's health care solutions throughout every life stage.",
      },
      cta: "Join Us",
      stats: [
        { value: "10K+", label: "Women Helped" },
        { value: "50+", label: "Expert Providers" },
        { value: "95%", label: "Patient Satisfaction" },
        { value: "24/7", label: "Support Available" },
      ],
      beliefs: {
        title: "At Eleva Care, we believe:",
        items: [
          "Every woman deserves access to quality healthcare.",
          "Knowledge is power in healthcare decisions.",
          "Collaboration leads to better health outcomes.",
          "Women's health is a lifelong, evolving journey.",
          "Pelvic health is essential to overall well-being.",
        ],
      },
    },
    team: {
      title: "Meet Our Team",
      subtitle: "Founded by passionate experts in women's health",
      description:
        "Eleva Care is led by a team of dedicated professionals who bring together years of experience in women's health, technology, and patient care. Our founders and key team members are committed to revolutionizing the way women access and experience healthcare.",
      members: [
        {
          name: "Dr. Patricia Mota",
          role: "Founder & CEO",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Our goal is to make expert women's health care accessible to all, regardless of location or circumstances.",
        },
        {
          name: "Dr. Sofia Rodriguez",
          role: "Chief Medical Officer",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "We're bridging the gap between cutting-edge research and everyday patient care.",
        },
        {
          name: "Emma Chen",
          role: "Head of Patient Experience",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "At Eleva Care, we're reimagining healthcare to put women's needs and experiences first.",
        },
        {
          name: "Dr. Aisha Patel",
          role: "Lead Researcher",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Our research drives innovation in women's health, leading to better outcomes for all.",
        },
      ],
    },
    social: {
      title: "Follow Us",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      facebook: "Facebook",
      twitter: "Twitter",
      scholar: "Google Scholar",
    },
    footer: {
      copyright: "© 2024 Eleva Care. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy",
    },
  },
  // Add translations for Portuguese and Spanish
  "pt-PT": {
    language: "Português",
    nav: {
      services: "Serviços",
      approach: "Abordagem",
      mission: "Missão",
      team: "Equipe",
    },
    hero: {
      title: "Empoderando a Saúde da Mulher em Cada Etapa",
      subtitle:
        "A Eleva Care oferece uma abordagem holística para a saúde da mulher, conectando você a provedores especializados que apoiam as mulheres em todas as fases da vida.",
      cta1: "Faça um Quiz",
      cta2: "Agende Agora",
    },
    podcast: {
      title: "Elevando a Saúde da Mulher com Patrícia Mota, PT, PhD pela Eleva Care",
      description:
        "Empodere sua jornada de saúde com \"Elevando a Saúde da Mulher\" pela Eleva Care. Nossos especialistas desvendam pesquisas de ponta em saúde da mulher a cada semana, traduzindo estudos complexos em insights acionáveis.",
      cta: "Ouça Agora",
    },
    services: {
      title: "Nossos Serviços",
      subtitle: "Cuidados abrangentes para cada fase da vida de uma mulher",
      items: [
        {
          icon: <Baby className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Gravidez e Pós-Parto",
          description:
            "Cuidados e apoio especializados durante sua jornada de gravidez e pós-parto, incluindo fisioterapia, cuidados de OB/GYN e orientação nutricional.",
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
          title: "Bem-Estar Mental",
          description:
            "Acesso a terapia e apoio para estresse, ansiedade e depressão, garantindo que sua saúde mental seja priorizada em todas as etapas.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Dumbbell className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Fitness e Nutrição",
          description:
            "Planos de fitness personalizados e orientação nutricional para ajudá-la a alcançar seus objetivos de saúde e se sentir melhor.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Users className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Saúde Adolescente",
          description:
            "Apoio especializado para jovens mulheres navegando pela puberdade, menstruação e a transição para a vida adulta.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Heart className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Gestão da Menopausa",
          description:
            "Cuidados abrangentes para lidar com as mudanças hormonais e priorizar o bem-estar durante a transição da menopausa.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    approach: {
      title: "Nossa Abordagem",
      description:
        "Na Eleva Care, acreditamos em uma abordagem colaborativa para o cuidado. Nossa equipe de especialistas trabalha em conjunto para fornecer suporte abrangente e personalizado, garantindo que todos os aspectos de sua saúde sejam abordados.",
    },
    mission: {
      title: "Nossa Missão",
      subtitle: "Transformando o cuidado da saúde da mulher através da inovação e compaixão",
      description:
        "Na Eleva Care, estamos dedicados a capacitar mulheres de todas as idades a assumirem o controle de sua saúde e bem-estar. Nossa missão é fornecer uma plataforma de apoio e inclusão que conecta indivíduos a recursos liderados por especialistas, informações baseadas em evidências e uma comunidade colaborativa de profissionais de saúde.",
      vision: {
        title: "Nossa Visão",
        description:
          "Para fechar a lacuna entre a pesquisa científica e a aplicação prática, oferecendo soluções de saúde da mulher acessíveis e personalizadas em todas as etapas da vida.",
      },
      cta: "Junte-se a Nós",
      stats: [
        { value: "10K+", label: "Mulheres Ajudadas" },
        { value: "50+", label: "Provedores Especializados" },
        { value: "95%", label: "Satisfação do Paciente" },
        { value: "24/7", label: "Suporte Disponível" },
      ],
      beliefs: {
        title: "Na Eleva Care, acreditamos:",
        items: [
          "Toda mulher merece acesso a cuidados de saúde de qualidade.",
          "O conhecimento é poder nas decisões de saúde.",
          "A colaboração leva a melhores resultados de saúde.",
          "A saúde da mulher é uma jornada evolutiva ao longo da vida.",
          "A saúde pélvica é essencial para o bem-estar geral.",
        ],
      },
    },
    team: {
      title: "Conheça Nossa Equipe",
      subtitle: "Fundada por especialistas apaixonados pela saúde da mulher",
      description:
        "A Eleva Care é liderada por uma equipe de profissionais dedicados que reúnem anos de experiência em saúde da mulher, tecnologia e atendimento ao paciente. Nossos fundadores e membros-chave da equipe estão comprometidos em revolucionar a forma como as mulheres acessam e vivenciam os cuidados de saúde.",
      members: [
        {
          name: "Dr. Patricia Mota",
          role: "Fundadora e CEO",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Nosso objetivo é tornar o cuidado especializado em saúde da mulher acessível a todos, independentemente da localização ou circunstâncias.",
        },
        {
          name: "Dr. Sofia Rodriguez",
          role: "Diretora Médica",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Estamos fechando a lacuna entre pesquisa de ponta e atendimento ao paciente cotidiano.",
        },
        {
          name: "Emma Chen",
          role: "Chefe de Experiência do Paciente",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Na Eleva Care, estamos reimaginando os cuidados de saúde para colocar as necessidades e experiências das mulheres em primeiro lugar.",
        },
        {
          name: "Dr. Aisha Patel",
          role: "Pesquisadora Principal",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Nossa pesquisa impulsiona a inovação na saúde da mulher, levando a melhores resultados para todos.",
        },
      ],
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
  },
  "es-ES": {
    language: "Español",
    nav: {
      services: "Servicios",
      approach: "Enfoque",
      mission: "Misión",
      team: "Equipo",
    },
    hero: {
      title: "Empoderando la Salud de la Mujer en Cada Etapa",
      subtitle:
        "Eleva Care ofrece un enfoque holístico para la salud de la mujer, conectándote con proveedores expertos que se especializan en apoyar a las mujeres en cada etapa de la vida.",
      cta1: "Realiza un Quiz",
      cta2: "Reserva Ahora",
    },
    podcast: {
      title: "Elevando la Salud de la Mujer con Patrícia Mota, PT, PhD por Eleva Care",
      description:
        "Empodera tu viaje de salud con \"Elevando la Salud de la Mujer\" por Eleva Care. Nuestros expertos desglosan investigaciones de vanguardia en salud de la mujer cada semana, traduciendo estudios complejos en ideas prácticas.",
      cta: "Escucha Ahora",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Atención integral para cada etapa de la vida de una mujer",
      items: [
        {
          icon: <Baby className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Embarazo y Postparto",
          description:
            "Atención y apoyo expertos durante tu embarazo y viaje postparto, incluyendo fisioterapia, atención de OB/GYN y orientación nutricional.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Leaf className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Salud Pélvica",
          description:
            "Tratamientos especializados para el dolor pélvico, incontinencia y prolapso, con planes personalizados adaptados a tus necesidades únicas.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Brain className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Bienestar Mental",
          description:
            "Acceso a terapia y apoyo para el estrés, la ansiedad y la depresión, asegurando que tu salud mental sea priorizada en cada etapa.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Dumbbell className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Fitness y Nutrición",
          description:
            "Planes de fitness personalizados y orientación nutricional para ayudarte a alcanzar tus objetivos de salud y sentirte mejor.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Users className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Salud Adolescente",
          description:
            "Apoyo especializado para jóvenes mujeres que navegan por la pubertad, la menstruación y la transición a la vida adulta.",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          icon: <Heart className="w-12 h-12 text-[#0d6c70] mb-4" />,
          title: "Manejo de la Menopausia",
          description:
            "Atención integral para abordar los cambios hormonales y priorizar el bienestar durante la transición a la menopausia.",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    approach: {
      title: "Nuestro Enfoque",
      description:
        "En Eleva Care, creemos en un enfoque colaborativo para la atención. Nuestro equipo de expertos trabaja en conjunto para brindarte un apoyo integral y personalizado, asegurando que cada aspecto de tu salud sea atendido.",
    },
    mission: {
      title: "Nuestra Misión",
      subtitle: "Transformando la atención de la salud de la mujer a través de la innovación y la compasión",
      description:
        "En Eleva Care, estamos dedicados a empoderar a mujeres de todas las edades para que tomen el control de su salud y bienestar. Nuestra misión es proporcionar una plataforma de apoyo e inclusión que conecte a las personas con recursos liderados por expertos, información basada en evidencia y una comunidad colaborativa de profesionales de la salud.",
      vision: {
        title: "Nuestra Visión",
        description:
          "Cerrar la brecha entre la investigación científica y la aplicación práctica, ofreciendo soluciones de atención de salud de la mujer accesibles y personalizadas en cada etapa de la vida.",
      },
      cta: "Únete a Nosotros",
      stats: [
        { value: "10K+", label: "Mujeres Ayudadas" },
        { value: "50+", label: "Proveedores Expertos" },
        { value: "95%", label: "Satisfacción del Paciente" },
        { value: "24/7", label: "Soporte Disponible" },
      ],
      beliefs: {
        title: "En Eleva Care, creemos:",
        items: [
          "Toda mujer merece acceso a atención médica de calidad.",
          "El conocimiento es poder en las decisiones de salud.",
          "La colaboración conduce a mejores resultados de salud.",
          "La salud de la mujer es un viaje evolutivo a lo largo de la vida.",
          "La salud pélvica es esencial para el bienestar general.",
        ],
      },
    },
    team: {
      title: "Conoce a Nuestro Equipo",
      subtitle: "Fundada por expertos apasionados en la salud de la mujer",
      description:
        "Eleva Care está dirigida por un equipo de profesionales dedicados que reúnen años de experiencia en salud de la mujer, tecnología y atención al paciente. Nuestros fundadores y miembros clave del equipo están comprometidos a revolucionar la forma en que las mujeres acceden y experimentan la atención médica.",
      members: [
        {
          name: "Dr. Patricia Mota",
          role: "Fundadora y CEO",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Nuestro objetivo es hacer que la atención experta en salud de la mujer sea accesible para todos, independientemente de la ubicación o las circunstancias.",
        },
        {
          name: "Dr. Sofia Rodriguez",
          role: "Directora Médica",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Estamos cerrando la brecha entre la investigación de vanguardia y la atención al paciente cotidiana.",
        },
        {
          name: "Emma Chen",
          role: "Jefa de Experiencia del Paciente",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "En Eleva Care, estamos reimaginando la atención médica para poner las necesidades y experiencias de las mujeres en primer lugar.",
        },
        {
          name: "Dr. Aisha Patel",
          role: "Investigadora Principal",
          image: "/placeholder.svg?height=400&width=300",
          quote:
            "Nuestra investigación impulsa la innovación en la salud de la mujer, llevando a mejores resultados para todos.",
        },
      ],
    },
    social: {
      title: "Síguenos",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      facebook: "Facebook",
      twitter: "Twitter",
      scholar: "Google Scholar",
    },
    footer: {
      copyright: "© 2024 Eleva Care. Todos los derechos reservados.",
      terms: "Términos de Servicio",
      privacy: "Privacidad",
    },
  },
};

// Define the type for supported languages
type Language = "en" | "pt-PT" | "es-ES";

// Define the FadeInSection component with children type
const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    config: config.molasses,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    // Check if domRef.current is not null before observing
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <animated.div ref={domRef} style={props}>
      {children}
    </animated.div>
  );
};

export default function LandingPage() {
  const [lang, setLang] = useState<Language>("en"); // Use the defined type
  const t = translations[lang]; // Now TypeScript knows lang is a valid key
  const [isHalfPageModalOpen, setIsHalfPageModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-[#e6f3f3]">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 fixed w-full z-50 border-b border-[#0d6c70]/10">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-[#0d6c70]" />
          <span className="ml-2 text-2xl font-bold text-[#0d6c70]">
            Eleva Care
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#services"
          >
            {t.nav.services}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#approach"
          >
            {t.nav.approach}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#mission"
          >
            {t.nav.mission}
          </Link>
          <Link
            className="text-sm font-medium text-[#576d69] hover:text-[#0d6c70] transition-colors"
            href="#team"
          >
            {t.nav.team}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#576d69] hover:text-[#0d6c70]"
              >
                <Globe className="h-5 w-5 mr-2" />
                {t.language}
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLang("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("pt-PT")}>
                Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLang("es-ES")}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#e6f3f3] to-[#f0f8f8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <FadeInSection>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0d6c70]">
                  {t.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-[#576d69] md:text-xl">
                  {t.hero.subtitle}
                </p>
                <div className="space-x-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
                        {t.hero.cta1}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <iframe
                        src="https://patimota.typeform.com/to/XNQHJbgT?utm_source=eleva-care&utm_medium=website&utm_campaign=ongoing&utm_term=physical%2Btherapy&utm_content=temp_home_btn"
                        width="100%"
                        height="500px"
                        frameBorder="0"
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="border-[#0d6c70] text-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                    onClick={() => setIsHalfPageModalOpen(true)}
                  >
                    {t.hero.cta2}
                  </Button>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
        {isHalfPageModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl h-1/2 rounded-t-lg overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-[#0d6c70]/10">
                <h2 className="text-xl font-bold text-[#0d6c70]">
                  {t.hero.cta2}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsHalfPageModalOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto">
                <iframe
                  src="https://cal.com/patimota/consulta-de-fisioterapia"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-[#f0f8f8]">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70]">
                    {t.podcast.title}
                  </h2>
                  <p className="text-[#576d69] md:text-lg">
                    {t.podcast.description}
                  </p>
                  <Button
                    className="bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90"
                    asChild
                  >
                    <Link
                      href="https://podcasters.spotify.com/pod/show/elevacare"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Podcast className="mr-2 h-4 w-4" />
                      {t.podcast.cta}
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Eleva Care Podcast"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="services"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4 text-[#0d6c70]">
                {t.services.title}
              </h2>
              <p className="text-xl text-center mb-8 text-[#576d69]">
                {t.services.subtitle}
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {t.services.items.map((service, index) => (
                  <Card
                    key={index}
                    className="bg-white border-[#0d6c70]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {service.icon}
                        <h3 className="text-xl font-bold ml-4 text-[#0d6c70]">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-[#576d69]">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="approach"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0d6c70]">
                {t.approach.title}
              </h2>
              <p className="text-xl text-center max-w-[800px] mx-auto text-[#576d69]">
                {t.approach.description}
              </p>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="mission"
            className="w-full py-12 md:py-24 lg:py-32 bg-white"
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
                  {t.mission.title}
                </h2>
                <p className="mt-4 text-xl text-[#576d69]">
                  {t.mission.subtitle}
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <p className="text-xl mb-6 text-[#576d69]">
                    {t.mission.description}
                  </p>
                  <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">
                    {t.mission.vision.title}
                  </h3>
                  <p className="text-xl mb-6 text-[#576d69]">
                    {t.mission.vision.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2 text-[#0d6c70]">
                      {t.mission.beliefs.title}
                    </h4>
                    <ul className="list-disc list-inside text-[#576d69]">
                      {t.mission.beliefs.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-4 bg-[#0d6c70] text-white hover:bg-[#0d6c70]/90">
                    {t.mission.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {t.mission.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-[#f0f8f8] p-6 rounded-lg text-center"
                    >
                      <div className="text-3xl font-bold text-[#0d6c70]">
                        {stat.value}
                      </div>
                      <div className="text-[#576d69]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section
            id="team"
            className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]"
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0d6c70]">
                  {t.team.title}
                </h2>
                <p className="mt-4 text-xl text-[#576d69]">{t.team.subtitle}</p>
              </div>
              <p className="text-center text-xl mb-12 text-[#576d69]">
                {t.team.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.team.members.map((member, index) => (
                  <Card key={index} className="bg-white border-[#0d6c70]/10">
                    <CardContent className="flex flex-col items-center p-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mb-4 w-32 h-32 object-cover"
                      />
                      <h3 className="text-xl font-bold text-[#0d6c70]">
                        {member.name}
                      </h3>
                      <p className="text-[#576d69] mb-4">{member.role}</p>
                      <p className="text-center italic text-[#576d69] text-sm">
                        "{member.quote}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-[#0d6c70]">
                {t.social.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://www.linkedin.com/in/patimota/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    {t.social.linkedin}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://www.instagram.com/patricia_mota_pt_phd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-2 h-4 w-4" />
                    {t.social.instagram}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://facebook.com/eleva.care"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    {t.social.facebook}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://x.com/eleva.care"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="mr-2 h-4 w-4" />
                    {t.social.twitter}
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white"
                  asChild
                >
                  <Link
                    href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    {t.social.scholar}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#0d6c70]/10 bg-white">
        <p className="text-xs text-[#576d69]">{t.footer.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#576d69]"
            href="#"
          >
            {t.footer.terms}
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-[#576d69]"
            href="#"
          >
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  );
}