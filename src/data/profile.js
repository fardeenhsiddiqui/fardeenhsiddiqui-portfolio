// Single source of truth for portfolio content.
// Facts come from the resume (software_engineer_fardeen_siddiqui.pdf) and public GitHub repositories.

export const profile = {
  name: 'Fardeen Siddiqui',
  title: 'Software Engineer',
  tagline: 'Java & Spring Boot · Full-Stack Development · AI-Assisted Engineering',
  headline: 'I build reliable backend systems for products that have to keep running.',
  summary:
    'Backend-focused software engineer with 4+ years of experience building high-availability, scalable systems in product-driven startups, joining both companies in their early days. Work spans public sector, healthcare, education, insurance and e-commerce, with a focus on clean, well-documented code, database performance and AI-assisted engineering.',
  location: 'Gurugram, India',
  email: 'fardeenhsiddiqui98@gmail.com',
  github: 'https://github.com/fardeenhsiddiqui',
  linkedin: 'https://www.linkedin.com/in/fardeenhsiddiqui/',
  resume: '/Fardeen_Siddiqui_Resume.pdf',
};

export const highlights = [
  { value: '4+', label: 'years building production backends' },
  { value: '2', label: 'early-stage startups, joined from the early days' },
  { value: '5+', label: 'core modules designed (LLD and HLD)' },
  { value: '5', label: 'domains: public sector, healthcare, education, insurance, e-commerce' },
];

export const experience = [
  {
    company: '909 Technologies Pvt Ltd',
    role: 'Software Engineer',
    place: 'Gurugram, India',
    note: 'Early-stage startup',
    period: 'Feb 2024 – Present',
    points: [
      'Led design and development of high-throughput, high-availability backend services using Java, Spring Boot and PostgreSQL, reducing p95 API latency by 20% through query optimization and connection tuning.',
      'Investigated and optimized API, database and UI performance bottlenecks in an existing production codebase, including N+1 queries, redundant DB calls and excess DOM rendering.',
      'Architected RESTful and event-driven asynchronous workflows using Kafka for inter-service communication, improving fault isolation and system throughput.',
      'Led LLD and HLD activities (service decomposition, API contracts and dependency analysis) for 5+ core modules across public-sector and healthcare platforms.',
      'Used Claude with structured prompts for codebase investigation, debugging and refactoring; reviewed every AI-generated change and validated it with builds and automated tests.',
      'Practised TDD with JUnit and Mockito to reduce regressions.',
    ],
  },
  {
    company: 'Future Algorithms Pvt. Ltd.',
    role: 'Software Developer',
    place: 'Gurugram, India',
    note: 'Early-stage startup',
    period: 'Mar 2022 – Jan 2024',
    points: [
      'Developed and deployed high-availability product backends using Spring Boot and Docker, maintaining 99.9% uptime under steady traffic growth.',
      'Implemented asynchronous and multithreaded processing on Linux, improving request throughput by 15–20% and reducing thread blocking under high concurrency.',
      'Worked with product managers and senior engineers to refine requirements and contribute to architectural discussions, delivering within Agile sprint timelines.',
      'Mentored interns on debugging, performance optimization and REST API design.',
    ],
  },
];

export const education = {
  school: 'Dr APJ Abdul Kalam Technical University',
  place: 'Uttar Pradesh, India',
  degree: 'Bachelor of Technology in Computer Science Engineering',
  detail: '78%',
  period: 'Aug 2018 – Jun 2022',
};

export const certifications = [
  'Full-Stack Web Development Internship (certificate)',
  'Python Programming, IIT Kharagpur (certificate)',
  'Executive Member, Techwiz Team (Dec 2021 – Jan 2022)',
];

