
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "About", href: "#about", isHash: true },
    { label: "Projects", href: "#projects", isHash: true },
    { label: "Experience", href: "#experience", isHash: true },
    // { label: "Education", href: "#education", isHash: true },
    // { label: "Skills", href: "#skills", isHash: true },
    { label: "Contact", href: "#contact", isHash: true },
    // { label: "Blog", href: "/blog", isHash: false }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-portfolio-background/90 backdrop-blur shadow-lg py-4" : "py-6"}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <button 
          onClick={() => navigate("/")} 
          className="text-2xl font-bold text-portfolio-white hover:opacity-80 transition-opacity"
        >
          <span className="text-portfolio-accent">{"<"}</span>
          <span className="text-portfolio-lightestSlate">Dev</span>
          <span className="text-portfolio-accent">{" />"}</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li key={index} className="animated-list">
                {item.isHash ? (
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => {
                      if (location.pathname !== "/") {
                        e.preventDefault();
                        navigate("/");
                        setTimeout(() => {
                          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                  >
                    <span className="text-portfolio-accent">{`0${index + 1}. `}</span>
                    {item.label}
                  </a>
                ) : (
                  <button 
                    onClick={() => navigate(item.href)} 
                    className="nav-link"
                  >
                    <span className="text-portfolio-accent">{`0${index + 1}. `}</span>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <Button 
            onClick={() => {
              if (location.pathname === "/") {
                navigate("/blog");
              } else {
                // Handle resume download/view logic here
                navigate("/");
              }
            }}
            className="btn-primary ml-4"
          >
            {location.pathname === "/" ? "Blog" : "Resume"}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-full right-0 w-full md:w-64 bg-portfolio-lightNavy shadow-xl rounded-b-lg md:mr-4 py-4">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isHash ? (
                    <a 
                      href={item.href} 
                      className="block px-6 py-2 hover:bg-portfolio-lightestNavy text-portfolio-lightSlate hover:text-portfolio-accent transition-colors"
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (location.pathname !== "/") {
                          e.preventDefault();
                          navigate("/");
                          setTimeout(() => {
                            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                    >
                      <span className="text-portfolio-accent mr-2">{`0${index + 1}.`}</span>
                      {item.label}
                    </a>
                  ) : (
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate(item.href);
                      }} 
                      className="block w-full text-left px-6 py-2 hover:bg-portfolio-lightestNavy text-portfolio-lightSlate hover:text-portfolio-accent transition-colors"
                    >
                      <span className="text-portfolio-accent mr-2">{`0${index + 1}.`}</span>
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="px-4 py-2">
                <Button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (location.pathname === "/") {
                      navigate("/blog");
                    } else {
                      // Handle resume download/view logic here
                      navigate("/");
                    }
                  }}
                  className="btn-primary w-full mt-2"
                >
                  {location.pathname === "/" ? "Blog" : "Resume"}
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
