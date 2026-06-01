import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  LockKeyhole,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

const projects = [
  {
    title: "EvalForge",
    subtitle: "LLM Evaluation Platform",
    status: "Flagship Project",
    problem:
      "AI builders need a clearer way to compare model responses beyond gut feeling.",
    built:
      "A full-stack evaluation workspace for scoring outputs, tracking latency, reviewing history, and turning model experiments into dashboard insights.",
    tech: ["React", "FastAPI", "Python", "SQL/PostgreSQL", "Dashboards", "API Integration"],
    metrics: ["AI Eval", "Latency", "Quality", "Cost"],
    impact: [
      "Compares LLM responses side by side with structured scoring.",
      "Turns experiment history into a recruiter-friendly analytics view.",
      "Shows full-stack thinking across UI, APIs, storage, and data review.",
    ],
    accent: "from-cyan-300 via-blue-400 to-purple-400",
    glow: "shadow-cyan-950/50",
    preview: "eval",
    featured: true,
    githubUrl: "https://github.com/DakaraiCodes/evalforge",
    demoUrl: "https://evalforge.vercel.app/",
    icon: BrainCircuit,
  },
  {
    title: "TeamBoard",
    subtitle: "Full-Stack Project Management App",
    status: "In Progress",
    problem:
      "Teams need a simple place to organize work without losing task context.",
    built:
      "A Trello/Jira-style app with authentication, protected routes, workspaces, project boards, tasks, CRUD flows, and dashboard views.",
    tech: ["React", "FastAPI", "SQLAlchemy", "JWT/Auth", "SQLite/PostgreSQL"],
    metrics: ["Auth", "CRUD", "Boards"],
    impact: [
      "Implements protected app flows and workspace-based organization.",
      "Models real product data across projects, tasks, and users.",
      "Demonstrates practical backend and frontend integration.",
    ],
    accent: "from-blue-300 via-cyan-300 to-emerald-300",
    glow: "shadow-blue-950/40",
    preview: "board",
    githubUrl: "#",
    demoUrl: "#",
    icon: ShieldCheck,
  },
  {
    title: "NeuraGraph",
    subtitle: "AI Knowledge Graph Builder",
    status: "Live MVP",
    problem:
      "Learning and planning get messy when ideas are disconnected across notes.",
    built:
      "An interactive graph interface for connecting concepts, mapping ideas, and exploring AI-assisted knowledge workflows.",
    tech: ["React", "JavaScript", "Graph UI", "AI Tools", "UX Design"],
    metrics: ["Graph UI", "AI Tools", "Concepts"],
    impact: [
      "Visualizes relationships between ideas instead of flat lists.",
      "Explores graph-based workflows for learning and planning.",
      "Shows product imagination beyond standard CRUD applications.",
    ],
    accent: "from-purple-300 via-fuchsia-400 to-cyan-300",
    glow: "shadow-purple-950/40",
    preview: "graph",
    githubUrl: "https://github.com/DakaraiCodes/neuragraph",
    demoUrl: "https://neuragraph-git-main-dakaraicodes-projects.vercel.app/dashboard",
    icon: Network,
  },
]

const skillGroups = [
  {
    category: "Frontend",
    summary: "Interfaces, dashboards, and responsive product experiences.",
    accent: "from-cyan-300 to-blue-400",
    icon: Code2,
    skills: ["React", "JavaScript", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend",
    summary: "API systems, server logic, and secure application flows.",
    accent: "from-blue-300 to-indigo-400",
    icon: ServerCog,
    skills: ["Python", "FastAPI", "REST APIs", "Authentication"],
  },
  {
    category: "Data Layer",
    summary: "Relational modeling, storage choices, and query-driven features.",
    accent: "from-emerald-300 to-cyan-400",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "SQLite", "Dashboards"],
  },
  {
    category: "AI & Workflow",
    summary: "Evaluation tooling, developer workflows, and practical AI systems.",
    accent: "from-purple-300 to-fuchsia-400",
    icon: BrainCircuit,
    skills: ["AI Evaluation", "Git", "GitHub", "Dashboards"],
  },
]

