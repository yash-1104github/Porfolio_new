import React from "react";
import { Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";

const HeroSection = () => {

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/yash-1104github/",
      label: "GitHub",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/yash_leetcode04/",
      label: "LeetCode",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yash-gupta-1a137b223/",
      label: "LinkedIn",
    },
  ];

  const technologies = [
    "Python",
    "TypeScript",
    "React",
    "React-Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "DSA(C++)",
    "RAG Architecture",
    "MCP Protocol",
    "REST API",
    "Fast API",
    "Docker",
    "AWS",
    "Google Cloud",
    "CI/CD",
    "Kubernetes",
    "Redis",
    "WebSocket",
    "Server Sent Events",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Pincone",
    "Astra DB",
    "Vector Databases",
    "Prisma",
    "ORMs",
    "Jest",
    "Vitest",
    "Cypress",
    "Git/GitHub",
    "Tailwind CSS",
    "Material UI",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="flex w-screen md:mt-16 md:mx-auto md:px-6 text-center relative z-10">
        <div className="w-full md:max-w-6xl mx-auto space-y-8 my-16 md:my-16 lg:my-6">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"
          >
            <span className="text-gradient">Yash Gupta</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-40 md:mt-12 lg:mt-0 text-2xl lg:text-3xl"
          >
            <TypingAnimation />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-6xl mx-auto space-y-6"
          >
            <div className="text-base md:text-xl text-muted-foreground leading-normal md:leading-relaxed flex-1 justify-around text-justify px-4 font-normal">
              I am a B.Tech Graduate in Computer Science and Engineering with{" "}
              <span className="text-black font-semibold">5</span> months of
              experience as a Software Developer, have experience working in
              Agile methodology with daily stand-ups. Worked in{" "}
              <span className="text-black font-semibold">Frontend </span> and{" "}
              <span className="text-black font-semibold">Backend, </span>{" "}
              <span className="text-black font-semibold">DevOps</span>{" "}
              technologies with solid understanding of networking and operating
              systems Linux and Windows.{" "}
              <span className="text-black font-semibold">
                Open Source contributor
              </span>{" "}
              in organisation{" "}
              <span className="text-black font-semibold">Evu,</span> {" "}
              <span className="text-black font-semibold">EnCiv,</span>{" "}
              <span className="text-black font-semibold">GreenStand </span>and more.
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 },
              },
            }}
            className="flex flex-wrap gap-2 md:gap-3 py-4 justify-center md:max-w-5xl md:mx-auto"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-1 cursor-pointer bg-tech-badge/10 border border-tech-badge/20 rounded-full text-sm font-medium text-tech-badge hover:bg-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex gap-6 justify-center"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon size={20} />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8 px-6 md:px-0"
          >
            <Button
              size="lg"
              className="transition-all duration-300 text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary px-8 text-lg font-medium py-6 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1WygsOQvvzc0JnzOd3K4Z8Y2Xb_saBwd_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
