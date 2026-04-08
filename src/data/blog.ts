export type BlogSection = { type: "h2"; text: string } | { type: "p"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  coverAlt: string;
  category: "Systems engineering" | "Full stack" | "System administration" | "Bare metal";
  readingTime: string;
  content: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "systems-engineering-interfaces-and-boundaries",
    title: "Systems Engineering: Interfaces, Boundaries, and Failure Modes",
    excerpt:
      "Why the best systems engineers spend as much time on contracts between components as on the components themselves.",
    date: "April 2, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Circuit board macro representing interconnected systems",
    category: "Systems engineering",
    readingTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Systems engineering is not a job title only—it is a discipline about managing complexity where hardware, software, people, and time interact. The moment a system grows past a single deployable, the hardest problems are rarely pure code bugs. They are ambiguous boundaries: what one team assumes another guarantees, and what happens when those assumptions break.",
      },
      {
        type: "h2",
        text: "Explicit interfaces beat tribal knowledge",
      },
      {
        type: "p",
        text: "Interfaces are more than REST paths or kernel syscalls. They include operational interfaces: who responds to an alert, what an SLO means in practice, and how configuration is allowed to change in production. Documenting the happy path is easy; documenting the degraded modes—timeouts, partial failures, retry policies—is where resilient systems separate from fragile ones.",
      },
      {
        type: "h2",
        text: "Design for observable failure",
      },
      {
        type: "p",
        text: "When you cannot predict every failure, you can still design for detection and containment. Think in blast radius, recovery time, and evidence: logs and metrics that answer why a request failed without requiring SSH archaeology. That mindset connects directly to both full stack delivery and hard infrastructure underneath.",
      },
    ],
  },
  {
    slug: "full-stack-owning-the-request-path",
    title: "Full Stack Development: Owning the Request Path End to End",
    excerpt:
      "From browser and mobile clients through APIs, data stores, and caching—why tracing a single user journey keeps quality honest.",
    date: "April 3, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Laptop displaying analytics and application development workflow",
    category: "Full stack",
    readingTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Full stack work is often caricatured as “a bit of frontend and a bit of backend.” In production, it is closer to responsibility for the entire request path: how auth propagates, how errors surface to users, how data consistency is preserved, and how deployments stay reversible.",
      },
      {
        type: "h2",
        text: "Trace reality, not diagrams",
      },
      {
        type: "p",
        text: "Diagrams lie by omission. Walking a real request—with tracing IDs, slow queries, and mobile network conditions—surfaces the coupling you forgot to model. That walk is how you decide where to cache, where to validate, and where eventual consistency is acceptable.",
      },
      {
        type: "h2",
        text: "Mobile extends the path",
      },
      {
        type: "p",
        text: "Mobile clients add offline state, push notifications, and app store release cycles. The same API that feels fine for a wired desktop browser may be painful on flaky LTE. Full stack ownership includes negotiating payloads, versioning, and backoff strategies so mobile and web stay first-class citizens.",
      },
    ],
  },
  {
    slug: "linux-sysadmin-daily-discipline",
    title: "Linux System Administration: Daily Discipline That Compounds",
    excerpt:
      "Patch hygiene, configuration management, and the boring habits that prevent heroic firefighting.",
    date: "April 4, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Laptop with programming workspace and code editor",
    category: "System administration",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "Great system administrators are not defined by one brilliant recovery at 3 a.m. They are defined by how rarely that phone rings. Linux environments reward consistency: predictable package cycles, idempotent configuration, and audits that catch drift before it becomes an incident.",
      },
      {
        type: "h2",
        text: "Treat configuration as code",
      },
      {
        type: "p",
        text: "Whether you use Ansible, shell scripts, or immutable images, the goal is the same—reproducibility. Manual edits on a production box are debt. If it matters, it belongs in version control with review, testing where possible, and a rollback story.",
      },
      {
        type: "h2",
        text: "Observability is part of administration",
      },
      {
        type: "p",
        text: "Disk fills, runaway processes, and permission mistakes are classics for a reason. Baseline utilization, alert on trends, and keep jump hosts and access patterns boring. Administration that integrates monitoring and logging is administration that scales past one heroic operator.",
      },
    ],
  },
  {
    slug: "bare-metal-when-hardware-control-wins",
    title: "Bare Metal Servers: When Direct Hardware Control Still Wins",
    excerpt:
      "Latency, licensing, predictable performance, and edge deployments—cases where VMs and containers are not the whole story.",
    date: "April 5, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Data center server racks with network cabling",
    category: "Bare metal",
    readingTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Cloud and Kubernetes rightly dominate conversations, but bare metal never disappeared. It moved to the places where tenancy overhead, noisy neighbors, or economics favor dedicated hardware: high-frequency adjacent workloads, strict compliance enclaves, and edge sites where virtualization is optional weight.",
      },
      {
        type: "h2",
        text: "Predictability has value",
      },
      {
        type: "p",
        text: "A bare metal box with known CPU generation, NIC firmware, and local SSD topology gives performance profiles you can reason about. That matters for database primaries, batch pipelines with tight SLAs, and latency-sensitive services where jitter is the enemy.",
      },
      {
        type: "h2",
        text: "Operational cost is real cost",
      },
      {
        type: "p",
        text: "The invoice is only part of the equation. Operator time spent debugging hypervisor quirks, storage multipath edge cases, or licensing bundles counts. Sometimes a simple rack server with a disciplined imaging pipeline is the cheapest honest answer.",
      },
    ],
  },
  {
    slug: "bare-metal-ipmi-raid-firmware",
    title: "IPMI, RAID, and Firmware: Bare Metal Operator Essentials",
    excerpt:
      "Out-of-band management, disk layouts, and the firmware cycle that keeps production from surprising you.",
    date: "April 6, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Close-up of server hardware components and storage",
    category: "Bare metal",
    readingTime: "9 min read",
    content: [
      {
        type: "p",
        text: "Running bare metal means you inherit the full hardware surface: BMCs, RAID controllers, NIC firmware, and BIOS settings that were “adjusted once” five years ago. Treating that surface casually is how you get mystery reboots and slow disks in the middle of a release window.",
      },
      {
        type: "h2",
        text: "IPMI and BMC hygiene",
      },
      {
        type: "p",
        text: "Out-of-band access is a lifeline when the OS is unhealthy, but it is also an attack surface. Segmented networks, strong credentials, audited access, and firmware updates belong in the same checklist as SSH hardening. Document the default routes to BMC interfaces so on-call is not guessing VLANs during an outage.",
      },
      {
        type: "h2",
        text: "RAID is a policy decision",
      },
      {
        type: "p",
        text: "Hardware RAID versus software-defined storage trades predictability, portability, and recovery tools. Whatever you choose, automate health reporting and practice pulling a failed disk before one fails for real. Firmware baselines should ride alongside OS patch cycles, not “when someone remembers.”",
      },
    ],
  },
  {
    slug: "observability-metrics-logs-traces",
    title: "Observability for Systems Engineers: Metrics, Logs, and Traces",
    excerpt:
      "Building shared context between apps and infrastructure so incidents shorten and postmortems teach.",
    date: "April 7, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Dashboard charts and operational metrics on a display",
    category: "Systems engineering",
    readingTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Observability is often sold as a vendor category, but at its core it is a property: can you understand system behavior from external signals without redeploying code? For systems engineers, that spans kernel metrics, service golden signals, and business KPIs that actually move when infrastructure degrades.",
      },
      {
        type: "h2",
        text: "Metrics tell you velocity; logs tell you story",
      },
      {
        type: "p",
        text: "High-cardinality explosions are real, but so is the pain of an alert that says “slow” with no attributes. Invest in consistent labeling—environment, service, version—and structured logs that correlate with trace IDs where possible. The goal is a timeline a new responder can follow.",
      },
      {
        type: "h2",
        text: "Tracing closes the loop",
      },
      {
        type: "p",
        text: "In full stack systems, a user-visible stall might begin in DNS, accelerate in a connection pool, and finish in a thundering herd on a database replica. Traces bridge those layers. They are not free to operate, but neither is guessing.",
      },
    ],
  },
  {
    slug: "api-design-contracts-evolution",
    title: "API Design for Full Stack Teams: Contracts and Evolution",
    excerpt:
      "Versioning, compatibility, and the operational side of APIs that mobile and web clients depend on.",
    date: "April 8, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1580894732444-8bebded10b64?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Code editor on screen with programming syntax",
    category: "Full stack",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "An API is a contract—not only with compilers, but with every client in the wild you cannot force-update instantly. Full stack engineers feel this acutely when mobile users linger on old binaries or when third parties ingest your endpoints.",
      },
      {
        type: "h2",
        text: "Prefer additive change",
      },
      {
        type: "p",
        text: "Breaking changes should be rare, announced, and measurable. Additive fields, parallel endpoints during migration windows, and explicit deprecation headers reduce drama. Document error envelopes so clients can distinguish retryable failures from programmer mistakes.",
      },
      {
        type: "h2",
        text: "Operational guarantees are part of the contract",
      },
      {
        type: "p",
        text: "Rate limits, payload caps, and authentication lifetimes belong in the same mental model as schema. Clients that cache aggressively need clarity on consistency. When infrastructure throttles traffic, the API layer should degrade gracefully with honest status codes.",
      },
    ],
  },
  {
    slug: "production-deployments-risk",
    title: "Production Deployments: Migrations, Rollbacks, and Honest Risk",
    excerpt:
      "Blue-green, canaries, and database migrations—making releases boring on purpose.",
    date: "April 9, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Software deployment and cloud infrastructure concept",
    category: "Full stack",
    readingTime: "8 min read",
    content: [
      {
        type: "p",
        text: "Deployments are where full stack and system administration intersect. Code may be perfect in isolation and still fail when schema locks, disk IO spikes, or a cache invalidation pattern hits production scale for the first time.",
      },
      {
        type: "h2",
        text: "Make rollback the default story",
      },
      {
        type: "p",
        text: "If you cannot roll back, you do not understand your change. Feature flags, dual writes, and expand-contract migrations exist to keep the escape hatch open. Practice failures: restore from backup in staging, rehearse failover, measure how long each step takes with humans awake and communicating.",
      },
      {
        type: "h2",
        text: "Bare metal and cloud share psychology",
      },
      {
        type: "p",
        text: "Whether your unit of deploy is a VM image, a container, or a physical server reimage, operators need the same clarity: what changed, who approved it, and how to verify health after. Automation without visibility is just faster confusion.",
      },
    ],
  },
  {
    slug: "bare-metal-capacity-planning",
    title: "Capacity Planning on Bare Metal: Power, Cooling, and Uplift Windows",
    excerpt:
      "Rack density, lifecycle planning, and the facility constraints people forget when everything lived in a console.",
    date: "April 10, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Earth and network technology concept from space perspective",
    category: "Bare metal",
    readingTime: "7 min read",
    content: [
      {
        type: "p",
        text: "Elastic cloud makes capacity feel infinite until the bill arrives. Bare metal makes capacity physical: rack units, power feeds, PDU headroom, and thermal envelopes. Planning is not spreadsheets only—it is coordination with facilities and finance.",
      },
      {
        type: "h2",
        text: "Know your uplift path",
      },
      {
        type: "p",
        text: "Before you standardize on a chassis generation, ask how you will add NICs, memory, or GPUs later without forklift upgrades. Vendor roadmaps matter. So do spare parts strategy and whether your remote hands contract matches your recovery expectations.",
      },
      {
        type: "h2",
        text: "Lifecycle beats hero upgrades",
      },
      {
        type: "p",
        text: "Scheduled refresh beats emergency fire drills. Tie depreciation to reliability targets: older disks, aging PSUs, and firmware drift are predictors, not surprises. Document power draw under stress tests—not idle—before you stack another dense node into the same rack.",
      },
    ],
  },
  {
    slug: "bridging-dev-and-ops",
    title: "Bridging Development and Operations: Shared Language, Shared Pain",
    excerpt:
      "Why system administrators and full stack engineers ship faster when SLOs and runbooks belong to everyone.",
    date: "April 11, 2026",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    coverAlt: "Team collaboration around laptops in an office",
    category: "Systems engineering",
    readingTime: "6 min read",
    content: [
      {
        type: "p",
        text: "The old wall between “dev” and “ops” wasted time blaming. Modern organizations still recreate that wall with ticket queues and different Slack channels if they do not invest in shared artifacts: architecture docs, error budgets, and incident reviews that focus on systems—not individuals.",
      },
      {
        type: "h2",
        text: "Runbooks are user interfaces for panic",
      },
      {
        type: "p",
        text: "A runbook is not bureaucracy; it is cached thinking. When written with input from developers who own the code, it reflects reality. When written only by operators, it rots. The same goes for infrastructure-as-code: developers should read it, and operators should review application changes that stress shared dependencies.",
      },
      {
        type: "h2",
        text: "Bare metal literacy still pays",
      },
      {
        type: "p",
        text: "Even cloud-native teams hit metal eventually—managed databases run on hardware, egress hits physical links, and region failures expose assumptions. Engineers who understand racks, networking, and kernels ask better questions earlier. That is the real bridge.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
