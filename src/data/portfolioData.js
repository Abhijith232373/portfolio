export const portfolioData = {
  personal: {
    name: "Abhijith PR",
    handle: "@abhijithpr",
    title: "Fullstack Developer",
    tagline: "Crafting resilient fullstack systems, high-throughput cloud backends, and immersive interactive web experiences.",
    availability: "Available for high-impact roles & engineering projects",
    location: "Global / Remote",
    avatar: "/assets/bgme_cutout.png",
    email: "abhijithpr366@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    stats: [
      { label: "Production Uptime", value: "99.99%" },
      { label: "Microservices Architected", value: "24+" },
      { label: "Peak QPS Handled", value: "85K/s" },
      { label: "Years Engineering", value: "4+" }
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
      techPills: ["Three.js", "React Three Fiber", "Drei", "Tailwind CSS", "Kinetic 3D"],
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
            { name: "Role-Based Dashboards", tag: "Enterprise Portals" },
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
      description: "Immersive WebGL graphics, custom 3D model loading and rigging, spatial optics, and interactive physics.",
      sections: [
        {
          label: "3D Libraries",
          skills: [
            { name: "Three.js", tag: "WebGL Core Engine", highlight: true },
            { name: "React Three Fiber (R3F)", tag: "Declarative React 3D", highlight: true },
            { name: "Drei", tag: "R3F Visual Helpers" }
          ]
        },
        {
          label: "Scene & Asset Pipelines",
          skills: [
            { name: "3D Scenes, Lighting and Camera Control", tag: "Studio Optics" },
            { name: "GLTF / GLB Model Loading", tag: "Skeletal Rigging" }
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
      id: "aethernet-ops",
      title: "AetherNet Ops — Distributed Cloud Mesh",
      subtitle: "Multi-Region Infrastructure Orchestration & 3D Topology Visualizer",
      category: "Cloud/DevOps",
      image: "/assets/project_cloud.jpg",
      featured: true,
      stats: { latency: "18ms avg", nodes: "90 online", throughput: "1.4 TB/s" },
      description: "A production-grade distributed orchestration platform providing live 3D topology telemetry, automatic failover health monitoring, and sub-second cluster provisioning across multi-cloud regions.",
      architecture: "Go microservices + gRPC backend, WebGL 3D dynamic mesh visualizer, Redis stream broker, and automated K8s deployment operator.",
      tags: ["Go", "React", "Three.js", "Kubernetes", "gRPC", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "synapse-ai-studio",
      title: "Synapse AI — Streaming Agent Studio",
      subtitle: "Real-time Multi-Agent Collaborative Workspace with Live Canvas",
      category: "3D & AI",
      image: "/assets/avatar.jpg",
      featured: true,
      stats: { latency: "<50ms", concurrency: "10K users", accuracy: "99.2%" },
      description: "An agentic AI development studio that coordinates multi-turn autonomous reasoning agents with real-time WebSocket token streaming, vector memory retrieval, and dynamic DAG tool visualization.",
      architecture: "FastAPI + Python LLM orchestration, React + TypeScript canvas UI, Qdrant vector database, and PostgreSQL persistent store.",
      tags: ["Python", "FastAPI", "React", "TypeScript", "Vector DB", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "hyperscale-cache",
      title: "KryptonCache — In-Memory Raft Consensus Store",
      subtitle: "Low-Latency Distributed Key-Value Store with Strong Consistency",
      category: "Full-Stack",
      image: "/assets/project_cloud.jpg",
      featured: false,
      stats: { opsPerSec: "120K req/s", replicationLag: "<2ms", memoryEfficiency: "94%" },
      description: "A custom distributed key-value store built in Go utilizing the Raft consensus protocol for high-availability leader election, log replication, and zero-downtime partition tolerance.",
      architecture: "Custom TCP binary protocol parser, memory-mapped storage engine, snapshot compaction, and web dashboard for cluster metrics.",
      tags: ["Go", "Raft", "Distributed Systems", "TCP", "Prometheus", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "omnigraph-3d",
      title: "OmniGraph 3D — WebGL Graph Analytics",
      subtitle: "Interactive Force-Directed 3D Knowledge Graph Visualizer",
      category: "3D & AI",
      image: "/assets/avatar.jpg",
      featured: false,
      stats: { renderedNodes: "50,000+", fps: "60 FPS steady", shaderOps: "GPU Instanced" },
      description: "High-performance GPU-accelerated graph visualization engine capable of rendering and simulating 50,000+ interconnected entities in real-time with physics inertia and search clustering.",
      architecture: "Three.js custom instanced buffer geometry, Web Workers physics simulation, and GraphQL backend.",
      tags: ["Three.js", "WebGL", "TypeScript", "GraphQL", "Web Workers", "GLSL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Lead Full-Stack & Systems Engineer",
      company: "CloudScale Systems",
      location: "San Francisco / Remote",
      highlights: [
        "Architected and deployed high-throughput microservices handling 85M+ daily requests with 99.99% availability.",
        "Engineered real-time WebGL observability dashboard, cutting incident mean-time-to-resolution (MTTR) by 42%.",
        "Mentored a team of 8 engineers and spearheaded adoption of TypeScript, Go, and automated CI/CD pipelines."
      ]
    },
    {
      period: "2022 — 2023",
      role: "Senior Software Engineer",
      company: "Nexus Digital Labs",
      location: "Bangalore / Hybrid",
      highlights: [
        "Designed distributed caching layers with Redis and PostgreSQL, reducing p99 API latency from 280ms to 24ms.",
        "Built resilient event-driven data ingestion pipeline utilizing Apache Kafka processing 12,000 events/sec.",
        "Implemented end-to-end OAuth2/OIDC security architecture with zero critical vulnerabilities reported."
      ]
    },
    {
      period: "2020 — 2022",
      role: "Full-Stack Developer",
      company: "Quantum Interactive",
      location: "Remote",
      highlights: [
        "Developed modern customer-facing web platforms utilizing React, Next.js, and interactive 3D WebGL components.",
        "Integrated robust Stripe billing systems and RESTful API endpoints powering enterprise SaaS clients."
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
