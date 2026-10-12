// Single source of truth for the site's content.
// Edit copy, dates and links here; the components only handle presentation.

export const profile = {
  name: "Amen Jouini",
  role: "Full-Stack Software Engineer",
  location: "Tunis, Tunisia",
  coords: "36.80° N · 10.18° E",
  timeZone: "Africa/Tunis",
  availability: "Open to project conversations",
  email: "amen.jouini18@gmail.com",
  cv: { href: "/JOUINI-Amen-Resume.pdf", filename: "Amen_Jouini_CV.pdf" },
  portrait: "/aj.png",
  socials: [
    {
      label: "LinkedIn",
      handle: "in/amen-allah-jouini",
      href: "https://www.linkedin.com/in/amen-allah-jouini-11bab51a3/",
    },
    { label: "GitHub", handle: "amenjouini", href: "https://github.com/amenjouini" },
  ],
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Profile", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "More", href: "#more" },
];

export const stats = [
  { value: "7+", label: "Professional projects delivered" },
  { value: "9", label: "Countries reached" },
  { value: "3", label: "Working languages — EN · FR · AR" },
  { value: "EUR-ACE", label: "Accredited engineering degree" },
];

// Rotating deck in the hero. Each entry points at a real screenshot.
export const heroDeck = [
  {
    id: "ideal-bookings",
    label: "Hotel booking platform",
    url: "ideal-bookings.com",
    image: "/work/ideal-bookings.webp",
  },
  {
    id: "gark",
    label: "Sports academy SaaS",
    url: "gark · accounting module",
    image: "/work/gark-landing.webp",
  },
  {
    id: "hamilcar",
    label: "Armored vehicle brand",
    url: "hamilcar.tn",
    image: "/work/hamilcar.webp",
  },
];

export const gark = {
  id: "gark",
  name: "GARK",
  title: "One platform to run a sports academy",
  kind: "SaaS platform",
  status: "Startup team product",
  summary:
    "GARK is a Tunisian startup building a SaaS platform for sports academy management. I worked across the stack on the modules clubs use every day — from evaluating players to closing the month's accounts.",
  reach:
    "The platform is used by clubs including Club Africain and has expanded to Senegal, Libya, Morocco and the UAE.",
  facts: [
    { label: "Role", value: "Full-stack engineer" },
    { label: "Period", value: "Feb 2024 – Dec 2025" },
    { label: "Context", value: "Graduation internship" },
  ],
  features: [
    { title: "Player evaluation & KPIs", text: "Configurable test batteries and KPI tracking for every athlete." },
    { title: "Staff & academy management", text: "Managers, academies, teams, disciplines and role-based access." },
    {
      title: "Accounting with Power BI",
      text: "Income, expenses and net results, with embedded financial dashboards.",
    },
    {
      title: "AI chatbot & live streaming",
      text: "An AI-powered assistant built into the app, plus live match streaming.",
    },
  ],
  stack: ["Angular", "Spring Boot", "Node.js", "Express", "WebSocket", "MySQL", "Redis", "REST API", "Docker"],
  shots: [
    { id: "accounting", label: "Accounting", image: "/work/gark-accounting.webp" },
    { id: "analytics", label: "Power BI", image: "/work/gark-analytics.webp" },
    { id: "landing", label: "Landing", image: "/work/gark-landing.webp" },
  ],
  video: { src: "/pfe.mp4", poster: "/work/gark-accounting.webp", length: "5 min" },
};

export const caseStudies = [
  {
    id: "ideal-bookings",
    name: "Ideal Bookings",
    title: "A hotel booking platform for a Saudi travel agency",
    kind: "Full-stack web application",
    status: "Client project · Live",
    need: "A Saudi Arabian agency needed to move hotel reservations and day-to-day operations into one system.",
    delivered:
      "A full-stack platform covering booking management, visitor coordination and staff operations — with destination and date search, discount codes and an Arabic-first, multilingual interface.",
    stack: ["Next.js", "Node.js", "MySQL"],
    href: "https://ideal-bookings.com/",
    url: "ideal-bookings.com",
    image: "/work/ideal-bookings.webp",
    mobileImage: "/work/ideal-bookings-mobile.webp",
  },
  {
    id: "hamilcar",
    name: "Hamilcar",
    title: "The online home of Tunisia's first bulletproof car brand",
    kind: "Brand website",
    status: "Client project · Live",
    need: "A high-security manufacturer needed a credible presence for clients and investors.",
    delivered:
      "A multilingual brand site presenting the vehicle range, design and technology, with dedicated paths for clients and investors.",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://hamilcar.tn",
    url: "hamilcar.tn",
    image: "/work/hamilcar.webp",
  },
  {
    id: "vehtun",
    name: "VehTun",
    title: "A product showcase for an industrial vehicle-body manufacturer",
    kind: "Corporate website",
    status: "Client project · Live",
    need: "A manufacturer of custom vehicle equipment wanted its products and services easy to browse.",
    delivered: "A React site with product and service catalogues, company story, blog and contact flows.",
    stack: ["React", "TypeScript"],
    href: "https://vehtun.com",
    url: "vehtun.com",
    image: "/work/vehtun.webp",
  },
];

