import * as React from "react";
import {
  ArrowUpRight,
  Bot,
  Brain,
  Boxes,
  ChartNoAxesCombined,
  Cpu,
  Database,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  Network,
  Radar,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const expertise = [
  {
    title: "GenAI Systems",
    icon: Sparkles,
    text: "Production-ready LLM applications with grounding, evaluation, orchestration, and enterprise-safe response design.",
  },
  {
    title: "Agentic Workflows",
    icon: Workflow,
    text: "Reasoning systems that route between tools, retrieval, business logic, SQL, and enterprise actions.",
  },
  {
    title: "Enterprise RAG",
    icon: FileText,
    text: "Knowledge intelligence across policies, SOPs, videos, transcripts, and governed internal content at scale.",
  },
  {
    title: "Data + AI Fusion",
    icon: Database,
    text: "Natural-language interfaces over structured and unstructured systems for analytics and decision support.",
  },
];

const projects = [
  {
    title: "Aurix Enterprise AI Assistant",
    eyebrow: "Flagship platform",
    description:
      "A secure enterprise assistant for policy intelligence, KPI exploration, workforce metrics, and governed document retrieval.",
    highlights: [
      "LLM + RAG + structured KPI intelligence",
      "Azure-native enterprise deployment",
      "Customer, site, and location-aware operational insights",
    ],
    stack: ["Azure OpenAI", "LangGraph", "Cosmos DB", "FastAPI", "React"],
  },
  {
    title: "Agentic AI Query Engine",
    eyebrow: "LLM-to-data system",
    description:
      "A natural-language system that plans, generates, validates, and executes PySpark / SQL queries for enterprise analytics.",
    highlights: [
      "NL to SQL / Spark translation",
      "Execution-aware query planning",
      "Real-time insights and visual responses",
    ],
    stack: ["LangGraph", "PySpark", "Azure Synapse", "Python", "Delta Lake"],
  },
  {
    title: "Resume Intelligence Engine",
    eyebrow: "Hybrid evaluation pipeline",
    description:
      "An AI screening engine combining deterministic timeline extraction with LLM-assisted justification detection and hiring signals.",
    highlights: [
      "Employment timeline normalization",
      "Gap and switch analysis",
      "Transparent rule-driven evaluation",
    ],
    stack: ["Python", "LLMs", "Rule Engine", "NLP"],
  },
  {
    title: "Knowledge Intelligence Platform",
    eyebrow: "Multimodal ingestion",
    description:
      "A retrieval platform for documents, SOPs, videos, transcripts, and enterprise media transformed into searchable intelligence.",
    highlights: [
      "Transcript-backed video intelligence",
      "Searchable enterprise memory layer",
      "Scalable ingestion for mixed content types",
    ],
    stack: ["RAG", "Vector Search", "Azure Services", "Enterprise APIs"],
  },
];

const timeline = [
  {
    role: "AI Architect / Technical Lead",
    company: "AIFA Labs",
    summary:
      "Leading enterprise AI architecture across conversational systems, GenAI workflows, KPI intelligence, multimodal knowledge pipelines, and agentic orchestration.",
  },
  {
    role: "Senior Software Engineer",
    company: "Voxly Digital",
    summary:
      "Built scalable backend platforms and conversational systems for enterprise-facing products and integrations.",
  },
  {
    role: "Software Engineer",
    company: "Pemari (Rego Consulting)",
    summary:
      "Delivered business software solutions, workflow automation, and platform engineering for enterprise scenarios.",
  },
  {
    role: "Software Engineer",
    company: "Nexivo Consulting",
    summary:
      "Worked on CRM automation, business integrations, and application delivery for client ecosystems.",
  },
];

const stackGroups = [
  {
    title: "LLM / GenAI",
    items: ["OpenAI", "Azure OpenAI", "Prompt Engineering", "Evaluation", "Guardrails", "Reasoning Workflows"],
  },
  {
    title: "Orchestration",
    items: ["LangGraph", "LangChain", "Tool Routing", "Agent Memory", "Multi-Agent Design"],
  },
  {
    title: "Data Systems",
    items: ["SQL", "PySpark", "Azure Synapse", "Delta Lake", "Cosmos DB", "Vector Search"],
  },
  {
    title: "Cloud / Platform",
    items: ["Azure", "Docker", "Kubernetes", "AKS", "Key Vault", "App Insights"],
  },
  {
    title: "Application Layer",
    items: ["Python", "FastAPI", "Node.js", "React", "TypeScript", "REST APIs"],
  },
  {
    title: "Enterprise Focus",
    items: ["RAG", "Knowledge Intelligence", "KPI Agents", "Policy Intelligence", "Secure AI"],
  },
];

function runStaticChecks() {
  console.assert(expertise.length === 4, "Expected 4 expertise cards");
  console.assert(projects.length >= 4, "Expected at least 4 projects");
  console.assert(timeline.length >= 4, "Expected at least 4 timeline items");
  console.assert(stackGroups.length >= 6, "Expected at least 6 stack groups");
}
runStaticChecks();

function GlobalStyles() {
  return (
    <style>{`
      @keyframes floatY { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
      @keyframes pulseGlow { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
      @keyframes scanLine { 0% { transform: translateY(-120%); opacity: 0; } 20% { opacity: .75; } 100% { transform: translateY(120%); opacity: 0; } }
      @keyframes revealUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes shimmerX { 0% { transform: translateX(-100%); opacity: 0; } 18% { opacity: .8; } 100% { transform: translateX(100%); opacity: 0; } }
      .section-reveal { opacity: 0; transform: translateY(32px); }
      .section-reveal.visible { animation: revealUp .9s cubic-bezier(.22,1,.36,1) forwards; }
      .glass-panel { background: linear-gradient(180deg, rgba(10,18,34,.72), rgba(6,12,24,.84)); backdrop-filter: blur(18px); }
      .hover-lift { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
      .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 18px 60px rgba(34,211,238,.10); border-color: rgba(103,232,249,.22); }
      .avatar-shell { animation: pulseGlow 4s ease-in-out infinite; }
      .scan-line { animation: scanLine 4.8s linear infinite; }
      .float-y { animation: floatY 5s ease-in-out infinite; }
      .shimmer-x { animation: shimmerX 5s linear infinite; }
      .tilt-scene { transform-style: preserve-3d; transition: transform 120ms ease-out; will-change: transform; }
      .tilt-node { transform: translateZ(40px); }
      .tilt-node-2 { transform: translateZ(72px); }
      .tilt-core { transform: translateZ(110px); }
      .grid-mask { mask-image: radial-gradient(circle at center, black 35%, transparent 80%); -webkit-mask-image: radial-gradient(circle at center, black 35%, transparent 80%); }
      .hero-noise {
        background-image:
          radial-gradient(circle at 20% 20%, rgba(103,232,249,.18), transparent 22%),
          radial-gradient(circle at 80% 20%, rgba(129,140,248,.16), transparent 22%),
          radial-gradient(circle at 50% 75%, rgba(168,85,247,.14), transparent 24%);
      }
    `}</style>
  );
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-white/60 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function GlowCard({ children, className = "" }) {
  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-white/10 glass-panel ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[90] h-1 w-full">
      <div className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_24px_rgba(34,211,238,.45)] transition-[width] duration-150" style={{ width: `${Math.max(progress * 100, 2)}%` }} />
    </div>
  );
}

