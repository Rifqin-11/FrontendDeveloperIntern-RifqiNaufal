import {
  Target,
  Users,
  Lightbulb,
  Award,
  Heart,
  Globe,
  Laptop,
  Coffee,
  Zap,
} from "lucide-react";
import {
  AboutMilestone,
  AboutTeamMember,
  AboutValue,
  ContactInfo,
  ServiceItem,
  ProcessStep,
  Project,
  StatItem,
} from "@/types";
import type { Job, Benefit, Value } from "@/types";

export const contactInfo: ContactInfo[] = [
  {
    icon: "MapPin",
    title: "Visit Our Office",
    details: [
      "Jl. Pekayon 1 No.26",
      "Ragunan, Ps. Minggu",
      "Kota Jakarta Selatan 12540",
      "Indonesia",
    ],
    color: "bg-blue-500",
  },
  {
    icon: "Phone",
    title: "Call Us",
    details: ["(021) 7196877", "Mon-Fri 9AM-6PM"],
    color: "bg-green-500",
  },
  {
    icon: "Mail",
    title: "Email Us",
    details: ["contact@suitmedia.com"],
    color: "bg-purple-500",
  },
  {
    icon: "Clock",
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
    color: "bg-orange-500",
  },
];

export const services: string[] = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Cloud Solutions",
  "Data Analytics",
  "Digital Marketing",
  "Consulting",
  "Other",
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    description:
      "Join our frontend team to build amazing user experiences with React, Next.js, and modern web technologies.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "UI/UX design understanding",
      "Team collaboration skills",
    ],
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    description:
      "Create intuitive and beautiful designs that solve real user problems and drive business growth.",
    requirements: [
      "3+ years product design",
      "Figma expertise",
      "User research experience",
      "Design system knowledge",
    ],
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Bandung, Indonesia",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    description:
      "Build and maintain scalable infrastructure using cloud technologies and automation tools.",
    requirements: [
      "AWS/Azure experience",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "Infrastructure as Code",
    ],
    posted: "3 days ago",
  },
  {
    id: 4,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    description:
      "Drive growth through digital marketing campaigns, content creation, and brand management.",
    requirements: [
      "Digital marketing experience",
      "Content creation skills",
      "Analytics proficiency",
      "Creative thinking",
    ],
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    salary: "$50,000 - $70,000",
    description:
      "Develop robust APIs and backend services using Node.js, Python, and cloud technologies.",
    requirements: [
      "Node.js or Python",
      "Database design",
      "API development",
      "Cloud platforms",
    ],
    posted: "1 day ago",
  },
  {
    id: 6,
    title: "Data Analyst",
    department: "Analytics",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    description:
      "Transform data into actionable insights to drive business decisions and strategy.",
    requirements: [
      "SQL proficiency",
      "Python/R knowledge",
      "Data visualization",
      "Statistical analysis",
    ],
    posted: "4 days ago",
  },
];

export const benefits: Benefit[] = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, and wellness programs.",
  },
  {
    icon: Laptop,
    title: "Remote Work",
    description:
      "Flexible work arrangements with modern equipment and home office setup.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Flexible hours, unlimited PTO, and a culture that values personal time.",
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description:
      "Professional development budget, mentorship programs, and career advancement.",
  },
  {
    icon: Users,
    title: "Great Team",
    description:
      "Collaborative environment with talented, passionate, and supportive colleagues.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Performance bonuses, equity options, and regular recognition programs.",
  },
];

export const companyValues: Value[] = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We embrace new technologies and creative solutions to solve complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and open communication.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "We care about our team, clients, and the impact of our work.",
  },
];

export const aboutValues: AboutValue[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project...",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork...",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies...",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Quality is at the core of everything we do...",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We’re passionate about technology...",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We aim to make a positive impact globally...",
  },
];

