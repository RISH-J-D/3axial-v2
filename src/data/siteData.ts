import type { Project, SampleDrawing, TeamMember, JobOpening, BlogPost } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'The Cays Building',
    category: 'completed',
    sector: 'commercial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Cays-Buliding.jpg',
    location: 'North America',
    tonnage: '1,200 Tons',
    description: 'Complex multi-story commercial steel framing with high-spec canopy connections.'
  },
  {
    id: 'proj-2',
    title: 'Graymont Industrial Facility',
    category: 'completed',
    sector: 'industrial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Graymont.jpg',
    location: 'USA',
    tonnage: '2,400 Tons',
    description: 'Heavy industrial lime processing plant steel detailing with pipe racks and hoppers.'
  },
  {
    id: 'proj-3',
    title: 'Bryn Mawr Substation',
    category: 'completed',
    sector: 'infrastructure',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Bryn-Mawr-Substation.jpg',
    location: 'Pennsylvania, USA',
    tonnage: '850 Tons',
    description: 'High-voltage electrical substation support framing and equipment gantries.'
  },
  {
    id: 'proj-4',
    title: 'Lethbridge Housing Complex',
    category: 'completed',
    sector: 'commercial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Lethbridge-Housing.jpg',
    location: 'Alberta, Canada',
    tonnage: '950 Tons',
    description: 'Multi-family residential steel structure with architectural balconies and stair towers.'
  },
  {
    id: 'proj-5',
    title: 'CSSPI Ecole Francois La Bernarde',
    category: 'completed',
    sector: 'educational',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/CSSPI-Ecole-Francois-La-Bernarde.jpg',
    location: 'Quebec, Canada',
    tonnage: '1,100 Tons',
    description: 'Educational facility featuring wide-span roof trusses and gymnasium framing.'
  },
  {
    id: 'proj-6',
    title: 'Tokai Carbon Facility Phase 02',
    category: 'completed',
    sector: 'industrial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Tokai-Carbon-Project-02.jpg',
    location: 'USA',
    tonnage: '3,100 Tons',
    description: 'Carbon black processing mill with heavy ductwork and structural tower frames.'
  },
  {
    id: 'proj-7',
    title: 'Oklahoma Children Hospital',
    category: 'completed',
    sector: 'infrastructure',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Oklahoma-Children-Hospital.jpg',
    location: 'Oklahoma, USA',
    tonnage: '1,800 Tons',
    description: 'Healthcare facility steel detailing adhering to seismic resistance standards.'
  },
  {
    id: 'proj-8',
    title: 'Industrial Process Facility Phase II',
    category: 'completed',
    sector: 'industrial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Industrial-Process-Facility.jpg',
    location: 'Texas, USA',
    tonnage: '4,200 Tons',
    description: 'Chemical process building with platform walkways, handrails, and vessel supports.'
  },
  {
    id: 'proj-9',
    title: 'St. Clair College Welcome Centre',
    category: 'completed',
    sector: 'educational',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/St.-Clair-College-Welcome-Centre.jpg',
    location: 'Ontario, Canada',
    tonnage: '780 Tons',
    description: 'Architectural entrance atrium framing with exposed structural steel.'
  },
  {
    id: 'proj-10',
    title: 'Concrete Batching Factory',
    category: 'completed',
    sector: 'industrial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Concrete-Factory.jpg',
    location: 'USA',
    tonnage: '1,650 Tons',
    description: 'Heavy aggregate handling conveyor gantries and silo support structures.'
  },
  {
    id: 'proj-11',
    title: 'The Wynkoop Plaza',
    category: 'completed',
    sector: 'commercial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Wynkoop-2.jpg',
    location: 'Colorado, USA',
    tonnage: '1,450 Tons',
    description: 'Commercial office development with glass curtain wall structural backings.'
  },
  {
    id: 'proj-12',
    title: 'Redbud Elementary School',
    category: 'completed',
    sector: 'educational',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Redbud-Elementary.jpg',
    location: 'USA',
    tonnage: '890 Tons',
    description: 'Primary school facility detailing joist and deck layouts with cafeteria framing.'
  },
  {
    id: 'proj-13',
    title: 'Sulphur PS Gym Auditorium',
    category: 'completed',
    sector: 'educational',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Sulphur-PS-Gym-Auditorium.jpg',
    location: 'Louisiana, USA',
    tonnage: '1,050 Tons',
    description: 'Long-span roof joist systems and catwalk structures for high school auditorium.'
  },
  {
    id: 'proj-14',
    title: 'Miller Industries Expansion',
    category: 'completed',
    sector: 'industrial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Miller_Industries1.jpg',
    location: 'Tennessee, USA',
    tonnage: '2,800 Tons',
    description: 'Manufacturing facility expansion with overhead crane runway girders.'
  },
  {
    id: 'proj-15',
    title: 'The Campbell Bldg. B',
    category: 'ongoing',
    sector: 'commercial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Campbell-Bldg.jpg',
    location: 'USA',
    tonnage: '1,600 Tons',
    description: 'Ongoing commercial office building detailing under AISC 360-16 specifications.'
  },
  {
    id: 'proj-16',
    title: 'Yukon 10th Retail Store',
    category: 'ongoing',
    sector: 'commercial',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Yukon-10th-Retail-Store.jpg',
    location: 'Oklahoma, USA',
    tonnage: '720 Tons',
    description: 'Retail superstore building framing with joist seat details and parapet framing.'
  }
];

