import React from "react";
import { Github, Calendar, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const OpenSourceContribution = () => {
  const contributions = [
    {
      project: "EnCiv / Civil Pursuit",
      link: "https://github.com/EnCiv/civil-pursuit/pull/363",
      date: "September 2025",
      description:
        "Contributed to Civil Pursuit by improving component architecture, optimizing rendering, and fixing React state inconsistencies to enhance gameplay responsiveness.",
      tech: ["React", "TypeScript", "Redux", "WebSocket"],
    },
    {
      project: "The Software Dev Guild / The Guild Genesis",
      link: "https://github.com/TheSoftwareDevGuild/TheGuildGenesis/pull/94",
      date: "August 2025",
      description:
        "Enhanced Guild Genesis web interface by refactoring key components and integrating modular API hooks for cleaner, scalable code structure.",
      tech: ["Next.js", "Tailwind CSS", "REST APIs"],
    },
    {
      project: "SafeTrust / Frontend-SafeTrust",
      link: "https://github.com/safetrustcr/frontend-SafeTrust/pull/238",
      date: "July 2025",
      description:
        "Improved authentication flow and optimized state management in SafeTrust’s dashboard, reducing API latency and redundant re-renders.",
      tech: ["React", "TanStack Query", "TypeScript"],
    },
    {
      project: "MetroLogic / YieldForge Contract",
      link: "https://github.com/MetroLogic/yieldforge_contract/pull/5",
      date: "June 2025",
      description:
        "Contributed smart contract functionality to YieldForge project, improving transaction safety checks and deployment configuration.",
      tech: ["Solidity", "Ethers.js", "Hardhat"],
    },
    {
      project: "Open Source Chandigarh / Memory Map",
      link: "https://github.com/Open-Source-Chandigarh/Memory-Map/pull/13",
      date: "June 2025",
      description:
        "Built responsive UI elements for Memory Map project, optimized rendering logic, and improved accessibility for memory timeline visualization.",
      tech: ["React", "JavaScript", "CSS Modules"],
    },
    {
      project: "Distinct Codes / AssetsUp",
      link: "https://github.com/DistinctCodes/AssetsUp/pull/349",
      date: "May 2025",
      description:
        "Added analytics dashboard and data visualization modules for AssetsUp platform; enhanced client-side caching and chart rendering performance.",
      tech: ["Next.js", "Recharts", "Tailwind CSS"],
    },
  ];

  return (
    <section id="open-source" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Open Source Contributions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my contributions to open source projects across
            various organizations and communities.
          </p>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {contributions.map((contrib, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass border-glass-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant 
             h-full flex flex-col justify-between min-h-[300px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg text-primary">
                    <Github size={18} />
                    <a
                      href={contrib.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {contrib.project}
                    </a>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar size={14} />
                    {contrib.date}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {contrib.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {contrib.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceContribution;
