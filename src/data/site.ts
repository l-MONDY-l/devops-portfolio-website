export const siteConfig = {
  name: "Ushan Perera",
  fullName: "Ushan Perera",
  role: "Full Stack Developer",
  tagline:
    "Shipping modern web and mobile experiences end to end—solid APIs, thoughtful UI, and the Linux and infrastructure depth that keeps systems dependable.",
  description:
    "Full stack developer building web applications, mobile apps, and APIs, grounded in Linux systems, automation, networking, and production reliability.",
  email: "malinthaushan444@gmail.com",
  github: "https://github.com/l-MONDY-l",
  linkedin: "https://www.linkedin.com/in/ushan-perera-564015120/",
  domain: "https://ushan.space",
  location: "Sri Lanka",
};

/** WEB LAB — referenced on the About page with live agency links. */
export const webLab = {
  legalName: "WEB LAB (PVT) Ltd",
  title: "Founder & CEO",
  headquarters: "United Kingdom",
  tagline: "UK-based company",
  description:
    "A globally recognized creative digital marketing and web development agency, operating across the United Kingdom, Sri Lanka, and the United Arab Emirates — delivering cutting-edge solutions, results-driven campaigns, and impactful brand narratives.",
  presence: ["United Kingdom", "Sri Lanka", "United Arab Emirates"],
  websites: [
    { label: "weblab.lk", href: "https://weblab.lk/" },
    { label: "weblabsolutions.co.uk", href: "https://weblabsolutions.co.uk/" },
  ],
} as const;

export const metrics = [
  {
    value: "9+",
    label: "Years Experience",
    description:
      "Delivery across infrastructure operations, Linux administration, application engineering, automation, and production support.",
  },
  {
    value: "100+",
    label: "Systems Supported",
    description: "Hands-on exposure across Linux environments, servers, monitoring, and enterprise infrastructure.",
  },
  {
    value: "20+",
    label: "Automation Flows",
    description: "Operational scripting, admin tooling, monitoring logic, and process automation.",
  },
  {
    value: "24/7",
    label: "Ship & Support",
    description: "Product-focused delivery with an operations mindset: uptime, incidents, hardening, and stable releases.",
  },
];

export const skills = [
  "Linux Administration",
  "Bare Metal Infrastructure",
  "Red Hat Enterprise Linux",
  "Networking",
  "Bash Automation",
  "System Hardening",
  "Monitoring & Alerting",
  "Production Support",
  "Identity & Access",
  "Backup Operations",
  "Incident Response",
  "Infrastructure Reliability",
  "TypeScript & JavaScript",
  "React & Next.js",
  "REST & API Design",
  "Mobile Development",
  "React Native",
];

const gh = (repo: string) => `https://github.com/l-MONDY-l/${repo}`;

export type PortfolioProjectGroup = "saas" | "enterprise" | "web" | "opensource";

export type PortfolioProject = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  cta: string;
  group: PortfolioProjectGroup;
  /** Shown on the home page “Featured” strip */
  highlight?: boolean;
};

export const projectGroupOrder: PortfolioProjectGroup[] = ["saas", "enterprise", "web", "opensource"];

export const projectGroupLabels: Record<PortfolioProjectGroup, string> = {
  saas: "SaaS & business platforms",
  enterprise: "Enterprise infrastructure & observability",
  web: "Custom web, CMS & digital estates",
  opensource: "Open source, bare metal & automation",
};

