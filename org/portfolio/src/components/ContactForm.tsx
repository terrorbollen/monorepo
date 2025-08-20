
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you'd send this data to your backend or a service like Formspree
      console.log("Form submitted:", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="section-heading">
          <span className="numbered-heading">06.</span> Get In Touch
        </h2>
        
        <div className="text-center mb-10">
          <p className="text-portfolio-slate text-lg max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-portfolio-lightSlate mb-2">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-accent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-portfolio-lightSlate mb-2">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-accent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-portfolio-lightSlate mb-2">Subject</label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-accent"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-portfolio-lightSlate mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-portfolio-lightNavy border-portfolio-lightestNavy text-portfolio-lightSlate focus:border-portfolio-accent"
            />
          </div>
          
          <div className="text-center">
            <Button 
              type="submit" 
              className="btn-primary px-8 py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
