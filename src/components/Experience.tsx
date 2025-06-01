"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { experiences } from "@/data/experienceData";
import { useState } from "react";
import { Experience as ExperienceType } from "@/types/experience";

export default function Experience() {
  const [experienceItems] = useState<ExperienceType[]>(experiences);

  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 lg:py-24" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-center animate-fadeIn bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center mb-12 lg:mb-16 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
          My professional journey through various roles and organizations.
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 timeline-line-mobile top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-border to-transparent"></div>

          <div className="space-y-8 lg:space-y-12">
            {experienceItems.map((experience, index) => {
              const delayClass = `animation-delay-${Math.min(
                (index + 1) * 100,
                1000
              )}`;

              return (
                <div
                  key={index}
                  className={`relative animate-fadeInLeft ${delayClass} ml-8 sm:ml-12`}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    opacity: 1,
                    transform: "translateX(0)",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Timeline Node */}
                  <div className="absolute -left-4 sm:-left-6 timeline-node-mobile w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-4 border-background shadow-lg hover:scale-110 transition-transform duration-200"></div>

                  {/* Experience Card */}
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:translate-y-[-4px] group">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        {/* Company Logo/Initial */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm">
                          {experience.logo &&
                          typeof experience.logo === "string" &&
                          experience.logo.endsWith(".jpg") ? (
                            <Image
                              src={experience.logo}
                              alt={experience.company + " logo"}
                              width={48}
                              height={48}
                              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                            />
                          ) : (
                            <span className="font-bold text-primary text-base sm:text-lg experience-text">
                              {experience.logo}
                            </span>
                          )}
                        </div>

                        {/* Experience Details */}
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-lg sm:text-xl font-semibold font-bricolage text-foreground group-hover:text-primary transition-colors duration-200 experience-text">
                              {experience.position}
                            </h3>
                            <span className="text-xs sm:text-sm text-muted-foreground bg-secondary/40 border border-border px-2 sm:px-3 py-1 rounded-full w-fit backdrop-blur-sm experience-text">
                              {experience.duration}
                            </span>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm sm:text-base text-foreground experience-text">
                            <span className="font-medium">
                              {experience.company}
                            </span>
                            <span className="hidden sm:inline text-primary">
                              •
                            </span>
                            <span className="text-muted-foreground">
                              {experience.type}
                            </span>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground experience-text">
                            <span>{experience.dateRange}</span>
                            {experience.workType && (
                              <>
                                <span className="hidden sm:inline">•</span>
                                <span>{experience.workType}</span>
                              </>
                            )}
                          </div>

                          <div className="text-xs sm:text-sm text-muted-foreground experience-text">
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
