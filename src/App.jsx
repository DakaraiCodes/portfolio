import {
  BarChart3,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FileText,
  GitBranch,
  LockKeyhole,
  Mail,
  Moon,
  Network,
  Play,
  Search,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react"

const projects = [
  {
    title: "EvalForge",
    label: "AI Evaluation Platform",
    description:
      "LLM evaluation platform to compare model responses, score outputs, track latency, cost, and quality over time.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL"],
    accent: "violet",
    preview: "dashboard",
    icon: BrainCircuit,
    githubUrl: "https://github.com/DakaraiCodes/evalforge",
    demoUrl: "https://evalforge.vercel.app/",
  },
  {
    title: "TeamBoard",
    label: "Project Management App",
    description:
      "Trello/Jira-style app with auth, workspaces, projects, tasks, and real-time dashboard-style updates.",
    tech: ["React", "FastAPI", "SQLAlchemy", "JWT"],
    accent: "cyan",
    preview: "board",
    icon: ShieldCheck,
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "NeuraGraph",
    label: "AI Knowledge Graph",
    description:
      "Interactive knowledge graph builder that organizes ideas, concepts, and relationships.",
    tech: ["React", "Python", "Graph UI"],
    accent: "purple",
    preview: "graph",
    icon: Network,
    githubUrl: "https://github.com/DakaraiCodes/neuragraph",
    demoUrl: "https://neuragraph-git-main-dakaraicodes-projects.vercel.app/dashboard",
  },
]

const stack = [
  { name: "React", icon: "react", color: "text-cyan-300" },
  { name: "JavaScript", icon: "js", color: "text-yellow-300" },
  { name: "Python", icon: "python", color: "text-blue-300" },
  { name: "FastAPI", icon: "fastapi", color: "text-emerald-300" },
  { name: "SQL", icon: "database", color: "text-blue-400" },
  { name: "PostgreSQL", icon: "postgres", color: "text-sky-300" },
  { name: "SQLite", icon: "sqlite", color: "text-sky-300" },
  { name: "Tailwind CSS", icon: "tailwind", color: "text-cyan-300" },
  { name: "Git", icon: "git", color: "text-orange-400" },
  { name: "GitHub", icon: "github", color: "text-slate-100" },
  { name: "Vite", icon: "vite", color: "text-yellow-300" },
  { name: "REST APIs", icon: "braces", color: "text-cyan-300" },
  { name: "AI Evaluation", icon: "brain", color: "text-purple-300" },
  { name: "Dashboards", icon: "chart", color: "text-blue-300" },
  { name: "Authentication", icon: "lock", color: "text-slate-300" },
]

const navItems = ["Home", "Projects", "Skills", "Resume", "Contact"]

const containerClass = "mx-auto max-w-[1240px] px-5 sm:px-6"

// Design note: this controls how sharp the UI feels. The target mockup uses
// firm panels, not pillowy cards, so most surfaces use rounded-md/lg.
const panelClass =
  "rounded-lg border border-slate-800/90 bg-slate-950/70 shadow-[0_18px_60px_rgba(0,0,0,0.24)]"

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 text-sky-400">
        <span className="absolute left-0 top-1 text-3xl font-black leading-none">D</span>
        <span className="absolute right-0 top-1 text-3xl font-black leading-none">M</span>
      </div>
      <div>
        <p className="text-lg font-bold leading-none text-white">Dakarai Mitcham</p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
          Software Engineer
        </p>
      </div>
    </div>
  )
}

function SocialIconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="text-slate-400 transition hover:-translate-y-0.5 hover:text-sky-400"
    >
      {children}
    </a>
  )
}

function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.05.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.15 10.15 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
      />
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M5.25 8.86H2.4v12.01h2.85V8.86ZM5.5 5.14A1.75 1.75 0 1 0 2 5.14a1.75 1.75 0 0 0 3.5 0ZM21.6 14.27c0-3.2-1.7-5.26-4.36-5.26-1.76 0-2.86.94-3.32 1.84h-.05V8.86h-2.73v12.01h2.85v-6.16c0-1.62.87-2.68 2.25-2.68 1.31 0 2.02.93 2.02 2.58v6.26h2.85v-6.6h.49Z" />
    </svg>
  )
}