export const moreWork = [
  {
    id: "healthy-kitchen",
    name: "Healthy Kitchen",
    kind: "Healthy food restaurant website",
    stack: ["React", "NodeJS", "ExpressJS", "TypeScript"],
    href: "https://healthy-kitchen.onrender.com/",
    url: "healthy-kitchen.onrender.com",
    image: "/work/healthy-kitchen.webp",
  },
  {
    id: "lady-k",
    name: "Lady K",
    kind: "Luxury Yacht website",
    stack: ["React", "TypeScript"],
    href: "https://lady-k.vercel.app/",
    url: "lady-k.vercel.app/",
    image: "/work/lady-k.webp",
  },
  {
    id: "smr-pharma",
    name: "SMR Pharma Plus",
    kind: "Pharmaceutical laboratory website",
    stack: ["HTML", "CSS", "JavaScript"],
    href: "https://smrpharma.vercel.app/",
    url: "smrpharma.vercel.app",
    image: "/work/smr-pharma.webp",
  },
  {
    id: "PHTXY",
    name: "phtxy",
    kind: "Photography services website",
    stack: ["React", "TypeScript"],
    href: "https://phtxy.vercel.app/",
    url: "phtxy.vercel.app/",
    image: "/work/phtxy2.webp",
  },
  {
    id: "leman",
    name: "Léman Poker & Casino",
    kind: "Poker club website",
    stack: ["React", "TypeScript"],
    href: "https://leman-casino.vercel.app/",
    url: "leman-casino.vercel.app",
    image: "/work/leman.webp",
  },
];

// Current work — no public screenshots yet, so it is shown as a pipeline diagram.
export const inProgress = {
  name: "Intelligent invoice scanner",
  company: "Comet Group",
  status: "In development",
  summary:
    "Turns scanned invoices into accounting data a business system can use: key fields are extracted automatically, totals are validated, taxes computed and the result exported.",
  steps: [
    { label: "Scan", detail: "PDF / image" },
    { label: "OCR", detail: "Text layer" },
    { label: "Extract", detail: "NLP key fields" },
    { label: "Validate", detail: "Totals & taxes" },
    { label: "Export", detail: "JSON / CSV" },
  ],
  stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OCR", "NLP"],
};

export const about = {
  tagline: "From Tunisian roots to global impact.",
  paragraphs: [
    "I'm a software engineer who enjoys the whole journey: understanding what a business actually needs, designing the product, building it end to end, and keeping it running after launch.",
    "I trained first in electrical engineering, then earned a European-accredited engineering degree in computer science. Most of my work is full-stack JavaScript, and I keep exploring Python, data mining and NLP to bring useful intelligence into the products I build.",
  ],
};

export const services = [
  {
    title: "SaaS platforms",
    text: "Management products with roles, dashboards and reporting — built to be used daily by real teams.",
  },
  {
    title: "Business websites",
    text: "Fast, multilingual brand and corporate sites that give a company a credible online presence.",
  },
  {
    title: "Full-stack applications",
    text: "Booking flows, back-offices and APIs, owned from the database to the interface.",
  },
  {
    title: "Data & AI features",
    text: "Power BI reporting, OCR and NLP pipelines, and chatbot integration where they solve a real problem.",
  },
];

export const process = [
  { step: "01", title: "Consult", text: "Understand the business, the users and the constraint that matters most." },
  { step: "02", title: "Build", text: "Design and develop in the open, with performance and scalability in mind." },
  { step: "03", title: "Ship & maintain", text: "Deploy, measure, and stay around for what comes next." },
];

export const education = [
  {
    school: "ESPRIT",
    place: "Tunis",
    degree: "Engineer's degree in Computer Science",
    note: "EUR-ACE & CTI accredited",
    date: "2021 – 2024",
  },
  {
    school: "ISET Radès",
    place: "Tunis",
    degree: "Bachelor's degree in Electrical Engineering",
    date: "2018 – 2021",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "B2 · IELTS Academic" },
  { name: "French", level: "B2 · TCF" },
];

// The tools used most often, shown large.
export const coreStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Node.js",
  "Express",
  "Spring Boot",
  "MySQL",
  "MongoDB",
];