function useRevealOnScroll() {
  React.useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".section-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function PointerField() {
  const canvasRef = React.useRef(null);
  const pointer = React.useRef({ x: -9999, y: -9999, active: false });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.7,
    }));

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = pointer.current;
      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            p.vx -= (dx / (dist || 1)) * force * 0.02;
            p.vy -= (dy / (dist || 1)) * force * 0.02;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.996;
        p.vy *= 0.996;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(103,232,249,0.86)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 145) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,211,238,${0.24 * (1 - dist / 145)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(loop);
    };
    loop();

    const handleMove = (e) => {
      pointer.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const handleLeave = () => {
      pointer.current.active = false;
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-80" />;
}

function HologramAvatar() {
  const wrapRef = React.useRef(null);
  const [rotation, setRotation] = React.useState({ x: -8, y: 10 });
  const [dragging, setDragging] = React.useState(false);
  const drag = React.useRef({ active: false, startX: 0, startY: 0, baseX: -8, baseY: 10 });

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  const updateFromPointer = (clientX, clientY) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    setRotation({ x: clamp((0.5 - py) * 28, -18, 18), y: clamp((px - 0.5) * 34, -20, 20) });
  };

  const endDrag = React.useCallback(() => {
    drag.current.active = false;
    setDragging(false);
  }, []);

  React.useEffect(() => {
    const stop = () => endDrag();
    window.addEventListener("pointerup", stop);
    return () => window.removeEventListener("pointerup", stop);
  }, [endDrag]);

  return (
    <div
      ref={wrapRef}
      data-testid="hero-avatar"
      className={`relative mx-auto aspect-square w-full max-w-[38rem] select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{ perspective: 1800 }}
      onPointerDown={(e) => {
        drag.current = { active: true, startX: e.clientX, startY: e.clientY, baseX: rotation.x, baseY: rotation.y };
        setDragging(true);
      }}
      onPointerMove={(e) => {
        if (drag.current.active) {
          const dx = e.clientX - drag.current.startX;
          const dy = e.clientY - drag.current.startY;
          setRotation({ x: clamp(drag.current.baseX - dy * 0.12, -22, 22), y: clamp(drag.current.baseY + dx * 0.12, -26, 26) });
          return;
        }
        updateFromPointer(e.clientX, e.clientY);
      }}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={() => {
        if (!drag.current.active) setRotation({ x: -8, y: 10 });
      }}
    >
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,rgba(34,211,238,.28),rgba(59,130,246,.16),rgba(168,85,247,.18),rgba(34,211,238,.28))] blur-3xl" />
      <div className="absolute inset-[4%] rounded-full border border-cyan-300/16 bg-white/[0.03] backdrop-blur-2xl" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }} />
      <div className="absolute inset-[8%] rounded-full border border-dashed border-cyan-300/24" style={{ transform: `rotateX(${rotation.x * 0.8}deg) rotateY(${rotation.y * 0.8}deg)` }} />
      <div className="absolute inset-[15%] rounded-full border border-dashed border-violet-300/24" style={{ transform: `rotateX(${rotation.x * 1.1}deg) rotateY(${rotation.y * 1.1}deg)` }} />

      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/10 shadow-[0_0_80px_rgba(34,211,238,.16)] hero-noise" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,.18),transparent_35%),linear-gradient(180deg,#060b17,#02050d)]" />
        <div className="absolute inset-0 scan-line bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent" />
        <div className="absolute inset-0 ring-1 ring-inset ring-cyan-200/10" />

        <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 avatar-shell bg-[radial-gradient(circle_at_center,rgba(34,211,238,.18),transparent_70%)] shadow-[0_0_40px_rgba(34,211,238,.18)]" />
        <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/30 float-y" />
        <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-300/24" style={{ animation: "floatY 6s ease-in-out infinite", animationDelay: "0.4s" }} />
        <div className="absolute left-1/2 top-1/2 h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[28%] border border-cyan-200/25 bg-[linear-gradient(180deg,rgba(11,21,42,.95),rgba(4,9,18,.95))] shadow-[0_0_35px_rgba(34,211,238,.18)]" />
        <div className="absolute left-1/2 top-1/2 h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20 bg-cyan-300/10 backdrop-blur-xl flex items-center justify-center">
          <Brain className="h-10 w-10 text-cyan-200" />
        </div>

        <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="120" stroke="rgba(103,232,249,.24)" strokeDasharray="7 10" />
          <circle cx="200" cy="200" r="84" stroke="rgba(167,139,250,.22)" strokeDasharray="5 8" />
          <path d="M82 150C130 124 270 124 318 150" stroke="rgba(103,232,249,.58)" />
          <path d="M82 250C130 276 270 276 318 250" stroke="rgba(167,139,250,.58)" />
          <path d="M120 92C158 148 158 252 120 308" stroke="rgba(56,189,248,.42)" />
          <path d="M280 92C242 148 242 252 280 308" stroke="rgba(103,232,249,.42)" />
          {[[80,150],[320,150],[80,250],[320,250],[130,90],[270,90]].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="6" fill={idx % 2 === 0 ? "#67e8f9" : "#a78bfa"} />
          ))}
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-[8%] rounded-full">
        {[
          { icon: Radar, label: "LLM", left: "3%", top: "16%" },
          { icon: ScanSearch, label: "RAG", right: "1%", top: "12%" },
          { icon: Boxes, label: "Agents", right: "0%", top: "61%" },
          { icon: Database, label: "KPI", left: "4%", bottom: "20%" },
          { icon: Cpu, label: "SQL", right: "15%", bottom: "0%" },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="absolute float-y" style={{ ...item, animationDelay: `${idx * 0.22}s` }}>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#091121]/85 text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,.18)] backdrop-blur-xl">
                <Icon className="h-5 w-5" />
              </div>
              <div className="rounded-full border border-white/10 bg-[#091121]/85 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,.12)] backdrop-blur-xl">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DraggableInfoNode({ node, toneClass, boundsRef, onMove, onOpen }) {
  const dragRef = React.useRef({ dragging: false, moved: false, startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

  React.useEffect(() => {
    const handleMove = (e) => {
      if (!dragRef.current.dragging) return;
      const rect = boundsRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = Math.abs(e.clientX - dragRef.current.startX);
      const dy = Math.abs(e.clientY - dragRef.current.startY);
      if (dx > 4 || dy > 4) dragRef.current.moved = true;
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      onMove(node.id, { x: clamp(xPct - dragRef.current.offsetX, 8, 92), y: clamp(yPct - dragRef.current.offsetY, 10, 90) });
    };
    const handleUp = () => {
      dragRef.current.dragging = false;
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [boundsRef, node.id, onMove]);

  return (
    <button
      type="button"
      onPointerDown={(e) => {
        const rect = boundsRef.current?.getBoundingClientRect();
        if (!rect) return;
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;
        dragRef.current = { dragging: true, moved: false, startX: e.clientX, startY: e.clientY, offsetX: xPct - node.x, offsetY: yPct - node.y };
      }}
      onClick={() => {
        if (!dragRef.current.moved) onOpen(node);
        dragRef.current.moved = false;
      }}
      className={`absolute z-10 rounded-2xl border px-4 py-3 text-xs tracking-wider shadow-[0_0_18px_rgba(34,211,238,.12)] transition hover:scale-[1.03] ${toneClass}`}
      style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
    >
      {node.label}
    </button>
  );
}

function InfoModal({ title, description, onClose, label = "Details" }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/45 backdrop-blur-sm">
      <div className="w-[86%] max-w-sm rounded-[1.5rem] border border-white/12 bg-[#091121]/95 p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300/80">{label}</p>
            <h4 className="mt-2 text-xl font-semibold text-white">{title}</h4>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/65 hover:bg-white/5">
            Close
          </button>
        </div>
        <p className="mt-4 text-sm leading-7 text-white/68">{description}</p>
      </div>
    </div>
  );
}

function TiltScene({ children, className = "", initial = { x: -4, y: 6 } }) {
  const ref = React.useRef(null);
  const [rotation, setRotation] = React.useState(initial);

  return (
    <div
      ref={ref}
      className={`relative tilt-scene ${className}`}
      style={{ transform: `perspective(1400px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const xRatio = (e.clientX - rect.left) / rect.width;
        const yRatio = (e.clientY - rect.top) / rect.height;
        setRotation({ x: Math.max(Math.min((0.5 - yRatio) * 16, 12), -12), y: Math.max(Math.min((xRatio - 0.5) * 20, 14), -14) });
      }}
      onPointerLeave={() => setRotation(initial)}
    >
      {children}
    </div>
  );
}