export const team: AboutTeamMember[] = [
  {
    name: "Ajeng Laras Phitaloka",
    role: "Asc. Account Manager",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Allaydha Syafa Adjani",
    role: "Account Executive",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Almika Gusnandri Indra",
    role: "Chief Executive",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Anggriawan Sugianto",
    role: "Chief Technology",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Ghita Asyifa",
    role: "Asc. Account Manager",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "I Ketut Hartawan",
    role: "Account Director",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Mega Purnama",
    role: "Sr. Account Executive",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Merlin Ratu Suci",
    role: "Sr. Account Executive",
    image:
      "https://images.pexels.com/photos/1181691/pexels-photo-1181691.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Nia Anggriani",
    role: "Sr. Account Manager",
    image:
      "https://images.pexels.com/photos/1181701/pexels-photo-1181701.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Nisa Imanda",
    role: "Sr. Account Manager",
    image:
      "https://images.pexels.com/photos/1181708/pexels-photo-1181708.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Rully Edsapani",
    role: "Asc. Account Manager",
    image:
      "https://images.pexels.com/photos/1181711/pexels-photo-1181711.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
  {
    name: "Seruni Putri Yudithia",
    role: "Asc. Account Manager",
    image:
      "https://images.pexels.com/photos/1181720/pexels-photo-1181720.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    bio: "",
  },
];

export const milestones: AboutMilestone[] = [
  {
    year: "2009",
    event: "Suitmedia Didirikan",
    description:
      "Suitmedia berdiri sebagai perusahaan konsultan digital kreatif berbasis di Jakarta dan Yogyakarta.",
  },
  {
    year: "2011",
    event: "Mulai Proyek Pemerintah",
    description:
      "Suitmedia mengembangkan berbagai sistem informasi dan aplikasi untuk kementerian dan lembaga negara.",
  },
  {
    year: "2013",
    event: "Peningkatan Layanan Digital",
    description:
      "Fokus mengembangkan layanan digital marketing dan aplikasi mobile untuk perusahaan swasta.",
  },
  {
    year: "2015",
    event: "Skalabilitas dan Inovasi",
    description:
      "Menjadi salah satu agensi digital terkemuka dengan klien multinasional dan teknologi yang scalable.",
  },
  {
    year: "2018",
    event: "Ekspansi Tim dan Kapabilitas",
    description:
      "Pertumbuhan tim dan peningkatan kemampuan teknologi dalam pengembangan sistem dan kampanye digital.",
  },
  {
    year: "2023",
    event: "Transformasi Digital Lebih Dalam",
    description:
      "Menjadi mitra transformasi digital end-to-end untuk berbagai sektor industri.",
  },
];

export const servicesItem: ServiceItem[] = [
  {
    icon: "Code",
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies and best practices.",
    features: [
      "React & Next.js",
      "Node.js & Express",
      "Database Design",
      "API Development",
    ],
    color: "bg-blue-500",
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android devices.",
    features: [
      "React Native",
      "Flutter",
      "iOS Development",
      "Android Development",
    ],
    color: "bg-green-500",
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: [
      "AWS & Azure",
      "DevOps",
      "Microservices",
      "Container Orchestration",
    ],
    color: "bg-purple-500",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered design that creates engaging and intuitive digital experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "bg-pink-500",
  },
  {
    icon: "BarChart3",
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with advanced analytics solutions.",
    features: [
      "Business Intelligence",
      "Data Visualization",
      "Machine Learning",
      "Reporting",
    ],
    color: "bg-orange-500",
  },
  {
    icon: "Shield",
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and data.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance",
      "Risk Assessment",
    ],
    color: "bg-red-500",
  },
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We create intuitive designs and prototypes that align with your brand and user expectations.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Our developers build robust, scalable solutions using cutting-edge technologies and best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Rigorous testing ensures your solution is reliable, secure, and performs optimally across all platforms.",
  },
  {
    step: "06",
    title: "Launch",
    description:
      "We deploy your solution and provide ongoing support to ensure smooth operation and continuous improvement.",
  },
];

export const Servicebenefits: string[] = [
  "Expert team with 10+ years experience",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Scalable and future-proof solutions",
  "Competitive pricing and flexible packages",
  "On-time delivery guarantee",
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Infomedia Nusantara: Digital Marketing Implementation",
    description: "Elevating brand awareness with a winning strategy",
    image:
      "https://images.pexels.com/photos/3183149/pexels-photo-3183149.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Digital Marketing",
    year: "2023",
    client: "Infomedia Nusantara",
    technologies: ["Strategy", "Content Creation", "Social Media"],
    results: "Peningkatan engagement hingga 35%",
  },
  {
    id: 2,
    title: "BRI Manajemen Investasi | Brand Development Journey",
    description: "Providing brand communication to increase public awareness",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Brand Development",
    year: "2023",
    client: "BRI Manajemen Investasi",
    technologies: ["Brand Strategy", "Visual Identity", "UX Design"],
    results: "Awareness meningkat 40%",
  },
  {
    id: 3,
    title: "Bank Danamon: Career Website Redesign",
    description: "Building a visually appealing website to attract top talent",
    image:
      "https://images.pexels.com/photos/3810793/pexels-photo-3810793.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web Redesign",
    year: "2023",
    client: "Bank Danamon",
    technologies: ["Next.js", "Tailwind CSS", "Headless CMS"],
    results: "Aplikasi pelamar naik 50%",
  },
  {
    id: 4,
    title: "LG Electronics | Improve Customer Journey and Experience",
    description: "Improve user experience through microsite development",
    image:
      "https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "UX/UI Design",
    year: "2023",
    client: "LG Electronics",
    technologies: ["React", "Micro‑frontend", "A/B Testing"],
    results: "Bounce rate turun 25%",
  },
  {
    id: 5,
    title: "Lintec: Wincos | Comprehensive Digital Marketing",
    description: "Enhance brand visibility for growth in the B2C market",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Digital Marketing",
    year: "2022",
    client: "Lintec (Wincos)",
    technologies: ["SEO", "SEM", "Social Ads"],
    results: "Leads naik 60%",
  },
  {
    id: 6,
    title: "Astra International: Digital Innovation Solutions",
    description: "Increasing efficiency for sales, customers, and employees",
    image:
      "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Digital Transformation",
    year: "2022",
    client: "Astra International",
    technologies: ["Low‑code", "Workflow Automation", "Analytics"],
    results: "Proses bisnis dipercepat 45%",
  },
];

export const stats: StatItem[] = [
  { label: "Projects Completed", value: "900+", icon: "Award" },
  { label: "Happy Clients", value: "150+", icon: "Users" },
  { label: "Years Experience", value: "16+", icon: "Calendar" },
];
