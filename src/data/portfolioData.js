export const portfolioData = {
  personal: {
    name: "Abhijith P.R",
    handle: "@abhijithpr",
    title: "Golang Backend Developer",
    tagline: "Golang backend developer experienced in building secure REST & gRPC APIs with clean architecture, event-driven Kafka systems, PostgreSQL, Redis, Docker, and AWS.",
    availability: "Actively seeking full-time roles & engineering opportunities",
    location: "Kottayam, Kerala, India",
    avatar: "/assets/bgme_cutout.png",
    email: "abhijithpr366@gmail.com",
    phone: "+91 8590988810",
    whatsapp: "https://wa.me/918590988810?text=Hi%20Abhijith%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.",
    github: "https://github.com/Abhijith232373",
    linkedin: "https://www.linkedin.com/in/abhijith-p-r--/",
    instagram: "https://www.instagram.com/_.abhi_jith_._/",
    twitter: "https://x.com",
    stats: [
      { label: "Core Backend", value: "Golang" },
      { label: "Internship Experience", value: "1 Year" },
      { label: "Flagship Platforms", value: "LendoGo & MoneyMate" },
      { label: "Education Batch", value: "2025" }
    ]
  },

  themes: {
    amber: {
      name: "Warm Cream & Amber",
      primary: "#f4ebd0",
      secondary: "#c99753",
      accent: "#e5a962",
      glow: "rgba(244, 235, 208, 0.35)",
      bgGradient: "radial-gradient(ellipse at top, #141312 0%, #0d0c0c 100%)"
    },
    cyan: {
      name: "Cyber Cyan",
      primary: "#00f0ff",
      secondary: "#7000ff",
      accent: "#00b4d8",
      glow: "rgba(0, 240, 255, 0.4)",
      bgGradient: "radial-gradient(ellipse at top, #0c162d 0%, #060911 100%)"
    },
    emerald: {
      name: "Matrix Emerald",
      primary: "#00ff88",
      secondary: "#006633",
      accent: "#38bdf8",
      glow: "rgba(0, 255, 136, 0.4)",
      bgGradient: "radial-gradient(ellipse at top, #092015 0%, #040d08 100%)"
    },
    violet: {
      name: "Quantum Violet",
      primary: "#bd00ff",
      secondary: "#4361ee",
      accent: "#f72585",
      glow: "rgba(189, 0, 255, 0.4)",
      bgGradient: "radial-gradient(ellipse at top, #1e0b36 0%, #080314 100%)"
    }
  },

  // Core Services Offered
  services: [
    {
      id: "frontend-dev",
      number: "01",
      title: "Frontend Development",
      category: "Interactive UI & Web Apps",
      badge: "Core Speciality",
      accent: "cyan",
      tagline: "High-performance, reactive, and fluid web applications.",
      description: "Crafting modern single-page applications, responsive enterprise dashboards, and mobile-first interfaces. Engineered with React, modern JavaScript, and Tailwind CSS with 100% Core Web Vitals optimization.",
      features: [
        "React Component Architecture & SPAs",
        "Role-Based Dashboards & Analytics Portals",
        "Real-Time Reactive UIs with WebSockets",
        "Mobile-First Responsive Layouts & Fluid Styling",
        "Seamless REST & GraphQL API Integration"
      ],
      techPills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3", "WebSockets"],
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderGlow: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
    },
    {
      id: "backend-dev",
      number: "02",
      title: "Backend Development",
      category: "Go Microservices & APIs",
      badge: "Golang Primary",
      accent: "amber",
      tagline: "High-concurrency cloud servers, distributed data & clean architecture.",
      description: "Architecting enterprise-grade Golang backends with Fiber and Gin. Implementing Clean Architecture, high-throughput REST and gRPC endpoints, PostgreSQL persistence, Redis caching, and Kafka event streams.",
      features: [
        "High-Concurrency Golang Services (Fiber / Gin)",
        "REST, gRPC & WebSocket Communication Protocols",
        "PostgreSQL & Redis Sub-Millisecond Caching",
        "Apache Kafka Event-Driven Pipelines & Cron Workers",
        "JWT, RBAC & OTP Multi-Factor Authentication"
      ],
      techPills: ["Golang", "Fiber / Gin", "PostgreSQL", "Redis", "Kafka", "Docker"],
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderGlow: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
    },
    {
      id: "wedding-invitation",
      number: "03",
      title: "Wedding & Invitation Websites",
      category: "Bespoke Digital Invitations",
      badge: "Luxury Editorial",
      accent: "gold",
      tagline: "Romantic, memorable, and bespoke interactive celebration portals.",
      description: "Designing bespoke digital wedding and marriage invitation websites that captivate guests. Featuring luxury gold-foil aesthetics, real-time RSVP tracking, event countdown timers, Google Maps venue navigation, background love soundtracks, and photo/video galleries.",
      features: [
        "Bespoke Romantic Visual Aesthetics & Gold Typography",
        "Real-Time Guest RSVP Management & Guestbook",
        "Interactive Event Countdown & Ceremony Schedule",
        "One-Click Google Maps & Calendar Integrations",
        "Background Audio Player & Photo/Video Showcase"
      ],
      techPills: ["React", "Bespoke Editorial Styling", "Audio Player API", "RSVP Form", "Google Maps"],
      gradient: "from-amber-200/20 via-rose-500/10 to-transparent",
      borderGlow: "group-hover:border-amber-300/50 group-hover:shadow-[0_0_30px_rgba(244,235,208,0.25)]"
    },
    {
      id: "portfolio-websites",
      number: "04",
      title: "Portfolio Websites",
      category: "3D & Creative Web Showcases",
      badge: "Awwwards Style",
      accent: "emerald",
      tagline: "Standout personal branding with 3D interactions and kinetic typography.",
      description: "Transforming personal branding for developers, creators, and founders into award-winning digital experiences. Built with Three.js WebGL scenes, interactive 3D companion mascots, kinetic typography, and smooth scroll choreography.",
      features: [
        "Interactive 3D WebGL Graphics (Three.js / R3F)",
        "Custom 3D Model Loading, Rigging & GLTF Animations",
        "Kinetic 3D Typography & Editorial Dark Mode",
        "Interactive Physics-Based Companion Mascots",
        "Lighthouse 100% Performance & Mobile Responsiveness"
      ],
      techPills: ["Three.js", "React Three Fiber", "Tailwind CSS", "Interactive 3D", "Kinetic 3D"],
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      borderGlow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
    }
  ],

  // Comprehensive Categorized Skills
  skillsList: [
    {
      category: "Backend",
      badge: "Server & Data",
      icon: "Server",
      accent: "from-amber-500 to-orange-500",
      description: "High-throughput Go runtimes, clean architecture, distributed caching, and event-driven streaming pipelines.",
      sections: [
        {
          label: "Languages",
          skills: [
            { name: "Golang", tag: "Primary", highlight: true },
            { name: "SQL", tag: "Queries & DDL" }
          ]
        },
        {
          label: "Frameworks",
          skills: [
            { name: "Fiber", tag: "Expressive & Fast" },
            { name: "Gin", tag: "High-QPS" }
          ]
        },
        {
          label: "API Styles",
          skills: [
            { name: "REST APIs", tag: "RESTful Standards" },
            { name: "gRPC", tag: "Protocol Buffers" },
            { name: "WebSocket", tag: "Bidirectional Real-Time" }
          ]
        },
        {
          label: "Databases",
          skills: [
            { name: "PostgreSQL", tag: "Relational ACID", highlight: true },
            { name: "Redis", tag: "In-Memory Caching", highlight: true },
            { name: "GORM", tag: "Go ORM" },
            { name: "sqlc", tag: "Type-Safe SQL" }
          ]
        },
        {
          label: "Security",
          skills: [
            { name: "JWT", tag: "Token Auth" },
            { name: "RBAC", tag: "Role Permissions" },
            { name: "Middleware", tag: "Interceptors" },
            { name: "OTP Authentication", tag: "2FA Verification" }
          ]
        },
        {
          label: "Architecture",
          skills: [
            { name: "Clean Architecture", tag: "Separation of Concerns" },
            { name: "Modular Monolith", tag: "Domain Driven" },
            { name: "Microservices", tag: "Distributed Services" },
            { name: "Event-Driven Systems", tag: "Async Messaging" }
          ]
        },
        {
          label: "Messaging and Jobs",
          skills: [
            { name: "Kafka", tag: "Event Streaming", highlight: true },
            { name: "Cron Jobs", tag: "Scheduled Workers" }
          ]
        },
        {
          label: "Integrations",
          skills: [
            { name: "Razorpay", tag: "Payment Gateway" },
            { name: "Cloudinary", tag: "Media Delivery CDN" },
            { name: "SendGrid", tag: "Transactional Email" }
          ]
        }
      ]
    },
    {
      category: "Frontend",
      badge: "Client & UI",
      icon: "Layout",
      accent: "from-cyan-500 to-blue-500",
      description: "Modern single-page applications, mobile-first responsive architecture, and dynamic dashboard systems.",
      sections: [
        {
          label: "Core",
          skills: [
            { name: "HTML5", tag: "Semantic DOM" },
            { name: "CSS3", tag: "Modern Styling" },
            { name: "JavaScript (ES6+)", tag: "Modern Vanilla", highlight: true }
          ]
        },
        {
          label: "Library",
          skills: [
            { name: "React", tag: "Component State", highlight: true }
          ]
        },
        {
          label: "Layout",
          skills: [
            { name: "Responsive Design", tag: "Multi-Screen" },
            { name: "Mobile-First", tag: "Touch Optimized" },
            { name: "Tailwind CSS", tag: "Utility First" }
          ]
        },
        {
          label: "App Features",
          skills: [
            { name: "RBAC", tag: "Role-Based Access", highlight: true },
            { name: "Real-Time UI (WebSocket)", tag: "Live Streams" },
            { name: "API Integration", tag: "Async Fetching" }
          ]
        },
        {
          label: "Mobile (Team Project)",
          skills: [
            { name: "Flutter", tag: "Cross-Platform Mobile", highlight: true }
          ]
        }
      ]
    },
    {
      category: "3D and Creative Frontend",
      badge: "WebGL & Motion",
      icon: "Sparkles",
      accent: "from-emerald-500 to-teal-500",
      description: "Immersive WebGL graphics, spatial optics, and interactive physics.",
      sections: [
        {
          label: "3D Libraries",
          skills: [
            { name: "Three.js", tag: "WebGL Core Engine", highlight: true },
            { name: "React Three Fiber (R3F)", tag: "Declarative React 3D", highlight: true }
          ]
        },
        {
          label: "Scene & Asset Pipelines",
          skills: [
            { name: "3D Scenes, Lighting and Camera Control", tag: "Studio Optics" }
          ]
        },
        {
          label: "Interactivity & Animation",
          skills: [
            { name: "Interactive 3D (Mouse and Scroll-Based)", tag: "Kinetic Physics" },
            { name: "Animation: Framer Motion / GSAP", tag: "Fluid Transitions" }
          ]
        }
      ]
    },
    {
      category: "Cloud and DevOps",
      badge: "Infrastructure & CI/CD",
      icon: "Cloud",
      accent: "from-violet-500 to-purple-500",
      description: "Cloud hosting, containerization, automated build pipelines, and cluster orchestration.",
      sections: [
        {
          label: "Cloud Platforms",
          skills: [
            { name: "AWS (EC2, S3)", tag: "Cloud Infrastructure", highlight: true },
            { name: "Render", tag: "Cloud App Hosting" }
          ]
        },
        {
          label: "Containers & CI/CD",
          skills: [
            { name: "Docker", tag: "Containerization", highlight: true },
            { name: "CI/CD", tag: "Automated Pipelines" },
            { name: "Kubernetes", tag: "Familiar / K8s Cluster" }
          ]
        }
      ]
    },
    {
      category: "Tools",
      badge: "Workflow & Testing",
      icon: "Wrench",
      accent: "from-pink-500 to-rose-500",
      description: "Version control systems, API debugging suites, and developer productivity tooling.",
      sections: [
        {
          label: "Version Control",
          skills: [
            { name: "Git", tag: "Distributed VCS" },
            { name: "GitHub", tag: "Repositories & Actions", highlight: true }
          ]
        },
        {
          label: "API Testing & Tooling",
          skills: [
            { name: "Postman", tag: "API Debugging & Suites", highlight: true },
            { name: "Apidog", tag: "API Specs & Mocking" }
          ]
        }
      ]
    }
  ],

  projects: [
    {
      id: "moneymate",
      number: "01",
      title: "MoneyMate — UPI & Group Money Management",
      subtitle: "Full-Stack Fintech Platform with Real-Time Ledger & Mobile App",
      date: "Jul — Aug 2026",
      dateTimestamp: "2026-08-15",
      projectType: "Full-Stack",
      isImportant: true,
      isGroupProject: true,
      category: "Fintech & Mobile",
      image: "/assets/projects/project_moneymate.png?v=6",
      stats: { architecture: "Go + React + Flutter", ledger: "Real-Time UPI", team: "Group Project" },
      description: "A collaborative group money management app that lets friends split bills, track pooled balances, and simulate instant UPI peer-to-peer transfers.",
      architecture: "High-throughput Golang microservices backend with PostgreSQL ledger, React web dashboard for financial analytics, and Flutter mobile client for instant UPI peer transfers.",
      backendDetails: [
        "High-concurrency Golang microservices built with Fiber framework",
        "PostgreSQL transactional balance ledger with ACID guarantees",
        "Redis sub-millisecond in-memory cache for user sessions and wallet balance",
        "Apache Kafka event pipeline for transaction stream audit logs",
        "JWT token authentication, RBAC authorization, and OTP verification",
        "RESTful APIs and bidirectional WebSocket real-time balance broadcast",
        "Dockerized deployment with automated GitHub Actions CI/CD"
      ],
      tags: ["Golang", "Fiber", "PostgreSQL", "Redis", "Kafka", "React", "Flutter", "UPI Integration", "Docker", "JWT / RBAC"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "lendogo",
      number: "02",
      title: "Lendogo — Digital Loan Origination System",
      subtitle: "Autonomous Digital Lending, Underwriting & Risk Evaluation Engine",
      date: "Jun — Jul 2026",
      dateTimestamp: "2026-07-10",
      projectType: "Full-Stack",
      isImportant: true,
      isGroupProject: false,
      category: "Fintech",
      image: "/assets/projects/project_lendogo.png?v=6",
      stats: { stack: "Golang + React", rules: "Clean Architecture", security: "RBAC & JWT" },
      description: "A modern fintech loan platform that lets users apply for personal loans, calculate dynamic monthly EMIs, and track instant approval status.",
      architecture: "Clean Architecture Go backend with Fiber/Gin, PostgreSQL relational store, JWT/RBAC role segregation, and an interactive React management interface with credit gauge telemetry.",
      backendDetails: [
        "Clean Architecture Go backend utilizing Gin and Fiber frameworks",
        "PostgreSQL relational persistence with GORM & sqlc type-safe query generation",
        "Redis distributed caching, token blacklisting, and API rate limiting",
        "Automated credit risk assessment engine & dynamic EMI amortization formulas",
        "Multi-tier approval state machine (Draft, Under Review, Approved, Disbursed)",
        "RBAC role segregation for Applicants, Loan Officers, and Super Admins",
        "Background worker goroutines for automated repayment schedule reminders",
        "Docker containerized multi-stage build and deployment"
      ],
      tags: ["Golang", "Gin", "PostgreSQL", "Redis", "GORM", "sqlc", "JWT / RBAC", "Clean Architecture", "React", "Docker"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "find-my-hostel",
      number: "03",
      title: "Find My Hostel — Hostel Search & Booking",
      subtitle: "Student Housing & PG Room Discovery Engine",
      date: "Jan 2, 2026",
      dateTimestamp: "2026-01-02",
      projectType: "Frontend Only",
      isImportant: false,
      isGroupProject: true,
      category: "Web Application",
      image: "/assets/projects/project_hostel.png?v=5",
      stats: { framework: "React SPA", search: "Multi-Filter Engine", ui: "Mobile-First" },
      description: "A location-based hostel discovery portal that helps students find, filter, and book verified rooms based on budget, sharing, and food options.",
      architecture: "Engineered in React with client-side multi-parameter filtering (budget, sharing options, food, amenities), dynamic locality autocomplete, and responsive mobile-optimized card flows.",
      groupDetails: "Collaborative Team Project: Multi-developer git branching, feature review workflows, and coordinated UI component architecture.",
      tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Filter Engine", "Mobile-First", "REST APIs", "Gitflow"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "bridge-student-solutions",
      number: "04",
      title: "Bridge Student Solutions — Grievance Portal",
      subtitle: "College Student Complaint & Feedback System",
      date: "Nov 19, 2025",
      dateTimestamp: "2025-11-19",
      projectType: "Frontend Only",
      isImportant: false,
      isGroupProject: false,
      category: "EdTech",
      image: "/assets/projects/project_bridge.png?v=5",
      stats: { framework: "React", workflow: "Ticket Triage", security: "Role Segregation" },
      description: "An online complaint resolution system for college students to submit grievances, follow real-time ticket progress, and receive faculty updates.",
      architecture: "Developed with React and modern JavaScript featuring ticket state transitions (Pending, Under Review, Resolved), category escalation pipelines, and separate student/admin operational dashboards.",
      tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Ticket Workflow", "State Architecture", "RBAC", "REST APIs"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "furniture-booking",
      number: "05",
      title: "Home4U — Furniture E-Commerce Store",
      subtitle: "Luxury Custom Furniture Catalog & Live Cart Reservation",
      date: "Sep 26, 2025",
      dateTimestamp: "2025-09-26",
      projectType: "Full-Stack",
      isImportant: true,
      isGroupProject: false,
      category: "E-Commerce",
      image: "/assets/projects/project_home4u.png?v=5",
      stats: { backend: "Golang API", client: "React Storefront", db: "PostgreSQL" },
      description: "A full-stack online furniture store where customers can browse luxury home furniture, customize wood finishes, and reserve items with a live cart.",
      architecture: "Dual-tier full-stack system powered by a Golang REST API backend, PostgreSQL database persistence, and an interactive React catalog frontend with live cart drawers and checkout pipeline.",
      backendDetails: [
        "Enterprise Golang REST API backend with Clean Architecture & Domain-Driven Design",
        "PostgreSQL database handling product inventory, categories, user profiles, and orders",
        "Redis caching layer for active shopping cart persistence and session synchronization",
        "Secure JWT authentication and role-based permissions (Customer vs Store Admin)",
        "Order state transitions pipeline (Cart, Placed, Processing, Dispatched, Delivered)",
        "Payment gateway integration with Razorpay webhooks & signature verification",
        "Cloudinary CDN integration for automated furniture asset delivery and optimization"
      ],
      tags: ["Golang", "Fiber", "PostgreSQL", "Redis", "Razorpay", "Cloudinary", "React", "REST APIs", "E-Commerce", "Tailwind CSS"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "todolist-pro",
      number: "06",
      title: "TodoList Pro — Task & Priority Manager",
      subtitle: "Productivity Board with Offline Local Storage",
      date: "Aug 18, 2025",
      dateTimestamp: "2025-08-18",
      projectType: "Frontend Only",
      isImportant: false,
      isGroupProject: false,
      category: "Productivity",
      image: "/assets/projects/project_todolist.png?v=5",
      stats: { framework: "React", storage: "LocalStorage Sync", performance: "60 FPS Fluid" },
      description: "A clean productivity app to create tasks, set priority levels, track daily completion progress, and keep items saved automatically.",
      architecture: "Constructed with React using robust reducer state management, LocalStorage synchronization, category tags, completion metrics, and zero external dependency runtime overhead.",
      tags: ["React", "JavaScript (ES6+)", "LocalStorage", "State Management", "Tailwind CSS"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "agoda-clone",
      number: "07",
      title: "Agoda Clone — Hotel Booking Engine",
      subtitle: "Travel Reservation Website with Date Pickers",
      date: "Jul 22, 2025",
      dateTimestamp: "2025-07-22",
      projectType: "Frontend Only",
      isImportant: false,
      isGroupProject: false,
      category: "Travel & Booking",
      image: "/assets/projects/project_agoda.png?v=5",
      stats: { framework: "React SPA", fidelity: "Pixel-Perfect Clone", components: "Modular UI" },
      description: "A responsive travel website clone where users can search hotel destinations, select check-in and check-out dates, and view resort room rates.",
      architecture: "Engineered in React with custom date-range selection components, responsive property card carousels, customer review rating filters, and high-performance image optimization.",
      tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Date Picker", "Responsive Design", "REST APIs"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    },
    {
      id: "kabsa-restaurant",
      number: "08",
      title: "Kabsa Restaurant — Online Food Ordering",
      subtitle: "Digital Menu & Dining Table Ordering Portal",
      date: "Apr 17, 2025",
      dateTimestamp: "2025-04-17",
      projectType: "Frontend Only",
      isImportant: false,
      isGroupProject: true,
      category: "Food & Hospitality",
      image: "/assets/projects/project_kabsa.png?v=5",
      stats: { framework: "React", domain: "Arabian Dining", orders: "Live Table Cart" },
      description: "A digital restaurant ordering system made for a Kabsa dining house, featuring full Arabic menus, table selectors, and live order bills.",
      architecture: "Built with React featuring interactive culinary menus, dish customization modal, live table cart summary, instant price calculation, and mobile-first dining layout.",
      groupDetails: "Collaborative Team Project: Multi-developer dining application with mobile-first menu workflows, kitchen order tracking, and table billing.",
      tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Cart State", "Mobile-First", "REST APIs", "Gitflow"],
      githubUrl: "https://github.com/Abhijith232373",
      liveUrl: "https://github.com/Abhijith232373"
    }
  ],

  experience: [
    {
      period: "Jun 2025 — Sep 2026",
      role: "Golang Backend Developer (Intern)",
      company: "Bridgeon Solutions",
      location: "Kochi, Kerala",
      highlights: [
        "Worked in an agile engineering team with sprint planning, daily stand-ups, and thorough peer code reviews.",
        "Designed and built secure, high-throughput REST and gRPC APIs using clean architecture with JWT authentication and role-based access control (RBAC).",
        "Engineered event-driven systems using Apache Kafka, PostgreSQL, and Redis sub-millisecond in-memory caching.",
        "Deployed containerized microservices and modular monoliths using Docker, CI/CD pipelines, and AWS (EC2, S3).",
        "Took full-stack features from relational database schema design to production, building responsive dashboards across the stack with React."
      ]
    }
  ],

  architecturePipeline: [
    { id: "client", label: "Client Browser", sub: "HTTP/3 & WebSockets", icon: "Monitor", latency: "0ms", type: "entry" },
    { id: "edge", label: "Cloudflare Edge", sub: "DDoS & WAF Filtering", icon: "Shield", latency: "12ms", type: "gateway" },
    { id: "gateway", label: "Kong API Gateway", sub: "Auth & Rate Limiting", icon: "Cpu", latency: "8ms", type: "gateway" },
    { id: "services", label: "Microservices Cluster", sub: "Go & Node.js Services", icon: "Server", latency: "15ms", type: "compute" },
    { id: "cache", label: "Redis Cluster", sub: "Sub-millisecond Cache", icon: "Zap", latency: "1.2ms", type: "storage" },
    { id: "db", label: "PostgreSQL Primary", sub: "Multi-AZ Sharded Cluster", icon: "Database", latency: "6ms", type: "storage" }
  ]
};