export const SAMPLE_DRAWINGS: SampleDrawing[] = [
  {
    id: 'sd-1',
    title: 'Shop Drawing Detail 01',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Shop-Drawings-1-400x284.jpg'
  },
  {
    id: 'sd-2',
    title: 'Shop Drawing Detail 02',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Shop-Drawings-2-400x284.jpg'
  },
  {
    id: 'sd-3',
    title: 'Shop Drawing Detail 03',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Shop-Drawings-3-400x284.jpg'
  },
  {
    id: 'sd-4',
    title: 'Shop Drawing Detail 04',
    category: 'shop',
    categoryLabel: 'Shop Drawings',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Shop-Drawings-4-400x284.jpg'
  },
  {
    id: 'sd-5',
    title: 'AB Plan & Embed Plan 01',
    category: 'ab',
    categoryLabel: 'AB & Embed Plans',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/AB-Plan-And-Embed-Plan-Drawings-1-400x284.jpg'
  },
  {
    id: 'sd-6',
    title: 'AB Plan & Embed Plan 02',
    category: 'ab',
    categoryLabel: 'AB & Embed Plans',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/AB-Plan-And-Embed-Plan-Drawings-2-400x284.jpg'
  },
  {
    id: 'sd-7',
    title: 'Structural Framing Plan 01',
    category: 'structural',
    categoryLabel: 'Structural Steel',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Structural-steel-Drawings-1-400x284.jpg'
  },
  {
    id: 'sd-8',
    title: 'Structural Framing Plan 02',
    category: 'structural',
    categoryLabel: 'Structural Steel',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Structural-steel-Drawings-2-400x284.jpg'
  },
  {
    id: 'sd-9',
    title: 'Misc Steel Stair Elevation',
    category: 'misc',
    categoryLabel: 'Miscellaneous Steel',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Miscellaneous-Steel-Drawings-1-400x284.jpg'
  },
  {
    id: 'sd-10',
    title: 'Misc Steel Handrail Detail',
    category: 'misc',
    categoryLabel: 'Miscellaneous Steel',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/08/Miscellaneous-Steel-Drawings-2-400x284.jpg'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Jagatheesh R',
    role: 'President / Owner',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/6.jpg'
  },
  {
    id: 'tm-2',
    name: 'Jamuna Kumar',
    role: 'Director',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Untitled-design-2-4.jpg'
  },
  {
    id: 'tm-3',
    name: 'Manoj Kumar',
    role: 'Vice President',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/5-1.jpg'
  },
  {
    id: 'tm-4',
    name: 'Anand Kailash',
    role: 'Sr. Project Manager',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/4-2.jpg'
  },
  {
    id: 'tm-5',
    name: 'Sathish Subramanian',
    role: 'Project Manager',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/1-3.jpg'
  },
  {
    id: 'tm-6',
    name: 'Antony Arokiam Ulaganathan',
    role: 'Project Manager',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/2-3.jpg'
  },
  {
    id: 'tm-7',
    name: 'Selva Perumal',
    role: 'Head - Execution & Deliveries',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/3.jpg'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Business Development Manager – BDM',
    department: 'Sales & Market Growth',
    location: 'Bangalore (Electronic City)',
    description: 'We’re seeking a Business Development Manager to drive growth by building client relationships and expanding our presence in global steel detailing markets. Strong communication, market insight, and experience in B2B sales within AISC or construction industry are essential.',
    requirements: [
      '5+ years in B2B construction / steel sales',
      'Knowledge of AISC / CISC steel detailing markets',
      'Track record in international client acquisition',
      'Strong negotiation & proposal writing skills'
    ]
  },
  {
    id: 'job-2',
    title: 'Connection Design Engineer',
    department: 'Structural Engineering',
    location: 'Bangalore (Electronic City)',
    description: 'We’re seeking a Connection Design Engineer to develop safe, efficient, and code-compliant steel connections for diverse structural projects. Strong understanding of AISC 360/341 standards and proficiency in RAM, STAAD.Pro, or IDEA StatiCa preferred.',
    requirements: [
      'B.Tech / M.Tech in Civil / Structural Engineering',
      'Proficiency in IDEA StatiCa & RAM Connection',
      'In-depth knowledge of AISC & CISC codes',
      'PE Stamping experience is a major plus'
    ]
  },
  {
    id: 'job-3',
    title: 'Research & Development (R & D) Specialist',
    department: 'Tekla Automation & BIM',
    location: 'Bangalore (Electronic City)',
    description: 'We are building an R&D team dedicated to innovation in steel detailing technology. Ideal candidates will create Tekla C# Open API plugins, custom components, and automated BIM workflows.',
    requirements: [
      'Experience in Tekla Open API development (C# / .NET)',
      'Background in BIM workflow optimization',
      'Strong algorithmic problem solving',
      'Passion for automation in structural drafting'
    ]
  },
  {
    id: 'job-4',
    title: 'Tekla Administrator',
    department: 'Systems & CAD Operations',
    location: 'Bangalore (Electronic City)',
    description: 'We are seeking skilled Tekla Admin professionals to support and stream our steel detailing operations. Manages Tekla Structures licenses, environment settings, firm folders, and project setups.',
    requirements: [
      'Advanced Tekla Structures administration',
      'Custom environment & template configuration',
      'License server setup & team troubleshooting',
      'Quality assurance setup for shop drawings'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Digital Revolution in Steel Detailing: How Technology is Reshaping Construction',
    date: 'June 2025',
    readTime: '5 min read',
    category: 'BIM & Automation',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/medium-vecteezy_london-uk-november-24-2016-heathrow-express-train-to_16108060_medium-1080x675.jpg',
    excerpt: 'From papyrus drawings to AI-driven Tekla 3D modeling. Discover how automated clash detection and digital fabrication files accelerate erection timelines.',
    content: 'Welcome to the official blog of 3 AXIAL. Steel detailing has evolved from 2D manual drafting into hyper-accurate 3D BIM workflows. Using Tekla Structures and parametric connection models, detailing teams eliminate shop floor misfits, extract Advance Bill of Materials (ABM) instantly, and ensure smooth site erection across major commercial and industrial builds.'
  },
  {
    id: 'blog-2',
    title: 'Mastering Connection Design with ADSC & Tekla',
    date: 'May 2025',
    readTime: '4 min read',
    category: 'Engineering Standards',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/Industrial-Process-Facility.jpg',
    excerpt: 'Steel connection design is critical. Learn how Advance Design Steel Connections (ADSC) verifies shear, moment, and bracing joints under AISC 360-16.',
    content: 'Connection engineering is the backbone of structural safety. Utilizing ADSC and FEA analysis tools like IDEA StatiCa allows engineers to optimize plate thickness, bolt counts, and weld sizes while guaranteeing complete compliance with regional building codes.'
  },
  {
    id: 'blog-3',
    title: 'How Pre-Bid Estimations Win Global Construction Bids',
    date: 'April 2025',
    readTime: '3 min read',
    category: 'Bidding & Cost Control',
    image: 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/The-Wynkoop-2.jpg',
    excerpt: 'Accurate 3D tender models and preliminary mark lists provide fabricators with exact tonnage estimates and competitive bidding confidence.',
    content: 'Pre-bid estimation services provide fabricators with a competitive edge. By building 3D preliminary models in Tekla, 3 Axial generates accurate steel tonnage, detailing timelines, and preliminary material takeoff lists before the final contract is awarded.'
  }
];
