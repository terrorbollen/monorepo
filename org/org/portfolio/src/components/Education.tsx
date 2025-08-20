import { useState } from "react";
import { GraduationCap, MapPin, Calendar, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Education = () => {
  const [education] = useState([
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      date: "Sep 2015 - Jun 2019",
      description: "Focused on software engineering and web development. Graduated Magna Cum Laude with coursework in algorithms, data structures, and full-stack development."
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      location: "San Francisco, CA", 
      date: "Jan 2019 - Apr 2019",
      description: "Intensive 12-week program covering modern web development technologies including React, Node.js, and database design."
    },
    {
      degree: "High School Diploma",
      institution: "Tech Prep Academy",
      location: "San Jose, CA",
      date: "Sep 2011 - Jun 2015", 
      description: "Graduated Valedictorian with a focus on STEM subjects. President of the Computer Science Club and participated in regional programming competitions."
    }
  ]);

  return (
    <section id="education" className="py-20 bg-portfolio-lightNavy">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="numbered-heading">04.</span> Education
        </h2>
        
        <Accordion type="multiple" className="space-y-4">
          {education.map((edu, index) => (
            <AccordionItem key={index} value={`education-${index}`} className="bg-portfolio-background rounded-lg border border-portfolio-orange/20 hover:border-portfolio-orange/50 transition-colors group">
              <AccordionTrigger className="px-6 py-4 hover:no-underline relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left pr-8">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-lightestSlate mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-4 text-portfolio-slate">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4 text-portfolio-orange" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-portfolio-orange" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-portfolio-accent mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{edu.date}</span>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-portfolio-orange absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:scale-110 data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-portfolio-lightSlate leading-relaxed">
                  {edu.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Education;