export const companyInfo = {
  name: 'GREENBELL',
  tagline: 'SHADES & CANOPIES',
  founded: 2022,
  email: 'info@greenbellshades.co.ke',
  phone: '+254 716 807 767',
  whatsapp: '254716807767',
  address: 'R Astrol Business Center, Nairobi, Kenya',
  website: 'www.greenbellshades.co.ke',
};

export const servicesData = {
  design: {
    title: 'DESIGN',
    items: [
      'Conceptual Design',
      'Detailed Design',
      'Bill of Quantities',
      'Estimates'
    ],
    description: 'Professional design services tailored to your specific needs and preferences.'
  },
  build: {
    title: 'BUILD & SUPERVISION',
    items: [
      'Manufacturing of canopies and awnings',
      'Construction of bespoke tents and marquees',
      'Installation of car shades and swimming pool covers',
      'Custom fabrication of lorry tarpaulins and wheel covers'
    ],
    description: 'Expert construction and supervision ensuring quality and durability.'
  },
  maintenance: {
    title: 'MAINTENANCE',
    items: [
      'Regular inspections and repairs of shade structures',
      'Cleaning and upkeep services for canopies and tents',
      'Seasonal maintenance plans to extend product lifespan',
      'Replacement of worn-out components and materials'
    ],
    description: 'Comprehensive maintenance to keep your shades in perfect condition.'
  },
  structures: {
    title: 'STRUCTURES',
    items: [
      'Restaurant canopies',
      'Car shades',
      'Event tents and marquees',
      'Garden umbrellas',
      'Branded gazebos',
      'Custom tarpaulins and covers'
    ],
    description: 'Wide range of structures for every outdoor space and requirement.'
  }
};

/* ---------- Individual Services ---------- */

