"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experienceData";
import createDefaultLogo from "@/utils/defaultLogo";
import { useState } from "react";
import { Experience as ExperienceType } from "@/types/experience";

export default function Experience() {
  const [experienceItems] = useState<ExperienceType[]>(experiences);

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24" id="experience">
      <div className="max-w-4xl mx-auto">
        {" "}
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center animate-fadeIn bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          My professional journey through various roles and organizations.
        </p>{" "}
        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 sm:left-8 timeline-line-mobile top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border to-transparent"></div>

          <div className="space-y-12">
            {" "}
            {experienceItems.map((experience, index) => {
              // Calculate delay more reliably
              const delayClass = `animation-delay-${Math.min(
                (index + 1) * 100,
                1000
              )}`;

              return (
                <div
                  key={index}
                  className={`relative animate-fadeInLeft ${delayClass}`}
                  style={{
                    // Fallback for dynamic delays and ensure visibility
                    animationDelay: `${(index + 1) * 100}ms`,
                    opacity: 1,
                    transform: "translateX(0)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 sm:left-6 timeline-node-mobile w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hover:scale-110 transition-transform duration-200"></div>

                  {/* Experience Card */}
                  <div className="ml-20 sm:ml-20 timeline-mobile">
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:translate-y-[-4px] group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {" "}
                          {/* Company Logo/Initial */}
                            <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                            {experience.logo && typeof experience.logo === "string" && experience.logo.endsWith(".jpg") ? (
                              <Image
                              src={experience.logo}
                              alt={experience.company + " logo"}
                              width={48}
                              height={48}
                              className="object-contain w-12 h-12"
                              />
                            ) : (
                              <span className="font-bold text-primary text-lg experience-text">
                              {experience.logo}
                              </span>
                            )}
                            </div>
                          {/* Experience Details */}{" "}
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                              <h3 className="text-xl font-semibold font-bricolage text-foreground group-hover:text-primary transition-colors duration-200 experience-text">
                                {experience.position}
                              </h3>
                              <span className="text-sm text-muted-foreground bg-secondary/40 border border-border px-3 py-1 rounded-full w-fit backdrop-blur-sm experience-text">
                                {experience.duration}
                              </span>
                            </div>

                            <div className="flex items-center text-foreground experience-text">
                              <span className="font-medium">
                                {experience.company}
                              </span>
                              <span className="mx-2 text-primary">•</span>
                              <span className="text-muted-foreground">
                                {experience.type}
                              </span>
                            </div>

                            <div className="flex items-center text-sm text-muted-foreground experience-text">
                              <span>{experience.dateRange}</span>
                            </div>

                            <div className="flex items-center text-sm text-muted-foreground experience-text">
                              <span>{experience.location}</span>
                              {experience.workType && (
                                <>
                                  <span className="mx-2">•</span>
                                  <span>{experience.workType}</span>
                                </>
                              )}
                            </div>

                            {experience.description && (
                              <p className="mt-3 text-muted-foreground leading-relaxed experience-text">
                                {experience.description}
                              </p>
                            )}

                            {experience.skills &&
                              experience.skills.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {experience.skills.map(
                                    (skill, skillIndex) => (
                                      <span
                                        key={skillIndex}
                                        className="text-xs bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 rounded-full font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default experience-text"
                                      >
                                        {skill}
                                      </span>
                                    )
                                  )}
                                </div>
                              )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
