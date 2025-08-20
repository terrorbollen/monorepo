
import { useState } from "react";
import { Building2, MapPin, Calendar, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WorkExperience = () => {
  const [experiences] = useState([
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      date: "Jan 2022 - Present",
      description: "Led development of scalable web applications using React and Django. Implemented CI/CD pipelines and managed cloud infrastructure on AWS."
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "New York, NY", 
      date: "Mar 2020 - Dec 2021",
      description: "Developed responsive user interfaces using React and Tailwind CSS. Collaborated with design teams to create pixel-perfect implementations."
    },
    {
      role: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      date: "Jun 2019 - Feb 2020", 
      description: "Built and maintained company websites using JavaScript and Node.js. Gained experience with modern development workflows and version control."
    }
  ]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="numbered-heading">03.</span> Work Experience
        </h2>
        
        <Accordion type="multiple" className="space-y-4">
          {experiences.map((experience, index) => (
            <AccordionItem key={index} value={`experience-${index}`} className="bg-portfolio-lightNavy rounded-lg border border-portfolio-orange/20 hover:border-portfolio-orange/50 transition-colors group">
              <AccordionTrigger className="px-6 py-4 hover:no-underline relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left pr-8">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-2">
                      {experience.role}
                    </h3>
                    <div className="flex items-center gap-4 text-portfolio-slate">
                      <div className="flex items-center gap-1">
                        <Building2 className="w-4 h-4 text-portfolio-orange" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-portfolio-orange" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-portfolio-accent mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.date}</span>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-portfolio-orange absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110 data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-portfolio-lightSlate leading-relaxed">
                  {experience.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WorkExperience;