export const servicesList = [
  {
    id: 1,
    slug: 'restaurant-canopies',
    title: 'Restaurant Canopies',
    shortDesc: 'Elegant shade solutions for outdoor dining spaces.',
    description:
      'Transform your restaurant\'s outdoor area into a comfortable dining experience with our custom canopies. Designed to withstand Kenya\'s climate while adding aesthetic appeal to your establishment.',
    benefits: [
      'UV protection for diners',
      'Weather-resistant materials',
      'Custom branding options',
      'Easy maintenance',
    ],
    image: '/images/shade40.jpg',
    sections: [
      {
        heading: 'Outdoor Dining, Elevated',
        paragraphs: [
          'Al fresco dining is one of the fastest-growing trends in the hospitality industry. Our restaurant canopies are engineered to extend your usable seating area while protecting guests from harsh sun, rain, and dust — so your service never stops, whatever the weather.',
          'Every canopy is designed around your space, brand colours, and layout. Whether you need a retractable awning, a permanent covered terrace, or a full branded canopy system, our team crafts a solution that blends perfectly with your restaurant\'s identity.',
        ],
        image: '/images/shade40.jpg',
      },
      {
        heading: 'Built for Kenyan Weather',
        paragraphs: [
          'We use heavy-duty steel frames and premium waterproof or 90% shade fabrics that stand up to intense UV rays, heavy rainfall, and strong winds. The result is a canopy that looks great on day one and stays that way for years.',
          'Our installation team handles everything from site assessment to final fitting, ensuring a secure, professional finish that complies with safety standards.',
        ],
        image: '/images/shade40.jpg',
      },
    ],
  },
  {
    id: 2,
    slug: 'car-shades',
    title: 'Car Shades',
    shortDesc: 'Durable protection for your vehicles.',
    description:
      'Protect your vehicles from harsh sun, rain, and debris with our heavy-duty car shades. Engineered for longevity and designed to complement your property\'s aesthetics.',
    benefits: [
      'UV and heat protection',
      'Rust-resistant frames',
      'Wind-resistant design',
      'Custom sizing available',
    ],
    image: '/images/shade1.jpg',
    sections: [
      {
        heading: 'Protect Your Investment',
        paragraphs: [
          'Direct sunlight, rain, dust, and bird droppings can quickly damage a vehicle\'s paintwork, interior, and resale value. A professionally installed car shade keeps your vehicles cool, clean, and protected all year round.',
          'We manufacture cantilever and curved car shades in standard and premium designs, sized to fit one car or a full parking yard. All structures use rust-resistant steel and long-lasting shade fabric.',
        ],
        image: '/images/shade5.jpg',
      },
      {
        heading: 'For Homes and Businesses',
        paragraphs: [
          'From single-car shades for private residences to multi-bay installations for apartments, hotels, schools, and commercial lots, we deliver durable parking solutions that add value to any property.',
          'Choose between 90% shade net for breathable, cooler parking or 100% waterproof material for complete rain protection. We\'ll help you pick the right option for your needs and budget.',
        ],
        image: '/images/shade36.jpg',
      },
    ],
  },
  {
    id: 3,
    slug: 'swimming-pool-shades',
    title: 'Swimming Pool Shades',
    shortDesc: 'Enjoy your pool in any weather.',
    description:
      'Extend your pool season with our premium swimming pool shade covers. Our solutions provide the perfect balance of sun and shade, keeping your family comfortable and protected.',
    benefits: [
      'Temperature regulation',
      'Reduces water evaporation',
      'Safety enhancement',
      'Premium aesthetics',
    ],
    image: '/images/shade4.jpg',
    sections: [
      {
        heading: 'Comfort by the Water',
        paragraphs: [
          'Nothing beats relaxing by the pool without worrying about harsh sun exposure. Our pool shades create a cool, inviting environment for family and guests while protecting your skin from UV damage.',
          'Beyond comfort, shade covers reduce water evaporation and chemical loss, keeping your pool cleaner and lowering your maintenance costs over time.',
        ],
        image: '/images/shade4.jpg',
      },
      {
        heading: 'Designed Around Your Pool',
        paragraphs: [
          'Whether you need a freestanding shade structure, a cantilever cover, or a retractable system, we design every solution to fit your pool\'s exact shape and size.',
          'Our premium materials are UV-stabilised, fade-resistant, and built to withstand poolside conditions, so your shade stays beautiful for years to come.',
        ],
        image: '/images/shade4.jpg',
      },
    ],
  },
  {
    id: 4,
    slug: 'pergolas',
    title: 'Pergolas',
    shortDesc: 'Elegant outdoor living structures.',
    description:
      'Add sophistication to your garden or patio with our beautifully crafted pergolas. Each piece is designed to create a stunning focal point while providing functional shade.',
    benefits: [
      'Increases property value',
      'Natural aesthetics',
      'Durable construction',
      'Customizable design',
    ],
    image: '/images/shade11.jpg',
    sections: [
      {
        heading: 'An Outdoor Living Space',
        paragraphs: [
          'A pergola turns an ordinary garden or patio into a beautiful outdoor living area — perfect for family dinners, quiet reading corners, or entertaining guests in the evening.',
          'Our pergolas are crafted from high-quality timber and steel options, finished to complement your home\'s architecture. Add climbing plants, outdoor lighting, or privacy screens to make the space truly yours.',
        ],
        image: '/images/shade17.jpg',
      },
      {
        heading: 'Tailored to Your Garden',
        paragraphs: [
          'Every pergola is designed to fit your specific space, whether it\'s a compact courtyard or a sprawling garden. We handle the complete build — design, manufacturing, and installation.',
          'Our team works with you to choose materials, colours, and features that match your lifestyle and budget, delivering a structure that adds real value to your home.',
        ],
        image: '/images/shade11.jpg',
      },
    ],
  },
  {
    id: 5,
    slug: 'gazebos',
    title: 'Gazebos',
    shortDesc: 'Freestanding shade for any occasion.',
    description:
      'Our gazebos provide versatile, freestanding shade structures perfect for gardens, events, and commercial spaces. Available in various sizes and styles to match your needs.',
    benefits: [
      'Portable options available',
      'All-weather protection',
      'Easy assembly',
      'Event-ready design',
    ],
    image: '/images/shade13.jpg',
    sections: [
      {
        heading: 'Versatile Shade Structures',
        paragraphs: [
          'Gazebos are perfect for gardens, weddings, exhibitions, and commercial promotions. They provide instant, elegant shade that can be relocated whenever your needs change.',
          'We offer both portable and permanent gazebo structures, including custom-branded units that carry your logo and colours for events and marketing activations.',
        ],
        image: '/images/shade14.jpg',
      },
      {
        heading: 'Made to Impress',
        paragraphs: [
          'From market stalls to luxury garden pavilions, our gazebos are manufactured with attention to detail, using robust frames and premium fabric that perform beautifully in Kenyan weather.',
          'Tell us your event or space, and we\'ll recommend the ideal size, style, and branding options for your gazebo.',
        ],
        image: '/images/shade15.jpg',
      },
    ],
  },
  {
    id: 6,
    slug: 'garden-umbrellas',
    title: 'Garden Umbrellas',
    shortDesc: 'Stylish shade for gardens and patios.',
    description:
      'Our premium garden umbrellas combine functionality with elegance. Perfect for patios, poolside areas, and garden seating, they provide instant shade wherever you need it.',
    benefits: [
      'Easy to operate',
      'Fade-resistant fabric',
      'Sturdy base options',
      'Multiple size options',
    ],
    image: '/images/shade24.jpg',
    sections: [
      {
        heading: 'Instant Shade, Everyday Elegance',
        paragraphs: [
          'Garden umbrellas are the simplest way to add shade and style to any outdoor seating area. They\'re easy to open, close, and move — giving you flexibility wherever the day takes you.',
          'Our umbrellas feature fade-resistant, UV-protected fabric and sturdy frames that handle gusty afternoons without tipping over.',
        ],
        image: '/images/shade24.jpg',
      },
      {
        heading: 'The Right Umbrella for Your Space',
        paragraphs: [
          'From compact 2-metre patio umbrellas to large 4-metre commercial models, we supply a range of sizes, colours, and base options to suit restaurants, hotels, homes, and resorts.',
          'We also offer custom printing so your umbrellas can carry your brand while shading your guests.',
        ],
        image: '/images/shade24.jpg',
      },
    ],
  },
  {
    id: 7,
    slug: 'event-tents',
    title: 'Event Tents',
    shortDesc: 'Professional tents for every event.',
    description:
      'From corporate events to weddings, our event tents provide reliable, stylish coverage. Built to handle large crowds and varying weather conditions with ease.',
    benefits: [
      'Various sizes available',
      'Branding opportunities',
      'Quick setup and teardown',
      'Weather protection',
    ],
    image: '/images/shade12.jpg',
    sections: [
      {
        heading: 'Coverage for Every Occasion',
        paragraphs: [
          'Weddings, graduations, corporate functions, church events, and trade shows — our event tents deliver reliable, professional coverage so your gathering goes ahead comfortably, rain or shine.',
          'We supply and install tents in a range of sizes and configurations, from intimate garden tents to large-capacity structures for hundreds of guests.',
        ],
        image: '/images/shade13.jpg',
      },
      {
        heading: 'Setup You Can Trust',
        paragraphs: [
          'Our trained crews handle delivery, setup, and teardown, ensuring your event space is ready on time and safely secured. We work with you to plan layouts, flooring, and lighting options.',
          'With professional installation and quality materials, your event tent will stand strong throughout the occasion.',
        ],
        image: '/images/shade14.jpg',
      },
    ],
  },
  {
    id: 8,
    slug: 'marquees',
    title: 'Marquees',
    shortDesc: 'Grand structures for prestigious events.',
    description:
      'Make a statement with our premium marquees. Ideal for weddings, corporate functions, and large gatherings, our marquees combine grandeur with practical weather protection.',
    benefits: [
      'Luxury finishes available',
      'Lighting integration',
      'Climate control options',
      'Flexible configurations',
    ],
    image: '/images/shade26.jpg',
    sections: [
      {
        heading: 'Grandeur for Prestigious Events',
        paragraphs: [
          'A marquee transforms any venue into a spectacular setting. With elegant lines, generous space, and the option of full branding, marquees are the choice for weddings and high-profile corporate events.',
          'We can incorporate lighting, flooring, heating or cooling, and stylish interiors so your marquee becomes a complete, memorable venue.',
        ],
        image: '/images/shade25.jpg',
      },
      {
        heading: 'Bespoke Event Venues',
        paragraphs: [
          'Every marquee project is tailored to your guest list, venue, and theme. Our team advises on the ideal size, layout, and finishes to create the atmosphere you envision.',
          'From classic white marquees to fully customised branded structures, we deliver premium results that impress your guests.',
        ],
        image: '/images/shade49.jpg',
      },
    ],
  },
  {
    id: 9,
    slug: 'parking-shades',
    title: 'Parking Shades',
    shortDesc: 'Commercial and residential parking protection.',
    description:
      'Our parking shade structures protect vehicles in commercial lots, residential complexes, and public spaces. Engineered for maximum coverage and durability.',
    benefits: [
      'Large area coverage',
      'Heavy-duty construction',
      'Low maintenance',
      'Professional installation',
    ],
    image: '/images/shade21.jpg',
    sections: [
      {
        heading: 'Large-Scale Vehicle Protection',
        paragraphs: [
          'Whether you manage an apartment complex, office building, school, or shopping centre, our parking shades protect dozens of vehicles from sun and rain while keeping your property looking organised and professional.',
          'We design structurally sound, code-compliant shade systems that can span multiple rows of parking with minimal support columns.',
        ],
        image: '/images/shade22.jpg',
      },
      {
        heading: 'Engineered to Last',
        paragraphs: [
          'Our parking shades use galvanised or coated steel structures and heavy-duty fabric rated for years of outdoor exposure. We handle everything from site survey and design to installation.',
          'Ask us about our cantilever and curved designs, and choose between 90% shade net or 100% waterproof roofing.',
        ],
        image: '/images/shade1.jpg',
      },
    ],
  },
  {
    id: 10,
    slug: 'commercial-shade-structures',
    title: 'Commercial Shade Structures',
    shortDesc: 'Large-scale solutions for businesses.',
    description:
      'We design and manufacture commercial-grade shade structures for shopping centers, office parks, schools, and public spaces. Every project is tailored to meet specific commercial requirements.',
    benefits: [
      'Custom engineering',
      'Compliance with standards',
      'Bulk project capability',
      'Long-term warranty',
    ],
    image: '/images/shade46.jpg',
    sections: [
      {
        heading: 'Shade at Commercial Scale',
        paragraphs: [
          'From walkway covers and forecourt canopies to large public gathering shelters, we engineer commercial shade structures that balance aesthetics, function, and durability.',
          'Our team manages complex projects from concept and structural design through to fabrication and installation, keeping your operations running with minimal disruption.',
        ],
        image: '/images/shade47.jpg',
      },
      {
        heading: 'A Partner You Can Rely On',
        paragraphs: [
          'We work with contractors, developers, and facility managers to deliver compliant, cost-effective shade infrastructure that enhances visitor experience and protects people and assets.',
          'With a strong track record across Nairobi and Kenya, we bring engineering expertise and dependable delivery to every commercial project.',
        ],
        image: '/images/shade46.jpg',
      },
    ],
  },
  {
    id: 11,
    slug: 'lorry-tarpaulins',
    title: 'Lorry Tarpaulins',
    shortDesc: 'Heavy-duty covers for transport vehicles.',
    description:
      'Our lorry tarpaulins are manufactured from premium materials to withstand rigorous use. Custom-fitted for perfect coverage and maximum cargo protection.',
    benefits: [
      'Waterproof materials',
      'Tear-resistant fabric',
      'Custom sizing',
      'Reinforced edges',
    ],
    image: '/images/shade31.jpg',
    sections: [
      {
        heading: 'Built for the Road',
        paragraphs: [
          'Heavy-duty tarpaulins protect your cargo and fleet from rain, sun, and dust during long-distance hauls. We custom-manufacture tarpaulins to the exact dimensions of your lorry for a perfect, secure fit.',
          'Our materials are selected for tear resistance, waterproofing, and UV stability, ensuring reliable performance trip after trip.',
        ],
        image: '/images/shade32.jpg',
      },
      {
        heading: 'Custom Covers, Precision Fit',
        paragraphs: [
          'Whether you operate trucks, pickups, trailers, or specialised vehicles, we can design and fabricate the right cover — including reinforced edges, straps, and grommets where needed.',
          'Our fabrication team delivers durable, functional tarpaulins that protect your investment and keep your cargo safe.',
        ],
        image: '/images/shade33.jpg',
      },
    ],
  },
  {
    id: 12,
    slug: 'wheel-covers',
    title: 'Wheel Covers',
    shortDesc: 'Protective covers for vehicle wheels.',
    description:
      'Custom-manufactured wheel covers designed to protect and preserve. Made from durable materials that withstand Kenya\'s diverse weather conditions.',
    benefits: [
      'Precise fit',
      'UV-resistant material',
      'Easy to clean',
      'Long-lasting protection',
    ],
    image: '/images/shade34.jpg',
    sections: [
      {
        heading: 'Keep Wheels in Top Condition',
        paragraphs: [
          'Spare wheels and stored tyres are exposed to UV damage, cracking, and dirt. Our custom wheel covers shield them from the elements, extending their lifespan and keeping them ready for the road.',
          'Made from durable, weather-resistant fabric, our covers are tailored to your wheel size for a snug, professional fit.',
        ],
        image: '/images/shade35.jpg',
      },
      {
        heading: 'Custom-Made to Measure',
        paragraphs: [
          'Tell us your wheel specifications and we\'ll manufacture covers that fit perfectly, whether you need a single cover or covers for a whole fleet.',
          'Available in a range of colours and finishes, our wheel covers combine protection with a clean, tidy appearance.',
        ],
        image: '/images/shade36.jpg',
      },
    ],
  },
  {
    id: 13,
    slug: 'privacy-screens',
    title: 'Privacy Screens',
    shortDesc: 'Stylish privacy for outdoor spaces.',
    description:
      'Create intimate outdoor spaces with our elegant privacy screens. Perfect for gardens, patios, and commercial properties seeking both aesthetics and seclusion.',
    benefits: [
      'Wind reduction',
      'Visual appeal',
      'Customizable opacity',
      'Easy installation',
    ],
    image: '/images/shade34.jpg',
    sections: [
      {
        heading: 'Your Private Outdoor Retreat',
        paragraphs: [
          'Privacy screens transform exposed gardens, balconies, and patios into secluded retreats. They shield you from neighbours and street view while adding a refined design element to your space.',
          'Beyond privacy, our screens reduce wind and provide a touch of shade, making your outdoor areas more comfortable and usable year-round.',
        ],
        image: '/images/shade39.jpg',
      },
      {
        heading: 'Aesthetic and Practical',
        paragraphs: [
          'Available in a range of materials, colours, and opacity levels, our privacy screens are designed to suit residential gardens and commercial properties alike.',
          'We install screens that are sturdy, low-maintenance, and tailored to the exact dimensions and style of your space.',
        ],
        image: '/images/shade23.jpg',
      },
    ],
  },
  {
    id: 14,
    slug: 'custom-shade-solutions',
    title: 'Custom Shade Solutions',
    shortDesc: 'Bespoke designs for unique requirements.',
    description:
      'No two spaces are the same. Our team works closely with you to design and manufacture custom shade solutions that perfectly match your vision, space, and budget.',
    benefits: [
      'Tailored to your needs',
      'Design consultation',
      'Material selection',
      'Expert craftsmanship',
    ],
    image: '/images/shade40.jpg',
    sections: [
      {
        heading: 'Made Around You',
        paragraphs: [
          'Have an unusual space, a specific design idea, or a challenge that off-the-shelf products can\'t solve? Our custom shade solutions are built around your exact requirements.',
          'We begin with a consultation to understand your goals, then design, fabricate, and install a solution that fits your space and style perfectly.',
        ],
        image: '/images/shade41.jpg',
      },
      {
        heading: 'From Idea to Installation',
        paragraphs: [
          'Our in-house design and fabrication capabilities mean we can turn creative concepts into practical, durable structures — without the compromises of generic products.',
          'Partner with us for one-off bespoke structures, branded installations, or specialised covers. If you can imagine it, we can build it.',
        ],
        image: '/images/shade42.jpg',
      },
    ],
  },
  {
    id: 15,
    slug: 'maintenance-services',
    title: 'Maintenance Services',
    shortDesc: 'Keep your shades in peak condition.',
    description:
      'Our maintenance services ensure your shade structures remain in optimal condition year-round. Regular inspections, cleaning, and repairs extend the life of your investment.',
    benefits: [
      'Scheduled maintenance plans',
      'Professional cleaning',
      'Preventive repairs',
      'Extended product lifespan',
    ],
    image: '/images/shade43.jpg',
    sections: [
      {
        heading: 'Protecting Your Investment',
        paragraphs: [
          'Regular maintenance keeps your shade structures looking great and performing well for years. Our service teams inspect, clean, and repair canopies, tents, and car shades so small issues never become costly problems.',
          'We offer flexible maintenance plans for homes, restaurants, schools, and commercial properties, with service visits scheduled around your convenience.',
        ],
        image: '/images/shade44.jpg',
      },
      {
        heading: 'Clean, Safe, Long-Lasting',
        paragraphs: [
          'Our maintenance covers fabric cleaning and treatment, frame checks, tension adjustments, and replacement of worn components and materials.',
          'With seasonal maintenance plans, you can extend the lifespan of every structure we\'ve installed — and many that others have installed too.',
        ],
        image: '/images/shade45.jpg',
      },
    ],
  },
  {
    id: 16,
    slug: 'inspection-services',
    title: 'Inspection Services',
    shortDesc: 'Professional assessment of shade structures.',
    description:
      'Our expert team provides thorough inspections of shade structures to identify wear, damage, and potential issues before they become costly problems.',
    benefits: [
      'Detailed reports',
      'Expert assessment',
      'Recommendation plans',
      'Safety compliance',
    ],
    image: '/images/shade46.jpg',
    sections: [
      {
        heading: 'Identify Issues Early',
        paragraphs: [
          'Structures exposed to sun, wind, and rain eventually show signs of wear. Our inspection service identifies weakened frames, frayed fabric, and loose fittings before they escalate into safety risks or expensive repairs.',
          'After every inspection, you receive a clear report with our findings and a recommended action plan.',
        ],
        image: '/images/shade47.jpg',
      },
      {
        heading: 'Confidence and Compliance',
        paragraphs: [
          'For businesses, schools, and property managers, regular inspections demonstrate due diligence and help maintain safe environments for customers, staff, and visitors.',
          'Our experienced inspectors provide professional, thorough assessments and honest advice, so you always know the true condition of your structures.',
        ],
        image: '/images/shade48.jpg',
      },
    ],
  },
  {
    id: 17,
    slug: 'installation-services',
    title: 'Installation Services',
    shortDesc: 'Expert installation by trained professionals.',
    description:
      'Our skilled installation team ensures your shade structures are fitted safely, securely, and to the highest standards. We handle projects of all sizes.',
    benefits: [
      'Professional team',
      'Safety-first approach',
      'Timely completion',
      'Post-installation support',
    ],
    image: '/images/shade49.jpg',
    sections: [
      {
        heading: 'Done Right, the First Time',
        paragraphs: [
          'A shade structure is only as good as its installation. Our trained crews anchor, tension, and finish every structure to professional standards, ensuring safety and longevity.',
          'Whether it\'s a residential car shade or a large commercial canopy, we manage the full installation with minimal disruption to your routine.',
        ],
        image: '/images/shade50.jpg',
      },
      {
        heading: 'Safety and Reliability',
        paragraphs: [
          'Our team follows strict safety protocols and uses quality hardware and anchoring systems, so your structure stays secure even in strong winds.',
          'We complete projects on schedule and stand behind our work with post-installation support and guidance on care and maintenance.',
        ],
        image: '/images/shade1.jpg',
      },
    ],
  },
  {
    id: 18,
    slug: 'custom-fabrication',
    title: 'Custom Fabrication',
    shortDesc: 'Precision manufacturing for bespoke projects.',
    description:
      'From concept to completion, our fabrication team brings your vision to life with precision engineering and premium materials. Specializing in unique, one-of-a-kind shade structures.',
    benefits: [
      'CAD design support',
      'Premium materials',
      'Precision engineering',
      'Quality assurance',
    ],
    image: '/images/shade2.jpg',
    sections: [
      {
        heading: 'Precision Manufacturing',
        paragraphs: [
          'Our workshop fabricates frames, canopies, covers, and structures to exact specifications, combining skilled craftsmanship with quality materials.',
          'From a single bespoke piece to a full production run, we deliver precision-made products that meet strict quality standards.',
        ],
        image: '/images/shade3.jpg',
      },
      {
        heading: 'Bringing Your Vision to Life',
        paragraphs: [
          'We work from drawings, measurements, or simply a description of what you need. Our team develops practical designs and manufactures them with care and accuracy.',
          'Whatever the scale, our custom fabrication services give you exactly the product your project requires — built to last.',
        ],
        image: '/images/shade4.jpg',
      },
    ],
  },
];

