'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronRight, Heart, Leaf, Sparkles, Users, Globe, ChevronDown, Podcast, Linkedin, Instagram, Facebook, Twitter, BookOpen, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Define the type for supported languages
type Language = "en" | "pt-PT" | "es-ES";

const translations = {
  "en": {
    language: "English",
    nav: {
      services: "Services",
      approach: "Approach",
      mission: "Mission"
    },
    hero: {
      title: "Empowering Women's Health at Every Stage",
      subtitle: "Eleva Care offers a holistic approach to women's health, connecting you with expert providers who specialize in supporting women through every stage of life.",
      cta1: "Take a Quiz",
      cta2: "Book Now"
    },
    podcast: {
      title: "Elevating Women's Health with Patrícia Mota, PT, PhD by Eleva Care",
      description: "Empower your health journey with \"Elevating Women's Health\" by Eleva Care. Our expert hosts break down cutting-edge research in women's health each week, translating complex studies into actionable insights. From reproductive wellness to mental health, we cover it all.",
      cta: "Listen Now"
    },
    services: {
      title: "Our Services",
      pregnancy: {
        title: "Pregnancy & Postpartum",
        items: [
          "Physical Therapy: Prepare for birth, manage pain, and regain strength",
          "OB/GYN Care: Expert care throughout your pregnancy and postpartum journey",
          "Nutritional Guidance: Optimize your diet for a healthy pregnancy and recovery",
          "Mental Health Support: Navigate the emotional challenges of motherhood",
          "Exercise: Therapeutic exercises designed for your changing body"
        ]
      },
      pelvic: {
        title: "Pelvic Health",
        items: [
          "Pelvic Floor Physical Therapy: Address pelvic pain, incontinence, and prolapse",
          "Specialized OB/GYN Care: Expert diagnosis and treatment for pelvic health concerns",
          "Customized Treatment Plans: Tailored approaches for your unique pelvic health needs",
          "Education and Prevention: Learn about pelvic health and preventive measures"
        ]
      },
      stages: {
        title: "Through Every Stage",
        items: [
          "Teen Health: Support for puberty, menstruation, and early womanhood",
          "Menopause Management: Address hormonal changes and prioritize well-being",
          "Mental Wellness: Access therapy for stress, anxiety, and depression",
          "Fitness & Nutrition: Personalized plans for your individual health goals",
          "Physical Therapy: Manage pain and optimize physical performance at any age"
        ]
      }
    },
    approach: {
      title: "Our Approach",
      description: "At Eleva Care, we believe in a collaborative approach to care. Our team of experts work together to provide you with comprehensive and personalized support, ensuring that every aspect of your health is addressed."
    },
    mission: {
      title: "Our Mission",
      description: "To empower women of all ages to take control of their health and well-being. We provide a supportive and inclusive platform that connects individuals with expert-led resources, evidence-based information, and a collaborative community of healthcare professionals.",
      vision: {
        title: "Our Vision",
        description: "To bridge the gap between scientific research and practical application, delivering accessible and personalized women's health care solutions throughout every life stage."
      },
      cta: "Join Us",
      beliefs: {
        title: "At Eleva Care, we believe:",
        items: [
          "Every woman deserves access to quality healthcare.",
          "Knowledge is power in healthcare decisions.",
          "Collaboration leads to better health outcomes.",
          "Women's health is a lifelong, evolving journey.",
          "Pelvic health is essential to overall well-being."
        ]
      }
    },
    social: {
      title: "Follow Us",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      facebook: "Facebook",
      twitter: "Twitter",
      scholar: "Google Scholar"
    },
    footer: {
      copyright: "© 2024 Eleva Care. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy"
    }
  },
  "pt-PT": {
    language: "Português",
    nav: {
      services: "Serviços",
      approach: "Abordagem",
      mission: "Missão"
    },
    hero: {
      title: "Capacitando a Saúde das Mulheres em Todas as Fases",
      subtitle: "A Eleva Care oferece uma abordagem holística à saúde da mulher, conectando-a com profissionais especializados que apoiam as mulheres em todas as fases da vida.",
      cta1: "Faça um Questionário",
      cta2: "Agende Agora"
    },
    podcast: {
      title: "Elevando a Saúde das Mulheres com Patrícia Mota, PT, PhD pela Eleva Care",
      description: "Capacite sua jornada de saúde com \"Elevando a Saúde das Mulheres\" pela Eleva Care. Nossas especialistas decompõem semanalmente as pesquisas mais recentes em saúde da mulher, traduzindo estudos complexos em insights acionáveis. Da saúde reprodutiva à saúde mental, abordamos tudo.",
      cta: "Ouça Agora"
    },
    services: {
      title: "Nossos Serviços",
      pregnancy: {
        title: "Gravidez e Pós-parto",
        items: [
          "Fisioterapia: Prepare-se para o parto, controle a dor e recupere a força",
          "Cuidados Obstétricos: Atendimento especializado durante toda a gravidez e pós-parto",
          "Orientação Nutricional: Otimize sua dieta para uma gravidez e recuperação saudáveis",
          "Apoio à Saúde Mental: Navegue pelos desafios emocionais da maternidade",
          "Exercícios: Exercícios terapêuticos projetados para seu corpo em mudança"
        ]
      },
      pelvic: {
        title: "Saúde Pélvica",
        items: [
          "Fisioterapia do Pavimento Pélvico: Trate dor pélvica, incontinência e prolapso",
          "Cuidados Ginecológicos Especializados: Diagnóstico e tratamento de problemas de saúde pélvica",
          "Planos de Tratamento Personalizados: Abordagens adaptadas às suas necessidades únicas",
          "Educação e Prevenção: Aprenda sobre saúde pélvica e medidas preventivas"
        ]
      },
      stages: {
        title: "Em Todas as Fases",
        items: [
          "Saúde Adolescente: Apoio para puberdade, menstruação e início da vida adulta",
          "Gestão da Menopausa: Aborde mudanças hormonais e priorize o bem-estar",
          "Bem-estar Mental: Acesso a terapia para estresse, ansiedade e depressão",
          "Fitness e Nutrição: Planos personalizados para seus objetivos de saúde individuais",
          "Fisioterapia: Controle a dor e otimize o desempenho físico em qualquer idade"
        ]
      }
    },
    approach: {
      title: "Nossa Abordagem",
      description: "Na Eleva Care, acreditamos numa abordagem colaborativa do cuidado. Nossa equipe de especialistas trabalha em conjunto para fornecer suporte abrangente e personalizado, garantindo que todos os aspectos da sua saúde sejam atendidos."
    },
    mission: {
      title: "Nossa Missão",
      description: "Capacitar mulheres de todas as idades a assumir o controle de sua saúde e bem-estar. Fornecemos uma plataforma de apoio e inclusiva que conecta indivíduos com recursos liderados por especialistas, informações baseadas em evidências e uma comunidade colaborativa de profissionais de saúde.",
      vision: {
        title: "Nossa Visão",
        description: "Preencher a lacuna entre a pesquisa científica e a aplicação prática, oferecendo soluções de cuidados de saúde da mulher acessíveis e personalizadas ao longo de todas as fases da vida."
      },
      cta: "Junte-se a Nós",
      beliefs: {
        title: "Na Eleva Care, acreditamos que:",
        items: [
          "Toda mulher merece acesso a cuidados de saúde de qualidade.",
          "Conhecimento é poder nas decisões de saúde.",
          "A colaboração leva a melhores resultados de saúde.",
          "A saúde da mulher é uma jornada em constante evolução.",
          "A saúde pélvica é essencial para o bem-estar geral."
        ]
      }
    },
    social: {
      title: "Siga-nos",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      facebook: "Facebook",
      twitter: "Twitter",
      scholar: "Google Scholar"
    },
    footer: {
      copyright: "© 2024 Eleva Care. Todos os direitos reservados.",
      terms: "Termos de Serviço",
      privacy: "Privacidade"
    }
  },
  "es-ES": {
    language: "Español",
    nav: {
      services: "Servicios",
      approach: "Enfoque",
      mission: "Misión"
    },
    hero: {
      title: "Empoderando la Salud de la Mujer en Cada Etapa",
      subtitle: "Eleva Care ofrece un enfoque holístico para la salud de la mujer, conectándola con proveedores expertos que se especializan en apoyar a las mujeres en cada etapa de la vida.",
      cta1: "Haz un Cuestionario",
      cta2: "Reserva Ahora"
    },
    podcast: {
      title: "Elevando la Salud de la Mujer con Patrícia Mota, PT, PhD por Eleva Care",
      description: "Potencia tu viaje de salud con \"Elevando la Salud de la Mujer\" de Eleva Care. Nuestras anfitrionas expertas desglosan semanalmente las investigaciones más recientes en salud de la mujer, traduciendo estudios complejos en conocimientos prácticos. Desde el bienestar reproductivo hasta la salud mental, lo cubrimos todo.",
      cta: "Escucha Ahora"
    },
    services: {
      title: "Nuestros Servicios",
      pregnancy: {
        title: "Embarazo y Posparto",
        items: [
          "Fisioterapia: Prepárese para el parto, controle el dolor y recupere la fuerza",
          "Atención Obstétrica: Cuidado experto durante todo su embarazo y recuperación posparto",
          "Orientación Nutricional: Optimice su dieta para un embarazo y recuperación saludables",
          "Apoyo de Salud Mental: Navegue por los desafíos emocionales de la maternidad",
          "Ejercicio: Ejercicios terapéuticos diseñados para su cuerpo cambiante"
        ]
      },
      pelvic: {
        title: "Salud Pélvica",
        items: [
          "Fisioterapia del Suelo Pélvico: Aborde el dolor pélvico, la incontinencia y el prolapso",
          "Atención Ginecológica Especializada: Diagnóstico y tratamiento experto para problemas de salud pélvica",
          "Planes de Tratamiento Personalizados: Enfoques adaptados a sus necesidades únicas",
          "Educación y Prevención: Aprenda sobre la salud pélvica y las medidas preventivas"
        ]
      },
      stages: {
        title: "A Través de Cada Etapa",
        items: [
          "Salud Adolescente: Apoyo para la pubertad, menstruación y el inicio de la edad adulta",
          "Manejo de la Menopausia: Aborde los cambios hormonales y priorice el bienestar",
          "Bienestar Mental: Acceso a terapia para el estrés, ansiedad y depresión",
          "Fitness y Nutrición: Planes personalizados para sus objetivos de salud individuales",
          "Fisioterapia: Controle el dolor y optimice el rendimiento físico a cualquier edad"
        ]
      }
    },
    approach: {
      title: "Nuestro Enfoque",
      description: "En Eleva Care, creemos en un enfoque colaborativo del cuidado. Nuestro equipo de expertos trabaja en conjunto para brindarle un apoyo integral y personalizado, asegurando que se aborden todos los aspectos de su salud."
    },
    mission: {
      title: "Nuestra Misión",
      description: "Empoderar a las mujeres de todas las edades para que tomen el control de su salud y bienestar. Proporcionamos una plataforma de apoyo e inclusiva que conecta a las personas con recursos dirigidos por expertos, información basada en evidencia y una comunidad colaborativa de profesionales de la salud.",
      vision: {
        title: "Nuestra Visión",
        description: "Cerrar la brecha entre la investigación científica y la aplicación práctica, ofreciendo soluciones de atención médica para mujeres accesibles y personalizadas a lo largo de cada etapa de la vida."
      },
      cta: "Únete a Nosotros",
      beliefs: {
        title: "En Eleva Care, creemos que:",
        items: [
          "Toda mujer merece acceso a atención médica de calidad.",
          "El conocimiento es poder en las decisiones de salud.",
          "La colaboración conduce a mejores resultados de salud.",
          "La salud de la mujer es un viaje en constante evolución.",
          "La salud pélvica es esencial para el bienestar general."
        ]
      }
    },
    social: {
      title: "Síguenos",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      facebook: "Facebook",
      twitter: "Twitter",
      scholar: "Google Scholar"
    },
    footer: {
      copyright: "© 2024 Eleva Care. Todos los derechos reservados.",
      terms: "Términos de Servicio",
      privacy: "Privacidad"
    }
  }
}

