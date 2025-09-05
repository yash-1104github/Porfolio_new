import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Material Depot (YC Startup 2021)",
      role: "Software Developer",
      duration: "May 2025 - Present",
      location: "Remote",
      achievements: [
        "Developed static pages for the company's new website, enhancing UI/UX and page responsiveness, and integrated TanStack Query to enable server-side rendering, improving data fetching efficiency by 30%.",
        "Enhanced Single-sheet functionality in product dashboard, implement real-time API data comparison, integrated warnings and error checking features reducing the data entry team workflow by 25%.",
        "Automated product availability checks in procurement dashboard, eliminating manual data entry which improved team efficiency by 35%.",
        "Implemented authentication to secure APIs, Built multi user role based server-client forms for Customer, Sales, Retailer. Worked in React.js, Next.js, TanStack Query, TypeScript, Node.js, REST APIs, Tailwind CSS."
      ]
    },
    {
      company: "OctaNet Pvt Ltd",
      role: "Web Developer",
      duration: "May 2024 - July 2024",
      location: "Remote",
      achievements: [
        "Spearheaded a development team to build applications that retrieve information about various genres of books and comics, and used axios library for fetching data, created ContextAPI hook to store it.",
        "Collaborated with the testing team to perform API testing using Postman for different test cases resulting in 91% success rate.",
        "Participate in a team meeting for code review and collaborating closely with other engineers. Worked with technologies like AWS to host server instace, REST APIs, React, JavaScript, Material UI"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Work Experience
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass border-glass-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row   text-justify md:items-center justify-around  md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl text-primary mb-2">
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold flex-1 text-foreground">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;