const orbitSkills = [
  { name: "React", icon: "react", angle: 8, ring: 166, color: "cyan" },
  { name: "JavaScript", icon: "javascript", angle: 48, ring: 128, color: "yellow" },
  { name: "Python", icon: "python", angle: 88, ring: 168, color: "blue" },
  { name: "FastAPI", icon: "fastapi", angle: 132, ring: 132, color: "emerald" },
  { name: "SQL", icon: "sql", angle: 176, ring: 166, color: "cyan" },
  { name: "PostgreSQL", icon: "postgresql", angle: 220, ring: 126, color: "blue" },
  { name: "GitHub", icon: "github", angle: 268, ring: 168, color: "purple" },
  { name: "Tailwind CSS", icon: "tailwind", angle: 312, ring: 130, color: "cyan" },
  { name: "Vite", icon: "vite", angle: 344, ring: 164, color: "purple" },
  { name: "React", label: "⚛️", angle: 0 },
  { name: "JavaScript", label: "JS", angle: 45 },
  { name: "Python", label: "PY", angle: 90 },
  { name: "FastAPI", label: "API", angle: 135 },
  { name: "SQL", label: "SQL", angle: 180 },
  { name: "GitHub", label: "GH", angle: 225 },
  { name: "Tailwind", label: "TW", angle: 270 },
  { name: "Vite", label: "⚡", angle: 315 },
]

const stackHighlights = [
  { label: "Full-stack apps", value: "React + FastAPI" },
  { label: "Data products", value: "SQL dashboards" },
  { label: "AI tooling", value: "Evaluation workflows" },
]

function TechIcon({ icon }) {
  const commonProps = {
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  }

  switch (icon) {
    case "react":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
          <ellipse cx="12" cy="12" rx="9" ry="3.7" />
          <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" />
        </svg>
      )
    case "javascript":
      return (
        <svg {...commonProps}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 8v6.2c0 1.2-.7 1.8-1.9 1.8H6" />
          <path d="M17 9.2c-.7-.7-1.6-1.1-2.7-1.1-1.3 0-2.3.7-2.3 1.8 0 2.5 5 .9 5 3.8 0 1.4-1.2 2.3-2.9 2.3-1.2 0-2.2-.4-3-1.2" />
        </svg>
      )
    case "python":
      return (
        <svg {...commonProps}>
          <path d="M12 3c3 0 4.5 1.2 4.5 3.5V10H9.2A3.2 3.2 0 0 0 6 13.2V15" />
          <path d="M12 21c-3 0-4.5-1.2-4.5-3.5V14h7.3a3.2 3.2 0 0 0 3.2-3.2V9" />
          <circle cx="10" cy="6.5" r=".8" fill="currentColor" stroke="none" />
          <circle cx="14" cy="17.5" r=".8" fill="currentColor" stroke="none" />
        </svg>
      )
    case "fastapi":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="m13 3.8-5 9h4l-1 7.4 5-9h-4l1-7.4Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case "sql":
      return (
        <svg {...commonProps}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      )
    case "postgresql":
      return (
        <svg {...commonProps}>
          <path d="M7 17c-1.5-1.6-2.3-3.6-2.3-5.9C4.7 6.9 7.6 4 12 4s7.3 2.9 7.3 7.1c0 2.3-.8 4.3-2.3 5.9" />
          <path d="M9 19c.8.6 1.8 1 3 1s2.2-.4 3-1" />
          <path d="M9.5 10.5h.01M14.5 10.5h.01" />
          <path d="M12 12v4l2-1" />
        </svg>
      )
    case "github":
      return <GitHubIcon size={28} />
    case "tailwind":
      return (
        <svg {...commonProps}>
          <path d="M3.5 12c2.2-4.5 5.3-5.2 9.2-2.1 2.2 1.7 3.8 1.6 5.1-.3.7-1 1.6-1.5 2.7-1.6-2.2 4.5-5.3 5.2-9.2 2.1-2.2-1.7-3.8-1.6-5.1.3-.7 1-1.6 1.5-2.7 1.6Z" />
          <path d="M3.5 17c2.2-4.5 5.3-5.2 9.2-2.1 2.2 1.7 3.8 1.6 5.1-.3.7-1 1.6-1.5 2.7-1.6-2.2 4.5-5.3 5.2-9.2 2.1-2.2-1.7-3.8-1.6-5.1.3-.7 1-1.6 1.5-2.7 1.6Z" />
        </svg>
      )
    case "vite":
      return (
        <svg {...commonProps}>
          <path d="M4 5.5 12 20l8-14.5-6.7 1.2L12 4 10.7 6.7 4 5.5Z" />
          <path d="m13.2 7.2-4 5.5h3.1l-1.5 4.1 4.3-5.6h-3l1.1-4Z" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return <Code2 className="h-7 w-7" aria-hidden="true" />
  }
}

