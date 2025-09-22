import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const aiDecoImage = "/aii.jpg";
const travelBuddyImage = "/m.jpg";
const safedocImage = "/sage.png";
const aiImageGenImage = "/a.jpg";
const foodiverseImage = "/ss.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI DECO",
      description:
        "An AI-powered interior design application that helps users visualize and plan their living spaces with smart furniture suggestions and layout optimization.",
      technologies: [
        "JavaScript",
        "Tailwind CSS",
        "Next.js",
        "React",
        "Node.js",
        "PostgreSQL",
        "Clerk",
        "Prisma ORM",
      ],
      image: aiDecoImage,
      githubUrl: "https://github.com/yash-1104github/AI-Deco",
      liveUrl: "https://ai-deco.vercel.app/",
    },
    {
      title: "Travel Buddy",
      description:
        "AI-powered travel planning application that creates personalized itineraries based on user preferences, budget, and travel dates.",
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Tailwind CSS",
        "Firebase",
        "Express.js",
        "GCP",
        "MongoDB",
      ],
      image: travelBuddyImage,
      githubUrl: "https://github.com/yash-1104github/Travel_buddy",
      liveUrl: "https://ai-trip-planner-gules.vercel.app/",
    },
    {
      title: "SafeDoc AI",
      description:
        "Medical document analysis platform with AI-powered insights, ensuring secure and efficient healthcare data processing.",
      technologies: [
        "JavaScript",
        "React",
        "Python",
        "FastAPI",
        "Tailwind CSS",
        "OpenCV",
        "Machine Learning Models",
      ],
      image: safedocImage,
      githubUrl: "https://github.com/yash-1104github/SafeDoc.AI",
      liveUrl: "https://safe-doc-ai.vercel.app/",
    },
    {
      title: "AI Image Generator",
      description:
        "Creative AI image generation platform allowing users to create stunning artwork from text prompts with advanced customization options.",
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "MongoDB",
        "REST API",
        "Material-UI",
      ],
      image: aiImageGenImage,
      githubUrl:
        "https://github.com/yash-1104github/AI-Image-Generation/tree/main",
      liveUrl: "https://ai-image-generation-drab.vercel.app/",
    },
    {
      title: "Foodiverse",
      description:
        "Modern food delivery application with restaurant discovery, real-time order tracking, and seamless payment integration.",
      technologies: [
        "JavaScript",
        "React",
        "HTML",
        "Tailwind CSS",
        "MongoDB",
        "REST API",
        "Material-UI",
      ],
      image: foodiverseImage,
      githubUrl: "https://github.com/yash-1104github/Foodie",
      liveUrl: "https://foodie-dusky-ten.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Projects
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
