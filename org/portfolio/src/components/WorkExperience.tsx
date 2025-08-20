import { Building2, MapPin, Calendar, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Booli Search Technologies AB",
      location: "Stockholm, Sweden",
      date: "Jun 20221 - Present",
      description:
        "Booli is a real estate search engine with nearly 4 million monthly active users. I primarily worked on Booli Pro, a data-heavy, subscription-based analytics platform for real estate professionals.",
      achivements: [
        "Led development of Booli Pro, driving end-to-end product delivery, making key technical decisions, and ensuring customer satisfaction.",
        "Built CI/CD pipelines in GitLab for automated testing, module auditing, and preview environments using feature branch deployments.",
        "Developed backend features in Python (Django, FastAPI), including a persistent user settings layer compatible with legacy systems.",
        "Delivered key full-stack features, including: Multipolygon filtering for spatial queries, Embedded in-app customer support chat, A Backend-for-Frontend layer to simplify frontend/backend integration.",
        "Migrated graphing library from D3 to Visx, improving maintainability, performance, and visual clarity of complex analytics charts.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Lime Technologies AB",
      location: "Stockholm, Sweden",
      date: "Jan 2020 - Jun 2021",
      description:
        "Lime is a SaaS company delivering CRM solutions to over 7,000 companies across five countries.",
      achivements: [
        "Tailored CRM solutions to meet client-specific needs, acting as a bridge between business requirements and technical implementation.",
        "Built RESTful APIs in Python (Flask) to integrate customer-specific features into the CRM platform — such as automated billing workflows for law firms and logistics solutions for construction companies — improving operational efficiency and customer adoption.",
        "Led internal tech talks to promote knowledge sharing and best practices within engineering.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="numbered-heading">03.</span> Work Experience
        </h2>

        <Accordion type="multiple" className="space-y-4">
          {experiences.map((experience, index) => (
            <AccordionItem
              key={index}
              value={`experience-${index}`}
              className="bg-portfolio-lightNavy rounded-lg border border-portfolio-orange/20 hover:border-portfolio-orange/50 transition-colors group"
            >
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
                <div className="pl-2">
                  <ul className="list-disc py-2">
                    {experience.achivements.map((a) => (
                      <li className="p1-2">{a}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WorkExperience;
