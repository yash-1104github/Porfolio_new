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
    company: "TatvaOps",
    role: "Software Developer",
    duration: "January 2026 - Present",
    location: "Bangalore, India",
    achievements: [
      "Leading the frontend development for the project management platform, revamped milestone functionality reducing manual work by 40% and added 25+ master tables in the admin dashboard each handling 200+ rows of data.",
      "Built a quote form used by 200+ vendors with new features like reviews & ratings, role based project workflow, multiple payment methods, and multi vendor selection increasing user satisfaction by 45%.",
      "Integrated Google Analytics for vendor lead tracking and implemented SEO friendly metadata and sitemaps, resulting in a 50% growth in platform traffic.",
      "Worked with Next.js, React, TypeScript, MongoDB, Redux, Tailwind CSS, and Cursor AI to build scalable frontend systems.",
    ],
  },
  {
    company: "Material Depot",
    role: "Software Developer",
    duration: "June 2025 - September 2025",
    location: "Bangalore, India",
    achievements: [
      "Developed static and dynamic pages and integrated TanStack Query with server side rendering, decreasing data load time by 60% and improving Lighthouse performance by 38%.",
      "Revamped the product dashboard used for managing 10,000+ items in the data entry pipeline by automating validation workflows with intelligent warnings, error detection, and data comparison systems reducing manual work by 55%.",
      "Improved procurement automation by redesigning product availability checks, removing manual vendor and warehouse selection and speeding workflows by 40%.",
      "Built scalable multi role form systems for Customer, Sales, and Retailer with permission-based logic used by 1,500+ users improving team operations by 33%.",
    ],
  },
  {
    company: "OctaNet Pvt Ltd",
    role: "Web Developer",
    duration: "May 2024 - July 2024",
    location: "Remote",
    achievements: [
      "Led development of applications to retrieve and display information about books and comics using Axios for API fetching and Context API for state management.",
      "Collaborated with the testing team to perform API testing using Postman for multiple scenarios achieving a 91% successful test coverage.",
      "Participated in code reviews and engineering discussions while working with AWS server instances, REST APIs, React, JavaScript, and Material UI.",
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
