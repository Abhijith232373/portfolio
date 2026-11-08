import React from 'react';

// Golang Official Stylized Logo
export function GolangIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none">
      <path d="M12 64c0-28.7 23.3-52 52-52 20.3 0 38 11.6 46.8 28.6l-18.7 8.2C86.7 37.6 76.1 31 64 31c-18.2 0-33 14.8-33 33s14.8 33 33 33c11.8 0 22.1-6.2 27.9-15.5H62v-18h49v18.7C101.8 98.4 84.4 116 64 116 35.3 116 12 92.7 12 64z" fill="#00ACD7"/>
      <path d="M116 64c0 3.3-.4 6.5-1.1 9.6h11.4c1.1-3.1 1.7-6.3 1.7-9.6s-.6-6.5-1.7-9.6h-11.4c.7 3.1 1.1 6.3 1.1 9.6z" fill="#00ACD7"/>
    </svg>
  );
}

// SQL / Database Icon
export function SqlIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#38bdf8"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#38bdf8"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#38bdf8"/>
    </svg>
  );
}

// Fiber Framework
export function FiberIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#00E5FF"/>
    </svg>
  );
}

// Gin Framework
export function GinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 22h8m-4-7v7m-7-14l7 7 7-7M4 8l8 8 8-8" stroke="#00ADD8"/>
      <circle cx="12" cy="4" r="1.5" fill="#00ADD8"/>
    </svg>
  );
}

// REST APIs
export function RestApiIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="6" width="20" height="12" rx="3" stroke="#34d399"/>
      <path d="M6 12h4m-2-2v4m5-2h5" stroke="#34d399"/>
    </svg>
  );
}

// gRPC Protocol Buffers
export function GrpcIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" stroke="#244c5a" fill="#244c5a" fillOpacity="0.3"/>
      <path d="M12 6l5 3v6l-5 3-5-3V9l5-3z" stroke="#38bdf8"/>
      <circle cx="12" cy="12" r="2" fill="#38bdf8"/>
    </svg>
  );
}

// WebSocket Bidirectional
export function WebSocketIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 3h5v5m0-5L14 10M8 21H3v-5m0 5l7-7" stroke="#fbbf24"/>
      <circle cx="12" cy="12" r="3" stroke="#f59e0b"/>
    </svg>
  );
}

// PostgreSQL Official Style
export function PostgresIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8c-.8.8-1.9 1.2-3.1 1.2-1.5 0-2.8-.7-3.6-1.8l1.3-1.3c.5.7 1.3 1.1 2.3 1.1.7 0 1.4-.2 1.9-.7.5-.5.8-1.1.8-1.8 0-.6-.2-1.2-.7-1.6-.4-.4-1.1-.7-2.1-1.1-1.4-.5-2.4-1.1-3-1.8-.6-.7-.9-1.6-.9-2.6 0-1.2.5-2.3 1.4-3.1.9-.8 2.1-1.3 3.5-1.3 1.3 0 2.4.4 3.3 1.2l-1.3 1.4c-.6-.5-1.3-.8-2-.8-.7 0-1.3.2-1.8.6-.4.4-.7.9-.7 1.5 0 .5.2 1 .6 1.4.4.4 1.1.7 2 1 1.5.5 2.5 1.1 3.2 1.8.7.7 1 1.7 1 2.8 0 1.3-.5 2.4-1.7 3.2z" fill="#336791"/>
    </svg>
  );
}

// Redis In-Memory Cache
export function RedisIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2L12 2z" fill="#DC382D"/>
      <path d="M12 6l5 2.9v5.8L12 17.6l-5-2.9V8.9L12 6z" fill="#FFFFFF" fillOpacity="0.2"/>
    </svg>
  );
}

// GORM / sqlc
export function GormIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="#00ADD8"/>
      <circle cx="8" cy="6" r="2" fill="#00ADD8"/>
      <circle cx="16" cy="12" r="2" fill="#00ADD8"/>
      <circle cx="10" cy="18" r="2" fill="#00ADD8"/>
    </svg>
  );
}

// JWT Token
export function JwtIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 8l10 6 10-6-10-6z" fill="#D63AFF"/>
      <path d="M2 12l10 6 10-6" stroke="#00F0FF" strokeWidth="2"/>
      <path d="M2 16l10 6 10-6" stroke="#D63AFF" strokeWidth="2"/>
    </svg>
  );
}