function AurixShowcase() {
  const sceneRef = React.useRef(null);
  const [activeNode, setActiveNode] = React.useState(null);
  const [nodes, setNodes] = React.useState([
    { id: "docs", label: "Docs / SOPs", x: 10, y: 20, color: "cyan", desc: "Enterprise policies, SOPs, and knowledge documents are ingested, chunked, embedded, and indexed for semantic retrieval." },
    { id: "kpi", label: "KPI Data", x: 12, y: 80, color: "sky", desc: "Structured operational metrics such as Fill Rate, NBOT, Touch Points, and workforce KPIs are aggregated for analytics and AI responses." },
    { id: "agent", label: "Agent Layer", x: 84, y: 18, color: "violet", desc: "Agent orchestration routes queries between retrieval, KPI systems, business rules, and reasoning steps before forming a final response." },
    { id: "ui", label: "Enterprise UI", x: 86, y: 78, color: "indigo", desc: "The enterprise experience layer presents chat answers, KPI summaries, citations, structured cards, and workflow-specific actions." },
  ]);

  const nodeTone = {
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    sky: "border-sky-300/20 bg-sky-300/10 text-sky-100",
    violet: "border-violet-300/20 bg-violet-300/10 text-violet-100",
    indigo: "border-indigo-300/20 bg-indigo-300/10 text-indigo-100",
  };

  const updateNode = React.useCallback((id, pos) => {
    setNodes((prev) => prev.map((node) => (node.id === id ? { ...node, ...pos } : node)));
  }, []);

  return (
    <GlowCard className="overflow-hidden p-8 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">Platform Showcase</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Aurix as a production-grade enterprise AI system.</h3>
          <p className="mt-5 text-base leading-7 text-white/62">A composable system that blends document intelligence, KPI data, policy search, and agentic orchestration into one governed experience.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Policy intelligence over enterprise knowledge",
              "Structured KPI query and aggregation",
              "Agent routing across tools and data sources",
              "Security-first enterprise deployment",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-[#08111f]/80 px-4 py-3 text-sm text-white/72">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-white/45">Drag the boxes. Click a box to inspect its role in the platform.</p>
        </div>

        <TiltScene className="h-[26rem] rounded-[2rem] border border-white/10 bg-[#08111f]/90 overflow-hidden" initial={{ x: -4, y: 6 }}>
          <div ref={sceneRef} className="absolute inset-0">
            {nodes.map((node) => (
              <DraggableInfoNode key={node.id} node={node} toneClass={nodeTone[node.color]} boundsRef={sceneRef} onMove={updateNode} onOpen={setActiveNode} />
            ))}

            <div className="tilt-core absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.35),rgba(4,8,20,.95))] text-center text-xs font-semibold text-white shadow-[0_0_40px_rgba(34,211,238,.28)] avatar-shell">Aurix Core</div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.10),transparent_40%)]" />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
              <path d="M22 25C36 30 42 37 50 50" stroke="rgba(34,211,238,.65)" strokeWidth="0.5" />
              <path d="M22 76C36 68 42 61 50 50" stroke="rgba(56,189,248,.65)" strokeWidth="0.5" />
              <path d="M50 50C60 39 69 31 79 25" stroke="rgba(168,85,247,.65)" strokeWidth="0.5" />
              <path d="M50 50C60 60 70 69 82 77" stroke="rgba(99,102,241,.65)" strokeWidth="0.5" />
            </svg>

            {[...Array(14)].map((_, i) => (
              <div key={i} className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.55)] float-y" style={{ left: `${12 + i * 5.8}%`, top: `${38 + Math.sin(i * 0.9) * 11}%`, animationDelay: `${i * 0.12}s` }} />
            ))}

            <div className="pointer-events-none absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shimmer-x" />
          </div>

          {activeNode ? <InfoModal title={activeNode.label} description={activeNode.desc} onClose={() => setActiveNode(null)} label="Node Details" /> : null}
        </TiltScene>
      </div>
    </GlowCard>
  );
}