const containerClass = "max-w-6xl mx-auto px-6 sm:px-8"
const sectionClass = `${containerClass} py-20 sm:py-24`
const cardClass =
  "rounded-xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/20"
const focusClass =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
const primaryButtonClass = `inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-300 ${focusClass}`
const secondaryButtonClass = `inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200 ${focusClass}`

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative max-w-6xl mx-auto px-8 pt-20 pb-32">
      {/* Background glow effects */}
      <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        {/* Left side */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
            Open to Software Engineering Opportunities
          </div>

          <p className="text-cyan-400 font-medium mb-4">
            Full-Stack Developer • AI Tools Builder • CS Graduate
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            I build software that turns ideas into{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              real products.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
            I'm Dakarai Mitcham, a Computer Science Graduate focused on building
            full-stack applications, AI evaluation tools, dashboards, and
            practical software systems using React, FastAPI, Python, SQL, and
            modern web technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 hover:bg-cyan-300 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Developer Snapshot</p>
            </div>

            <div className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300">
              Active
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Currently Building</p>
              <p className="mt-1 font-semibold text-white">
                EvalForge, TeamBoard, NeuraGraph
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Main Stack</p>
              <p className="mt-1 font-semibold text-white">
                React • FastAPI • Python • SQL
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm text-slate-400">Focus Area</p>
              <p className="mt-1 font-semibold text-white">
                Full-stack apps, AI tools, dashboards
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl bg-cyan-400/10 p-4 text-center">
                <p className="text-2xl font-black text-cyan-300">3</p>
                <p className="text-xs text-slate-400">Projects</p>
              </div>

              <div className="rounded-2xl bg-purple-400/10 p-4 text-center">
                <p className="text-2xl font-black text-purple-300">AI</p>
                <p className="text-xs text-slate-400">Focus</p>
              </div>

              <div className="rounded-2xl bg-blue-400/10 p-4 text-center">
                <p className="text-2xl font-black text-blue-300">SWE</p>
                <p className="text-xs text-slate-400">Track</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-start">
        <div>
          <p className="text-cyan-400 font-medium mb-3">About Me</p>
          <h2 className="text-4xl font-bold leading-tight">
            I’m not just trying to learn code — I’m learning how to build things
            that feel useful, polished, and real.
          </h2>
        </div>

        <div className="space-y-5 text-slate-300 leading-relaxed">
          <p>
            I’m a Computer Science Graduate from New Jersey who enjoys turning rough
            ideas into working software. My focus is full-stack development, AI
            tooling, dashboards, and products that help people organize information,
            make decisions, or work more efficiently.
          </p>

          <p>
            My projects reflect the kind of engineer I’m becoming: someone who can
            think through product ideas, build user interfaces, connect backend APIs,
            debug real issues, and keep improving the experience until it feels
            professional.
          </p>

          <p>
            Right now, I’m building a portfolio around practical software:
            EvalForge for LLM evaluation, TeamBoard for project management, and
            NeuraGraph for AI-powered knowledge mapping.
          </p>

          <div className="grid gap-4 sm:grid-cols-3 pt-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-2xl font-bold text-white">Builder</p>
              <p className="mt-1 text-sm text-slate-400">
                I learn by creating real projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-2xl font-bold text-white">Problem Solver</p>
              <p className="mt-1 text-sm text-slate-400">
                I like debugging and improving systems.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <p className="text-2xl font-bold text-white">AI Curious</p>
              <p className="mt-1 text-sm text-slate-400">
                I’m interested in tools around LLMs and data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section id="resume" className={sectionClass}>
      <div className={`${cardClass} border-cyan-400/30 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 md:p-10`}>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Resume
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want the full breakdown?
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          View my resume for more details about my education, technical
          projects, skills, and software engineering experience.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/Resume.pdf" className={primaryButtonClass}>
            View Resume
          </a>

          <a href="mailto:dakaraimitcham@gmail.com" className={secondaryButtonClass}>
            Email Me
          </a>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.17V23h-4V8Z" />
    </svg>
  )
}

function EmailIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}


