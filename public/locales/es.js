import React from 'react'; // Add this line to import React
import { Droplets, Flower2, Baby } from 'lucide-react';
export const translations = {
  language: 'Español',
  nav: {
    services: 'Servicios',
    approach: 'Enfoque',
    mission: 'Misión',
    team: 'Equipo',
  },
  hero: {
    title: 'Empoderando la Salud de las Mujeres en Cada Etapa',
    subtitle:
      'Eleva Care ofrece un enfoque holístico para la salud de la mujer, conectándote con proveedores expertos que se especializan en apoyar a las mujeres en cada etapa de la vida.',
    cta1: 'Hacer un Cuestionario',
    cta2: 'Reservar Ahora',
  },
  podcast: {
    title: 'Elevando la Salud de las Mujeres con Patrícia Mota, PT, PhD por Eleva Care',
    description:
      'Empodera tu viaje de salud con "Elevando la Salud de las Mujeres" de Eleva Care. Nuestras anfitrionas expertas analizan semanalmente las investigaciones más recientes en salud femenina, transformando estudios complejos en conocimientos prácticos. Desde el bienestar reproductivo hasta la salud mental, lo cubrimos todo.',
    cta: 'Escucha Ahora',
  },
  services: {
    title: 'Nuestros Servicios',
    subtitle:
      'En Eleva Care, creemos en un enfoque colaborativo del cuidado. \n Nuestro equipo de expertos trabaja en conjunto para brindarte un apoyo integral y personalizado.',
    items: [
      {
        icon: <Baby className="h-12 w-12 text-[#0d6c70]" />,
        title: 'Embarazo y Posparto',
        description:
          'Atención integral para apoyar a las mujeres durante el viaje transformador del embarazo y la maternidad temprana.',
        items: [
          '**Fisioterapia:** Prepárate para el parto, maneja el dolor, recupera la fuerza, aborda la diástasis de rectos y recibe intervenciones específicas del suelo pélvico para prevenir y tratar disfunciones.',
          '**Atención Obstétrica/Ginecológica:** Recibe atención experta durante todo tu viaje de embarazo y recuperación posparto.',
          '**Orientación Nutricional:** Optimiza tu dieta para un embarazo saludable y un viaje posparto equilibrado.',
          '**Apoyo a la Salud Mental:** Navega por los desafíos emocionales y mentales de la maternidad con orientación compasiva.',
          '**Ejercicio:** Explora los beneficios del ejercicio terapéutico durante el embarazo y el posparto, diseñado para apoyar los cambios en tu cuerpo y promover una recuperación saludable.',
        ],
        image: '/img/Pregnant-Woman-Flowers.jpg?height=450&width=300',
      },
      {
        icon: <Droplets className="h-12 w-12 text-[#0d6c70]" />,
        title: 'Salud Pélvica',
        description:
          'Atención especializada que aborda las necesidades únicas de salud pélvica de las mujeres a lo largo de sus vidas.',
        items: [
          '**Fisioterapia Pélvica:** Tratamiento especializado para la incontinencia, prolapso de órganos pélvicos y dolor pélvico, incluyendo dolor durante las relaciones sexuales.',
          '**Atención Obstétrica/Ginecológica Especializada:** Diagnóstico y tratamiento experto para una variedad de problemas de salud pélvica, incluyendo prolapso, endometriosis y disfunción sexual.',
          '**Apoyo a la Salud Mental:** Asesoramiento y terapia para abordar los aspectos psicológicos de las preocupaciones de salud pélvica.',
        ],
        image: '/img/Woman-Working-Out-Living-Room.jpg?height=450&width=300',
      },
      {
        icon: <Flower2 className="h-12 w-12 text-[#0d6c70]" />,
        title: 'En Cada Etapa',
        description:
          'Apoyo holístico para las preocupaciones de salud de las mujeres desde la adolescencia hasta la menopausia y más allá.',
        items: [
          '**Salud Adolescente:** Navega por la pubertad, la menstruación y el inicio de la edad adulta con confianza y apoyo.',
          '**Manejo de la Menopausia:** Aborda los cambios hormonales, maneja los síntomas y prioriza tu bienestar.',
          '**Bienestar Mental:** Accede a terapia y apoyo para manejar el estrés, la ansiedad, la depresión y otras preocupaciones de salud mental.',
          '**Fitness y Nutrición:** Descubre planes de ejercicio personalizados y orientación nutricional adaptados a tus necesidades individuales.',
          '**Fisioterapia:** Maneja el dolor, previene lesiones y optimiza tu rendimiento físico, con experiencia especializada en salud del suelo pélvico para mujeres activas y atletas femeninas.',
        ],
        image: '/img/Smiling-Women-Photo.jpg?height=450&width=300',
      },
    ],
  },
  approach: {
    title: 'Nuestro Enfoque',
    description:
      'En Eleva Care, creemos en un enfoque colaborativo del cuidado.  \n Nuestro equipo de expertos trabaja en conjunto para brindarte un apoyo integral y personalizado.',
  },
  mission: {
    title: 'Nuestra Misión',
    subtitle:
      'Transformando la atención de la salud de las mujeres a través de la innovación y la compasión',
    description:
      'En Eleva Care, nos dedicamos a empoderar a las mujeres de todas las edades para que tomen el control de su salud y bienestar. Nuestra misión es proporcionar una plataforma de apoyo e inclusiva que conecte a las personas con recursos liderados por expertos, información basada en evidencia y una comunidad colaborativa de profesionales de la salud.',
    vision: {
      title: 'Nuestra Visión',
      description:
        'Cerrar la brecha entre la investigación científica y la aplicación práctica, ofreciendo soluciones de atención de salud femenina accesibles y personalizadas a lo largo de cada etapa de la vida.',
    },
    cta: 'Únete a Nosotros',
    stats: [
      { value: '10K+', label: 'Mujeres Ayudadas' },
      { value: '50+', label: 'Proveedores Expertos' },
      { value: '95%', label: 'Satisfacción del Paciente' },
      { value: '24/7', label: 'Soporte Disponible' },
    ],
    beliefs: {
      title: 'En Eleva Care, creemos que:',
      items: [
        'Cada mujer merece acceso a atención médica de calidad.',
        'El conocimiento es poder en las decisiones de salud.',
        'La colaboración conduce a mejores resultados de salud.',
        'La salud de la mujer es un viaje de toda la vida en evolución.',
        'La salud pélvica es esencial para el bienestar general.',
      ],
    },
  },
  team: {
    title: 'Conoce a Nuestro Equipo',
    subtitle: 'Fundado por expertos apasionados en la salud de la mujer',
    description:
      'Eleva Care está dirigido por un equipo de profesionales dedicados que reúnen años de experiencia en salud femenina, tecnología y atención al paciente. Nuestros fundadores y miembros clave del equipo están comprometidos a revolucionar la forma en que las mujeres acceden y experimentan la atención médica.',
    members: [
      {
        name: 'Dra. Patricia Mota',
        role: 'Fundadora y CEO',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Nuestro objetivo es hacer que la atención médica experta para mujeres sea accesible para todas, independientemente de su ubicación o circunstancias.',
      },
      {
        name: 'Dra. Sofia Rodriguez',
        role: 'Directora Médica',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Estamos cerrando la brecha entre la investigación de vanguardia y la atención diaria al paciente.',
      },
      {
        name: 'Emma Chen',
        role: 'Jefa de Experiencia del Paciente',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'En Eleva Care, estamos reimaginando la atención médica para poner las necesidades y experiencias de las mujeres en primer lugar.',
      },
      {
        name: 'Dra. Aisha Patel',
        role: 'Investigadora Principal',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Nuestra investigación impulsa la innovación en la salud de la mujer, lo que conduce a mejores resultados para todas.',
      },
    ],
  },
  newsletter: {
    title: 'Mantente Actualizada',
    description:
      'Suscríbete a nuestro boletín para recibir las últimas novedades en salud femenina, consejos de expertos y contenido exclusivo.',
    placeholder: 'Ingresa tu correo electrónico',
    cta: 'Suscribirse',
    privacy: 'Respetamos tu privacidad. Cancela la suscripción en cualquier momento.',
  },
  social: {
    title: 'Síguenos',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    scholar: 'Google Scholar',
  },
  footer: {
    copyright: '© 2024 Eleva Care. Todos los derechos reservados.',
    terms: 'Términos de Servicio',
    privacy: 'Privacidad',
  },
};