export const skills = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'JPA', 'REST APIs', 'Microservices', 'Async & multithreading'],
  },
  {
    category: 'Frontend',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'Vaadin'],
  },
  {
    category: 'Databases & Search',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQL'],
  },
  {
    category: 'Messaging & Architecture',
    items: ['Kafka', 'RabbitMQ', 'Event-driven design', 'LLD / HLD', 'Design patterns'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'S3', 'Docker', 'Linux', 'CI/CD', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'AI-Assisted Engineering',
    items: ['Claude Code', 'Prompt engineering', 'AI agent workflows', 'Codebase investigation', 'Review and test validation of AI changes'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Visual Studio', 'Postman', 'Jira', 'JUnit', 'Mockito'],
  },
];

// kind: 'professional' (company work, presented as a case study without proprietary details)
//       'personal'     (own project with public source)
export const projects = [
  {
    slug: 'ppm',
    name: 'Program Pathways Mapper (PPM)',
    kind: 'professional',
    client: 'Foundation for California Community Colleges',
    status: 'Production system',
    summary:
      'Enterprise platform for academic planning and transfer pathways, supporting 10,000+ program maps across 50+ colleges.',
    stack: ['Java', 'Spring Boot', 'Jmix', 'Vaadin', 'Elasticsearch', 'PostgreSQL'],
    role: 'Backend engineer on an enterprise monolith: built and maintained core backend modules.',
    contributions: [
      'Built and maintained core backend modules with Java, Spring Boot, Elasticsearch and PostgreSQL.',
      'Owned enhancements to course-to-program mapping logic, validation rules and notification workflows, improving data accuracy and reducing manual correction effort for institutional administrators.',
      'Optimized database schemas and queries for high-volume datasets, improving backend responsiveness.',
    ],
    challenges: [
      'Keeping mapping and validation rules consistent across many institutions and program maps.',
      'Query and schema performance on high-volume datasets.',
    ],
    outcome: 'Contributed to an approximately 15% increase in student on-path success rates, as stated on my resume.',
  },
  {
    slug: 'fusion',
    name: 'FUSION',
    kind: 'professional',
    status: 'Enterprise application',
    summary:
      'Enterprise application work on a reusable data-table component system, an admin module redesign and end-to-end performance investigation.',
    stack: ['Razor / Blazor UI', 'SQL', 'REST APIs'],
    role: 'Engineer across UI components, API and database performance, and new module development.',
    contributions: [
      'Redesigned the Admin module.',
      'Built reusable DataTableV2 components with sorting, filtering, pagination and row selection.',
      'Optimized UI performance, including excess DOM rendering.',
      'Investigated Manage Funds performance and delivered API and database improvements (N+1 queries, redundant database calls).',
      'Developed the Sustainability module.',
      'Used feature flags to ship changes while keeping backward compatibility with existing behavior.',
    ],
    challenges: [
      'Changing UI behavior in a live product without breaking existing users.',
      'Finding the real bottleneck across UI, API and database layers before changing code.',
    ],
  },
  {
    slug: 'ccps',
    name: 'CCPS',
    kind: 'professional',
    status: 'Clinical placement system',
    summary:
      'Centralized Clinical Placement System: deployment, containerization and database setup.',
    stack: ['Docker', 'PostgreSQL'],
    role: 'Engineer responsible for application deployment and database setup.',
    contributions: [
      'Application deployment.',
      'Docker packaging of the application.',
      'PostgreSQL setup and database initialization.',
    ],
    challenges: ['Repeatable environment setup so the application and its database start from a known state.'],
  },
  {
    slug: 'healthcare-platforms',
    name: 'Healthcare Platforms',
    kind: 'professional',
    status: 'Design and backend',
    summary: 'Design and backend work on public-sector and healthcare platforms at 909 Technologies.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka'],
    role: 'Led low-level and high-level design activities.',
    contributions: [
      'Service decomposition, API contracts and dependency analysis for 5+ core modules across public-sector and healthcare platforms.',
      'Event-driven asynchronous workflows using Kafka for inter-service communication.',
      'Clean, well-documented designs that other engineers could build from.',
    ],
    challenges: ['Drawing module boundaries and contracts before implementation so work could proceed in parallel.'],
  },
  {
    slug: 'micro-commerce',
    name: 'Micro-Commerce Backend',
    kind: 'personal',
    status: 'In progress · public source',
    summary: 'E-commerce backend built as modular services with secure authentication and asynchronous messaging.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT / OAuth2', 'RabbitMQ', 'PostgreSQL', 'Docker'],
    role: 'Sole author.',
    contributions: [
      'User service with registration, login and JWT-based authentication, protected API access and product subscription with notifications.',
      'Product service with initial stock management.',
      'RabbitMQ for event-driven communication, for example triggering a notification after user creation.',
      'Dockerized RabbitMQ and application environments.',
    ],
    challenges: ['Planned next: Spring Cloud Gateway and Eureka, Redis caching, and order, cart and payment services.'],
    repo: 'https://github.com/fardeenhsiddiqui/microCommerce-system',
  },
  {
    slug: 'motionshelf',
    name: 'MotionShelf',
    kind: 'personal',
    status: 'Public source',
    summary: 'Static React site with a 3D showroom, validated catalog data, prerendered routes and Cloudflare Pages deployment.',
    stack: ['React', 'TypeScript', 'Three.js', 'Vite', 'Cloudflare Pages'],
    role: 'Sole author.',
    contributions: [
      'Build pipeline that validates catalog data, type-checks, builds and prerenders every route.',
      'Deployed as a static site on Cloudflare Pages.',
    ],
    challenges: [],
    repo: 'https://github.com/fardeenhsiddiqui/motionshelf',
  },
];

export const confidentialNote =
  'Company projects are shown as case studies. No proprietary source code, customer data, internal URLs or screenshots are published.';
