import { Heart, Leaf, Users, Baby, Brain, Dumbbell } from 'lucide-react';

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
      'Eleva Care ofrece un enfoque holístico para la salud de las mujeres, conectándote con proveedores expertos que se especializan en apoyar a las mujeres en cada etapa de la vida.',
    cta1: 'Hacer un Cuestionario',
    cta2: 'Reservar Ahora',
  },
  podcast: {
    title: 'Elevando la Salud de las Mujeres con Patrícia Mota, PT, PhD por Eleva Care',
    description:
      'Empodera tu viaje de salud con "Elevando la Salud de las Mujeres" de Eleva Care. Nuestras anfitrionas expertas analizan semanalmente las investigaciones más recientes en salud femenina, traduciendo estudios complejos en información práctica. Desde el bienestar reproductivo hasta la salud mental, lo cubrimos todo.',
    cta: 'Escuchar Ahora',
  },
  services: {
    title: 'Nuestros Servicios',
    subtitle: 'Atención integral para cada etapa de la vida de una mujer',
    items: [
      {
        icon: <Baby className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Embarazo y Posparto',
        description:
          'Atención y apoyo expertos durante todo tu viaje de embarazo y posparto, incluyendo fisioterapia, atención obstétrica/ginecológica y orientación nutricional.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Leaf className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Salud Pélvica',
        description:
          'Tratamientos especializados para el dolor pélvico, incontinencia y prolapso, con planes personalizados adaptados a tus necesidades únicas.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Brain className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Bienestar Mental',
        description:
          'Acceso a terapia y apoyo para el estrés, la ansiedad y la depresión, asegurando que tu salud mental sea priorizada en cada etapa.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Dumbbell className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Fitness y Nutrición',
        description:
          'Planes de fitness personalizados y orientación nutricional para ayudarte a alcanzar tus objetivos de salud y sentirte en tu mejor forma.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Users className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Salud Adolescente',
        description:
          'Apoyo especializado para mujeres jóvenes que atraviesan la pubertad, la menstruación y la transición a la edad adulta.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Heart className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Manejo de la Menopausia',
        description:
          'Atención integral para abordar los cambios hormonales y priorizar el bienestar durante la transición de la menopausia.',
        image: '/placeholder.png?height=200&width=300',
      },
    ],
  },
  approach: {
    title: 'Nuestro Enfoque',
    description:
      'En Eleva Care, creemos en un enfoque colaborativo para la atención. Nuestro equipo de expertos trabaja en conjunto para brindarte un apoyo integral y personalizado, asegurando que se aborde cada aspecto de tu salud.',
  },
  mission: {
    title: 'Nuestra Misión',
    subtitle:
      'Transformar la atención de la salud de las mujeres a través de la innovación y la compasión',
    description:
      'En Eleva Care, nos dedicamos a empoderar a mujeres de todas las edades para que tomen el control de su salud y bienestar. Nuestra misión es proporcionar una plataforma de apoyo e inclusiva que conecte a las personas con recursos dirigidos por expertos, información basada en evidencia y una comunidad colaborativa de profesionales de la salud.',
    vision: {
      title: 'Nuestra Visión',
      description:
        'Cerrar la brecha entre la investigación científica y la aplicación práctica, ofreciendo soluciones de atención de salud femenina accesibles y personalizadas a lo largo de todas las etapas de la vida.',
    },
    cta: 'Únete a Nosotros',
    stats: [
      { value: '10K+', label: 'Mujeres Ayudadas' },
      { value: '50+', label: 'Proveedores Expertos' },
      { value: '95%', label: 'Satisfacción de Pacientes' },
      { value: '24/7', label: 'Apoyo Disponible' },
    ],
    beliefs: {
      title: 'En Eleva Care, creemos que:',
      items: [
        'Toda mujer merece acceso a atención médica de calidad.',
        'El conocimiento es poder en las decisiones de salud.',
        'La colaboración conduce a mejores resultados de salud.',
        'La salud de las mujeres es un viaje en constante evolución a lo largo de la vida.',
        'La salud pélvica es esencial para el bienestar general.',
      ],
    },
  },
  team: {
    title: 'Conoce a Nuestro Equipo',
    subtitle: 'Fundado por expertos apasionados en salud femenina',
    description:
      'Eleva Care está liderado por un equipo de profesionales dedicados que reúnen años de experiencia en salud femenina, tecnología y atención al paciente. Nuestros fundadores y miembros clave del equipo están comprometidos a revolucionar la forma en que las mujeres acceden y experimentan la atención médica.',
    members: [
      {
        name: 'Dra. Patricia Mota',
        role: 'Fundadora y CEO',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Nuestro objetivo es hacer que la atención médica especializada para mujeres sea accesible para todas, independientemente de su ubicación o circunstancias.',
      },
      {
        name: 'Dra. Sofía Rodríguez',
        role: 'Directora Médica',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Estamos cerrando la brecha entre la investigación de vanguardia y la atención diaria a las pacientes.',
      },
      {
        name: 'Emma Chen',
        role: 'Responsable de Experiencia del Paciente',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'En Eleva Care, estamos reimaginando la atención médica para poner las necesidades y experiencias de las mujeres en primer lugar.',
      },
      {
        name: 'Dra. Aisha Patel',
        role: 'Investigadora Principal',
        image: '/placeholder.png?height=400&width=300',
        quote:
          'Nuestra investigación impulsa la innovación en la salud de las mujeres, llevando a mejores resultados para todas.',
      },
    ],
  },
  newsletter: {
    title: 'Mantente Actualizada',
    description:
      'Suscríbete a nuestro boletín para recibir las últimas novedades en salud femenina, consejos de expertos y contenido exclusivo.',
    placeholder: 'Introduce tu email',
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
