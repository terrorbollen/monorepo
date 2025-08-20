
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-portfolio-background min-h-screen border-t-2 border-portfolio-orange">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <WorkExperience />
        {/* <Education /> */}
        {/* <Skills /> */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
