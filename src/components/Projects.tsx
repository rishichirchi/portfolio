"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/projects";
import { getLatestProjects } from "@/data/projects";

interface ProjectsProps {
  limit?: number;
  showTitle?: boolean;
}

export default function Projects({
  limit = 3,
  showTitle = true,
}: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const fetchedProjects = getLatestProjects(limit);
        setProjects(fetchedProjects);
      } catch (err) {
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [limit]);

  // Return null when loading to not show anything until projects are fetched
  if (loading) {
    return null;
  }

  // Return null when there are no projects to display
  if (projects.length === 0) {
    return null;
  }

  const formatDateRange = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const startFormatted = start.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });

    if (endDate) {
      const end = new Date(endDate);
      const endFormatted = end.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      });
      return `${startFormatted} - ${endFormatted}`;
    }

    return `${startFormatted} - Present`;
  };

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        {showTitle && (
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 font-bricolage">
            Recent Projects
          </h2>
        )}

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={
                index < projects.length - 1
                  ? "border-b border-border pb-12"
                  : ""
              }
            >
              <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                <span>
                  {formatDateRange(project.startDate, project.endDate)}
                </span>
                <span className="bg-secondary px-2 py-1 rounded text-xs text-secondary-foreground">
                  {project.category}
                </span>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    project.status === "completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : project.status === "in-progress"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2 font-bricolage hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-lg hover:bg-accent transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-lg hover:bg-accent transition-colors"
                      title="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent px-3 py-1 rounded-full text-xs text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center font-medium border border-border hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded transition-colors"
          >
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