function ArchitectureScene() {
  const sceneRef = React.useRef(null);
  const [activeNode, setActiveNode] = React.useState(null);
  const [nodes, setNodes] = React.useState([
    { id: "prompt", label: "Prompt", x: 10, y: 50, desc: "The user query enters the system and becomes the starting instruction for the AI workflow.", tone: "cyan" },
    { id: "retrieval", label: "Retrieval", x: 28, y: 22, desc: "Semantic retrieval finds the most relevant knowledge chunks, policies, or context for the current question.", tone: "sky" },
    { id: "vectordb", label: "Vector DB", x: 30, y: 80, desc: "The vector database stores embeddings for enterprise content and supports fast similarity search.", tone: "indigo" },
    { id: "agent", label: "Agent", x: 54, y: 50, desc: "The agent orchestrates tool calls, reasoning steps, context merging, and routing decisions before response generation.", tone: "cyan" },
    { id: "llm", label: "LLM", x: 88, y: 50, desc: "The large language model synthesizes grounded context, applies reasoning, and generates the final answer.", tone: "violet" },
  ]);

  const nodeTone = {
    cyan: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
    sky: "border-sky-300/20 bg-sky-300/10 text-sky-100",
    violet: "border-violet-300/20 bg-violet-300/10 text-violet-100",
    indigo: "border-indigo-300/20 bg-indigo-300/10 text-indigo-100",
  };

  const updateNode = React.useCallback((id, pos) => {
    setNodes((prev) => prev.map((node) => (node.id === id ? { ...node, ...pos } : node)));
  }, []);

  return (
    <TiltScene className="h-[26rem] rounded-[2rem] border border-white/10 bg-[#08111f]/90 overflow-hidden" initial={{ x: -5, y: 7 }}>
      <div ref={sceneRef} className="absolute inset-0">
        {nodes.map((node) => (
          <DraggableInfoNode key={node.id} node={node} toneClass={nodeTone[node.tone]} boundsRef={sceneRef} onMove={updateNode} onOpen={setActiveNode} />
        ))}

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
          <path d="M14 48C25 45 34 44 46 44" stroke="rgba(34,211,238,.7)" strokeWidth="0.6" />
          <path d="M34 26C42 32 44 36 50 44" stroke="rgba(56,189,248,.7)" strokeWidth="0.6" />
          <path d="M34 74C42 66 44 60 50 52" stroke="rgba(167,139,250,.7)" strokeWidth="0.6" />
          <path d="M54 48C66 46 72 46 86 48" stroke="rgba(168,85,247,.7)" strokeWidth="0.6" />
        </svg>

        {[...Array(14)].map((_, i) => (
          <div key={i} className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.55)] float-y" style={{ left: `${8 + i * 6.2}%`, top: `${40 + Math.sin(i) * 7}%`, animationDelay: `${i * 0.12}s` }} />
        ))}

        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,.16),transparent_55%)] blur-xl" />
        <div className="pointer-events-none absolute inset-x-0 top-[26%] h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shimmer-x" />
      </div>

      {activeNode ? <InfoModal title={activeNode.label} description={activeNode.desc} onClose={() => setActiveNode(null)} label="Component Details" /> : null}
    </TiltScene>
  );
}

