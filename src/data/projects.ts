export type ProjectStatus = "Shipped" | "In Progress";

export interface Project {
  title: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "PulseBoard Analytics",
    summary:
      "Client-facing KPI dashboard with role-based views, instant filtering, and export-ready reporting.",
    tags: ["Astro", "UI", "API"],
    status: "Shipped",
    githubUrl: "https://github.com/your-username/pulseboard-analytics",
    liveUrl: "https://pulseboard-demo.example.com"
  },
  {
    title: "Workflow Pilot",
    summary:
      "Automation hub that syncs form submissions into Notion and Slack with observability logs.",
    tags: ["Automation", "Node", "API"],
    status: "Shipped",
    githubUrl: "https://github.com/your-username/workflow-pilot"
  },
  {
    title: "SprintScope",
    summary:
      "Project health tracker focused on delivery risk, milestone drift, and predictable release cadence.",
    tags: ["React", "UI", "Performance"],
    status: "In Progress",
    githubUrl: "https://github.com/your-username/sprintscope",
    liveUrl: "https://sprintscope-preview.example.com"
  },
  {
    title: "DocFlow Studio",
    summary:
      "Template-driven document generator that turns API payloads into polished PDF deliverables.",
    tags: ["Automation", "TypeScript", "API"],
    status: "Shipped",
    githubUrl: "https://github.com/your-username/docflow-studio"
  },
  {
    title: "Launchpad UI Kit",
    summary:
      "Lean design system starter for rapid MVP shipping with consistent patterns and tokenized styles.",
    tags: ["Astro", "UI", "Design System"],
    status: "In Progress",
    githubUrl: "https://github.com/your-username/launchpad-ui-kit"
  }
];

export const projectTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];