/* ---------- Projects ---------- */

export const projectsData = [
  { id: 1, name: 'Restaurant Canopy', category: 'Commercial', status: 'Complete', image: '/images/shade40.jpg' },
  { id: 2, name: 'Car Parking Shade', category: 'Commercial', status: 'Complete', image: '/images/shade36.jpg' },
  { id: 3, name: 'Event Marquee Tent', category: 'Events', status: 'Complete', image: '/images/shade12.jpg' },
  { id: 4, name: 'Swimming Pool Shade', category: 'Residential', status: 'Complete', image: '/images/shade4.jpg' },
  { id: 5, name: 'Custom Car Shade', category: 'Residential', status: 'Complete', image: '/images/shade5.jpg' },
  { id: 6, name: 'Playground Cover', category: 'Commercial', status: 'Complete', image: '/images/shade24.jpg' },
  { id: 7, name: 'Restaurant Parasol', category: 'Commercial', status: 'Complete', image: '/images/shade35.jpg' },
  { id: 8, name: 'Privacy Screen', category: 'Residential', status: 'Complete', image: '/images/shade2.jpg' },
  { id: 9, name: 'Commercial Parking Space', category: 'Commercial', status: 'Complete', image: '/images/shade7.jpg' },
  { id: 10, name: 'Pergolla', category: 'Residential', status: 'Complete', image: '/images/shade11.jpg' },
  { id: 11, name: 'Bike Park', category: 'Commercial', status: 'Complete', image: '/images/shade11.jpg' },
  { id: 12, name: 'Garden Umbrella', category: 'Residential', status: 'Complete', image: '/images/shade24.jpg' },
];

