
import { useState } from "react";
import { 
  CodeXml, 
  Cloud, 
  Server,
  Database,
  Globe,
  Layers,
  Code,
  Smartphone,
  MonitorSpeaker,
  BarChart3,
  Eye,
  Activity,
  Package,
  GitBranch,
  Settings,
  Zap,
  FileCode2,
  Palette,
  Cpu
} from "lucide-react";

const Skills = () => {
  const [skills] = useState([
    { name: "React", icon: <CodeXml className="w-5 h-5" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
    { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
    { name: "JavaScript (ES6+)", icon: <FileCode2 className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
    { name: "HTML5 & CSS3", icon: <Globe className="w-5 h-5" /> },
    { name: "Vue.js", icon: <CodeXml className="w-5 h-5" /> },
    { name: "Redux", icon: <Layers className="w-5 h-5" /> },
    { name: "Django", icon: <Server className="w-5 h-5" /> },
    { name: "FastAPI", icon: <Zap className="w-5 h-5" /> },
    { name: "Express.js", icon: <Server className="w-5 h-5" /> },
    { name: "Node.js", icon: <Cpu className="w-5 h-5" /> },
    { name: "Python", icon: <FileCode2 className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
    { name: "Redis", icon: <Database className="w-5 h-5" /> },
    { name: "Grafana", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Loki", icon: <Eye className="w-5 h-5" /> },
    { name: "Prometheus", icon: <Activity className="w-5 h-5" /> },
    { name: "Kubernetes (k8s)", icon: <Package className="w-5 h-5" /> },
    { name: "Docker", icon: <Package className="w-5 h-5" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "Vercel", icon: <Globe className="w-5 h-5" /> }
  ]);

  return (
    <section id="skills" className="py-20 bg-portfolio-lightNavy">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          <span className="numbered-heading">05.</span> Skills
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-portfolio-background p-4 rounded-lg border border-portfolio-orange/20 hover:border-portfolio-orange/50 transition-all duration-300 hover:shadow-lg group">
              <div className="flex flex-col items-center space-y-3">
                <div className="text-portfolio-orange group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-portfolio-lightSlate font-medium text-sm text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
