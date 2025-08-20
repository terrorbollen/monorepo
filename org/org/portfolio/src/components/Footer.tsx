
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-portfolio-background border-t border-portfolio-lightestNavy">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-slate hover:text-portfolio-orange transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-slate hover:text-portfolio-orange transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-portfolio-slate hover:text-portfolio-orange transition-colors"
            aria-label="Email Me"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-portfolio-slate text-sm">
          Designed & Built by <span className="text-portfolio-orange">Your Name</span>
        </p>
        
        <p className="text-portfolio-slate text-xs mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