/* ---------- Testimonials ---------- */

export const testimonialsData = [
  {
    id: 1,
    name: 'James Mwangi',
    role: 'Restaurant Owner, Westlands',
    content: 'Greenbell transformed our outdoor dining area with beautiful canopies. The quality is exceptional and our customers love the ambiance.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Wanjiru',
    role: 'Event Organizer',
    content: 'We\'ve used Greenbell for multiple events. Their tents and marquees are always stunning and their team is professional and reliable.',
    rating: 5
  },
  {
    id: 3,
    name: 'David Ochieng',
    role: 'Property Manager, Kilimani',
    content: 'The car shades installed by Greenbell are durable and look great. Their maintenance service is also top-notch.',
    rating: 5
  }
];

/* ---------- Gallery (50 images: all local shade files) ---------- */

export const galleryData = [
  { id: 1, title: 'Site Installation', category: 'Installation', image: '/images/shade1.jpg' },
  { id: 2, title: 'Restaurant Canopy', category: 'Structures', image: '/images/shade2.jpg' },
  { id: 3, title: 'Event Tent Setup', category: 'Events', image: '/images/shade3.jpg' },
  { id: 4, title: 'Swimming Pool Shade', category: 'Residential', image: '/images/shade4.jpg' },
  { id: 5, title: 'Custom Car Shade', category: 'Structures', image: '/images/shade5.jpg' },
  { id: 6, title: 'Playground Cover', category: 'Commercial', image: '/images/shade6.jpg' },
  { id: 7, title: 'Restaurant Parasol', category: 'Structures', image: '/images/shade7.jpg' },
  { id: 8, title: 'Privacy Screen', category: 'Residential', image: '/images/shade8.jpg' },
  { id: 9, title: 'Commercial Parking Space', category: 'Commercial', image: '/images/shade9.jpg' },
  { id: 10, title: 'Pergolla', category: 'Residential', image: '/images/shade10.jpg' },
  { id: 11, title: 'Bike Park', category: 'Commercial', image: '/images/shade11.jpg' },
  { id: 12, title: 'Garden Umbrella', category: 'Residential', image: '/images/shade12.jpg' },
  { id: 13, title: 'Outdoor Dining Canopy', category: 'Structures', image: '/images/shade13.jpg' },
  { id: 14, title: 'Marquee Installation', category: 'Events', image: '/images/shade14.jpg' },
  { id: 15, title: 'Lorry Tarpaulin', category: 'Transport', image: '/images/shade15.jpg' },
  { id: 16, title: 'Wheel Covers', category: 'Transport', image: '/images/shade16.jpg' },
  { id: 17, title: 'Maintenance Works', category: 'Services', image: '/images/shade17.jpg' },
  { id: 18, title: 'Site Inspection', category: 'Services', image: '/images/shade18.jpg' },
  { id: 19, title: 'Installation Team', category: 'Installation', image: '/images/shade19.jpg' },
  { id: 20, title: 'Fabrication Workshop', category: 'Services', image: '/images/shade20.jpg' },
  { id: 21, title: 'Parking Shade Structure', category: 'Commercial', image: '/images/shade21.jpg' },
  { id: 22, title: 'Garden Pergolla', category: 'Residential', image: '/images/shade22.jpg' },
  { id: 23, title: 'Commercial Canopy', category: 'Commercial', image: '/images/shade23.jpg' },
  { id: 24, title: 'School Playground Shade', category: 'Commercial', image: '/images/shade24.jpg' },
  { id: 25, title: 'Walkway Canopy', category: 'Structures', image: '/images/shade25.jpg' },
  { id: 26, title: 'Hotel Poolside Shade', category: 'Residential', image: '/images/shade26.jpg' },
  { id: 27, title: 'Farm Equipment Cover', category: 'Commercial', image: '/images/shade27.jpg' },
  { id: 28, title: 'Loading Bay Canopy', category: 'Commercial', image: '/images/shade28.jpg' },
  { id: 29, title: 'Garden Pavilion', category: 'Residential', image: '/images/shade29.jpg' },
  { id: 30, title: 'Outdoor Event Marquee', category: 'Events', image: '/images/shade30.jpg' },
  { id: 31, title: 'Shopping Mall Walkway', category: 'Commercial', image: '/images/shade31.jpg' },
  { id: 32, title: 'Security Booth Cover', category: 'Structures', image: '/images/shade32.jpg' },
  { id: 33, title: 'Fuel Station Canopy', category: 'Commercial', image: '/images/shade33.jpg' },
  { id: 34, title: 'Warehouse Canopy', category: 'Commercial', image: '/images/shade34.jpg' },
  { id: 35, title: 'Church Event Tent', category: 'Events', image: '/images/shade35.jpg' },
  { id: 36, title: 'Backyard Pergola', category: 'Residential', image: '/images/shade36.jpg' },
  { id: 37, title: 'Office Parking Shade', category: 'Commercial', image: '/images/shade37.jpg' },
  { id: 38, title: 'Restaurant Terrace Cover', category: 'Structures', image: '/images/shade38.jpg' },
  { id: 39, title: 'Residential Carport', category: 'Residential', image: '/images/shade39.jpg' },
  { id: 40, title: 'School Assembly Canopy', category: 'Commercial', image: '/images/shade40.jpg' },
  { id: 41, title: 'Gate Canopy', category: 'Structures', image: '/images/shade41.jpg' },
  { id: 42, title: 'Gym Shade Structure', category: 'Commercial', image: '/images/shade42.jpg' },
  { id: 43, title: 'Market Stall Shade', category: 'Commercial', image: '/images/shade43.jpg' },
  { id: 44, title: 'Campus Walkway Cover', category: 'Commercial', image: '/images/shade44.jpg' },
  { id: 45, title: 'Guest House Pergola', category: 'Residential', image: '/images/shade45.jpg' },
  { id: 46, title: 'Truck Bay Cover', category: 'Transport', image: '/images/shade46.jpg' },
  { id: 47, title: 'Sports Pavilion Shade', category: 'Commercial', image: '/images/shade47.jpg' },
  { id: 48, title: 'Holiday Resort Canopy', category: 'Residential', image: '/images/shade48.jpg' },
  { id: 49, title: 'Rooftop Terrace Shade', category: 'Residential', image: '/images/shade49.jpg' },
  { id: 50, title: 'Car Yard Shade', category: 'Commercial', image: '/images/shade50.jpg' },
];