export const featuredProjects: PortfolioProject[] = [
  {
    group: "saas",
    highlight: true,
    title: "ERP-style SaaS for production companies",
    description:
      "Foundational ERP patterns for manufacturing and production: inventory, orders, shop-floor handoffs, BOM light structures, and role-aware workflows — designed for disciplined releases and audit-friendly operations.",
    stack: ["SaaS architecture", "Multi-tenant patterns", "API design", "PostgreSQL"],
    href: "/contact",
    cta: "Discuss this product line",
  },
  {
    group: "saas",
    title: "Microfinance & regulated lending operations",
    description:
      "Core workflows for MFIs and small lenders: client onboarding, loan lifecycle, schedules, arrears logic, and reporting hooks — with security and segregation suitable for regulated environments.",
    stack: ["FinTech UX", "Workflow engines", "Compliance-minded design", "Integrations"],
    href: "/contact",
    cta: "Discuss engagement",
  },
  {
    group: "enterprise",
    highlight: true,
    title: "Real-time monitoring & alerting at enterprise scale",
    description:
      "Signal-rich observability for large estates: golden metrics, SLO dashboards, alert routing with on-call semantics, and noise control so platform teams see real incidents — not pager spam.",
    stack: ["Prometheus / Grafana", "Alerting", "Loki / logs", "Runbooks"],
    href: "/contact",
    cta: "Plan an assessment",
  },
  {
    group: "enterprise",
    title: "Cloud platform centralization & governance",
    description:
      "Landing zones, AWS Organizations-style patterns, IAM guardrails, cost visibility, and network baselines so multiple accounts feel like one governed platform — not a sprawl of defaults.",
    stack: ["Landing zones", "IAM & SSO", "Network baselines", "FinOps visibility"],
    href: "/contact",
    cta: "Explore platform design",
  },
  {
    group: "web",
    highlight: true,
    title: "Custom CMS & high-volume web programs",
    description:
      "Editorial-grade CMS experiences, reusable content models, and performance-first delivery — suited to agencies and enterprises managing large footprints (350+ sites and similar estates).",
    stack: ["Headless & hybrid CMS", "Next.js", "Editor UX", "Multi-site governance"],
    href: "https://weblab.lk/",
    cta: "See WebLab capabilities",
  },
  {
    group: "opensource",
    title: "Linux server health inspection toolkit",
    description:
      "Production-friendly checks for uptime, memory pressure, load, storage, and operational quick-reads — the kind of script you trust before opening a bridge call.",
    stack: ["Bash", "Linux", "Operations"],
    href: gh("linux-server-health-check"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "Backup automation with rotation & logging",
    description:
      "Repeatable backup flows, retention discipline, and operator logs so restores are boring — the way they should be.",
    stack: ["Bash", "Backup", "Cron / systemd"],
    href: gh("linux-backup-automation"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "Bare metal server initialization baseline",
    description:
      "First-boot hardening, baseline packages, and production-style conventions for racks and dedicated hardware — before orchestration layers land on top.",
    stack: ["Linux", "Bare metal", "Provisioning"],
    href: gh("baremetal-server-init"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "SSH hardening & secure server baseline",
    description:
      "Opinionated SSH and core hardening scripts to shrink the obvious attack surface without turning the box into an unmaintainable puzzle.",
    stack: ["SSH", "CIS-style baselines", "Bash"],
    href: gh("ssh-hardening-baseline"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "Docker host bootstrap for Linux",
    description:
      "Prepares nodes for container workloads: sane storage, daemon defaults, and operational checks so clusters and compose stacks start from a known-good host.",
    stack: ["Docker", "Linux", "Automation"],
    href: gh("docker-host-bootstrap"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "Nginx vHost automation",
    description:
      "Creates server blocks, web roots, and enables sites automatically — fewer copy-paste errors when shipping many properties.",
    stack: ["Nginx", "Bash", "Web"],
    href: gh("nginx-vhost-auto-setup"),
    cta: "View on GitHub",
  },
  {
    group: "opensource",
    title: "Patching, vulnerability cadence & release hygiene",
    description:
      "Automation-assisted patch windows, kernel/reboot policy hints, and simple CVSS triage framing tied to maintenance calendars — bridging security asks with ops reality.",
    stack: ["Vulnerability ops", "Ansible / Bash", "Change management"],
    href: "https://github.com/l-MONDY-l",
    cta: "Browse tooling",
  },
];
