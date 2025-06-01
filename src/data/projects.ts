import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "payzee",
    title: "Payzee: Pay Easy, Payzee!",
    subtitle: "Fintech",
    github: "https://github.com/1MindLabs/payzee-app",
    startDate: "2025-04-01",
    endDate: "2025-05-01",
    category: "Mobile App",
    description:
      "Cross-platform, multilingual payment processor powered by Central Bank Digital Currency (CBDC), also known as the Digital Rupee or e₹, targeted towards bringing people above the poverty line.",
    status: "completed",
    technologies: ["Flutter", "CBDC", "Digital Rupee"],
  },
  {
    id: "mivro",
    title: "Mivro: Scan It. Know It.",
    subtitle: "Cross-platform App",
    github: "https://github.com/1MindLabs/mivro-mobile",
    startDate: "2024-05-01",
    endDate: "2024-12-01",
    category: "Mobile App",
    description:
      "Cross-platform app and web extension for personalized product profiling in food, drink, cosmetic, medicine, and pet food categories.",
    status: "completed",
    technologies: ["Flutter", "Web Extension", "Product Scanning"],
  },
  {
    id: "goflow",
    title: "GoFlow",
    subtitle: "Chrome Extension",
    github: "https://github.com/rishichirchi/GoFlow",
    startDate: "2024-11-22",
    endDate: "2024-11-22",
    category: "Backend",
    description:
      "GoFlow is a project that leverages the power of generative AI to streamline and enhance tasks such as code review generation, social media post creation, email drafting, and pull request analysis. The project integrates the Gemini generative AI model along with GitHub and Twitter APIs to automate workflows effectively",
    status: "completed",
    technologies: ["Go", "Gemini API", "GitHub API", "Twitter API"],
  },
  {
    id: "loadbalancer",
    title: "Load-Balancer",
    subtitle: "http - Server",
    github: "https://github.com/rishichirchi/Load-Balancer",
    startDate: "2024-10-18",
    endDate: "2024-10-18",
    category: "Backend",
    description:"This project is a custom-built load balancer written in Go. It distributes incoming HTTP requests among multiple backend servers using a round-robin algorithm, with health checks to ensure backends are responsive.",
    status: "completed",
    technologies: ["Go", "round-robin", "HTTP"],
  },
  {
    id: "summup",
    title: "SummUp",
    subtitle: "Emotion aware chat companion app",
    github: "https://github.com/rishichirchi/SummUp",
    startDate: "2024-11-01",
    endDate: "2025-05-01",
    category: "Backend, Mobile App",
    description:"Using a combination of WebSocket communication, Kafka message streaming, and sentiment analysis, SummUp generates insights that help users understand the emotional tone of their chat interactions.",
    status: "completed",
    technologies: ["Go", "Java", "Spring Boot", "Kafka", "WebSocket", "Sentiment Analysis"],
  },
  {
    id: "crypta",
    title: "Crypta-Desktop",
    subtitle: "Digital forensics and incident response (DFIR) application.",
    github: "https://github.com/1MindLabs/crypta-desktop",
    startDate: "2024-09-01",
    endDate: "2024-9-01",
    category: "Desktop Application",
    description:"Crypta Desktop is an advanced digital forensics and incident response (DFIR) application.This is the cross-platform desktop application for the Crypta project, built with the Flutter framework. Designed for anomaly detection and pattern recognition across system data and network activity.",
    status: "completed",
    technologies: ["Flutter"],
  },
];

export function getProjects(): Project[] {
  // Sort projects by start date in descending order (newest first)
  return projects.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function getLatestProjects(limit: number = 3): Project[] {
  const sortedProjects = getProjects();
  return sortedProjects.slice(0, limit);
}
