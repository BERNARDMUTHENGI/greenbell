import {
  FaUmbrellaBeach,
  FaCar,
  FaSwimmingPool,
  FaTree,
  FaCampground,
  FaCalendarAlt,
  FaChair,
  FaParking,
  FaBuilding,
  FaTruck,
  FaDotCircle,
  FaEye,
  FaTools,
  FaWrench,
  FaSearch,
  FaCogs,
  FaClipboardCheck,
} from 'react-icons/fa';

const SERVICES = [
  {
    id: 1,
    title: 'Restaurant Canopies',
    icon: FaUmbrellaBeach,
    shortDesc: 'Elegant shade solutions for outdoor dining spaces.',
    description:
      'Transform your restaurant\'s outdoor area into a comfortable dining experience with our custom canopies. Designed to withstand Kenya\'s climate while adding aesthetic appeal to your establishment.',
    benefits: [
      'UV protection for diners',
      'Weather-resistant materials',
      'Custom branding options',
      'Easy maintenance',
    ],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
  },
  {
    id: 2,
    title: 'Car Shades',
    icon: FaCar,
    shortDesc: 'Durable protection for your vehicles.',
    description:
      'Protect your vehicles from harsh sun, rain, and debris with our heavy-duty car shades. Engineered for longevity and designed to complement your property\'s aesthetics.',
    benefits: [
      'UV and heat protection',
      'Rust-resistant frames',
      'Wind-resistant design',
      'Custom sizing available',
    ],
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80',
  },
  {
    id: 3,
    title: 'Swimming Pool Shades',
    icon: FaSwimmingPool,
    shortDesc: 'Enjoy your pool in any weather.',
    description:
      'Extend your pool season with our premium swimming pool shade covers. Our solutions provide the perfect balance of sun and shade, keeping your family comfortable and protected.',
    benefits: [
      'Temperature regulation',
      'Chemical reduction',
      'Safety enhancement',
      'Premium aesthetics',
    ],
    image: 'https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&q=80',
  },
  {
    id: 4,
    title: 'Pergolas',
    icon: FaTree,
    shortDesc: 'Elegant outdoor living structures.',
    description:
      'Add sophistication to your garden or patio with our beautifully crafted pergolas. Each piece is designed to create a stunning focal point while providing functional shade.',
    benefits: [
      'Increases property value',
      'Natural aesthetics',
      'Durable construction',
      'Customizable design',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 5,
    title: 'Gazebos',
    icon: FaCampground,
    shortDesc: 'Freestanding shade for any occasion.',
    description:
      'Our gazebos provide versatile, freestanding shade structures perfect for gardens, events, and commercial spaces. Available in various sizes and styles to match your needs.',
    benefits: [
      'Portable options available',
      'All-weather protection',
      'Easy assembly',
      'Event-ready design',
    ],
    image: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
  },
  {
    id: 6,
    title: 'Garden Umbrellas',
    icon: FaUmbrellaBeach,
    shortDesc: 'Stylish shade for gardens and patios.',
    description:
      'Our premium garden umbrellas combine functionality with elegance. Perfect for patios, poolside areas, and garden seating, they provide instant shade wherever you need it.',
    benefits: [
      'Easy to operate',
      'Fade-resistant fabric',
      'Sturdy base options',
      'Multiple size options',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 7,
    title: 'Event Tents',
    icon: FaCalendarAlt,
    shortDesc: 'Professional tents for every event.',
    description:
      'From corporate events to weddings, our event tents provide reliable, stylish coverage. Built to handle large crowds and varying weather conditions with ease.',
    benefits: [
      'Various sizes available',
      'Branding opportunities',
      'Quick setup and teardown',
      'Weather protection',
    ],
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80',
  },
  {
    id: 8,
    title: 'Marquees',
    icon: FaChair,
    shortDesc: 'Grand structures for prestigious events.',
    description:
      'Make a statement with our premium marquees. Ideal for weddings, corporate functions, and large gatherings, our marquees combine grandeur with practical weather protection.',
    benefits: [
      'Luxury finishes available',
      'Lighting integration',
      'Climate control options',
      'Flexible configurations',
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  },
  {
    id: 9,
    title: 'Parking Shades',
    icon: FaParking,
    shortDesc: 'Commercial and residential parking protection.',
    description:
      'Our parking shade structures protect vehicles in commercial lots, residential complexes, and public spaces. Engineered for maximum coverage and durability.',
    benefits: [
      'Large area coverage',
      'Heavy-duty construction',
      'Low maintenance',
      'Professional installation',
    ],
    image: 'https://images.unsplash.com/photo-1573349252245-41e8d4e5a3b3?w=800&q=80',
  },
  {
    id: 10,
    title: 'Commercial Shade Structures',
    icon: FaBuilding,
    shortDesc: 'Large-scale solutions for businesses.',
    description:
      'We design and manufacture commercial-grade shade structures for shopping centers, office parks, schools, and public spaces. Every project is tailored to meet specific commercial requirements.',
    benefits: [
      'Custom engineering',
      'Compliance with standards',
      'Bulk project capability',
      'Long-term warranty',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 11,
    title: 'Lorry Tarpaulins',
    icon: FaTruck,
    shortDesc: 'Heavy-duty covers for transport vehicles.',
    description:
      'Our lorry tarpaulins are manufactured from premium materials to withstand rigorous use. Custom-fitted for perfect coverage and maximum cargo protection.',
    benefits: [
      'Waterproof materials',
      'Tear-resistant fabric',
      'Custom sizing',
      'Reinforced edges',
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  },
  {
    id: 12,
    title: 'Wheel Covers',
    icon: FaDotCircle,
    shortDesc: 'Protective covers for vehicle wheels.',
    description:
      'Custom-manufactured wheel covers designed to protect and preserve. Made from durable materials that withstand Kenya\'s diverse weather conditions.',
    benefits: [
      'Precise fit',
      'UV-resistant material',
      'Easy to clean',
      'Long-lasting protection',
    ],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80',
  },
  {
    id: 13,
    title: 'Privacy Screens',
    icon: FaEye,
    shortDesc: 'Stylish privacy for outdoor spaces.',
    description:
      'Create intimate outdoor spaces with our elegant privacy screens. Perfect for gardens, patios, and commercial properties seeking both aesthetics and seclusion.',
    benefits: [
      'Wind reduction',
      'Visual appeal',
      'Customizable opacity',
      'Easy installation',
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
  },
  {
    id: 14,
    title: 'Custom Shade Solutions',
    icon: FaCogs,
    shortDesc: 'Bespoke designs for unique requirements.',
    description:
      'No two spaces are the same. Our team works closely with you to design and manufacture custom shade solutions that perfectly match your vision, space, and budget.',
    benefits: [
      'Tailored to your needs',
      'Design consultation',
      'Material selection',
      'Expert craftsmanship',
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  },
  {
    id: 15,
    title: 'Maintenance Services',
    icon: FaWrench,
    shortDesc: 'Keep your shades in peak condition.',
    description:
      'Our maintenance services ensure your shade structures remain in optimal condition year-round. Regular inspections, cleaning, and repairs extend the life of your investment.',
    benefits: [
      'Scheduled maintenance plans',
      'Professional cleaning',
      'Preventive repairs',
      'Extended product lifespan',
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
  },
  {
    id: 16,
    title: 'Inspection Services',
    icon: FaSearch,
    shortDesc: 'Professional assessment of shade structures.',
    description:
      'Our expert team provides thorough inspections of shade structures to identify wear, damage, and potential issues before they become costly problems.',
    benefits: [
      'Detailed reports',
      'Expert assessment',
      'Recommendation plans',
      'Safety compliance',
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
  },
  {
    id: 17,
    title: 'Installation Services',
    icon: FaTools,
    shortDesc: 'Expert installation by trained professionals.',
    description:
      'Our skilled installation team ensures your shade structures are fitted safely, securely, and to the highest standards. We handle projects of all sizes.',
    benefits: [
      'Professional team',
      'Safety-first approach',
      'Timely completion',
      'Post-installation support',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 18,
    title: 'Custom Fabrication',
    icon: FaClipboardCheck,
    shortDesc: 'Precision manufacturing for bespoke projects.',
    description:
      'From concept to completion, our fabrication team brings your vision to life with precision engineering and premium materials. Specializing in unique, one-of-a-kind shade structures.',
    benefits: [
      'CAD design support',
      'Premium materials',
      'Precision engineering',
      'Quality assurance',
    ],
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
  },
];

export default SERVICES;
