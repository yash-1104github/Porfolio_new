import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({ title, description, technologies, image, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden glass border-glass-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-elegant hover:-translate-y-2">
      <div className="relative overflow-hidden object-contain">
        <img
          src={image}
          alt={title}
          className="w-full h-72 -mt-4 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-gradient">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-tech-badge/10 border border-tech-badge/20 rounded text-xs font-medium text-tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-3">
        <Button
          variant="outline"
          size="sm"
          className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
          asChild
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} />
            Code
          </a>
        </Button>
        <Button
          size="sm"
          className="flex-1 "
          asChild
        >
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;