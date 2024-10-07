import React from 'react'; // Add this line to import React
import { Droplets, Flower2, Baby } from 'lucide-react';
export const translations = {
  language: 'English',
  nav: {
    services: 'Services',
    approach: 'Approach',
    mission: 'Mission',
    team: 'Team',
  },
  hero: {
    title: 'World-Class Care for Women, *on-demand.*',
    subtitle: "Book Leading Women's Health Specialists - On Your Schedule. ",
    cta1: 'Not sure if we can help? Take the Quiz',
    cta2: 'Book Now',
    cta2Help: 'Make your appointment',
    cta2Help2: 'in less than 3 minutes.',
  },
  podcast: {
    title: "Elevating Women's Health with Patrícia Mota, PT, PhD by Eleva Care",
    description:
      'Empower your health journey with "Elevating Women\'s Health" by Eleva Care. Our expert hosts break down cutting-edge research in women\'s health each week, translating complex studies into actionable insights. From reproductive wellness to mental health, we cover it all.',
    cta: 'Listen Now',
  },
  services: {
    title: 'How we support you',
    subtitle: 'Expert-Led Care, Tailored to You',
    description:
      "Access personalized care from top-rated women's health professionals worldwide. We connect you with the expertise you need, from online consultations to local resources, all tailored to your unique health journey.",
    items: [
      {
        icon: <Baby className="h-12 w-12 text-elevaPrimary" />,
        title: 'Pregnancy & Postpartum',
        description:
          'Comprehensive care to support women through the transformative journey of pregnancy and early motherhood.',
        items: [
          '**Physical Therapy:** Prepare for birth, manage pain, regain strength, address diastasis recti, and receive targeted pelvic floor interventions to prevent and treat dysfunction.',
          '**OB/GYN Care:** Receive expert care throughout your pregnancy journey and postpartum recovery.',
          '**Nutritional Guidance:** Optimize your diet for a healthy pregnancy and postpartum journey.',
          '**Mental Health Support:** Navigate the emotional and mental challenges of motherhood with compassionate guidance.',
          '**Exercise:** Explore the benefits of therapeutic exercise during pregnancy and postpartum, designed to support your changing body and promote a healthy recovery.',
        ],
        image: '/img/Pregnant-Woman-Flowers.jpg?height=450&width=300',
      },
      {
        icon: <Droplets className="h-12 w-12 text-elevaPrimary" />,
        title: 'Pelvic Health',
        description:
          'Specialized care addressing the unique pelvic health needs of women throughout their lives.',
        items: [
          '**Pelvic Physical Therapy:** Specialized treatment for incontinence, pelvic organ prolapse, and pelvic pain, including pain during intercourse.',
          '**Specialized OB/GYN Care:** Expert diagnosis and treatment for a range of pelvic health issues, including prolapse, endometriosis, and sexual dysfunction. ',
          '**Mental Health Support:** Counseling and therapy to address the psychological aspects of pelvic health concerns.',
        ],
        image: '/img/Woman-Working-Out-Living-Room.jpg?height=450&width=300',
      },
      {
        icon: <Flower2 className="h-12 w-12 text-elevaPrimary" />,
        title: 'Through Every Stage',
        description:
          "Holistic support for women's health concerns from adolescence through menopause and beyond.",
        items: [
          '**Teen Health:** Navigate puberty, menstruation, and early womanhood with confidence and support.',
          '**Menopause Management:** Address hormonal changes, manage symptoms, and prioritize your well-being ',
          '**Mental Wellness:** Access therapy and support to manage stress, anxiety, depression, and other mental health concerns.',
          '**Fitness & Nutrition:** Discover personalized exercise plans and nutritional guidance tailored to your individual needs.',
          '**Physical Therapy:** Manage pain, prevent injury, and optimize your physical performance, with specialized expertise in pelvic floor health for active women and female athletes.',
        ],
        image: '/img/Smiling-Women-Photo.jpg?height=450&width=300',
      },
    ],
  },
  approach: {
    title: 'At Eleva Care, we believe:',
    items: [
      'Every woman deserves access to **quality healthcare**.',
      '**Knowledge is power** in healthcare decisions.',
      '**Collaboration** leads to better health outcomes.',
      "Women's health is a lifelong, **evolving journey**.",
      '**Pelvic health** is essential to overall well-being.',
    ],
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
        name: 'Patricia Mota, PT, PhD',
        role: 'Founder & CEO',
        image: '/img/team/team-patricia-mota.jpg?height=1200&width=1200',
        quote:
          "Our goal is to make expert women's health care accessible to all, regardless of location or circumstances.",
      },
      {
        name: 'Cristine Homsi Jorge, PT, PhD',
        role: 'Lead Researcher',
        image: '/img/team/team-cristine-homsi-jorge.jpg?height=1200&width=1200',
        quote:
          "Our research drives innovation in women's health, leading to better outcomes for all.",
      },
      {
        name: 'Joana Goulão Barros, MD, PhD',
        role: 'Chief Medical Officer',
        image: '/img/team/team-joana-barros.jpg?height=1200&width=1200',
        quote: "We're bridging the gap between cutting-edge research and everyday patient care.",
      },
      {
        name: 'Rodrigo Barona',
        role: 'Head of Patient Experience',
        image: '/img/team/team-rodrigo-barona.jpg?height=1200&width=1200',
        quote:
          "At Eleva Care, we're reimagining healthcare to put women's needs and experiences first.",
      },
      {
        name: 'Alexandre Delgado, PT, PhD',
        role: 'Lead Researcher',
        image: '/img/team/team-alexandre-delgado.jpg?height=1200&width=1200',
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