/* ---------- Car Shade Price Tables ---------- */

export const cantileverPrices = {
  title: 'Cantilever Car Shades Prices (Standard Design)',
  columns: ['Cars', 'Size (m)', 'Area (sqm)', '90% Non-Waterproof', '100% Waterproof'],
  rows: [
    ['1 Car', '3.5 x 5.5', '19.25', 'KSh 92,400', 'KSh 102,025'],
    ['2 Cars', '5.5 x 5.5', '30.25', 'KSh 145,200', 'KSh 160,325'],
    ['3 Cars', '8 x 5.5', '44', 'KSh 211,200', 'KSh 211,200'],
    ['4 Cars', '10.5 x 5.5', '57.75', 'KSh 277,200', 'KSh 306,075'],
    ['5 Cars', '13 x 5.5', '71.5', 'KSh 343,200', 'KSh 378,950'],
    ['6 Cars', '15 x 5.5', '82.5', 'KSh 396,000', 'KSh 437,250'],
  ],
};

export const curvedPrices = {
  title: 'Curved Car Shades Prices (Premium Design)',
  columns: ['Cars', '90% Non-Waterproof', '100% Waterproof'],
  rows: [
    ['1 Car', 'KSh 102,025', 'KSh 111,650'],
    ['2 Cars', 'KSh 160,325', 'KSh 175,450'],
    ['3 Cars', 'KSh 211,200', 'KSh 255,200'],
    ['4 Cars', 'KSh 306,075', 'KSh 334,950'],
    ['5 Cars', 'KSh 378,950', 'KSh 414,700'],
    ['6 Cars', 'KSh 437,250', 'KSh 478,500'],
  ],
};
