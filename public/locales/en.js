import { Heart, Leaf, Users, Baby, Brain, Dumbbell } from 'lucide-react';
export const translations = {
  language: 'English',
  nav: {
    services: 'Services',
    approach: 'Approach',
    mission: 'Mission',
    team: 'Team',
  },
  hero: {
    title: "Empowering Women's Health at Every Stage",
    subtitle:
      "Eleva Care offers a holistic approach to women's health, connecting you with expert providers who specialize in supporting women through every stage of life.",
    cta1: 'Take a Quiz',
    cta2: 'Book Now',
  },
  podcast: {
    title: "Elevating Women's Health with Patrícia Mota, PT, PhD by Eleva Care",
    description:
      'Empower your health journey with "Elevating Women\'s Health" by Eleva Care. Our expert hosts break down cutting-edge research in women\'s health each week, translating complex studies into actionable insights. From reproductive wellness to mental health, we cover it all.',
    cta: 'Listen Now',
  },
  services: {
    title: 'Our Services',
    subtitle: "Comprehensive care for every stage of a woman's life",
    items: [
      {
        icon: <Baby className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Pregnancy & Postpartum',
        description:
          'Expert care and support throughout your pregnancy and postpartum journey, including physical therapy, OB/GYN care, and nutritional guidance.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Leaf className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Pelvic Health',
        description:
          'Specialized treatments for pelvic pain, incontinence, and prolapse, with customized plans tailored to your unique needs.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Brain className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Mental Wellness',
        description:
          'Access to therapy and support for stress, anxiety, and depression, ensuring your mental health is prioritized at every stage.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Dumbbell className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Fitness & Nutrition',
        description:
          'Personalized fitness plans and nutritional guidance to help you achieve your health goals and feel your best.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Users className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Teen Health',
        description:
          'Specialized support for young women navigating puberty, menstruation, and the transition to adulthood.',
        image: '/placeholder.png?height=200&width=300',
      },
      {
        icon: <Heart className="mb-4 h-12 w-12 text-[#0d6c70]" />,
        title: 'Menopause Management',
        description:
          'Comprehensive care to address hormonal changes and prioritize well-being during the menopausal transition.',
        image: '/placeholder.png?height=200&width=300',
      },
    ],
  },
  approach: {
    title: 'Our Approach',
    description:
      'At Eleva Care, we believe in a collaborative approach to care. Our team of experts work together to provide you with comprehensive and personalized support, ensuring that every aspect of your health is addressed.',
  },
  mission: {
    title: 'Our Mission',
    subtitle: "Transforming women's health care through innovation and compassion",
    description:
      'At Eleva Care, we are dedicated to empowering women of all ages to take control of their health and well-being. Our mission is to provide a supportive and inclusive platform that connects individuals with expert-led resources, evidence-based information, and a collaborative community of healthcare professionals.',
    vision: {
      title: 'Our Vision',
      description:
        "To bridge the gap between scientific research and practical application, delivering accessible and personalized women's health care solutions throughout every life stage.",
    },
    cta: 'Join Us',
    stats: [
      { value: '10K+', label: 'Women Helped' },
      { value: '50+', label: 'Expert Providers' },
      { value: '95%', label: 'Patient Satisfaction' },
      { value: '24/7', label: 'Support Available' },
    ],
    beliefs: {
      title: 'At Eleva Care, we believe:',
      items: [
        'Every woman deserves access to quality healthcare.',
        'Knowledge is power in healthcare decisions.',
        'Collaboration leads to better health outcomes.',
        "Women's health is a lifelong, evolving journey.",
        'Pelvic health is essential to overall well-being.',
      ],
    },
  },
  team: {
    title: 'Meet Our Team',
    subtitle: "Founded by passionate experts in women's health",
    description:
      "Eleva Care is led by a team of dedicated professionals who bring together years of experience in women's health, technology, and patient care. Our founders and key team members are committed to revolutionizing the way women access and experience healthcare.",
    members: [
      {
        name: 'Dr. Patricia Mota',
        role: 'Founder & CEO',
        image: '/placeholder.png?height=400&width=300',
        quote:
          "Our goal is to make expert women's health care accessible to all, regardless of location or circumstances.",
      },
      {
        name: 'Dr. Sofia Rodriguez',
        role: 'Chief Medical Officer',
        image: '/placeholder.png?height=400&width=300',
        quote: "We're bridging the gap between cutting-edge research and everyday patient care.",
      },
      {
        name: 'Emma Chen',
        role: 'Head of Patient Experience',
        image: '/placeholder.png?height=400&width=300',
        quote:
          "At Eleva Care, we're reimagining healthcare to put women's needs and experiences first.",
      },
      {
        name: 'Dr. Aisha Patel',
        role: 'Lead Researcher',
        image: '/placeholder.png?height=400&width=300',
        quote:
          "Our research drives innovation in women's health, leading to better outcomes for all.",
      },
    ],
  },
  newsletter: {
    title: 'Stay Updated',
    description:
      "Subscribe to our newsletter for the latest in women's health, expert tips, and exclusive content.",
    placeholder: 'Enter your email',
    cta: 'Subscribe',
    privacy: 'We respect your privacy. Unsubscribe at any time.',
  },
  social: {
    title: 'Follow Us',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    facebook: 'Facebook',
    twitter: 'Twitter',
    scholar: 'Google Scholar',
  },
  footer: {
    copyright: '© 2024 Eleva Care. All rights reserved.',
    terms: 'Terms of Service',
    privacy: 'Privacy',
  },
};