// Security / RBAC / Middleware
export function SecurityIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#10b981"/>
      <path d="M9 12l2 2 4-4" stroke="#10b981"/>
    </svg>
  );
}

// Clean Architecture / Modular Monolith / Microservices
export function ArchitectureIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" stroke="#f59e0b"/>
      <circle cx="12" cy="12" r="6" stroke="#fbbf24"/>
      <circle cx="12" cy="12" r="2" fill="#f59e0b"/>
    </svg>
  );
}

// Apache Kafka Event Streaming
export function KafkaIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
      <circle cx="19" cy="6" r="2.5" fill="#FFFFFF"/>
      <circle cx="19" cy="18" r="2.5" fill="#FFFFFF"/>
      <circle cx="5" cy="12" r="2.5" fill="#FFFFFF"/>
      <path d="M12 12L19 6M12 12l7 6M12 12H5" stroke="#FFFFFF" strokeWidth="2"/>
    </svg>
  );
}

// Cron Jobs / Scheduler
export function CronIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" stroke="#38bdf8"/>
      <polyline points="12 6 12 12 16 14" stroke="#38bdf8"/>
    </svg>
  );
}

// Razorpay Payment
export function RazorpayIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M15 3L8 21h4l7-18h-4z" fill="#0C2340"/>
      <path d="M12 3L5 21h4l7-18h-4z" fill="#02042B"/>
      <path d="M15 3L6 14h6l-3 7 12-11h-6z" fill="#0C2340"/>
      <path d="M15 3L5 15h6l-2 6 11-12h-6z" fill="#3395FF"/>
    </svg>
  );
}

// Cloudinary
export function CloudinaryIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#3448C5"/>
    </svg>
  );
}

// SendGrid
export function SendGridIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#1A82E2"/>
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#009DD9"/>
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="#009DD9"/>
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="#1A82E2"/>
    </svg>
  );
}

// HTML5 Official Badge
export function Html5Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#E34F26"/>
      <path d="M12 3.8v16.3l5.7-1.4 1.5-14.9H12z" fill="#EF652A"/>
      <path d="M12 7.7H7.7l.3 3.3h4V7.7zm0 6.6H9.8l.2 2.2 2 .5V19l-3.8-1-.3-3.6H12v-.1z" fill="#ECECEC"/>
      <path d="M12 7.7v3.3h4l-.4 4.3-3.6 1V19l3.8-1 .5-5.3h-4.3z" fill="#FFFFFF"/>
    </svg>
  );
}

// CSS3 Official Badge
export function Css3Icon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.8 18.2L12 22l7.2-1.8L21 2H3z" fill="#1572B6"/>
      <path d="M12 3.8v16.3l5.7-1.4 1.5-14.9H12z" fill="#33A9DC"/>
      <path d="M12 7.7H7.7l.3 3.3h4V7.7zm0 6.6H9.8l.2 2.2 2 .5V19l-3.8-1-.3-3.6H12v-.1z" fill="#ECECEC"/>
      <path d="M12 7.7v3.3h4l-.4 4.3-3.6 1V19l3.8-1 .5-5.3h-4.3z" fill="#FFFFFF"/>
    </svg>
  );
}

// JavaScript Official Badge
export function JsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
      <path d="M6 18c0-1.8.8-2.8 2.4-2.8.9 0 1.6.4 2 1l-1 1c-.3-.4-.6-.6-1-.6-.7 0-1.1.4-1.1 1.4 0 1.5.8 1.8 1.8 2.2 1.5.6 2.4 1.4 2.4 2.9 0 1.9-1.4 2.9-3.2 2.9-1.6 0-2.6-.7-3.1-1.8l1.1-.9c.3.7.8 1.1 1.8 1.1.9 0 1.6-.4 1.6-1.3 0-1-.7-1.4-1.6-1.8-1.5-.7-2.1-1.3-2.1-3.2zm8.5-2.6h1.8v7.8c0 1.8.8 2.3 2.1 2.3.7 0 1.3-.1 1.7-.3v-1.6c-.3.1-.7.2-1.1.2-.6 0-.9-.3-.9-1.1V15.4z" fill="#000000"/>
    </svg>
  );
}

// React Official Cyan Atom
export function ReactIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    </svg>
  );
}

