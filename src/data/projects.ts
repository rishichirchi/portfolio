import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "payzee",
    title: "Payzee: Pay Easy, Payzee!",
    subtitle: "Fintech",
    startDate: "2025-04-01",
    endDate: "2025-05-01",
    category: "Fintech",
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
    id: "hookit",
    title: "Hookit!",
    subtitle: "Data Pipeline",
    startDate: "2024-11-01",
    endDate: "2024-11-01",
    category: "Backend",
    description:
      "ETL-based workflow management system to extract, transform, and load data between sources and the cloud, supporting bidirectional data flow.",
    status: "completed",
    technologies: ["ETL", "Data Pipeline", "Cloud Integration"],
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
