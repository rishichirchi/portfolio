import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "payzee",
    title: "Payzee: Pay Easy, Payzee!",
    subtitle: "Fintech",
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
    startDate: "2024-11-22",
    endDate: "2024-11-22",
    category: "Backend",
    description:
      "GoFlow is a project that leverages the power of generative AI to streamline and enhance tasks such as code review generation, social media post creation, email drafting, and pull request analysis. The project integrates the Gemini generative AI model along with GitHub and Twitter APIs to automate workflows effectively",
    status: "completed",
    technologies: ["Go", "Gemini API", "GitHub API", "Twitter API"],
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