export const stackGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C", "HTML5", "CSS3", "SCSS"] },
  {
    label: "Frameworks",
    items: ["React", "Next.js", "Angular", "Vue.js", "Express", "Spring Boot", "Django", "Flask", ".NET", "Laravel"],
  },
  { label: "APIs & back end", items: ["REST APIs", "GraphQL", "WebSockets", "Node.js"] },
  { label: "Data", items: ["MySQL", "MongoDB", "PL/SQL", "Redis", "Neo4j", "Power BI"] },
  {
    label: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "SonarQube", "Nexus", "Prometheus", "Linux", "AWS"],
  },
  { label: "Workflow", items: ["Git", "GitHub", "Postman", "Jira", "Trello", "Odoo", "HubSpot"] },
];

// Shown as a moving strip of flags under the hero. `code` matches a file in /public/flags.
export const countries = [
  { code: "tn", name: "Tunisia" },
  { code: "rs", name: "Serbia" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "us", name: "USA" },
  { code: "ch", name: "Switzerland" },
  { code: "tr", name: "Turkey" },
  { code: "ma", name: "Morocco" },
  { code: "ly", name: "Libya" },
  { code: "sn", name: "Senegal" },
];

// "More about Amen" — leadership and community work outside of client projects.
export const journey = [
  {
    organisation: "AIESEC",
    role: "Mentor — Marketing, IT & Entrepreneurship",
    place: "Belgrade, Serbia",
    date: "Jun 2025 – Aug 2025",
    duration: "3 months",
    description:
      "3 months in Belgrade with AIESEC Serbia mentoring young people in marketing, IT and entrepreneurship. I prepared and ran sessions, guided participants through their own ideas, and worked every day in an international team — far from home and in a second language.",
    takeaways: ["Mentoring", "Public speaking", "Cross-cultural teamwork"],
  },
  {
    organisation: "Enactus",
    role: "Project Team Leader & Pitch Presenter",
    place: "Tunisia",
    date: "2019 – 2023",
    duration: "4 years",
    description:
      "Four years in a student organisation built around entrepreneurial projects with social impact. As project team leader I coordinated the team and kept the project moving from idea to delivery; as pitch presenter I took it on stage and defended it in front of juries at national competitions.",
    takeaways: ["Team leadership", "Project management", "Pitching"],
  },
  {
    organisation: "Maseer",
    role: "HR Manager",
    place: "ISET Radès, Tunis",
    date: "2019 – 2021",
    duration: "2 years",
    description:
      "Looked after the people side of the Maseer student club at ISET Radès for two years: bringing new members in, helping them find their place, and keeping the team motivated and organised around its activities.",
    takeaways: ["Recruitment", "Team building", "Organisation"],
  },
];

// Professional roles. Not rendered on the page at the moment (they are in the CV);
// kept here so the list can be brought back without retyping it.
export const experiences = [
  {
    role: "Full-Stack JS Software Engineer",
    company: "Comet Group",
    place: "Tunis",
    date: "Aug 2025 – Present",
    description:
      "Building an intelligent invoice scanner that turns scanned documents into actionable accounting data: automatic field extraction, total validation, tax computation and JSON/CSV export for business systems.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "OCR", "NLP"],
  },
  {
    role: "Full-Stack JS Software Engineer",
    company: "Self-employed",
    place: "Tunis",
    date: "Dec 2023 – Present",
    description:
      "Designing and developing full-stack applications for clients — a travel-agency booking platform, a pharmaceutical laboratory and a car brand among them. I manage each project from initial consultation to deployment and maintenance, and support launches with marketing campaigns.",
    stack: ["React", "Next.js", "Node.js", "Express", "TypeScript"],
  },
  {
    role: "Marketing & Entrepreneurship Mentor",
    company: "AIESEC Exchange Program",
    place: "Belgrade, Serbia",
    date: "Jul 2025 – Aug 2025",
    description:
      "Mentored high-school students through workshops on soft skills, hard skills and employability. Designed and led training sessions, career events and assessments.",
    stack: [],
  },
  {
    role: "Full-Stack JS Engineer — Graduation Internship",
    company: "GARK",
    place: "Tunis",
    date: "Feb 2024 – Dec 2025",
    description:
      "Contributed to a Tunisian startup's SaaS platform for sports academy management: player evaluations, KPI tracking and staff management, plus an AI chatbot, live streaming and Power BI dashboards for accounting.",
    stack: ["Angular", "Spring Boot", "MySQL", "Redis", "Docker"],
  },
  {
    role: "Web Development Intern",
    company: "CNI",
    place: "Tunis",
    date: "Jan 2023 – May 2023",
    description:
      "Developed a full-stack web application for eco-friendly crowdfunding, integrating AI models for project assessment and risk analysis. Added a recruitment module with NLP-based candidate suitability scoring.",
    stack: [],
  },
];

export const contactTopics = ["SaaS platforms", "Websites", "Dashboards", "Full-stack apps"];
