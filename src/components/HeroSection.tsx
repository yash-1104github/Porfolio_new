import React from "react";
import { Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypingAnimation from "./TypingAnimation";

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
    "JavaScript",
    "Python",
    "TypeScript",
    "React",
    "React-Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "RESTful API",
    "Fast API",
    "Docker",
    "AWS",
    "Google Cloud",
    "CI/CD",
    "Kubernetes",
    "Render",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "ORMs",
    "Firebase",
    "Git/GitHub",
    "Tailwind CSS",
    "Material UI",
    "DSA(C++)",
  ];

  return (
    <section
      id="home"
      className="min-h-screen  flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div> */}

      <div className="flex w-screen  md:mt-16 md:mx-auto md:px-6 text-center relative z-10">
       
        <div className="w-full md:max-w-6xl   mx-auto space-y-8  my-16 md:my-16 lg:my-6">
        
          {/* Main Heading */}
          <h1 className="hidden md:flex justify-center text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
            <span className="text-gradient">YASH GUPTA</span>
          </h1>

          {/* Typing Animation */}
          <div className="mt-40 md:mt-12 lg:mt-0  text-2xl lg:text-3xl">
            <TypingAnimation />
          </div>

          {/* Description */}
          <div className="max-w-6xl mx-auto space-y-6 ">
          
            <div className="text-base md:text-xl text-muted-foreground leading-normal md:leading-relaxed flex-1 justify-around  text-justify px-4 font-normal">
              
              I am a B.Tech Graduate in Computer Science and Engineering with{" "}
              <span className="text-black font-semibold">6</span> months of
              experience as a Software Developer, have experience working in
              Agile methodology with daily stand-ups. Worked in {"  "}
              <span className="text-black font-semibold">
                Frontend and{" "}
              </span>{" "}
              {"  "}
              <span className="text-black font-semibold">Backend, </span> {"  "}
              <span className="text-black font-semibold">DevOps</span>{" "}
              technologies understanding of networking and operating systems
              Linux and Windows. Available to join immediately. I am eager to
              apply my technical skills to create impactful solutions and grow
              as a software developer.
            </div>
        
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 md:gap-3 py-4 justify-center md:max-w-5xl md:mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-1 cursor-pointer bg-tech-badge/10 border border-tech-badge/20 rounded-full text-sm font-medium text-tech-badge hover:bg-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
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
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8  px-6 md:px-0">
            <Button
              size="lg"
              className="  transition-all duration-300 text-lg px-8 py-6"
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
