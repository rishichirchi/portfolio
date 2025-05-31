"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiApachekafka,
  SiSpringboot,
  SiGo,
  SiPython,
  SiRedis,
  SiAmazon,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techStack = [
  { name: "Java", icon: <FaJava size={24} /> },
  { name: "MySQL", icon: <SiMysql size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "Firebase", icon: <SiFirebase size={24} /> },
  { name: "Flutter", icon: <SiFlutter size={24} /> },
  { name: "Kafka", icon: <SiApachekafka size={24} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={24} /> },
  { name: "Go", icon: <SiGo size={24} /> },
  { name: "Flask", icon: <SiPython size={24} /> },
  { name: "Redis", icon: <SiRedis size={24} /> },
  { name: "AWS", icon: <SiAmazon size={24} /> },
  { name: "Docker", icon: <SiDocker size={24} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={24} /> },
];

export default function TechStack() {
  return (
    <section className="px-6 lg:px-12 py-16 lg:py-20" id="techstack">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent select-none">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map(({ name, icon }, index) => (
            <Card
              key={index}
              className="bg-card/60 border-border rounded-lg shadow-sm transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-3 hover:shadow-lg hover:-translate-y-2 hover:scale-105"
            >
              <CardContent className="p-3 flex items-center gap-4">
                <div className="text-muted-foreground">{icon}</div>
                <span className="text-sm lg:text-base text-muted-foreground leading-relaxed select-none">
                  {name}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