function CodeEditor() {
  const lines = [
    "const Developer = () => {",
    "  const skills = [",
    '    "React",',
    '    "JavaScript",',
    '    "Python",',
    '    "FastAPI",',
    '    "SQL",',
    '    "AI Tools"',
    "  ];",
    "",
    "  return (",
    '    <div className="developer">',
    "      <h1>Building scalable solutions</h1>",
    "      <p>Clean code. Real impact.</p>",
    "    </div>",
    "  );",
    "};",
  ]

  return (
    <div className={`${panelClass} overflow-hidden`}>
      <div className="grid grid-cols-[1fr_44px]">
        <div>
          <div className="flex items-center border-b border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="flex items-center gap-2 border-x border-slate-800 px-4 py-3">
              <Code2 className="h-4 w-4 text-sky-400" aria-hidden="true" />
              <span className="font-mono text-sm text-slate-300">about.me.jsx</span>
              <span className="text-slate-600">x</span>
            </div>
          </div>

          <div className="px-5 py-5 font-mono text-[13px] leading-6">
            {lines.map((line, index) => (
              <div key={`${line}-${index}`} className="grid grid-cols-[2rem_1fr] gap-4">
                <span className="select-none text-right text-slate-600">{index + 1}</span>
                <span className="whitespace-pre text-slate-300">
                  {line.includes("const") || line.includes("return") ? (
                    <span className="text-pink-300">{line}</span>
                  ) : line.includes('"') ? (
                    <span className="text-lime-300">{line}</span>
                  ) : line.includes("className") || line.includes("h1") || line.includes("p>") ? (
                    <span className="text-sky-300">{line}</span>
                  ) : (
                    line || "\u00a0"
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/50 px-4 py-2 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Ready to build
            </span>
            <span className="flex items-center gap-2">
              JavaScript (React)
              <Code2 className="h-4 w-4 text-sky-400" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-l border-slate-800 bg-slate-900/55 py-4 text-slate-500">
          <FileCode2 className="h-5 w-5" aria-hidden="true" />
          <Search className="h-5 w-5" aria-hidden="true" />
          <GitBranch className="h-5 w-5" aria-hidden="true" />
          <Play className="h-5 w-5" aria-hidden="true" />
          <Braces className="h-5 w-5" aria-hidden="true" />
          <div className="h-6 w-6 rounded-full border border-slate-600"></div>
        </div>
      </div>
    </div>
  )
}

function ToolIcon({ icon, className = "h-7 w-7" }) {
  if (icon === "react") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
      </svg>
    )
  }

  const iconMap = {
    js: <span className="grid h-7 w-7 place-items-center rounded-sm bg-yellow-300 text-sm font-black text-slate-950">JS</span>,
    python: (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 11h8a3 3 0 0 0 3-3V6a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 13H8a3 3 0 0 0-3 3v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="6.5" r="1" fill="currentColor" />
        <circle cx="14" cy="17.5" r="1" fill="currentColor" />
      </svg>
    ),
    fastapi: <Zap className={className} aria-hidden="true" />,
    database: <Database className={className} aria-hidden="true" />,
    postgres: <Database className={className} aria-hidden="true" />,
    sqlite: <Database className={className} aria-hidden="true" />,
    tailwind: <span className="text-2xl font-black">~</span>,
    git: <GitBranch className={className} aria-hidden="true" />,
    github: <GitHubIcon className={className} />,
    vite: <Zap className={className} aria-hidden="true" />,
    braces: <Braces className={className} aria-hidden="true" />,
    brain: <BrainCircuit className={className} aria-hidden="true" />,
    chart: <BarChart3 className={className} aria-hidden="true" />,
    lock: <LockKeyhole className={className} aria-hidden="true" />,
  }

  return iconMap[icon] ?? <Code2 className={className} aria-hidden="true" />
}

function SystemOverview() {
  return (
    <aside className={`${panelClass} overflow-hidden`}>
      <div className="border-b border-slate-800 px-4 py-4">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          System Overview
        </p>
      </div>

      <div className="space-y-5 p-4">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">Stack</p>
          <div className="grid grid-cols-3 gap-1">
            {["React", "Tailwind CSS", "Vite", "Python", "FastAPI", "SQL"].map((item) => (
              <div key={item} className="border border-slate-800 bg-slate-900/60 px-3 py-2 text-center text-xs text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">Tools</p>
          <div className="flex flex-wrap gap-2">
            {["github", "git", "braces", "database", "brain"].map((icon) => (
              <div key={icon} className="grid h-9 w-9 place-items-center rounded-md border border-slate-800 bg-slate-900/70 text-slate-200">
                <ToolIcon icon={icon} className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        <div className="border-y border-slate-800 py-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">Currently</p>
          <p className="flex items-center gap-2 font-mono text-sm text-green-400">
            &gt; Building great things
            <span className="h-4 w-1.5 bg-slate-200" aria-hidden="true"></span>
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">Status</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["3+", "Projects", "Completed"],
              ["Full-Stack", "End-to-End", "Development"],
              ["Always", "Learning", "Building"],
            ].map(([top, mid, bottom]) => (
              <div key={top} className="border border-slate-800 bg-slate-900/50 p-3 text-center">
                <p className="text-lg font-bold text-cyan-300">{top}</p>
                <p className="mt-1 text-[10px] text-slate-400">{mid}</p>
                <p className="text-[10px] text-slate-500">{bottom}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex h-8 items-end gap-2 border-b border-blue-500/50">
            {[20, 35, 60, 33, 49, 31, 54, 40, 28, 58, 39, 62, 34].map((height, index) => (
              <span key={index} className="w-full bg-blue-500" style={{ height: `${height}%` }}></span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

function ProjectCard({ project }) {
  const Icon = project.icon

  return (
    <article className="grid min-h-[164px] grid-cols-[1fr_168px] gap-4 rounded-lg border border-slate-800 bg-slate-950/65 p-4 transition hover:-translate-y-1 hover:border-sky-500/70">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div
            className={`grid h-8 w-8 place-items-center rounded-md border ${
              project.accent === "cyan"
                ? "border-cyan-400 text-cyan-300"
                : project.accent === "purple"
                  ? "border-purple-400 text-purple-300"
                  : "border-violet-400 text-violet-300"
            } bg-slate-900`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
        </div>
        <span className="rounded bg-sky-500/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-sky-400">
          {project.label}
        </span>
        <p className="mt-4 text-xs leading-5 text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span key={item} className="rounded bg-slate-800 px-2 py-1 text-[11px] text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </div>
      <ProjectPreview type={project.preview} />
    </article>
  )
}

function ProjectPreview({ type }) {
  if (type === "graph") {
    return (
      <div className="relative overflow-hidden rounded-md border border-slate-800 bg-slate-900">
        <svg className="absolute inset-0 h-full w-full text-slate-600" aria-hidden="true">
          <line x1="20%" y1="55%" x2="45%" y2="28%" stroke="currentColor" />
          <line x1="45%" y1="28%" x2="78%" y2="38%" stroke="currentColor" />
          <line x1="45%" y1="28%" x2="58%" y2="70%" stroke="currentColor" />
          <line x1="20%" y1="55%" x2="58%" y2="70%" stroke="currentColor" />
        </svg>
        {[
          ["left-[20%] top-[55%]", "bg-blue-400"],
          ["left-[45%] top-[28%]", "bg-cyan-400"],
          ["left-[78%] top-[38%]", "bg-blue-500"],
          ["left-[58%] top-[70%]", "bg-purple-400"],
          ["left-[36%] top-[75%]", "bg-emerald-400"],
        ].map(([pos, color]) => (
          <span key={pos} className={`absolute ${pos} h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full ${color}`}></span>
        ))}
      </div>
    )
  }

  if (type === "board") {
    return (
      <div className="grid grid-cols-3 gap-2 rounded-md border border-slate-800 bg-slate-900 p-3">
        {[0, 1, 2].map((column) => (
          <div key={column} className="space-y-2">
            <div className="h-2 rounded-sm bg-slate-700"></div>
            {[0, 1, 2].map((card) => (
              <div key={card} className="h-8 rounded-sm border border-slate-700 bg-slate-800"></div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-md border border-slate-800 bg-slate-900 p-3">
      <div className="mb-3 grid grid-cols-3 gap-2">
        <div className="h-8 rounded-sm bg-slate-800"></div>
        <div className="h-8 rounded-sm bg-slate-800"></div>
        <div className="h-8 rounded-sm bg-blue-500/30"></div>
      </div>
      <div className="grid grid-cols-[0.7fr_1fr] gap-2">
        <div className="grid place-items-center rounded-sm border border-emerald-500/40 bg-emerald-500/10 text-xs text-emerald-300">
          92.4
        </div>
        <div className="space-y-2">
          {[75, 42, 88, 55].map((width, index) => (
            <div key={index} className="h-2 rounded-sm bg-slate-800">
              <div className="h-full rounded-sm bg-emerald-400" style={{ width: `${width}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className={`${containerClass} py-6`}>
      <div className="grid min-h-[426px] gap-6 lg:grid-cols-[1.02fr_1.08fr_0.72fr] lg:items-center">
        <div className="reveal-up">
          <p className="mb-5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-sky-400">
            | // Full-Stack Developer
          </p>
          <h1 className="text-6xl font-black leading-[0.98] tracking-tight text-white sm:text-7xl">
            Dakarai
            <br />
            Mitcham
          </h1>
          <p className="mt-6 font-mono text-sm text-slate-300">
            Software Engineer <span className="mx-2 inline-block h-1 w-1 rounded-full bg-sky-400 align-middle"></span>
            Full-Stack Developer
            <span className="mx-2 inline-block h-1 w-1 rounded-full bg-sky-400 align-middle"></span>
            AI Tools
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Computer Science graduate passionate about building intelligent,
            scalable, and user-centered applications that solve real problems.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              View My Work
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/Resume.pdf"
              className="inline-flex items-center gap-3 rounded-md border border-slate-700 bg-slate-950/50 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-white"
            >
              Download Resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 flex gap-5">
            <SocialIconLink href="https://github.com/DakaraiCodes" label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/dakarai-mitcham-152876296/" label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink href="mailto:dakaraimitcham@gmail.com" label="Email">
              <Mail className="h-5 w-5" />
            </SocialIconLink>
            <SocialIconLink href="/Resume.pdf" label="Resume">
              <FileText className="h-5 w-5" />
            </SocialIconLink>
          </div>
        </div>

        <div className="reveal-up delay-100">
          <CodeEditor />
        </div>

        <SystemOverview />
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className={`${containerClass} border-t border-slate-800 py-5`}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
          <Code2 className="h-4 w-4 text-sky-400" aria-hidden="true" />
          Featured Projects
        </h2>
        <a href="#projects" className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-sky-400">
          View all projects
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

function TechStackSection() {
  return (
    <section id="skills" className={`${containerClass} border-t border-slate-800 py-4`}>
      <h2 className="mb-4 flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
        <Terminal className="h-4 w-4 text-sky-400" aria-hidden="true" />
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-[repeat(15,minmax(0,1fr))]">
        {stack.map((item) => (
          <div
            key={item.name}
            className="grid min-h-20 place-items-center rounded-md border border-slate-800 bg-slate-950/65 p-3 text-center transition hover:-translate-y-1 hover:border-sky-500/70"
          >
            <div className={item.color}>
              <ToolIcon icon={item.icon} />
            </div>
            <p className="mt-2 text-xs text-slate-300">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-[#050a12] text-white">
      {/* Design note: this page is intentionally built to match the dark IDE mockup.
          Adjust panelClass and .portfolio-grid in index.css to tune the sharp technical look. */}
      <div className="portfolio-grid min-h-screen">
        <nav className="border-b border-slate-800/90">
          <div className={`${containerClass} flex h-[66px] items-center justify-between`}>
            <BrandMark />
            <div className="hidden items-center gap-10 text-sm text-slate-300 md:flex">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                  className={`relative py-6 transition hover:text-sky-400 ${
                    item === "Home"
                      ? "text-sky-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-sky-400"
                      : ""
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="hidden rounded-md border border-sky-500 px-4 py-2 text-sm font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-white sm:inline-flex"
              >
                Let's Connect
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Moon className="h-5 w-5 text-slate-400" aria-hidden="true" />
            </div>
          </div>
        </nav>

        <HeroSection />
        <ProjectsSection />
        <TechStackSection />

        <section id="resume" className={`${containerClass} border-t border-slate-800 py-8`}>
          <div className="flex flex-col gap-4 rounded-lg border border-slate-800 bg-slate-950/65 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">Resume</p>
              <h2 className="mt-1 text-2xl font-bold">Want the full breakdown?</h2>
              <p className="mt-2 text-sm text-slate-400">View education, projects, skills, and experience.</p>
            </div>
            <a href="/Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white">
              Download Resume
              <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="contact" className={`${containerClass} border-t border-slate-800 py-8`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-slate-500">Contact</p>
              <h2 className="mt-1 text-2xl font-bold">Let's connect.</h2>
            </div>
            <div className="flex gap-3">
              <a href="mailto:dakaraimitcham@gmail.com" className="rounded-md border border-slate-800 bg-slate-950/65 px-4 py-2 text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400">
                Email
              </a>
              <a href="https://github.com/DakaraiCodes" target="_blank" rel="noreferrer" className="rounded-md border border-slate-800 bg-slate-950/65 px-4 py-2 text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/dakarai-mitcham-152876296/" target="_blank" rel="noreferrer" className="rounded-md border border-slate-800 bg-slate-950/65 px-4 py-2 text-sm text-slate-300 hover:border-sky-500 hover:text-sky-400">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 px-6 py-6 text-center text-xs text-slate-500">
          &copy; 2026 Dakarai Mitcham. Built with React, Vite, and Tailwind CSS.
        </footer>
      </div>
    </main>
  )
}

export default App