// Tailwind CSS
export function TailwindIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.5-2 1 .2 1.7 1 2.5 1.8C14.3 12 15.8 13.5 19 13.5c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.2-1.7-1-2.5-1.8C16.7 7.5 15.2 6 12 6zm-7 6.5c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.5-2 1 .2 1.7 1 2.5 1.8 1.3 1.2 2.8 2.7 6 2.7 3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.2-1.7-1-2.5-1.8-1.3-1.2-2.8-2.7-6-2.7z" fill="#06B6D4"/>
    </svg>
  );
}

// Flutter Mobile
export function FlutterIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M14.5 2L3 13.5l3.5 3.5L18 5.5h-3.5z" fill="#02569B"/>
      <path d="M14.5 9.5L8.2 15.8l3.6 3.6L18 13h-3.5z" fill="#0175C2"/>
      <path d="M11.8 19.4L14.5 22H18l-4.4-4.4-1.8 1.8z" fill="#29B6F6"/>
    </svg>
  );
}

// Three.js Official Polyhedron
export function ThreeJsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#FFFFFF"/>
      <path d="M2 17l10 5 10-5" stroke="#FFFFFF"/>
      <path d="M2 12l10 5 10-5" stroke="#FFFFFF"/>
      <line x1="12" y1="22" x2="12" y2="12" stroke="#FFFFFF"/>
    </svg>
  );
}

// AWS Cloud
export function AwsIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M18.8 15.6c-2.3 1.7-5.5 2.6-8.4 2.6-4.1 0-7.8-1.5-10.6-4.1-.2-.2-.2-.5 0-.7.3-.2.6-.1.8.1 2.6 2.4 6 3.8 9.8 3.8 2.6 0 5.5-.8 7.7-2.3.4-.3.9.1.7.6z" fill="#FF9900"/>
      <path d="M19.7 14.3c-.3-.4-1.9-.2-2.8-.1-.3 0-.4-.3-.2-.5 1.3-1 3.5-.7 3.8-.4.3.4-.1 2.6-1.3 3.7-.3.2-.5.1-.4-.2.4-.8.9-2.1.9-2.5z" fill="#FF9900"/>
    </svg>
  );
}

// Docker Whale
export function DockerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="7" y="9" width="2" height="2" fill="#2496ED"/>
      <rect x="10" y="9" width="2" height="2" fill="#2496ED"/>
      <rect x="13" y="9" width="2" height="2" fill="#2496ED"/>
      <rect x="10" y="6" width="2" height="2" fill="#2496ED"/>
      <rect x="7" y="6" width="2" height="2" fill="#2496ED"/>
      <path d="M22 13.5c-.7 0-1.8.3-2.5.9-.6-.4-1.5-.6-2.5-.6-1.5 0-3 1-3.6 2.4H3.8C3.3 15.2 2.7 14 2 14c-.6 0-1 .4-1 1 0 3.9 3.1 7 7 7 5.2 0 9.7-3.1 11.5-6.5.9.1 1.7-.4 2.2-.8.3-.3.3-.8.3-1.2h0z" fill="#2496ED"/>
    </svg>
  );
}

// Kubernetes Ship Helm
export function KubernetesIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l7.8 4.5v9L12 20l-7.8-4.5v-9L12 2z" stroke="#326CE5" strokeWidth="1.5" fill="#326CE5" fillOpacity="0.2"/>
      <circle cx="12" cy="11" r="3" stroke="#326CE5" strokeWidth="1.5"/>
      <path d="M12 2v6m0 6v6M3 7l5 3m8 4.5l5 3M21 7l-5 3m-8 4.5l-5 3" stroke="#326CE5" strokeWidth="1.5"/>
    </svg>
  );
}

// Git Diamond
export function GitIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.7l-8.3-8.3c-.8-.8-2.2-.8-3 0L8.5 4.2l3.4 3.4c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.3 3.3c.8-.3 1.8-.1 2.4.5.9.9.9 2.3 0 3.2s-2.3.9-3.2 0c-.7-.7-.9-1.7-.5-2.6l-3-3v5.6c.6.4 1 1 1 1.8 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.8.4-1.5 1-1.8V9.3c-.6-.4-1-1-1-1.8 0-.9.5-1.6 1.2-2L7.3 2.9 2.4 7.8c-.8.8-.8 2.2 0 3l8.3 8.3c.8.8 2.2.8 3 0l7.9-7.9c.8-.8.8-2.2 0-3.1z" fill="#F05032"/>
    </svg>
  );
}

// GitHub Octocat
export function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#FFFFFF"/>
    </svg>
  );
}

