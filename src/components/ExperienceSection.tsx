import React from "react";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Material Depot (YC 2021)",
      role: "Software Developer",
      duration: "May 2025 - September 2025",
      location: "Remote",
      achievements: [
        "Developed static pages for the company, enhancing UI/UX and page responsiveness integrated TanStack Query to enable server-side rendering, decreasing load time from 7 sec to 2 sec",
        "Enhanced product dashboard, improved data comparison functionality showing warnings, updated values errors reducing data entry team workflow time by 55% through automation of different checks.",
        "Upgraded product availability checks in procurement dashboard, eliminating need for manual selecting the vendors and warehouse automate this process though functions lead to faster process by 40%",
        "Implemented authentication to secure APIs, Built multi user role based server-client forms for Customer, Sales, Retailer. Worked in React.js, Next.js, TanStack Query, TypeScript, Node.js, REST APIs, Tailwind CSS.",
      ],
    },
    {
      company: "OctaNet Pvt Ltd",
      role: "Web Developer",
      duration: "May 2024 - July 2024",
      location: "Remote",
      achievements: [
        "Spearheaded a development team to build applications that retrieve information about various genres of books and comics, and used axios library for fetching data, created ContextAPI hook to store it.",
        "Collaborated with the testing team to perform API testing using Postman for different test cases resulting in 91% success rate.",
        "Participate in a team meeting for code review and collaborating closely with other engineers. Worked with technologies like AWS to host server instace, REST APIs, React, JavaScript, Material UI",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
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
            Work Experience
          </h2>
           <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              <Card className="glass border-glass-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-elegant">
                <CardHeader>
                  <div className="flex flex-col md:flex-row text-justify md:items-center justify-around md:justify-between gap-4">
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

                {/* Achievements */}
                <CardContent>
                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    className="space-y-3"
                  >
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