function ContactSection() {
  return (
    <section id="contact" className={sectionClass}>
      <SectionHeader eyebrow="Contact" title="Let's connect">
        I'm open to software engineering, full-stack development, and AI-focused
        engineering opportunities.
      </SectionHeader>

      <div className="flex flex-wrap gap-4">
        <a 
          href="mailto:dakaraimitcham@gmail.com" 
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-6 py-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition"
        >
          <EmailIcon size = {18} />
          <span>Email</span>
        </a>

        <a
          href="https://github.com/DakaraiCodes"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-6 py-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition"
        >
          <GitHubIcon size={18} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/dakarai-mitcham-152876296/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-6 py-3 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition"
        >
          <LinkedInIcon size={18} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.99c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function ProjectMiniPreview({ type }) {
  if (type === "board") {
    return (
      <div className="relative mt-6 min-h-48 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/80 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="h-2 w-24 rounded-full bg-cyan-300/60"></div>
          <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-[10px] font-semibold text-emerald-200">
            AUTH
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["Plan", "Build", "Review"].map((column, columnIndex) => (
            <div key={column} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {column}
              </p>
              {[0, 1, 2].map((item) => (
                <div
                  key={item}
                  className={`mb-2 h-8 rounded-xl border border-slate-700/60 ${
                    columnIndex === 1 && item === 0
                      ? "bg-cyan-300/20"
                      : "bg-slate-800/80"
                  }`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === "graph") {
    const nodes = [
      "left-[18%] top-[45%]",
      "left-[44%] top-[24%]",
      "left-[60%] top-[58%]",
      "left-[78%] top-[34%]",
      "left-[36%] top-[74%]",
    ]

    return (
      <div className="relative mt-6 min-h-48 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/80 p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_58%)]"></div>
        <svg className="absolute inset-0 h-full w-full text-purple-300/30" aria-hidden="true">
          <line x1="18%" y1="45%" x2="44%" y2="24%" stroke="currentColor" strokeWidth="1" />
          <line x1="44%" y1="24%" x2="78%" y2="34%" stroke="currentColor" strokeWidth="1" />
          <line x1="44%" y1="24%" x2="60%" y2="58%" stroke="currentColor" strokeWidth="1" />
          <line x1="18%" y1="45%" x2="36%" y2="74%" stroke="currentColor" strokeWidth="1" />
          <line x1="36%" y1="74%" x2="60%" y2="58%" stroke="currentColor" strokeWidth="1" />
        </svg>

        {nodes.map((position, index) => (
          <div
            key={position}
            className={`absolute ${position} flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-purple-300/30 bg-slate-950 text-xs font-black text-purple-200 shadow-lg shadow-purple-950/40`}
          >
            {index === 0 ? "AI" : `N${index}`}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative mt-6 min-h-56 overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-950/80 p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.16),transparent_38%)]"></div>

      <div className="relative grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          {["Model A", "Model B", "Model C"].map((model, index) => (
            <div key={model} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-300">{model}</p>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]"></span>
              </div>
              <div className="h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400"
                  style={{ width: `${82 - index * 12}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
          <div className="mb-3 flex items-center gap-2 text-cyan-200">
            <Activity className="h-4 w-4" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Eval Run
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Quality", "Latency", "Cost", "History"].map((metric, index) => (
              <div key={metric} className="rounded-xl border border-slate-700/70 bg-slate-950/70 p-3">
                <p className="text-[10px] text-slate-500">{metric}</p>
                <p className="mt-1 text-base font-black text-white">
                  {index === 0 ? "92" : index === 1 ? "1.2s" : index === 2 ? "$" : "24"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-8 py-24">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute right-0 top-52 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="relative mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-cyan-400 font-medium mb-3 uppercase tracking-[0.3em]">
            Project Lab
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Product-focused{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              builds
            </span>
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 leading-relaxed lg:ml-auto">
          A case-study wall of full-stack and AI-focused projects built around
          practical product problems, polished interfaces, APIs, data, and
          recruiter-readable outcomes.
        </p>
      </div>

      <div className="relative grid gap-6 lg:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon

          return (
          <article
            key={project.title}
            className={`group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-2xl ${project.glow} transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 ${project.featured ? "lg:col-span-2" : ""}`}
          >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent}`}></div>
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20"></div>

            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                {project.status}
              </span>

              <span className="hidden">
                ↗
              </span>
            </div>

            <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${project.accent} p-[1px]`}>
              <div className="rounded-2xl bg-slate-950 p-3 text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <h3 className={`${project.featured ? "text-3xl sm:text-4xl" : "text-2xl"} font-black tracking-tight text-white`}>
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-semibold text-cyan-300">
              {project.subtitle}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Problem
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.problem}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  What I built
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {project.built}
                </p>
              </div>
            </div>

            <ProjectMiniPreview type={project.preview} />

            <div className="mt-5 grid gap-3">
              {/* Impact bullets stay short so recruiters can scan the engineering value fast. */}
              {project.impact.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-300"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm font-medium">
              <a 
                href={project.githubUrl}
                className="inline-flex items-center gap-2 text-cyan-300 transition hover:text-cyan-200"
                aria-label={`${project.title} GitHub repository`}
              >
                <GitHubIcon size={18} />
                <span>Code</span>
              </a>
              <a 
                href={project.demoUrl}
                className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
                aria-label={`${project.title} live demo`}
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  )
}

function TechOrbit() {
  const activeOrbitSkills = orbitSkills.filter((skill) => skill.ring && skill.icon)

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div className="absolute -left-10 top-8 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/80 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Stack Radar
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-white">
              Portfolio Stack
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]"></span>
            Online
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square max-w-[420px] items-center justify-center">
          {/* Layered radar rings keep the visual memorable without adding a 3D dependency. */}
          <div className="tech-radar-grid absolute inset-0 rounded-full"></div>
          <div className="tech-radar-sweep absolute inset-0 rounded-full"></div>
          <div className="absolute inset-[12%] rounded-full border border-cyan-300/15"></div>
          <div className="absolute inset-[25%] rounded-full border border-blue-300/15"></div>
          <div className="absolute inset-[38%] rounded-full border border-purple-300/20"></div>

          <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/90 text-center shadow-[0_0_50px_rgba(34,211,238,0.18)]">
            <Sparkles className="mb-2 h-6 w-6 text-cyan-300" aria-hidden="true" />
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Core
            </p>
            <p className="mt-1 text-xl font-black text-white">SWE + AI</p>
          </div>

          {activeOrbitSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.angle}`}
              className="absolute left-1/2 top-1/2 z-20"
              style={{
                transform: `rotate(${skill.angle}deg) translateX(${skill.ring}px) rotate(-${skill.angle}deg)`,
              }}
            >
              <div
                className={`tech-node tech-node-${skill.color} group flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border bg-slate-950/95 text-xs font-black shadow-lg transition duration-300 hover:scale-110`}
              >
                <TechIcon icon={skill.icon} />
                <span className="pointer-events-none absolute top-16 z-30 whitespace-nowrap rounded-lg border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-200 opacity-0 shadow-xl transition group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {stackHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-slate-100">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="relative max-w-6xl mx-auto px-8 py-32 overflow-visible">
      <div className="absolute left-1/2 top-24 h-px w-screen -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"></div>

      <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-cyan-400 font-medium mb-3 uppercase tracking-[0.3em]">
            Tech Stack
          </p>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Developer{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              command center
            </span>
          </h2>
        </div>

        <p className="max-w-2xl text-slate-300 leading-relaxed lg:ml-auto">
          A practical stack for shipping full-stack applications, AI evaluation
          tools, recruiter-ready dashboards, secure APIs, and polished web
          experiences.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <TechOrbit />

        <div className="grid gap-4">
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <article
                key={group.category}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900/90"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br ${group.accent} p-[1px]`}>
                    <div className="rounded-2xl bg-slate-950 p-3 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {group.category}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {group.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-700/70 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300 transition group-hover:border-cyan-300/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <GitBranch className="mb-3 h-5 w-5 text-cyan-300" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Versioned workflow</p>
              <p className="mt-1 text-sm text-slate-400">Git and GitHub for clean iteration.</p>
            </div>

            <div className="rounded-2xl border border-purple-300/20 bg-purple-300/10 p-4">
              <LockKeyhole className="mb-3 h-5 w-5 text-purple-300" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Auth-aware builds</p>
              <p className="mt-1 text-sm text-slate-400">Protected routes and secure app flows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-[#050816] bg-grid text-white overflow-hidden">
      <nav className={`${containerClass} flex items-center justify-between py-6`}>
        <h1 className="text-xl font-bold tracking-tight text-white">
          Dakarai Mitcham
        </h1>

        <div className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          {["projects", "skills", "resume", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition hover:text-white ${focusClass}`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500 sm:px-8">
        &copy; 2026 Dakarai Mitcham. Built with React, Vite, and Tailwind CSS.
      </footer>
    </main>
  )
}

export default App