// Postman Orange Astronaut
export function PostmanIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37"/>
      <path d="M7 13l4-4 2 2-4 4-2-2zm6-4l4-2-2 4-2-2z" fill="#FFFFFF"/>
    </svg>
  );
}

// Apidog
export function ApidogIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#3B82F6"/>
      <path d="M7 8h10M7 12h7M7 16h4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// AI & Vibe Coder Icons
export function VibeCoderIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" stroke="#00f0ff" fill="#00f0ff" fillOpacity="0.2"/>
    </svg>
  );
}

export function AiDevIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="#a78bfa"/>
      <circle cx="9" cy="9" r="1.5" fill="#a78bfa"/>
      <circle cx="15" cy="9" r="1.5" fill="#a78bfa"/>
      <path d="M8 15h8" stroke="#a78bfa"/>
    </svg>
  );
}

export function PromptEngineerIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4 17 10 11 4 5" stroke="#f59e0b"/>
      <line x1="12" y1="19" x2="20" y2="19" stroke="#f59e0b"/>
    </svg>
  );
}

export function PairProgIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="#34d399"/>
      <circle cx="9" cy="7" r="4" stroke="#34d399"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="#34d399"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#34d399"/>
    </svg>
  );
}

// Helper to look up tech logo by name
export function TechLogo({ name, className = "w-5 h-5" }) {
  const n = (name || "").toLowerCase().trim();

  if (n.includes("vibe")) return <VibeCoderIcon className={className} />;
  if (n.includes("prompt")) return <PromptEngineerIcon className={className} />;
  if (n.includes("pair")) return <PairProgIcon className={className} />;
  if (n.includes("ai-assisted") || n.includes("ai assisted")) return <AiDevIcon className={className} />;
  if (n.includes("golang") || n === "go") return <GolangIcon className={className} />;
  if (n === "sql") return <SqlIcon className={className} />;
  if (n.includes("fiber")) return <FiberIcon className={className} />;
  if (n.includes("gin")) return <GinIcon className={className} />;
  if (n.includes("rest")) return <RestApiIcon className={className} />;
  if (n.includes("grpc")) return <GrpcIcon className={className} />;
  if (n.includes("websocket")) return <WebSocketIcon className={className} />;
  if (n.includes("postgres")) return <PostgresIcon className={className} />;
  if (n.includes("redis")) return <RedisIcon className={className} />;
  if (n.includes("gorm") || n.includes("sqlc")) return <GormIcon className={className} />;
  if (n.includes("jwt")) return <JwtIcon className={className} />;
  if (n.includes("rbac") || n.includes("security") || n.includes("otp") || n.includes("middleware")) return <SecurityIcon className={className} />;
  if (n.includes("architecture") || n.includes("monolith") || n.includes("microservice") || n.includes("event-driven")) return <ArchitectureIcon className={className} />;
  if (n.includes("kafka")) return <KafkaIcon className={className} />;
  if (n.includes("cron")) return <CronIcon className={className} />;
  if (n.includes("razorpay")) return <RazorpayIcon className={className} />;
  if (n.includes("cloudinary")) return <CloudinaryIcon className={className} />;
  if (n.includes("sendgrid")) return <SendGridIcon className={className} />;
  if (n.includes("html")) return <Html5Icon className={className} />;
  if (n.includes("css") && !n.includes("tailwind")) return <Css3Icon className={className} />;
  if (n.includes("javascript")) return <JsIcon className={className} />;
  if (n.includes("react") && !n.includes("fiber")) return <ReactIcon className={className} />;
  if (n.includes("tailwind")) return <TailwindIcon className={className} />;
  if (n.includes("flutter")) return <FlutterIcon className={className} />;
  if (n.includes("three.js") || n.includes("r3f") || n.includes("three")) return <ThreeJsIcon className={className} />;
  if (n.includes("aws")) return <AwsIcon className={className} />;
  if (n.includes("docker")) return <DockerIcon className={className} />;
  if (n.includes("kubernetes")) return <KubernetesIcon className={className} />;
  if (n === "git") return <GitIcon className={className} />;
  if (n.includes("github")) return <GithubIcon className={className} />;
  if (n.includes("postman")) return <PostmanIcon className={className} />;
  if (n.includes("apidog")) return <ApidogIcon className={className} />;

  // Default fallback badge
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" stroke="currentColor"/>
      <path d="M12 8v8m-4-4h8" stroke="currentColor"/>
    </svg>
  );
}

