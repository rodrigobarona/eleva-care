import React from 'react'; // Add this line to import React
import { Droplets, Flower2, Baby } from 'lucide-react';
export const translations = {
  language: 'Español',
  nav: {
    services: 'Servicios',
    approach: 'Enfoque',
    mission: 'Misión',
    team: 'Equipo',
    podcast: 'Podcast',
    newsletter: 'Newsletter',
  },
  hero: {
    title: 'Atención de Clase Mundial para Mujeres, *cuando lo necesites.*',
    subtitle: 'Reserva con los Principales Especialistas en Salud de la Mujer - A Tu Ritmo.',
    cta1: '¿Como podemos ayudarte? Haz el Quiz',
    cta2: 'Reservar ahora',
    cta2Help: 'Marca tu cita',
    cta2Help2: 'en menos de 3 minutos.',
  },
  podcast: {
    title: 'Elevando la Salud Femenina con Patrícia Mota, PT, PhD',
    subtitle: 'El podcast',
    description:
      'Empodera tu viaje de salud con "Elevando la Salud Femenina" de Eleva Care. Nuestros expertos discuten investigaciones de vanguardia sobre salud femenina, traduciendo estudios complejos en ideas prácticas cada semana. Desde el bienestar reproductivo hasta la salud mental, cubrimos todo.',
    cta: 'Escuchar ahora',
  },
  services: {
    title: 'Cómo podemos ayudar',
    subtitle: 'Cuidado especializado, personalizado para ti',
    description:
      'Accede a cuidados personalizados con profesionales altamente cualificados en salud femenina en todo el mundo. Te conectamos con la experiencia que necesitas, desde consultas en línea hasta recursos locales, todo adaptado a tu viaje de salud.',
    items: [
      {
        icon: <Baby className="h-12 w-12 text-elevaPrimary" />,
        title: 'Embarazo y Postparto',
        description:
          'Atención integral para apoyar a las mujeres durante el transformador viaje del embarazo y la maternidad temprana.',
        items: [
          '**Fisioterapia:** Prepárate para el parto, maneja el dolor, recupera tu fuerza, trata la diástasis abdominal y recibe intervenciones centradas en el suelo pélvico para prevenir y tratar disfunciones.',
          '**Cuidado Obstétrico y Ginecológico:** Recibe cuidados especializados durante el embarazo y la recuperación postparto.',
          '**Orientación Nutricional:** Optimiza tu dieta para un embarazo y postparto saludables.',
          '**Apoyo en Salud Mental:** Supera los desafíos emocionales y mentales de la maternidad con orientación compasiva.',
          '**Ejercicio:** Explora los beneficios del ejercicio terapéutico durante el embarazo y el postparto, diseñado para apoyar los cambios en tu cuerpo y promover una recuperación saludable.',
        ],
        image: '/img/Pregnant-Woman-Flowers.jpg?height=450&width=300?monochrome=006D77',
        cta: 'Leer más',
      },
      {
        icon: <Droplets className="h-12 w-12 text-elevaPrimary" />,
        title: 'Salud Pélvica',
        description:
          'Cuidado especializado que satisface las necesidades únicas de la salud pélvica de las mujeres a lo largo de su vida.',
        items: [
          '**Fisioterapia Pélvica:** Tratamiento especializado para incontinencia, prolapso de órganos pélvicos y dolor pélvico, incluyendo dolor durante las relaciones sexuales.',
          '**Cuidados Obstétricos y Ginecológicos Especializados:** Diagnóstico y tratamiento especializado para una amplia gama de problemas de salud pélvica, como el prolapso, la endometriosis y la disfunción sexual.',
          '**Apoyo en Salud Mental:** Asesoramiento y terapia para abordar los aspectos psicológicos de las preocupaciones sobre la salud pélvica.',
        ],
        image: '/img/Woman-Working-Out-Living-Room.jpg?height=450&width=300',
        cta: 'Leer más',
      },
      {
        icon: <Flower2 className="h-12 w-12 text-elevaPrimary" />,
        title: 'En Todas las Etapas',
        description:
          'Apoyo holístico para las preocupaciones de salud femenina, desde la adolescencia hasta la menopausia y más allá.',
        items: [
          '**Salud Adolescente:** Enfrenta con confianza la pubertad, la menstruación y los primeros años de la adultez femenina con el apoyo adecuado.',
          '**Gestión de la Menopausia:** Enfrenta los cambios hormonales, gestiona los síntomas y prioriza tu bienestar.',
          '**Bienestar Mental:** Accede a terapia y apoyo para gestionar el estrés, la ansiedad, la depresión y otras preocupaciones de salud mental.',
          '**Ejercicio y Nutrición:** Descubre planes de ejercicio y guías nutricionales personalizadas para tus necesidades individuales.',
          '**Fisioterapia:** Maneja el dolor, previene lesiones y optimiza tu rendimiento físico, con especialización en salud del suelo pélvico para mujeres activas y atletas.',
        ],
        image: '/img/Smiling-Women-Photo.jpg?height=450&width=300',
        cta: 'Leer más',
      },
    ],
  },
  approach: {
    title: 'En Eleva Care, creemos que:',
    items: [
      'Toda mujer merece acceso a **cuidados de salud de calidad**.',
      '**El conocimiento es poder** en las decisiones de salud.',
      '**La colaboración** conduce a mejores resultados de salud.',
      'La salud femenina es un **viaje en constante evolución**.',
      '**La salud pélvica** es fundamental para el bienestar general.',
    ],
    description:
      'En Eleva Care, creemos en un enfoque colaborativo para el cuidado. Nuestro equipo de expertos trabaja en conjunto para ofrecer un apoyo integral y personalizado, asegurando que cada aspecto de tu salud esté cubierto.',
  },
  mission: {
    title: 'Nuestra Misión',
    subtitle: 'Transformar la salud femenina a través de la innovación y la compasión',
    description:
      'En Eleva Care, nos dedicamos a empoderar a las mujeres de todas las edades para que tomen el control de su salud y bienestar. Nuestra misión es proporcionar una plataforma de apoyo inclusiva que conecte a los individuos con recursos liderados por expertos, información basada en evidencia y una comunidad colaborativa de profesionales de la salud.',
    vision: {
      title: 'Nuestra Visión',
      description:
        'Construir un puente entre la investigación científica y la aplicación práctica, ofreciendo soluciones accesibles y personalizadas para la salud femenina en todas las etapas de la vida.',
    },
    cta: 'Únete a nosotros',
    stats: [
      { value: '10K+', label: 'Mujeres Ayudadas' },
      { value: '50+', label: 'Profesionales Especializados' },
      { value: '95%', label: 'Satisfacción de las Pacientes' },
      { value: '24/7', label: 'Soporte Disponible' },
    ],
    beliefs: {
      title: 'En Eleva Care, creemos que:',
      items: [
        'Toda mujer merece acceso a cuidados de salud de calidad.',
        'El conocimiento es poder en las decisiones de salud.',
        'La colaboración conduce a mejores resultados de salud.',
        'La salud femenina es un viaje en constante evolución.',
        'La salud pélvica es fundamental para el bienestar general.',
      ],
    },
  },
  team: {
    title: 'Conoce a Nuestro Equipo',
    subtitle: 'Fundado por expertos apasionados en salud femenina',
    description:
      'Eleva Care está liderado por un equipo de profesionales dedicados que combinan años de experiencia en salud femenina, tecnología y cuidado del paciente. Nuestros fundadores y miembros clave están comprometidos en revolucionar el acceso y la experiencia de las mujeres en el sistema de salud.',
    members: [
      {
        name: 'Patricia Mota, PT, PhD',
        role: 'Cofundadora & CEO',
        image: '/img/team/team-patricia-mota.jpg?height=1200&width=1200',
        quote:
          'Nuestra misión es elevar los cuidados de salud femenina, haciéndolos más accesibles, innovadores y empoderadores para todas las mujeres.',
      },
      {
        name: 'Cristine Homsi Jorge, PT, PhD',
        role: 'Directora Científica',
        image: '/img/team/team-cristine-homsi-jorge.jpg?height=1200&width=1200',
        quote:
          'Nuestra investigación innovadora es la base de soluciones de salud que realmente satisfacen las necesidades únicas de las mujeres.',
      },
      {
        name: 'Alexandre Delgado, PT, PhD',
        role: 'Director de Investigación e Innovación',
        image: '/img/team/team-alexandre-delgado-br.png?height=1200&width=1200',
        quote:
          'Innovar en la salud femenina significa buscar continuamente nuevos conocimientos para mejorar la atención y la calidad de vida de todas.',
      },
      {
        name: 'Patricia Driusso, PT, PhD',
        role: 'Directora de Investigación Clínica',
        image: '/img/team/team-patricia-driusso.jpg?height=1200&width=1200',
        quote:
          'Nuestra investigación se centra en cerrar la brecha entre la ciencia y la aplicación práctica, empoderando a las mujeres a través de mejores resultados de salud.',
      },
      {
        name: 'Joana Goulão',
        role: 'Fisioterapeuta',
        image: '/img/team/team-joana-goulao.jpg?height=1200&width=1200',
        quote:
          'La salud pélvica es un pilar crucial para el bienestar general de las mujeres, y estoy comprometida en brindar el mejor apoyo posible.',
      },
    ],
  },
  newsletter: {
    title: 'Femme Focus',
    subtitle: 'Una Publicación de Eleva Care',
    description:
      'Tu enfoque mensual sobre la salud de la mujer, consejos de expertos y relatos inspiradores para nutrir cada etapa de tu viaje hacia el bienestar.',
    placeholder: 'Ingresa tu correo electrónico',
    cta: 'Suscribirse',
    privacy: 'Respetamos tu privacidad. Puedes darte de baja en cualquier momento.',
  },

  social: {
    title: 'Síguenos en redes sociales',
    description:
      'Únete a nuestra comunidad en línea para estar al tanto de nuestras últimas investigaciones, recursos y consejos sobre salud femenina.',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    scholar: 'Google Scholar',
  },
  footer: {
    copyright: '© 2024 Eleva Care. All rights reserved.',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
  },
};