export default function MohithAIPortfolio() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040814] text-white selection:bg-cyan-400/30 selection:text-black">
      <GlobalStyles />
      <ScrollProgress />
      <PointerField />

      <div className="pointer-events-none fixed inset-0 z-[1] opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[length:30px_30px] grid-mask" />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,.34),rgba(4,8,20,.90))]" />
      <div className="pointer-events-none fixed left-[-8rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-500/16 blur-3xl" />
      <div className="pointer-events-none fixed right-[-8rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/16 blur-3xl" />

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-6 md:px-8 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300/18 to-violet-300/0 lg:block" />

        <header className="sticky top-4 z-50 mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 glass-panel px-5 py-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300">MOHITH MUNIKUNTLA</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">GenAI • LLM Systems • Agentic Architecture</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/65 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#expertise" className="transition hover:text-white">Expertise</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#stack" className="transition hover:text-white">Stack</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="relative grid min-h-[100svh] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-200">
              <Sparkles className="h-4 w-4" />
              AI Architect for production-grade enterprise systems
            </div>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl xl:text-[5.35rem]">
              Building <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">GenAI and LLM platforms</span> that feel futuristic, but run like enterprise software.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66 md:text-xl">
              I design intelligent systems across conversational AI, retrieval, agent orchestration, structured data querying, multimodal knowledge, and cloud-native deployment — with a strong focus on Generative AI, LLM applications, and business-ready architecture.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-300/15 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/25">
                Explore Projects <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="https://www.linkedin.com/in/mohith-munikuntla05/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.08]">
                View LinkedIn
              </a>
              <a href="mailto:mohitmunikuntla1996@gmail.com" className="rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.08]">
                Email Me
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ["LLM Products", "Reasoning, prompting, evaluation, and tool-integrated AI systems"],
                ["Enterprise RAG", "Searchable knowledge over SOPs, policies, transcripts, and operational docs"],
                ["Agentic Automation", "Workflows that think, route, retrieve, query, and respond with context"],
              ].map(([title, desc]) => (
                <GlowCard key={title} className="p-5 hover-lift">
                  <p className="text-base font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{desc}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          <div className="relative">
            <HologramAvatar />
            <div className="mx-auto mt-6 max-w-md rounded-[2rem] border border-white/10 glass-panel p-4">
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"><p className="text-xs uppercase tracking-[0.2em] text-white/42">Focus</p><p className="mt-2 font-medium text-cyan-200">GenAI</p></div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"><p className="text-xs uppercase tracking-[0.2em] text-white/42">Core</p><p className="mt-2 font-medium text-violet-200">LLMs</p></div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"><p className="text-xs uppercase tracking-[0.2em] text-white/42">Mode</p><p className="mt-2 font-medium text-sky-200">Agents</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-reveal py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <GlowCard className="p-8 md:p-10"><SectionTitle eyebrow="About" title="From enterprise complexity to elegant AI experiences." /></GlowCard>
            <GlowCard className="p-8 md:p-10">
              <p className="text-lg leading-8 text-white/70">I am an AI Architect focused on enterprise Generative AI, LLM-powered systems, and agentic application design. I build platforms that connect knowledge retrieval, structured data, orchestration, and secure cloud deployment into one cohesive product experience.</p>
              <p className="mt-5 text-lg leading-8 text-white/70">My work sits at the intersection of <span className="text-cyan-200">LLM systems engineering</span>, <span className="text-cyan-200">RAG</span>, <span className="text-cyan-200">natural language to data workflows</span>, and <span className="text-cyan-200">enterprise architecture</span> — turning ambitious AI ideas into robust software people can actually use.</p>
            </GlowCard>
          </div>
        </section>

        <section id="expertise" className="section-reveal py-16 md:py-24">
          <SectionTitle eyebrow="Expertise" title="Built around GenAI, LLMs, orchestration, and enterprise delivery" subtitle="A capability layer shaped for AI-heavy platforms rather than generic developer portfolios." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {expertise.map((item) => {
              const Icon = item.icon;
              return (
                <GlowCard key={item.title} className="h-full p-6 hover-lift">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/12 bg-cyan-300/10 text-cyan-200"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
                </GlowCard>
              );
            })}
          </div>
        </section>

        <section className="section-reveal py-16 md:py-24">
          <GlowCard className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">Why this portfolio feels different</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Not a resume site. A visual narrative for AI architecture.</h3>
                <p className="mt-5 text-base leading-7 text-white/62">This experience is deliberately designed around an animated AI identity, motion-led storytelling, and a GenAI-first positioning. The hologram core acts as a symbolic intelligence engine — representing reasoning, retrieval, agents, tokens, and enterprise data flowing through one living system.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Brain, label: "Reasoning Systems" },
                  { icon: Network, label: "Agentic Orchestration" },
                  { icon: Cpu, label: "LLM Engineering" },
                  { icon: ShieldCheck, label: "Enterprise Guardrails" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-[#08111f]/80 p-5 hover-lift">
                      <Icon className="h-6 w-6 text-cyan-200" />
                      <p className="mt-4 text-base font-medium text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </GlowCard>
        </section>

        <section id="projects" className="section-reveal py-16 md:py-24">
          <SectionTitle eyebrow="Selected Projects" title="Work that reflects a GenAI and LLM systems mindset" subtitle="Platforms built around real enterprise problems — not just demos, prototypes, or toy use cases." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <GlowCard key={project.title} className="h-full p-7 md:p-8 hover-lift">
                <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/75">{project.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">{project.description}</p>
                <div className="mt-6 space-y-3">
                  {project.highlights.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm leading-6 text-white/60"><div className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /><p>{point}</p></div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/72">{item}</span>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="section-reveal py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <GlowCard className="p-8 md:p-10"><SectionTitle eyebrow="Signature Build Areas" title="The systems I love creating" subtitle="A focused identity around the kind of AI products and platform layers I’m best at architecting." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "RAG + policy intelligence assistants",
                  "Enterprise copilots over internal knowledge",
                  "Natural language to SQL / Spark systems",
                  "Multimodal knowledge over documents and video",
                  "KPI and workforce intelligence agents",
                  "Secure, governed GenAI application layers",
                ].map((item) => <div key={item} className="rounded-[1.35rem] border border-white/10 bg-[#08111f]/80 px-4 py-4 text-sm leading-6 text-white/75">{item}</div>)}
              </div>
            </GlowCard>
            <GlowCard className="p-8 md:p-10"><p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">Impact Lens</p><h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">Focused on the layer where AI becomes product.</h3>
              <div className="mt-8 space-y-4">
                {[[Bot, "Conversational systems that go beyond FAQ retrieval"],[Boxes, "Composable AI architectures with clear system boundaries"],[ChartNoAxesCombined, "Decision support through metrics, insights, and explainability"],[Globe, "Cloud-native deployment ready for enterprise scale"]].map(([Icon, text]) => { const CardIcon = Icon; return <div key={text} className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-[#08111f]/80 p-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><CardIcon className="h-5 w-5" /></div><p className="text-sm leading-7 text-white/68">{text}</p></div>; })}
              </div>
            </GlowCard>
          </div>
        </section>

        <section className="section-reveal py-16 md:py-24"><AurixShowcase /></section>

        <section className="section-reveal py-16 md:py-24">
          <GlowCard className="overflow-hidden p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">Interactive Architecture Layer</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">A visual system diagram for how GenAI applications really work.</h3>
                <p className="mt-5 text-base leading-7 text-white/62">Drag nodes, inspect components, and explore how prompt, retrieval, vector search, orchestration, and LLM reasoning connect into one AI workflow.</p>
              </div>
              <ArchitectureScene />
            </div>
          </GlowCard>
        </section>

        <section id="stack" className="section-reveal py-16 md:py-24">
          <SectionTitle eyebrow="Technology Stack" title="A toolkit optimized for LLM products and enterprise AI platforms" subtitle="Grouped to reflect how systems are actually designed: model layer, orchestration, data, infrastructure, and applications." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group) => (
              <GlowCard key={group.title} className="h-full p-6 hover-lift">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-cyan-300/10 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-100">{item}</span>)}</div>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="section-reveal py-16 md:py-24">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <GlowCard className="p-8 md:p-10"><SectionTitle eyebrow="Positioning" title="GenAI-first, architecture-led, product-minded." subtitle="A profile built to feel senior, technical, and visually memorable." /></GlowCard>
            <GlowCard className="p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-3">
                {[["01","LLM Engineering","From prompting and grounding to evaluation and response design."],["02","Agent Systems","Tool-using flows that reason across retrieval, data, and enterprise actions."],["03","Enterprise Delivery","Secure architecture, observability, governance, and cloud execution."]].map(([id, title, text]) => <div key={id} className="rounded-[1.5rem] border border-white/10 bg-[#08111f]/80 p-5"><p className="text-sm tracking-[0.24em] text-cyan-300">{id}</p><p className="mt-3 text-lg font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-white/58">{text}</p></div>)}
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="experience" className="section-reveal py-16 md:py-24">
          <SectionTitle eyebrow="Experience" title="Career progression shaped by systems thinking" />
          <div className="relative mt-10 space-y-5 before:absolute before:left-[1.05rem] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/50 before:to-transparent md:before:left-[1.35rem]">
            {timeline.map((item, idx) => (
              <div key={item.company} className="relative pl-10 md:pl-14"><div className="absolute left-0 top-5 h-5 w-5 rounded-full border border-cyan-300/30 bg-cyan-300/20 shadow-[0_0_18px_rgba(34,211,238,.25)]" /><GlowCard className="p-6 md:p-7"><p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/75">{String(idx + 1).padStart(2, "0")}</p><h3 className="mt-2 text-2xl font-semibold text-white">{item.role}</h3><p className="mt-1 text-white/60">{item.company}</p><p className="mt-4 max-w-4xl text-base leading-7 text-white/66">{item.summary}</p></GlowCard></div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-reveal py-16 md:py-24">
          <GlowCard className="overflow-hidden p-8 text-center md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,.12),transparent_30%)]" />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">Let’s build the next wave of enterprise GenAI.</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/62">Open to discussions around LLM products, enterprise copilots, agentic workflows, knowledge intelligence, and AI-led platform architecture.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="https://www.linkedin.com/in/mohith-munikuntla05/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-300/15 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/25"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a href="mailto:mohitmunikuntla1996@gmail.com" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.08]"><Mail className="h-4 w-4" /> mohitmunikuntla1996@gmail.com</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.08]"><Github className="h-4 w-4" /> GitHub</a>
              </div>
            </div>
          </GlowCard>
        </section>
      </main>
    </div>
  );
}