export function LandingPageComponent() {
  const [lang, setLang] = useState<Language>("en"); // Use the defined type
  const t = translations[lang]; // Now TypeScript knows lang is a valid key
  const [isHalfPageModalOpen, setIsHalfPageModalOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-[#0d6c70]">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 text-white" />
          <span className="ml-2 text-2xl font-bold text-white">Eleva Care</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium text-white hover:text-[#16c6cc]" href="#services">
            {t.nav.services}
          </Link>
          <Link className="text-sm font-medium text-white hover:text-[#16c6cc]" href="#approach">
            {t.nav.approach}
          </Link>
          <Link className="text-sm font-medium text-white hover:text-[#16c6cc]" href="#mission">
            {t.nav.mission}
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:text-[#16c6cc]">
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
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  {t.hero.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-white text-[#0d6c70] hover:bg-[#f0f0f0]">{t.hero.cta1}</Button>
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
                  className="text-white border-white hover:bg-white hover:text-[#0d6c70]"
                  onClick={() => setIsHalfPageModalOpen(true)}
                >
                  {t.hero.cta2}
                </Button>
              </div>
            </div>
          </div>
        </section>
        {isHalfPageModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white w-full max-w-2xl h-1/2 rounded-t-lg overflow-hidden flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold">{t.hero.cta2}</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsHalfPageModalOpen(false)}>
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
        <section className="w-full py-12 md:py-24 bg-[#f0f8f8]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0d6c70]">{t.podcast.title}</h2>
                <p className="text-[#576d69] md:text-lg">{t.podcast.description}</p>
                <Button className="bg-[#1999e] text-white hover:bg-[#16c6cc]" asChild>
                  <Link href="https://podcasters.spotify.com/pod/show/elevacare" target="_blank" rel="noopener noreferrer">
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
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0d6c70]">{t.services.title}</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-[#f0f8f8] border-[#1999e]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Pregnancy & Postpartum Care"
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <Heart className="w-12 h-12 text-[#1999e] mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">{t.services.pregnancy.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#576d69]">
                    {t.services.pregnancy.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#f0f8f8] border-[#1999e]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Pelvic Health Services"
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <Leaf className="w-12 h-12 text-[#1999e] mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">{t.services.pelvic.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#576d69]">
                    {t.services.pelvic.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#f0f8f8] border-[#1999e]">
                <CardContent className="p-6">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Comprehensive Women's Health"
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <Users className="w-12 h-12 text-[#1999e] mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">{t.services.stages.title}</h3>
                  <ul className="list-disc list-inside space-y-2 text-[#576d69]">
                    {t.services.stages.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f8f8]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#0d6c70]">{t.approach.title}</h2>
            <p className="text-xl text-center max-w-[800px] mx-auto text-[#576d69]">
              {t.approach.description}
            </p>
          </div>
        </section>
        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-[#0d6c70]">{t.mission.title}</h2>
                <p className="text-xl mb-4 text-[#576d69]">
                  {t.mission.description}
                </p>
                <h3 className="text-2xl font-bold mb-2 text-[#0d6c70]">{t.mission.vision.title}</h3>
                <p className="text-xl mb-4 text-[#576d69]">
                  {t.mission.vision.description}
                </p>
                <Button className="mt-4 bg-[#1999e] text-white hover:bg-[#16c6cc]">
                  {t.mission.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#0d6c70]">{t.mission.beliefs.title}</h3>
                <ul className="space-y-2 text-[#576d69]">
                  {t.mission.beliefs.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-[#1999e]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-[#f0f8f8]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-[#0d6c70]">{t.social.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white" asChild>
                <Link href="https://www.linkedin.com/in/patimota/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  {t.social.linkedin}
                </Link>
              </Button>
              <Button variant="outline" className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white" asChild>
                <Link href="https://www.instagram.com/patricia_mota_pt_phd/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  {t.social.instagram}
                </Link>
              </Button>
              <Button variant="outline" className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white" asChild>
                <Link href="https://facebook.com/eleva.care" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" />
                  {t.social.facebook}
                </Link>
              </Button>
              <Button variant="outline" className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white" asChild>
                <Link href="https://x.com/eleva.care" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" />
                  {t.social.twitter}
                </Link>
              </Button>
              <Button variant="outline" className="text-[#0d6c70] border-[#0d6c70] hover:bg-[#0d6c70] hover:text-white" asChild>
                <Link href="https://scholar.google.pt/citations?user=fNJsrScAAAAJ" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  {t.social.scholar}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#1999e] bg-[#f0f8f8]">
        <p className="text-xs text-[#576d69]">{t.footer.copyright}</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-[#576d69]" href="#">
            {t.footer.terms}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-[#576d69]" href="#">
            {t.footer.privacy}
          </Link>
        </nav>
      </footer>
    </div>
  )
}