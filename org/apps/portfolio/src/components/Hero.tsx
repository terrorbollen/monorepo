import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-24 pb-16 flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-portfolio-orange text-lg md:text-xl mb-5 font-mono">
          Hi, my name is
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-portfolio-lightestSlate mb-4">
          Isak Friis-Jespersen
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-portfolio-slate mb-6">
          I build things.
        </h3>
        <div className="mb-12 max-w-2xl">
          <p className="text-lg text-portfolio-slate">
            Experienced Full Stack Developer with a strong focus on TypeScript
            and Python, building performant UIs and scalable APIs. Skilled
            across the stack — from React and Next.js to Python backends and
            CI/CD infrastructure. Passionate about clean code, continuous
            learning, and infrastructure experimentation with Kubernetes (k3s)
            on a home cluster.
          </p>
        </div>
        <Button className="btn-primary text-base px-6 py-4 hover:bg-portfolio-orange/10 hover:text-portfolio-orange hover:border-portfolio-orange">
          Check out my work
        </Button>
      </div>
    </section>
  );
};

export default Hero;
